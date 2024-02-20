---
title: "Integrate Wallet Connect"
---

# Wallet Connect Integration

Aurora Pass is meant to be used with [WalletConnect v2](https://docs.walletconnect.com/).
It is an industry standard to create an encrypted connection between a DApp and EVM wallet,
initialized by scanning a QR code, or via [deeplink](https://docs.walletconnect.com/web3wallet/mobileLinking) for mobile apps and browsers.

## Integration Guide

To integrate WalletConnect into your DApp, just follow these steps:

1. If you don't have Wallet Connect yet, please go to the [next section](/onboard/wallet-connect#add-your-wallets-modal) and follow the instructions there.
2. If you use WalletConnect v1, then you need to [migrate to WalletConnect v2](https://docs.walletconnect.com/2.0/advanced/migration-from-v1.x/overview) first.
3. If you already have WalletConnect v2, then just add the Aurora Pass wallet to your wallets modal:
e.g., [Web3Modal](/onboard/wallets/web3modal#adding-aurora-pass) or [RainbowKit](/onboard/wallet-connect#add-your-wallets-modal)

If you need support, please contact our Support Team via [Discord](https://discord.com/invite/dEFJBz8HQV).

## Add your wallets modal

To display the list of wallets for a user to connect to your DApp, you will need to integrate one of the Wallet Modals.
Currently on the market these are the two most popular options to choose from:

1. [Web3Modal](https://docs.walletconnect.com/web3modal/about) – popup developed by the WalletConnect team. You can read more [here](/onboard/wallets/web3modal/) about it.
2. [RainbowKit](https://www.rainbowkit.com/) – another popular modal in the Ethereum ecosystem. More information on how to integrate it is [here](/onboard/wallets/rainbowkit/).

Both of these are based on WalletConnect v2 out of the box, so in the case you don't use it yet – that is the place to start. After adding one of these modals,
you will be able to add Aurora Pass to your wallet list, and make it one of the primary options for a user, which is done in the next section *'Add your wallets'*.
