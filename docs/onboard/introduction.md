---
title: "Introduction"
---

# Aurora Pass

Aurora Pass is a mobile cryptocurrency wallet that makes your interactions with Aurora or any of the Aurora Chains easier than ever, whether transferring your assets or using a DApp.
It also helps onboard your users, even ones unfamiliar with the Web3 ecosystem.

## Key Features

- Simple and user-friendly interface.
- 50 free transactions for each user per month.
- Secure and non-custodial wallet.
- Send and receive assets on Aurora Mainnet and Aurora Chains.
- View your portfolio balances and recent transactions.
- Connect to DApps via WalletConnect v2.

## Integration

Connecting Aurora Pass to a DApp is done like every other EVM wallet implementing a [WalletConnect v2](https://docs.walletconnect.com/).
See more info on configuring or adding WalletConnect [here](/onboard/wallet-connect).

We propose two options for displaying the wallets for your users: Web3Modal or Rainbow Kit. You can follow the step-by-step integration examples here:

- [Web3Modal Example](/onboard/wallets/web3modal#integrate-web3modal)
- [RainbowKit Example](/onboard/wallets/rainbowkit#integrate-rainbowkit)

That will help you to understand better how the different components work together. E.g., wallet modals, promo widgets and UI frameworks.

## Promo Widget

Add a [Promo Widget](/onboard/promo-widget) to your DApp to allow new users to install Aurora Pass quickly.
It will direct a user to download the Aurora Pass application on a mobile phone in the most convenient way.

It is optional to add it to your DApp. Otherwise, you will need to implement some other way to lead users to the installation of the wallet.
We advise everyone to use it as an onboarding entry point in their DApps.

## Free transactions

Aurora Pass requires a login with an email or Apple/Google auth, which will provide them with free transactions on Aurora Mainnet.
The basic plan for Aurora Pass users is 50 free transactions per month. This feature is achieved by using the Gasless Management feature of Aurora Chains.
At the same time, DApps can also pay for their users’ EOA transaction fees by getting their own gasless deal using our Gasless Management product.

If the monthly free transaction limit is reached or the transaction is not sponsored by a DApp, a pack of transactions can be purchased from within the Aurora Pass app.
Currently, only one transaction pack is available: 500 free transactions for around $4.99 (the price can depend on the country).

## Security

Aurora Pass is a non-custodial crypto wallet, meaning the user will be given a 12-word recovery seed phrase that grants them access to their assets.

Users won’t have to save that seed phrase on signup as it is securely saved on the device but can choose to export it anytime.
Excluding such details provides better onboarding while also giving users the ownership of their assets in a non-custodial way.

The seed phrase is the only way to recover access to the wallet in case of loss or when installing the wallet on a new device.

Using the wallet requires biometric authentication (e.g., faceID or touchID). In case it is absent, the PIN code for a device will be used.
The seed phrase is stored using [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/):

- on Android, values are stored in SharedPreferences, encrypted with Android’s Keystore system;
- on iOS, values are stored using the keychain services.

## Troubleshooting

If you encounter any issues, please visit our [Troubleshooting Page](/onboard/troubleshooting) to find a solution.
In case you still have questions, please get in touch with our [Support Team](https://discord.gg/auroralabs)
on Discord and open a support ticket there.
