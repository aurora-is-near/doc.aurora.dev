---
title: "How to bridge liquidity to Aurora?"
description: "We will focus on stablecoins, explain their types on Aurora, and take a look at how to bridge them in different ways from other ecosystems"
date: "2024-05-22"
authors: [slava]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1716383835-liqaur.png
---
In this article, we will discuss how to bridge liquidity to Aurora in the most convenient way. We will focus on stablecoins, explain why we have four types of these on Aurora, and take a look at how to bridge them in different ways. Note that this whole bridging process also applies to the ERC-20 tokens.

<!-- truncate -->

## The global picture – What stables do we have?

First, let’s mention three main actors here: Ethereum, Near, and Aurora blockchains. Second, we will consider the two most popular stables, USDC and USDT. To connect the ecosystem, we will use the Rainbow Bridge.\
\
Let’s take a look at how USDC and USDT tokens are bridged via Rainbow Bridge from Ethereum to Near:

![](https://www.datocms-assets.com/95026/1716383440-screenshot-2024-05-21-at-11-51-56.png)

As you can see, Near has the corresponding bridged versions of Ethereum’s tokens: USDC.e and USDT.e (in green), as well as the Near native [*USDC*](https://nearblocks.io/address/17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1) and [*USDT*](https://nearblocks.io/address/usdt.tether-token.near) (in blue).

This is needed to separate the bridged liquidity from the native one on the Near blockchain. You may also have heard about such tokens being wrapped. All these versions are interchangeable using [*ref.finance,*](https://app.ref.finance/#a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near%7C17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1) on Near Protocol, as depicted by a green arrow in the image.

A similar story repeats with Aurora by bridging tokens from Ethereum and Near via Rainbow Bridge. So we’re getting the next picture:

![](https://www.datocms-assets.com/95026/1716383465-screenshot-2024-05-21-at-11-53-42.png)

That is why, on Aurora, we have 4 different tokens representing stables. USDC and USDT tokens are the wrapped analog for the Near native tokens. And USDC.e and USDT.e – for the Ethereum tokens. All these versions are interchangeable by using [*Aurora+ Swap*](https://aurora.plus/swap) feature supported by 1inch.

## How to transfer liquidity to Aurora?

As you have seen in the picture above, the most natural way to transfer tokens from Ethereum or Near is to use the [*Rainbow Bridge*](https://rainbowbridge.app/). But we will talk about other variants too. Here is a picture summarizing the most popular ones:

![](https://www.datocms-assets.com/95026/1716383517-screenshot-2024-05-21-at-11-16-27.png)

If you have tokens on CEX that support Near, you can use [Forwarder](https://doc.aurora.dev/launch-chain/forwarder/introduction), which allows you to transfer them from CEX to your Aurora address. See Binance instructions [here](https://doc.aurora.dev/launch-chain/forwarder/how-to-use/binance).

For any other EVMs, you can use the [Stargate](https://stargate.finance/) (coming soon) or [Meson](https://meson.fi/) bridges. Stargate supports the Near Native USDC pool on Aurora. You can always [*swap you tokens on Aurora+*](https://aurora.plus/swap), after bridging.\
\
That is it! Thank you for reading us!\
If you have any questions or suggestions, please visit our [Discord Community](https://discord.com/invite/WXfbGsSUbT)!
