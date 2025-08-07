# MCP Documentation Server

A Model Context Protocol (MCP) server that reads markdown files from a `docs` directory and makes them available to LLMs for querying and reference.

## Features

- **Automatic Discovery**: Recursively finds all `.md` files in the docs directory
- **Real-time Loading**: Refreshes documentation on each request
- **Search Functionality**: Full-text search across all documentation files
- **File Summaries**: Extract headings and metadata from documentation files
- **Resource Access**: Direct access to individual documentation files
- **Context-Aware**: Provides line numbers and surrounding context for search results

## Installation

1. **Create the project structure:**

```bash
mkdir mcp-docs-server
cd mcp-docs-server
mkdir src docs
```

2. **Create the files:**

   - Save the TypeScript code as `src/index.ts`
   - Save the package.json as `package.json`
   - Save the tsconfig.json as `tsconfig.json`

3. **Install dependencies:**

```bash
npm install
```

4. **Build the server:**

```bash
npm run build
```

## Usage

### Setting up Documentation

1. **Create your docs directory:**

```bash
mkdir docs
```

2. **Add your markdown files:**

```bash
# Example structure
docs/
├── getting-started.md
├── api/
│   ├── authentication.md
│   └── endpoints.md
├── guides/
│   ├── deployment.md
│   └── troubleshooting.md
└── faq.md
```

### Running the Server

1. **Start the MCP server:**

```bash
npm start
# or for development:
npm run dev
```

2. **Configure your MCP client** (like Claude Desktop) to use this server by adding to your MCP settings:

```json
{
  "mcpServers": {
    "docs": {
      "command": "node",
      "args": ["/path/to/your/mcp-docs-server/dist/index.js"],
      "env": {
        "DOCS_DIR": "/path/to/your/docs"
      }
    }
  }
}
```

### Environment Variables

- `DOCS_DIR`: Path to your documentation directory (defaults to `./docs`)

## Available Tools

The server provides these tools to LLMs:

### 1. `search_docs`

Search through all documentation files for specific content.

**Parameters:**
- `query` (string, required): Search term or phrase
- `case_sensitive` (boolean, optional): Whether search should be case sensitive

**Example usage by LLM:**
"Search for authentication information in the docs"

### 2. `list_docs`

List all available documentation files with metadata.

**Example usage by LLM:**
"Show me all available documentation files"

### 3. `get_doc_summary`
Get a summary of a specific documentation file including headings and metadata.

**Parameters:**

- `doc_path` (string, required): Path to the documentation file

**Example usage by LLM:**
"Give me a summary of the API authentication documentation"

## Resources

The server also exposes documentation files as resources that LLMs can directly read:

- **URI format**: `docs://path/to/file.md`
- **MIME type**: `text/markdown`
- **Direct access**: LLMs can request specific files by path

## Integration with Claude Desktop

1. **Install Claude Desktop** if you haven't already

2. **Edit your Claude Desktop config** (location varies by OS):

   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

3. **Add the MCP server configuration:**

```json
{
  "mcpServers": {
    "docs": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-docs-server/dist/index.js"],
      "env": {
        "DOCS_DIR": "/absolute/path/to/your/docs"
      }
    }
  }
}
```

4. **Restart Claude Desktop**

## Example Interactions

Once set up, you can ask Claude things like:

- "What documentation files are available?"
- "Search for information about API authentication"
- "Show me the contents of the getting-started guide"
- "Find all references to deployment in the docs"
- "Give me a summary of the troubleshooting guide"

## Development

### Project Structure

```
mcp-docs-server/
├── src/
│   └── index.ts          # Main server code
├── dist/                 # Compiled JavaScript (generated)
├── docs/                 # Your documentation files
├── package.json
├── tsconfig.json
└── README.md
```

### Running in Development Mode

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## Troubleshooting

1. **Server not starting**: Check that Node.js version is 18+ and all dependencies are installed
2. **Docs not loading**: Verify the `DOCS_DIR` environment variable points to the correct directory
3. **No search results**: Ensure your markdown files are in the docs directory and contain the search terms
4. **Claude can't connect**: Verify the absolute paths in your Claude Desktop configuration

## Customization

You can modify the server to:
- Support additional file formats
- Add more sophisticated search (fuzzy matching, indexing)
- Include file metadata in responses
- Add caching for better performance
- Support real-time file watching for changes

The server is designed to be easily extensible for your specific documentation needs.
