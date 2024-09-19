// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aurora Documentation',
  tagline: 'Documentation and Tutorials for Aurora',
  url: 'https://doc.aurora.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'aurora-is-near',
  projectName: 'doc.aurora.dev',

  stylesheets: [
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,500,700|IBM+Plex+Sans:400,500,700',
  ],

  plugins: [
    './src/plugins/webpack-plugin.js',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            to: '/interact/truffle',
            from: ['/develop/start/truffle'],
          },
          {
            to: '/dev-reference/network-endpoints',
            from: ['/develop/networks', '/develop/compat/gas', `/compat/gas`, '/getting-started/network-endpoints'],
          },
          {
            to: '/interact/metamask',
            from: ['/develop/start/metamask'],
          },
          {
            to: '/interact/hardhat',
            from: ['/develop/start/hardhat'],
          },
          {
            to: '/interact/block-explorer',
            from: ['/interact/aurorascan'],
          },
          {
            to: '/dev-reference/json-rpc',
            from: ['/compact/rpc', '/develop/compat/rpc', '/evm/rpc']
          },
          // {
          //   to: '/evm/evm-overview',
          //   from: ['/develop/compat/evm', '/compat/evm'],
          // },
          {
            to: '/getting-started/faq',
            from: ['/develop/faq', '/faq'],
          },
          {
            to: '/integrate/indexers/the-graph',
            from: ['/develop/indexers/thegraph'],
          },
          {
            to: '/integrate/indexers/covalent',
            from: ['/develop/indexers/covalent'],
          },
          {
            to: '/bridge/introduction',
            from: ['/learn/bridge/eth', '/bridge/bridge-overview'],
          },
          {
            to: '/',
            from: ['/develop/changelog', '/develop/roadmap'],
          },
        ],
      },
    ],
    require.resolve('docusaurus-plugin-sass'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/aurora-is-near/doc.aurora.dev/edit/master',
        },
        blog: {
          path: 'blog',
          // Simple use-case: string editUrl
          editUrl: 'https://github.com/aurora-is-near/doc.aurora.dev/edit/master',
          // Advanced use-case: functional editUrl
          //editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
          //  `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: 'Aurora Dev Portal',
          blogDescription: 'BlogThis is a new platform built for experienced blockchain developers and for newcomers from other technical environments. For the first time, all essential documentation for third-party integrators is brought together in one place. It gathers and updates all the information needed to easily build dApps on Aurora.',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          authorsMapPath: 'authors.yml',
          showReadingTime: true, // When set to false, the "x min read" won't be shown
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 'ALL',
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          //remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} AuroraLabs, Inc.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss')
          ],
        },
        gtag: {
          trackingID: 'GTM-MX4G4L5',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'img/og_image.png',
      sidebar: {
        hideable: true,
      },
      navbar: {
        logo: {
          alt: 'Aurora logo',
          src: 'img/docs_logo.svg',
          srcDark: 'img/docs_logo_white.svg',
        },
        items: [
          {label: 'Build on Aurora', position: 'left', href: '/build-a-dapp/introduction'},
          {label: 'Launch a Virtual Chain', position: 'left', href: '/aurora-cloud/welcome/introduction'},
          {label: 'Dev tools', position: 'left', href: '/dev-tools/quickstart'},
          {label: 'Learn', position: 'left', href: '/getting-started/overview'},
          {label: 'Blog', position: 'right', href: '/blog'},
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'right',
            items: [
              {
                href: 'https://github.com/aurora-is-near/doc.aurora.dev',
                label: 'GitHub',
              },
              {
                href: 'https://discord.gg/RQetTRnMrC',
                label: 'Discord',
              },
            ],
          },
        ]
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Aurora Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      algolia: {
        appId: 'BEGR6ON9SL',
        apiKey: 'e0a8f49db413df8c28341a74f2a799ae',
        indexName: 'doc-aurora',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
