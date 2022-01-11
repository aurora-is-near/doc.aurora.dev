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
    'intro',
    {
      type: 'category',
      label: 'Build',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Deploy a contract',
          items: [
            {
              type: 'autogenerated',
              dirName: 'build/deploy-contract',
            }
          ]
        },
        'build/verify-contract',
        {
          type: 'category',
          label: 'Mint a token',
          items: [
            {
              type: 'autogenerated',
              dirName: 'build/mint-token',
            }
          ]
        },
        'build/public-apis',
        {
          type: 'category',
          label: 'Tools & Integrations',
          items: [
            {
              type: 'autogenerated',
              dirName: 'build/tools-and-integrations',
            }
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Learn',
      collapsible: true,
      collapsed: false,
      items: [
        'learn/what-is-aurora',
        'learn/why-use-aurora',
        'learn/how-aurora-works',
        'learn/how-aurora-started',
        'learn/roadmap',
      ]
    },
  ],
};

module.exports = sidebars;
