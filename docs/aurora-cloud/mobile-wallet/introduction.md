---
title: "Introduction"
sidebar_position: 1
---

# Aurora Pass

Aurora Pass is a mobile cryptocurrency wallet that makes it easier than ever to manage your Aurora Mainnet and Aurora Chain assets, and use any dApps across these chains. 

## Key Features

- Secure and non-custodial wallet.
- Simple and user-friendly interface.
- 50 free transactions for each user per month.
- Send and receive assets on Aurora Mainnet and Aurora Chains.
- View your portfolio balances and recent transactions.
- Connect to dApps via WalletConnect v2.

## Integration

You can integrate Aurora Pass into your dApp by using a [WalletConnect v2](https://docs.walletconnect.com/). You have two options available as a developer:

1. If you already have a WalletConnect integration, you can read more about it [here](/aurora-cloud/mobile-wallet/wallet-connect).
2. If you don't, you can start from scratch [here](/aurora-cloud/mobile-wallet/integration-example) with a simple Web3Modal example.

## Onboarding new users

To facilitate the onboarding of new users, you can add this [promo widget](/aurora-cloud/mobile-wallet/promo-widget) to your dApp.

## Free transactions

Aurora Pass requires a login with an email or Apple/Google auth which will provide them with free transactions on Aurora Mainnet. 
The basic plan for Aurora Pass users is 50 free transactions per month. This feature is achieved by using Gasless Management feature of Aurora Chains. 
In parallel, dApps can also pay for their user’s EOA transaction fees by getting their own gasless deal for their users or contracts. 

If the monthly free transaction limit is reached or the transaction is not sponsored by a dApp, a pack of transactions can be purchased from within the Aurora Pass app. Right now, there is only one transaction pack available: 500 free transactions for a price around $4.99.

## Security

Aurora Pass is a non-custodial crypto wallet which means that the user will be given a 12-word recovery seed phrase that grants them access to their assets.

Users won’t have to save that seed phrase on signup as it is securely saved on the device, but can choose to export it at any time.
This provides better onboarding while providing them with the ownership of their assets in a non-custodial way.

The seed phrase is the only way to recover access to the wallet in case of loss or when installing the wallet on a new device.

Using the wallet requires biometric authentication (e.g., faceID or touchID). In a case it is absent, the PIN code for a device will be used.
The seed phrase is stored using [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/):
- on Android, values are stored in 
SharedPreferences, encrypted with Android’s Keystore system;
- on iOS, values are stored using the keychain services.


## Displaying the arguments of transaction

When signing a transaction, which calls a contract **verified** on Aurora Explorer, the wallet will display the decoded function call and arguments instead of some hex codes and argument values, which will be displayed for the non-verified ones.
So, we advice you to verify all (or most) of your contracts, which gives your users better understanding of their interactions with your product via Aurora Pass.

## Tokens recovery

Aurora Pass does not currently support other EVM chains and L2s. But sometimes by mistake users can send their assets to their Aurora Pass address on those networks instead.
These tokens can be easily recovered by importing the seed phrase into a compatible wallet like MetaMask and then bridging them to Aurora or to any other address.

