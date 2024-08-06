---
title:   Get ETH for gas
sidebar_label: Get ETH for gas
---

ETH is the base token on the [Aurora Mainnet and Aurora Testnet chains](/dev-reference/network-endpoints).
Therefore to deploy your contracts or to execute transactions you will need to have some ETH on your wallet to pay for the gas.
Let's find out where you can get it for both Mainnet and Testnet.

:::note
Gas price on Aurora is always constant and right now is only 0.07GWei, so even small amounts of ETH should be enough to do most of the operations.
For example, a coin transfer will cost you only around ~0.0000015 ETH (~$0.006), and an ERC-20 contract deployment – ~0.00005 ETH (~$0.2).
:::

## Get ETH on Testnet

To get ETH on Aurora Testnet you have the following options:

1. Get 0.001ETH on [Aurora Faucet](https://aurora.dev/faucet).
2. Get ETH on Near or Ethereum chains and bridge it with the [Testnet Rainbow Bridge](https://testnet.rainbowbridge.app/).
3. Get ETH on one or more Sepolia faucets and transfer it via [Testnet RainbowBridge](https://testnet.rainbowbridge.app/transfer) to your Aurora address:

- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) (0.05ETH)
- [Infura Faucet](https://www.infura.io/faucet/sepolia) (0-0.5ETH, depending on your account mainnet activity), needs registration.
- [Alchemy Faucet](https://www.alchemy.com/faucets/ethereum-sepolia) (0.1ETH per day): needs registration + 0.001ETH on Ethreum mainnet.

## Get ETH on Mainnet

To get ETH on Aurora Mainnet you will need to:

1. [On-ramp with fiat](/getting-started/explore#on-ramp-munzen-transak) using Transak or Munzen.
2. [Swap](/getting-started/explore#swapping-1inch) the on-ramped tokens to ETH with Aurora+.
3. Get ETH on Near or Ethereum chains and bridge it with the [Rainbow Bridge](https://rainbowbridge.app/).

Now you are ready to interact with Aurora networks and pay for you gas!
Let’s read about building some dApps in the next articles.
