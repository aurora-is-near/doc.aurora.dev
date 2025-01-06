# Connect CEXes to your chain

<summary>Enable transfers from centralised exchanges to your Virtual Chain</summary>

**The forwarder proposes another onramp solution to your users by enabling withdrawals from centralised exchanges directly onto your Virtual Chain.**

![frame827_5](/img/.gitbook/assets/Frame_827_(5).png)

:::info[Supported Exchanges include]

**Binance, Coinbase, OKX, Bybit, Kraken, Gate.io, HTX, BItfinex, Kucoin,** and many more...
:::

The tool is currently available at [https://aurora.plus/forwarder](https://aurora.plus/forwarder) and supports all centralised exchanges that allow withdrawals to the _Near network_.

![image1](/img/.gitbook/assets/image_(1).png)

## How does it work?

The forwarder, as its name suggests, forwards any assets sent to its Near deposit address to the recipient Aurora address.&#x20;

* Each user gets their own deposit address on Near.
* When a user withdraws assets from Binance to this Near deposit address, a backend service automatically triggers a transfer from this Near deposit address to the target Virtual Chain.&#x20;
* This process is invisible for the user who simply receives their assets on their address on your Virtual Chain.

## Technical overview

The forwarder leverages the chain abstraction ability from Aurora and Near by routing assets to the target virtual chain.

In technical terms, the forwarder is a smart contract deployed on Near, and has the capacity to generate a unique Near address based on an Aurora address (one per Aurora network). When the contract receives tokens that are part of the curated token list, it will automatically send these assets to the address on the Aurora network selected.

![image2](/img/.gitbook/assets/image_(2).png)

## Supported assets

These assets will be automatically forwarded to the destination address.

* USDT
* USDC
* NEAR

Any other assets sent to the deposit address will not be automatically be forwarded but **won't be lost** either.

\-> [_Read more about the Forwarder release_](https://aurora.dev/blog/aurora-forwarder-is-live)_._
