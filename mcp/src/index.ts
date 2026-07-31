import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface DocFile {
  name: string;
  path: string;
  content: string;
  lastModified: Date;
}

class DocsServer {
  private server: Server;
  private docsCache: Map<string, DocFile> = new Map();
  private docsDir: string;

  constructor() {
    this.server = new Server(
      {
        name: 'docs-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      }
    );

    // Set docs directory (can be customized via environment variable)
    this.docsDir = process.env.DOCS_DIR || path.join(process.cwd(), 'docs');

    this.setupHandlers();
  }

  private async loadDocs(): Promise<void> {
    try {
      const files = await this.findMarkdownFiles(this.docsDir);
      
      for (const filePath of files) {
        try {
          const content = await fs.readFile(filePath, 'utf-8');
          const stats = await fs.stat(filePath);
          const relativePath = path.relative(this.docsDir, filePath);
          
          const docFile: DocFile = {
            name: path.basename(filePath, '.md'),
            path: relativePath,
            content,
            lastModified: stats.mtime,
          };

          this.docsCache.set(relativePath, docFile);
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
        }
      }

      console.error(`Loaded ${this.docsCache.size} documentation files from ${this.docsDir}`);
    } catch (error) {
      console.error('Error loading docs:', error);
    }
  }

  private async findMarkdownFiles(dir: string): Promise<string[]> {
    const files: string[] = [];
    
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          // Recursively search subdirectories
          const subFiles = await this.findMarkdownFiles(fullPath);
          files.push(...subFiles);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error);
    }
    
    return files;
  }

  private setupHandlers(): void {
    // List available resources (documentation files)
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      await this.loadDocs(); // Refresh docs on each request
      
      const resources = Array.from(this.docsCache.values()).map((doc) => ({
        uri: `docs://${doc.path}`,
        mimeType: 'text/markdown',
        name: doc.name,
        description: `Documentation file: ${doc.path}`,
      }));

      return { resources };
    });

    // Read specific documentation file
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;
      if (!uri.startsWith('docs://')) {
        throw new Error(`Invalid URI: ${uri}`);
      }

      const docPath = uri.replace('docs://', '');
      const doc = this.docsCache.get(docPath);
      
      if (!doc) {
        throw new Error(`Documentation file not found: ${docPath}`);
      }

      return {
        contents: [
          {
            uri,
            mimeType: 'text/markdown',
            text: doc.content,
          },
        ],
      };
    });

    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'search_docs',
            description: 'Search through documentation files for specific content',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query to find in documentation',
                },
                case_sensitive: {
                  type: 'boolean',
                  description: 'Whether search should be case sensitive',
                  default: false,
                },
              },
              required: ['query'],
            },
          },
          {
            name: 'list_docs',
            description: 'List all available documentation files with their paths and descriptions',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'get_doc_summary',
            description: 'Get a summary of a specific documentation file',
            inputSchema: {
              type: 'object',
              properties: {
                doc_path: {
                  type: 'string',
                  description: 'Path to the documentation file',
                },
              },
              required: ['doc_path'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const args = request.params.arguments as any;
      const name = request.params.name;

      switch (name) {
        case 'search_docs':
          return this.searchDocs(args.query, args.case_sensitive || false);
        
        case 'list_docs':
          return this.listDocs();
        
        case 'get_doc_summary':
          return this.getDocSummary(args.doc_path);
        
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  private async searchDocs(query: string, caseSensitive: boolean) {
    await this.loadDocs();
    
    const results: Array<{
      file: string;
      matches: Array<{ line: number; content: string; context: string }>;
    }> = [];

    const searchQuery = caseSensitive ? query : query.toLowerCase();

    for (const [filePath, doc] of this.docsCache) {
      const lines = doc.content.split('\n');
      const matches: Array<{ line: number; content: string; context: string }> = [];

      lines.forEach((line, index) => {
        const searchLine = caseSensitive ? line : line.toLowerCase();
        if (searchLine.includes(searchQuery)) {
          // Get context (line before and after)
          const contextStart = Math.max(0, index - 1);
          const contextEnd = Math.min(lines.length - 1, index + 1);
          const context = lines.slice(contextStart, contextEnd + 1).join('\n');

          matches.push({
            line: index + 1,
            content: line.trim(),
            context: context,
          });
        }
      });

      if (matches.length > 0) {
        results.push({
          file: filePath,
          matches,
        });
      }
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            query,
            results_count: results.length,
            results,
          }, null, 2),
        },
      ],
    };
  }

  private async listDocs() {
    await this.loadDocs();
    
    const docsList = Array.from(this.docsCache.values()).map((doc) => ({
      name: doc.name,
      path: doc.path,
      last_modified: doc.lastModified.toISOString(),
      size: doc.content.length,
      preview: doc.content.substring(0, 200) + (doc.content.length > 200 ? '...' : ''),
    }));

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            total_docs: docsList.length,
            docs: docsList,
          }, null, 2),
        },
      ],
    };
  }

  private async getDocSummary(docPath: string) {
    await this.loadDocs();
    
    const doc = this.docsCache.get(docPath);
    if (!doc) {
      throw new Error(`Documentation file not found: ${docPath}`);
    }

    // Extract headings and first few lines for summary
    const lines = doc.content.split('\n');
    const headings = lines.filter(line => line.startsWith('#'));
    const firstParagraph = lines.find(line => line.trim() && !line.startsWith('#'));

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            file: docPath,
            name: doc.name,
            size: doc.content.length,
            last_modified: doc.lastModified.toISOString(),
            headings: headings.slice(0, 10), // First 10 headings
            first_paragraph: firstParagraph || '',
            word_count: doc.content.split(/\s+/).length,
          }, null, 2),
        },
      ],
    };
  }

  async run(): Promise<void> {
    // Load docs initially
    await this.loadDocs();

    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('MCP Docs Server running on stdio');
  }
}

// Run the server
const server = new DocsServer();
server.run().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});