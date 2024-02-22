---
sidebar_label: 	Web3Modal
title: Web3Modal
---

The [Web3Modal](https://docs.walletconnect.com/web3modal/about) allows you to easily connect your DApp with wallets.
 It provides a simple and intuitive interface for DApps to request actions such as signing transactions and interacting with smart contracts on the blockchain.

![web3modal](/img/web3modal.png)

## Integrate Web3Modal

You can take a look at the [integration example](/onboard/integration-example) and particular [section about Web3Modal](/onboard/integration-example#adding-web3modal) there, or just
read [Web3Modal Docs](https://docs.walletconnect.com/web3modal/about) and try to implement it yourself.

## Adding Aurora Pass

You can add Aurora Pass as a recommended wallet by using the corresponding configuration option in Web3Modal:

1. For Web3Modal v3, use `includeWalletIds` option. More info can be found [here](https://docs.walletconnect.com/web3modal/react/options#includewalletids--excludewalletids
).
2. For Web3Modal v2, use `explorerRecommendedWalletIds` option. About it please read [here](https://docs.walletconnect.com/web3modal/v2/react/wagmi/options#explorerrecommendedwalletids-optional).
3. Copy and paste the Wallet ID of the Aurora Pass wallet to your Web3Modal option. You can find it [here](https://explorer.walletconnect.com/aurora-pass) or copy it directly:

```bash
76260019aec5a3c44dd2421bf78e80f71a6c090d932c413a287193ed79450694
```

You can find an example of how to add the Aurora Pass Wallet ID in the integration example [here](/onboard/integration-example#add-aurorapass-to-your-wallet-list).
