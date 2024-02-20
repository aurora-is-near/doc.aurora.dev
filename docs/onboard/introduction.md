---
title: "Introduction"
---

# Aurora Pass

Aurora Pass is a mobile cryptocurrency wallet that makes it easier than ever to manage your Aurora Mainnet and Aurora Chain assets, and use any DApps across these chains.
It helps also to onboard your users, even if they are not familiar with Web3 ecosystem yet.

## Key Features

- Simple and user-friendly interface.
- 50 free transactions for each user per month.
- Secure and non-custodial wallet.
- Send and receive assets on Aurora Mainnet and Aurora Chains.
- View your portfolio balances and recent transactions.
- Connect to DApps via WalletConnect v2.

## Integration

Connecting Aurora Pass to a DApp is done the same way as every other EVM wallet implementing a [WalletConnect v2](https://docs.walletconnect.com/).
See more info on how to configure or add WalletConnect [here](/onboard/wallet-connect).

You can follow the step-by-step [integration example](/onboard/integration-example) to understand better how different components work together.

## Promo Widget

To allow new users to install Aurora Pass quickly, you can add a [promo widget](/onboard/promo-widget) to your DApp.
It will direct a user to download Aurora Pass application on a mobile phone in the most convinient way.

It is optional to add it to your DApp. But otherwise, you will need to implement some other way to lead user to the installation of the wallet.
So, we advice everyone to use it as an onboarding entrypoint in their DApps.

## Free transactions

Aurora Pass requires a login with an email or Apple/Google auth which will provide them with free transactions on Aurora Mainnet.
The basic plan for Aurora Pass users is 50 free transactions per month. This feature is achieved by using Gasless Management feature of Aurora Chains.
In parallel, DApps can also pay for their user’s EOA transaction fees by getting their own gasless deal for their users or contracts.

If the monthly free transaction limit is reached or the transaction is not sponsored by a DApp, a pack of transactions can be purchased from within the Aurora Pass app.
Right now, there is only one transaction pack available: 500 free transactions for a price around $4.99.

## Security

Aurora Pass is a non-custodial crypto wallet which means that the user will be given a 12-word recovery seed phrase that grants them access to their assets.

Users won’t have to save that seed phrase on signup as it is securely saved on the device, but can choose to export it at any time.
This provides better onboarding while providing them with the ownership of their assets in a non-custodial way.

The seed phrase is the only way to recover access to the wallet in case of loss or when installing the wallet on a new device.

Using the wallet requires biometric authentication (e.g., faceID or touchID). In a case it is absent, the PIN code for a device will be used.
The seed phrase is stored using [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/):

- on Android, values are stored in SharedPreferences, encrypted with Android’s Keystore system;
- on iOS, values are stored using the keychain services.

## Troubleshooting

If you encounter any issues, please visit our [Troubleshooting Page](/onboard/troubleshooting) to find a solution.
