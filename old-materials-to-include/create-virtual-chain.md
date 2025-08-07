---
title: "Create your first EVM in minutes"
description: "In this article we demonstrate how you can use Omnibridge and AuroraCloud Console to deploy your own EVM in minutes"
date: "2025-08-07"
authors: [slava]
tags: [tutorials]
---
In this short tutorial we will show how by using [Omnibridge](https://docs.near.org/chain-abstraction/omnibridge/overview) and [AuroraCloud](https://app.auroracloud.dev/auth/login), you can start your own EVM chain with a custom token from other chains (e.g., Solana, Base, Ethereum).

To do this we will create a custom token, bridge it to NEAR and use corresponding fungible token (NEP-141 on NEAR) as a gas token for a virtual chain. 
<!-- truncate -->


## Quick plan

We're going to:
1. Create a custom token on Base (the same will apply to Solana or any other blockchain).
2. Deploy that token via Omnibridge to NEAR -> get NEP-141 token there.
3. Deploy your virtual chain using that NEP-141 token.
4. Bridge your tokens from Base to NEAR.
5. Bridge your tokens from NEAR inside your virtual chain.
6. Execute a transfer and pay gas fees in that token.

## Requirements

We're expecting you to have your [MetaMask installed](https://metamask.io/faqs) and your wallet already created there. You can use any other EVM wallet too. E.g., Rabby, Brave or Coinbase Wallet.

Also, please get some real funds there to pay for gas and token deployments.
We recommend using [NEAR Intents](https://near-intents.org/) to swap and bridge tokens between different chains.

Please contact us on [Discord](https://discord.gg/auroralabs) if you will need any help with getting funds for gas fees.

## Creating a base token

To create your base token we recommend:

-  Use [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/erc20) contracts.
-  Or [Aurora Contracts](/build-a-dapp/contracts/erc-20).
-  Use [Thirdweb](https://thirdweb.com/login). Here is [a quick tutorial](/blog/thirdweb-erc20).
-  For Solana you can use [`spl-token` CLI tool](https://www.solana-program.com/docs/token).

## Deploying token to NEAR

## Deploying your virtual chain

## Bridging your tokens

## Executing transaction inside EVM


[OmniBridge]: https://docs.near.org/chain-abstraction/omnibridge/overview
[Chain Signatures Signer]: https://github.com/aurora-is-near/chain-signatures-signer
[XCC]: /crosschain/xcc/aurora-to-near/introduction
[NEAR Chain Signatures]: https://docs.near.org/concepts/abstraction/chain-signatures
[Chain Signatures on Virtual Chains]: /crosschain/chain-signatures
[Chain Signatures JS Lib]: https://github.com/aurora-is-near/chain-signatures-js
[NEAR Multichain Examples]: https://github.com/near-examples/near-multichain/