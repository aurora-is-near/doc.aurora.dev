---
title: "Using Wallet Connect"
sidebar_position: 3
---

# Wallet Connect Integration


Aurora Pass is meant to be used with [WalletConnect v2](https://docs.walletconnect.com/) and [Web3Modal](https://docs.walletconnect.com/web3modal/about).
The WalletConnect protocol is the industry standard to create an encrypted connection between a dApp and Aurora Pass.
It is initialized by scanning a QR code, or via [deeplink](https://docs.walletconnect.com/web3wallet/mobileLinking) for mobile apps and browsers.

##  Integration Guide

To integrate Aurora Pass into your dApp, just follow these steps:

1. If you use WalletConnect v1, then you need to [migrate to WalletConnect v2](https://docs.walletconnect.com/2.0/advanced/migration-from-v1.x/overview) first.
2. If you already have WalletConnect v2, then just [add the Aurora Pass wallet](/aurora-cloud/mobile-wallet/wallet-connect#adding-aurora-pass) to your dApp.
V2 migration
3. If you don't have WalletConnect at all, then take a look at the example [here](/aurora-cloud/mobile-wallet/integration-example),
read about [Web3Modal](https://docs.walletconnect.com/web3modal/about) and try to implement it yourself. 
4. If you are not sure what libraries to use during the development, please consult [here](/aurora-cloud/mobile-wallet/wallet-connect#evm-wallet-libraries).

If you need some support, please contact our team via [Discord](https://discord.com/invite/dEFJBz8HQV). 

## Adding Aurora Pass

You can add Aurora Pass as a recommended wallet by using the corresponding option in Web3Modal:

1. For Web3Modal v3, use `includeWalletIds` option. More info could be found [here](https://docs.walletconnect.com/web3modal/react/options#includewalletids--excludewalletids
).
2. For Web3Modal v2, use `explorerRecommendedWalletIds` option. About it please read [here](https://docs.walletconnect.com/web3modal/v2/react/wagmi/options#explorerrecommendedwalletids-optional).
3. Copy and paste the Wallet ID of Aurora Pass wallet to your Web3Modal option. You can find it [here](https://explorer.walletconnect.com/aurora-pass) or copy directly: `76260019aec5a3c44dd2421bf78e80f71a6c090d932c413a287193ed79450694`.

## EVM Wallet Libraries 

Connecting Aurora Pass to a dApp is done the same way as every other Ethereum wallet implementing the WalletConnect protocol.

The Ethereum ecosystem provides various libraries to make connecting to a wallet and interacting with smart contracts as easy as possible for dApp developers. Since Aurora Chains are EVM compatible, all the Ethereum tooling is also compatible with them.

For example, [Web3Modal](https://docs.walletconnect.com/web3modal/about) developed by the WalletConnect team provides a modal with all the functionality needed to connect mobile wallets (QR code scan or deeplink). In a React application, it can be used with the popular hooks library [Wagmi](https://wagmi.sh/). Another popular modal in the Ethereum ecosystem is [RainbowKit](https://www.rainbowkit.com/).

The Ethereum tooling is constantly evolving and improving so it is recommended to refer to the official documentation of your chosen library.
