// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          customCss: require.resolve('./src/css/custom.css'),
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
      navbar: {
        title: 'Aurora Documentation',
        logo: {
          alt: 'Aurora logo',
          src: 'img/favicon.svg',
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
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aurora-is-near',
              },
              {
                label: 'Discourse',
                href: 'https://gov.near.org/c/dev/aurora/46',
              },
              {
                label: 'Discord',
                href: 'https://discord.aurora.dev',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/auroraisnear',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/auroraisnear',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
