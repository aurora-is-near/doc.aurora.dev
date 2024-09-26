---
sidebar_label:  RainbowKit
title: RainbowKit
---

The [RainbowKit](https://www.rainbowkit.com/docs/introduction) is a React library that easily adds wallet connections to your Dapp. It's intuitive, responsive and customizable.
It allows you to integrate even more wallets than the [Web3Modal](/onboard/wallets/web3modal) solution.

![rainbowkit](/img/rainbowkit.png)

## Integrate RainbowKit

This tutorial video explains quickly the process of setting up your RainbowKit modal:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Q5dv7qv08Fw?si=yNCb14jjHo33sKMW"
style={{display:"block", margin: "auto"}} title="YouTube video player" frameborder="auto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Quick start

You can scaffold a new RainbowKit + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org) app with one of the following commands, using your package manager of choice:

```bash
npm init @rainbow-me/rainbowkit@latest
# or
pnpm create @rainbow-me/rainbowkit@latest
# or
yarn create @rainbow-me/rainbowkit
```

These commands will prompt you for a project name, generate a new directory containing a boilerplate project, and install all required dependencies.

Alternatively, you can manually integrate RainbowKit into your existing project.

### Manual setup

Install RainbowKit and its peer dependencies, [wagmi](https://wagmi.sh/), [viem](https://viem.sh), and [@tanstack/react-query](https://tanstack.com/query/v5).

```bash
npm install @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query
```

After that, you must import your libraries and configure your installation. You can read more about this [here](https://www.rainbowkit.com/docs/installation#import).

### UI Configuration

You can configure a lot of parameters for UI in RainbowKit, for example:

1. [Modal Sizes](https://www.rainbowkit.com/docs/modal-sizes)
2. [Connect Button](https://www.rainbowkit.com/docs/connect-button)
3. [Themes](https://www.rainbowkit.com/docs/theming)
4. [Localization](https://www.rainbowkit.com/docs/localization)

You can read more about advanced customizing these components [here](https://www.rainbowkit.com/docs/custom-connect-button).

## Adding Aurora Pass

You will need to get a Wallet ID from WalletConnect for the Aurora Pass wallet first from [here](https://explorer.walletconnect.com/aurora-pass) or copy it directly below:

```bash
76260019aec5a3c44dd2421bf78e80f71a6c090d932c413a287193ed79450694
```

You can now add Aurora Pass as a recommended wallet to your RainbowKit WalletList by:

1. Use `walletConnectWallet` from `@rainbow-me/rainbowkit/wallets` in your [wallet connectors](https://www.rainbowkit.com/docs/custom-wallet-list):

```tsx
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import {
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [rainbowWallet, walletConnectWallet],
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
);
```

2. Now you can configure your `walletConnectWallet` via the `qrModalOptions` variable, which is secretly just WalletConnect options,
find the [complete list of them here](https://docs.walletconnect.com/advanced/walletconnectmodal/options):

```tsx
walletConnectWallet(options: {
  projectId: string;
  options?: {
    qrModalOptions?: {
      desktopWallets?: DesktopWallet[];
      mobileWallets?: MobileWallet[];
    };
  }
});
```

3. So now, use the `explorerRecommendedWalletIds` option
 (documented [here](https://docs.walletconnect.com/web3modal/v2/react/wagmi/options#explorerrecommendedwalletids-optional)) and paste Aurora Pass ID to it:

```tsx
let options = {
    defaultChain: aurora, // we can set it to make sure we are using Aurora mainnet by default for our DApp
    includeWalletIds: [
        '76260019aec5a3c44dd2421bf78e80f71a6c090d932c413a287193ed79450694', //AuroraPass
    ]};

// pass the 'options' here as the last argument
const connectors = connectorsForWallets([ ...
   walletConnectWallet({projectId, options})
   ...
]);
```

That is it. Now, you can use Aurora Pass from your RainbowKit popup.

## Troubleshooting

Please, take a look at our [Troubleshooting Page](/onboard/troubleshooting). In case you still have questions, please get in touch with our [Support Team](https://discord.gg/auroralabs)
 on Discord and open a support ticket there.
