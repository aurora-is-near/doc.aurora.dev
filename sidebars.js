/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started',
        }
      ]
    },
    {
      type: 'category',
      label: 'EVM',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'evm',
        }
      ]
    },
    {
      type: 'category',
      label: 'Onboard users (Aurora Pass)',
      collapsible: true,
      collapsed: false,
      items: [
        'onboard/introduction',
        'onboard/wallet-connect',
        {
          type: 'category',
          collapsible: true,
          collapsed: false,
          label: "Add your wallets",
          items: [
            'onboard/wallets/web3modal',
            'onboard/wallets/rainbowkit',
          ]
        },
        'onboard/promo-widget',
        //'onboard/own-wallet',
        'onboard/troubleshooting',
        //  {
        //   type: 'category',
        //   collapsible: true,
        //   collapsed: true,
        //   label: "Reference",
        //   items: [
        //     'onboard/reference/api',
        //   ]
        // },
      ]
    },
    'aurora-cloud/chain',
    {
      type: 'category',
      label: 'Bridge',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'bridge',
        }
      ]
    },
    'public-apis',
    'faq',
  ],
};

module.exports = sidebars;
