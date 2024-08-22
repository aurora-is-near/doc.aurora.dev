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
          {
            href: 'https://github.com/aurora-is-near/doc.aurora.dev',
            label: 'GitHub',
            position: 'right',
          },
          {label: 'Users', position: 'left', href: '/getting-started/overview'},
          {label: 'Partners', position: 'left', href: '/launch-chain/introduction'},
          {label: 'Developers', position: 'left', href: '/build-a-dapp/introduction'},
          {label: 'Blog', position: 'right', href: '/blog'}
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
