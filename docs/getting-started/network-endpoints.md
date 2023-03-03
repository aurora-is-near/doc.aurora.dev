---
title: "Networks Endpoints"
---

# Networks

Ethereum Virtual Machine (EVM) support is currently available on the
following networks:

<div class="networks-table"></div>

| Network             | Engine ID                  | Chain ID                | Endpoint URL                 |
|---------------------|----------------------------|-------------------------|------------------------------|
| [Mainnet](#mainnet) | [`aurora`][aurora@Mainnet] | 1313161554 (0x4e454152) | <https://mainnet.aurora.dev> |
| [Testnet](#testnet) | [`aurora`][aurora@Testnet] | 1313161555 (0x4e454153) | <https://testnet.aurora.dev> |
| Localnet            | `aurora.test.near`         | 1313161556 (0x4e454154) | <http://localhost:8545>      |

Find the status page and public incident log at
[api.aurora.dev](https://api.aurora.dev).
You can also subscribe to incident notifications there.

:::note
Aurora runs on top of NEAR, meaning that the underlying NEAR gas is the real measure of
computational work. However, for compatibility with Ethereum we want our users to be able to pay for
transactions with ether (ETH). To enable this, the Aurora infrastructure includes relayers which
encapsulate ordinary EVM transactions into NEAR transactions, submit them on-chain, and return the
transaction result.

Transaction cost ~$0.02 (this value is not calculated automatically, just based on our
observations).
:::

## Endpoints

### Mainnet

#### HTTPS

The Mainnet Web3 endpoint is at: `https://mainnet.aurora.dev` (port 443)

The Privacy-Oriented Omnia Mainnet endpoint is at: `https://endpoints.omniatech.io/v1/aurora/mainnet/public` (port 443)

#### WSS

The Mainnet Websocket endpoint is at: `wss://mainnet.aurora.dev`

### Testnet

The Testnet Web3 endpoint is at: `https://testnet.aurora.dev` (port 443)

The Privacy-Oriented Omnia Testnet endpoint is at: `https://endpoints.omniatech.io/v1/aurora/testnet/public` (port 443)

#### WSS

The Testnet Websocket endpoint is at: `wss://testnet.aurora.dev`

[aurora@Mainnet]: https://explorer.near.org/accounts/aurora

[aurora@Testnet]: https://explorer.testnet.near.org/accounts/aurora
