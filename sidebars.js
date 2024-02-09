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
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/tokenomics',
        'getting-started/stake',
        'getting-started/faq',    
      ]
    },

    {
      type: 'category',
      label: 'Build a dapp (Solidity)',
      collapsible: true,
      collapsed: false,
      items: [
        'build-a-dapp/introduction',
        'build-a-dapp/quickstart',
        'build-a-dapp/troubleshooting',
      ]
    },
    {
      type: 'category',
      label: 'Bridge your assets',
      collapsible: true,
      collapsed: true,
      items: [
        'bridge/introduction',
        'bridge/forwarder',
        'bridge/on-ramp',
        {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "With Rainbow Bridge",
          items: [
            'bridge/aurora-near',
            {
              type: 'category',
              collapsible: true,
              collapsed: true,
              label: "From/to Ethereum",
              items: [
                'bridge/ethereum/bridge-assets',
                'bridge/ethereum/speed-up',
              ]
            },
          'bridge/aurora-chains',
          'bridge/advanced',
         ]
        },
        'bridge/troubleshooting',
      ]
    },
    {
      type: 'category',
      label: 'Launch your chain (Aurora Chain)',
      collapsible: true,
      collapsed: false,
      items: [
        'launch-chain/introduction',
        {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "Configure your chain",
          items: [
            'launch-chain/configuration/initialize',
            'launch-chain/configuration/whitelists',
            'launch-chain/configuration/ecosystem-tools',
            'launch-chain/configuration/deploy-tokens',
            'launch-chain/configuration/kyc',
          ]
        },
        'launch-chain/stats',
        'launch-chain/troubleshooting',
         {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "Reference",
          items: [
            'launch-chain/reference/whitelists-api',
          ]
        },
      ]
    },
     {
      type: 'category',
      label: 'Build a cross-chain application (XCC)',
      collapsible: true,
      collapsed: false,
      items: [
        'xcc/quickstart',
        {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "Near to Aurora",
          items: [
            'xcc/near-to-aurora/introduction',
            'xcc/near-to-aurora/usage-examples',
          ]
        },
        {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "Aurora to Near",
          items: [
            'xcc/aurora-to-near/introduction',
            'xcc/aurora-to-near/usage-examples',
          ]
        },
        {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "LayerZero",
          items: [
            'xcc/layerzero/introduction',
            'xcc/layerzero/usage-examples',
          ]
        },
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
      label: 'Cover user gas fees (Aurora Control)',
      collapsible: true,
      collapsed: false,
      items: [
        'gas/introduction',
        {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "Create your plan",
          items: [
            'gas/create-plan/manage-users',
            'gas/create-plan/manage-contracts',
            'gas/create-plan/rate-limit',
            'gas/create-plan/restrictions',
          ]
        },
        'gas/monitor-plans',
         {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "Reference",
          items: [
            'gas/reference/lists-api',
          ]
        },
        'gas/troubleshooting',
      ]
    },
    {
      type: 'category',
      label: 'Run a node (Standalone RPC)',
      collapsible: true,
      collapsed: false,
      items: [
        'nodes/quickstart',
        'nodes/requirements',
        'nodes/install',
        'nodes/start',
        'nodes/migrate',
        'nodes/logs',
        {
          type: 'category',
          collapsible: true,
          collapsed: true,
          label: "Learn more",
          items: [
            'nodes/learn/relayer-account',
            'nodes/learn/configuration-files',
            'nodes/learn/snapshots',
            'nodes/learn/refiner',
            'nodes/learn/docker',
          ]
        },
        'nodes/troubleshooting',
        //  {
        //   type: 'category',
        //   collapsible: true,
        //   collapsed: true,
        //   label: "Reference",
        //   items: [
        //     'nodes/reference/api',
        //   ]
        // },
      ]
    },
    {
      type: 'category',
      label: 'Developer Reference',
      collapsible: true,
      collapsed: false,
      items: [
        'dev-reference/network-endpoints',
        'dev-reference/aurora-engine',
        'dev-reference/json-rpc',
        'dev-reference/precompiles',
        'dev-reference/opcodes',
        'dev-reference/contracts',
      ]
    },
    'audits',
    'contact-us',
    'contribute'
    // {
    //   type: 'category',
    //   label: 'EVM',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'evm',
    //     }
    //   ]
    // },
    // {
    //   type: 'category',
    //   label: 'Aurora Cloud',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'aurora-cloud',
    //     }
    //   ]
    // },
    // {
    //   type: 'category',
    //   label: 'Bridge',
    //   collapsible: true,
    //   collapsed: false,
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'bridge',
    //     }
    //   ]
    // },
    // 'public-apis',
    // 'faq',
  ],
};

module.exports = sidebars;
