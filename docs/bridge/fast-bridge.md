---
sidebar_label: 	Fast Bridge
title: Fast Bridge
---

Fast Bridge is a solution which enables the transfer of tokens from Near/Aurora to Ethereum with just a few minutes of delay.
As an added advantage, this service also provides the ability to determine the transfer cost right  from the start for users.

From the start, the Fast Bridge supports AURORA, WBTC, and USDC transfers, while new tokens will be added in the future.

Compare this this to the classical Rainbow Bridge, which makes it possible to transfer tokens from the Aurora and Near blockchain to Ethereum.
These transactions have longer processing times, typically ranging from 4 to 8 hours, and the final transaction cost remains unpredictable at the time of initiation.

## What’s new for users?

You can now choose to transfer ERC-20 tokens from the Aurora/Near to the Ethereum ecosystem benefitting from the fast transfer function.
With the valid fast transfer, you will be able to bridge your assets, usually in a few minutes.
In the Fast Rainbow Bridge, the cost of the transfer is covered by the relayer, relieving the user from paying the gas fees on the Ethereum side.
The relayer takes care of the gas expenses and ensures that the transaction is executed promptly to mitigate any potential gas price fluctuations.

From the user's point-of-view using Fast Bridge is really simple, just choose it as an option instead doing the Regular Transfer:

![fast-bridge-example](/img/fast-bridge-example.png)

The fee for utilizing the Fast Rainbow Bridge is calculated dynamically and paid in the same tokens that are transferred.
The current fee is equal to ~$20 base fee plus 0.1% of the transferred amount.

## General idea

The Fast Bridge implementation is possible because it doesn't use the Rainbow Bridge's NEAR Light Client on the Ethereum side. Instead, it uses a 3rd party liquidity Provider to facilitate the fast transfer.

Let's imagine that a User wants to transfer some tokens from NEAR to Ethereum in a short time.
If he decided to use the classical Rainbow Bridge because it would take at least 4 hours.

Now let's assume that some Provider already has the target tokens on the Ethereum side and agrees to exchange them for the same tokens on the Near side. In that case:

- The User can lock its tokens with a fee for the Provider on the Near side.
- The Provider can easily check that tokens are locked and transfer tokens to the User on the Ethereum side.
- The Provider will claim his tokens and earned fees on the NEAR side by showing proof of the token transfer from the Ethereum side.

In this scenario, the User should not wait for any NEAR Light Client on Ethereum update and gets tokens on the Ethereum side extremely fast.

The Fast Bridge solution is decentralized and trustless. This is achieved because the Fast Bridge allows multiple relayers to provide liquidity, thus allowing a competitive market for fast transfers.
Users, on the other hand, may claim their tokens back if their transfer was not completed (for example, in case the relayer is down or the provided fee is too low)
within the max transfer time window (currently equals to 4 hours).
Moreover, to claim tokens back on the NEAR side, the relayer must provide proof of the finalized bridge transaction from the Ethereum side.

## Architecture

The following diagram describes the whole flow of the Fast Bridge transfer:

![Fast Bridge Architecture](/img/fast-bridge-arch.avif)

If you want to read more details about it, [here is the article](https://dev.aurora.dev/posts/fast-bridge) on Aurora Developer Portal.
