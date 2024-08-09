---
sidebar_label: 	Introduction
title: Introduction
---

Developing your Dapp on Aurora is done in the same way as on any other EVM chain. The main steps in this process are:

1. Writing and deploying your smart contracts in Solidity by using Hardhat, Foundry, Truffle or Remix.
2. Creating a frontend that interacts with these smart contracts and blockchain.

We will talk in detail about how you can build a simple Dapp using Hardhat, React and Wagmi. By this, we are aiming to answer how you can do the most frequent Dapp-developer questions:

- How to connect your wallet to the Dapp?
- How to get information about a particular user account?
- How to send transactions?
- How to interact with smart contracts?

But before doing that, let's list some resources that can help you learn more about developing on Aurora and Web3 development in general.

## Intro to EVM development

We encourage developers, who want to onboard into web3 to try using the best Ethereum onboarding resources:

- [CryptoZombies](https://cryptozombies.io/) is a great way to learn to write smart contracts for beginners.
- [SolidityByExample](https://solidity-by-example.org/) one of the best way to learn Solidity contracts by example.
- [Ethereum Speedrun](https://speedrunethereum.com/) based on [ScaffoldETH](https://scaffoldeth.io/):
a bunch of tutorials explaining how to build Dapps - NFT, ERC-20, Staking, DEX, Multisigs, etc. It starts with simpler ones and moves forward gradually to more complex examples.
- [Viem](https://viem.sh/docs/introduction) and [Wagmi](https://wagmi.sh/react/why) are the tools you will want to use to communicate between your UI and the blockchain.

To try all of the projects and tutorials mentioned above on Aurora all you need to do is to change your RPC URL and that is it!
Or in other words, just add Aurora network to your project. You can find information about the RPC endpoints [here](/dev-reference/network-endpoints).

## Aurora Developer Portal

At Aurora, we also have [Aurora's DevPortal](https://dev.aurora.dev/) to help you learn more about the specifics of the development on Aurora and how our core products work.
So, if you are already an experienced developer and want to learn more about more advanced themes, please consider visiting [it](https://dev.aurora.dev/).

 We suggest you start with the following articles:

- [Gas Price on Aurora and Near](https://dev.aurora.dev/posts/evm-gas-near-gas-on-aurora)
- [Integration tests for XCC](https://dev.aurora.dev/posts/communication-from-aurora-to-near-local-testing)
- [Contract callbacks in XCC](https://dev.aurora.dev/posts/contract-callbacks-in-xcc)
- [Aurora RPC Node Architecture](https://dev.aurora.dev/posts/spinning-up-your-own-aurora-node)

You can learn a lot from our [GitHub organization repositories](https://github.com/aurora-is-near), directly from code. Here are the most popular ones:

- [Aurora Engine](https://github.com/aurora-is-near/aurora-engine/)
- [Aurora Staking Contracts](https://github.com/aurora-is-near/aurora-staking-contracts/tree/main/docs)

## Intro to Near Development

:::note
Learning Near is not compulsory to develop on Aurora, but if you are curious or wanting to understand advance material (like XCC), you can read more about it here.
:::

You're running Aurora atop of Near blockchain, every Aurora transaction has a corresponding Near transaction.
That is why two ecosystems are closely intertwined. Here are some materials to onboard yourself with Near:

- [Near Documentation](https://docs.near.org/)
- [Near Developers Portal](https://pages.near.org/developers/)
- [JavaScript Devs Near Onboarding](https://docs.near.org/build/web3-apps/quickstart)
- [Rust Devs Near Onboarding](https://docs.near.org/sdk/rust/introduction)
- [Near CLI RS](https://github.com/near/near-cli-rs)
- [Near Plugins](https://github.com/Near-One/near-plugins) with a tutorial [here](https://dev.aurora.dev/posts/plugins-for-smart-contract-devs-building-on-near)

The key to understanding on how Aurora is linked with Near is to know the next repos/articles:

- [Aurora Engine](https://github.com/aurora-is-near/aurora-engine/)
- [Refiner](https://github.com/aurora-is-near/borealis-engine-lib)
- [Relayer](https://github.com/aurora-is-near/relayer2-public)
- [Gas Price on Aurora and Near](https://dev.aurora.dev/posts/evm-gas-near-gas-on-aurora)
- [Aurora RPC Node Architecture](https://dev.aurora.dev/posts/spinning-up-your-own-aurora-node)
