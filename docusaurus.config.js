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
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            to: '/interact/truffle',
            from: ['/develop/start/truffle'],
          },
          {
            to: '/getting-started/network-endpoints',
            from: ['/develop/networks'],
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
            to: '/interact/aurorascan',
            from: ['/interact/block-explorer'],
          },
          {
            to: '/compat/rpc',
            from: ['/develop/compat/rpc'],
          },
          {
            to: '/compat/gas',
            from: ['/develop/compat/gas'],
          },
          {
            to: '/compat/evm',
            from: ['/develop/compat/evm'],
          },
          {
            to: '/faq',
            from: ['/develop/faq'],
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
            to: '/bridge/bridge-overview',
            from: ['/learn/bridge/eth'],
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
      hideableSidebar: true,
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
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Aurora Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
