---
sidebar_label: 	Explore ecosystem (Aurora+)
title: Aurora+
---

[Aurora+] is a decentralized application (dApp) that serves as the gateway to the Aurora ecosystem, designed to introduce users to the diverse applications in the Aurora ecosystem.

[Aurora+] provides a suite of features allowing users to:

- Earn rewards by staking AURORA tokens.
- Purchase AURORA tokens directly on the platform.
- Swap tokens, offering a seamless exchange experience.
- Deposit tokens to accrue earnings or to access borrowing options.
- Dive into Aurora's rich dApp ecosystem, exploring a wide range of applications built on the Aurora blockchain.
- Keep track of their favourite dApps for quick access.

## Key Features

### Staking

[Aurora+ staking] is realised using a [Jet-staking smart contract], which is made completely free of gas costs for all users, thanks to the integration of the Aurora Control solution.

![aplus_stake](/img/aplus_stake.png)

Aurora Control enables the customisation of how gas fees are presented to end users. In this case, it was decided to remove gas fees for the staking contract.

This means that when users stake or unstake AURORA tokens, they are not required to pay any additional fees or to hold a different asset to enable this transaction, which greatly improves the user experience.

Aurora Staking can be integrated into your projects by following this [integration guide].

### On-ramp with CEX (Forwarder)

Our [Forwarder product](/launch-chain/forwarder/introduction) is a component designed to facilitate asset transfers across Aurora Chains and Aurora Mainnet from CEXes,
even if the exchange does not support a specific chain.

![forwarder_main](/img/forwarder_main.png)

This means that users can for instance withdraw USDT from Binance to Aurora Mainnet or any Aurora Chain.
The Forwarder leverages the Near blockchain as a base layer on top of which Aurora is deployed to seamlessly move assets,
making it more accessible for users to bring assets into Aurora, thus supporting the ecosystem's growth and user engagement.

### On-ramp (Munzen, Transak)

Users can purchase AURORA, USDT and USDC tokens directly from Aurora+ interface with their debit/credit card. We are leveraging the [Transak](https://transak.com/) and [Munzen](https://munzen.io/) services:

![aplus_onramp](/img/aplus_onramp.png)

Users are looking for multiple options when purchasing crypto, and having several choices means we can cater to everyone’s needs.

On-ramp is also useful for the new accounts with no tokens on their balance at all, so they can swap the on-ramp tokens to ETH and be able to pay for the gas on the network.
We will talk about swapping in the next section.

### Swapping (1inch)

[Swapping] is facilitated through the integration with [1inch DEX] (decentralised exchange). 1inch is a leading DEX aggregator operating on all major networks.

![aplus_swap](/img/aplus_swap.png)

:::note
All swapping transactions are gas-free, so you don't need to worry about having ETH on your wallet.
:::

It enables users to smoothly swap tokens directly from Aurora+. This supports portfolio diversification, catering to the dynamic needs of users in their investment journey.

### Lending & Borrowing (Aurigami)

Introducing a new dimension to the Aurora ecosystem, Aurora+ now includes [lending and borrowing] features:

![aplus_lend](/img/aplus_lend.png)

This addition opens up possibilities for passive income and financial flexibility, allowing users to lend their assets to earn interest or borrow against
their holdings for liquidity without selling their investments.

The interface for lending and borrowing uses the [Aurigami](https://www.aurigami.finance/) contracts in the background, which is the leading lending & borrowing platform on Aurora.

## Future development

Aurora+ will welcome in Q2 2024 the addition of new features, completing its role of gateway to the ecosystem.

### Bridge to Aurora Chains

Similarly to Hyperdrive, the Aurora Chains bridge enables a seamless transfer of assets between Aurora Chains.
It uses the same underlying concept and it will be available through the Aurora+ interface, reinforcing its central place in the Aurora ecosystem.

[Aurora+]: https://aurora.plus/
[integration guide]: https://github.com/aurora-is-near/aurora-staking-contracts/blob/main/docs/integration-guide.md
[Jet-staking smart contract]: https://github.com/aurora-is-near/aurora-staking-contracts/
[1inch DEX]: https://1inch.io/
[Aurora+ staking]: https://aurora.plus/dashboard
[Swapping]: https://aurora.plus/swap
[lending and borrowing]: https://aurora.plus/earn
