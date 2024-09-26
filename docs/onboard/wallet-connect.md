---
title: "Integrate Wallet Connect"
---

# Wallet Connect Integration

Aurora Pass is meant to be used with [WalletConnect v2](https://docs.walletconnect.com/). It is an industry standard to create an encrypted connection between a DApp and EVM wallet,
initialized by scanning a QR code or via a [deep link](https://docs.walletconnect.com/web3wallet/mobileLinking) for mobile apps and browsers.

## Integration Guide

To integrate WalletConnect into your DApp, follow these steps:

1. If you don't have Wallet Connect yet, please follow the instructions in the [next section](/onboard/wallet-connect#add-your-wallets-modal).
2. If you use WalletConnect v1, [migrate to WalletConnect v2](https://docs.walletconnect.com/2.0/advanced/migration-from-v1.x/overview) first.
3. If you already have WalletConnect v2, add the Aurora Pass wallet to your wallet modal:
e.g., [Web3Modal](/onboard/wallets/web3modal#adding-aurora-pass) or [RainbowKit](/onboard/wallet-connect#add-your-wallets-modal)

Please get in touch with our [Support Team](https://discord.gg/auroralabs) if you need some help

## Add your wallet modal

You must integrate one of the Wallet Modals to display the list of wallets for a user to connect to your DApp.
Currently on the market, these are the two most popular options to choose from:

1. [Web3Modal](https://docs.walletconnect.com/web3modal/about) – popup developed by the WalletConnect team. You can read more about it [here](/onboard/wallets/web3modal/).
2. [RainbowKit](https://www.rainbowkit.com/) is another popular wallet modal in the Ethereum ecosystem. More information on integrating it is [here](/onboard/wallets/rainbowkit/).

Both of these are based on WalletConnect v2 out of the box, so if you are not using it yet – that is the place to start. After adding one of these modals,
you can add Aurora Pass to your wallet list and make it one of the primary options for a user, which is done in the next section *'Add your wallets'*.
