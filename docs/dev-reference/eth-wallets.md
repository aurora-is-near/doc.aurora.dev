---
sidebar_label: "Ethereum Wallets on Near"
---

# How to integrate Ethereum Wallets to Near DApps?

In this article we will describe how to add EVM wallets support to your Near app, which is already uses the [Near Wallet Selector](https://github.com/near/wallet-selector/).

:::info
AuroraLabs team has worked on this feature almost for a year now. You can learn more about it from [NEP-518](https://github.com/near/NEPs/issues/518).
:::

To integrate the Metatamask and other EVM wallets you will need:

1. Update Wallet Selector libraries
2. Add Web3Modal libraries (wagmi, web3wallet, eth-wallets-selector)
3. Add Near chain config with our RPCs.
4. Add Web3Modal.
5. Call `setupEthereumWallets`.

We will add Ethereum Wallets support to the [Hello Near Examples](https://github.com/near-examples/hello-near-examples/tree/main/frontend).

Let's go step-by-step with it!

## Update Wallet Selector libraries

Go to your `package.json` and change versions of the `@near-wallet-selector/core` package and all of the wallets packages to be `^8.9.13`:

```json title="package.json"
  "dependencies": {
    ...
    "@near-wallet-selector/core": "^8.9.13",
    "@near-wallet-selector/here-wallet": "^8.9.13",
    "@near-wallet-selector/modal-ui": "^8.9.13",
    "@near-wallet-selector/my-near-wallet": "^8.9.13",
    // highlight-next-line
    // add the Ethereum Wallets package here
    // highlight-next-line
    "@near-wallet-selector/ethereum-wallets": "^8.9.13",
    ...
    }
```

Add the Ethereum wallets package:

```json title="package.json"
  "dependencies": {
    ...
    "@near-wallet-selector/core": "^8.9.13",
    ...
    // highlight-next-line
    // add the Ethereum Wallets package here
    // highlight-next-line
    "@near-wallet-selector/ethereum-wallets": "^8.9.13",
    ...
    }
```

Install the packages:

```bash
# Using Yarn
yarn install

# Using NPM
npm install

```

## Add Web3Modal libraries

[Web3Modal (also known as AppKit)](https://reown.com/appkit) is a standard way to integrate multiple wallets in Ethereum community.

It is based on [wagmi] hooks library for React. We will describe the React integration here, but if you are on another platform - just go [here](https://docs.reown.com/appkit/overview#get-started),
and try using specific instructions suitable for you to install it.

```bash
# Using Yarn
yarn add @web3modal/wagmi wagmi viem @tanstack/react-query

# Using NPM.
npm install @web3modal/wagmi wagmi viem @tanstack/react-query
```

## Add Near chain config with our RPCs

To your config files you will need to add RPCs data. One for the `mainnet`, and another for the `testnet`.

```js title="source/config.js"
const evmWalletChains = {
  testnet: {
    nearEnv: "testnet",
    chainId: 398,
    walletExplorerUrl: "https://eth-explorer-testnet.near.org",
    explorerUrl: "https://testnet.nearblocks.io",
    ethRpcForNear: "https://eth-rpc.testnet.near.org",
    nearNativeRpc: "https://rpc.testnet.near.org"
  },
  mainnet: {
    chainId: 397,
    nearEnv: "mainnet",
    walletExplorerUrl: "https://eth-explorer.near.org",
    explorerUrl: "https://nearblocks.io",
    ethRpcForNear: "https://eth-rpc.mainnet.near.org",
    nearNativeRpc: "https://rpc.mainnet.near.org"
  }
}

export const NetworkId = 'testnet';
export const EVMWalletChain = evmWalletChains[NetworkId];
```

## Add Web3Modal

### Chain configuration

First, let's create a new file to store our Web3Modal there, import some libs and add `nearChain` config there formatted in `wagmi` style:

```js title="source/wallets/web3modal.js"
import { NetworkId, EVMWalletChain } from '@/config';
import { reconnect, http, createConfig } from "@wagmi/core";
import { walletConnect, injected } from "@wagmi/connectors";

const onMainnet = NetworkId == "mainnet";
const nearChain = {
  id: EVMWalletChain.chainId,
  name: `NEAR Protocol${ onMainnet ? "" : " Testnet"}`,
  nativeCurrency: {
    decimals: 18,
    name: "NEAR",
    symbol: "NEAR",
  },
  rpcUrls: {
    default: { http: [EVMWalletChain.ethRpcForNear] },
    public: { http: [EVMWalletChain.ethRpcForNear] },
  },
  blockExplorers: {
    default: {
      name: "NEAR Explorer",
      url: EVMWalletChain.walletExplorerUrl,
    },
  },
  testnet: !onMainnet,
};
```

### Get `projectId`

Let's get the Web3Modal `projectId` for your project.
To do that you will need to:

1. Go to [Cloud Reown](https://cloud.reown.com/).
2. Register there.
3. Create a project on Cloud Reown.
4. You can copy your `projectId`:

![reown_projectid](/img/reown_projectid.png)

You can read more about the `projectId` and how it works [here](https://docs.reown.com/appkit/react/core/installation#cloud-configuration).

### Prepare metadata

Make sure to pass the correct hosting URL here of your project as `url` and create a `metadata` object:

```js title="source/wallets/web3modal.js"
...

// get your host URL here
const url = "http://localhost:3000";

const metadata = {
  name: "Onboard to NEAR Protocol with EVM Wallet",
  description: "Discover NEAR Protocol with Ethereum and NEAR wallets.",
  url: url,
  icons: [`${url}/icon.svg`],
};

...
```

This tracks the app requesting the connection on the WalletConnect side. See more [here](https://wagmi.sh/core/api/connectors/walletConnect#metadata).
It is crucial to display the correct information inside the EVM wallets, like MetaMask.

### Create `wagmiConfig`

Now, we can use that `projectId` and `metadata` to instantiate the `wagmiConfig`:

```js title="source/wallets/web3modal.js"

...

const reownProjectId = '5bb0fe33763b3bea40b8d69e4269b4ae';

const metadata = { ... };

export const wagmiConfig = createConfig({
  chains: [nearChain],
  transports: {
    [nearChain.id]: http(),
  },
  connectors: [
    walletConnect({ projectId: reownProjectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
  ],
});

// Needed to be called to preserve the login state if your will reload the page
// Make sure you are calling it there in your file
reconnect(wagmiConfig);

```

:::note
Make sure you have `reconnect(wagmiConfig);` in your code.
:::

### Create Web3Modal

Let's create a Web3Modal now with a config we just prepared with `createWeb3Modal` function:

```js title="source/wallets/web3modal.js"
import { createWeb3Modal } from "@web3modal/wagmi";

... 

export const web3Modal = createWeb3Modal({
  wagmiConfig: wagmiConfig,
  // Get a project ID at https://cloud.walletconnect.com
  projectId: reownProjectId,
});
```

## Call `setupEthereumWallets`

The last step is to add the Ethereum Wallets selector to your Near Wallet Selector. Let's find your `setupWalletSelector` call and add `setupEthereumWallets` there:

```js title="wallets/near.js"
import { setupWalletSelector } from '@near-wallet-selector/core';
import { wagmiConfig, web3Modal } from '@/wallets/web3modal';
import { setupEthereumWallets } from "@near-wallet-selector/ethereum-wallets";
...
// to start using EVM wallet with Near the user needs to do a free onboarding transaction
// `alwaysOnboardDuringSignIn` option ensures that it will happen right away after login
const alwaysOnboardDuringSignIn = true;
    this.selector = setupWalletSelector({
      network: this.networkId,
      modules: [
        setupMyNearWallet(),
        setupHereWallet(),
        // pass your wagmiConfig and web3Modal here as arguments
        setupEthereumWallets({ wagmiConfig, web3Modal, alwaysOnboardDuringSignIn }),
      ]
    });

```

And that is it! Just re-build your project and try connecting MetaMask to it!

You should see Ethereum Wallets option in your Near Selector:

![ethwallets_popup1](/img/ethwallets_popup1.png)

And after click to be able to choose the EVM wallet of your taste:

![ethwallets_popup2](/img/ethwallets_popup2.png)

## Resources

1. [A fuller version of docs about integration](https://github.com/near/wallet-selector/blob/9a9f9535ec57633b949872bb51903e7802beb3e8/packages/ethereum-wallets/README.md)

2. [Source code of the project above](https://github.com/Karkunow/hello-near-examples/tree/1ceede7)

3. [Example of the EVM account on the Near Testnet](https://testnet.nearblocks.io/address/0xe5acd26a443d2d62f6b3379c0a5b2c7ac65d9454) to see what happens in reality on-chain during the execution.

4. Details about how does it work are in [NEP-518](https://github.com/near/NEPs/issues/518)

5. [Recording of the Near Devs call](https://drive.google.com/file/d/1xGWN1yRLzFmRn1e29kbSiO2W1JsxuJH-/view?usp=sharing) with the EthWallets presentation.
