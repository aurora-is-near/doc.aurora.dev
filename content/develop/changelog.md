---
title: "Aurora: Changelog"
---

# Changelog

## 2021-07-30

### Testnet & Betanet only

- **Aurora Engine**: Deployed release [1.5.0](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.5.0)
  to Testnet and Betanet.

## 2021-07-08

### Testnet & Betanet only

- **Aurora Engine**: Deployed release [1.4.3](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.4.3)
  to Testnet and Betanet.

## 2021-06-25

### All networks

- **Aurora Engine**: Deployed release [1.4.2](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.4.2)
  to Mainnet, Testnet, and Betanet.

## 2021-06-23

### Testnet & Betanet only

- **Aurora Engine**: Deployed release [1.4.1](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.4.1)
  to Testnet and Betanet.

## 2021-06-18

- [The weekly update](https://aurora.dev/blog/2021-06-18-update)

### Testnet & Betanet only

- **Aurora Engine**: Deployed release [1.4.0](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.4.0)
  to Testnet and Betanet.

## 2021-06-17

### All endpoints

- **Aurora Relayer**: Fixed a bug in handling empty log event `data` properties.
  This affected the `eth_getFilterLogs`, `eth_getLogs`, and
  `eth_getTransactionReceipt` RPC methods.
  ([df29187](https://github.com/aurora-is-near/aurora-relayer/commit/df291873b859f1412306a60a7bfb69506f4d3336))

### Testnet & Betanet only

- **Aurora Engine**: Deployed release [1.3.0](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.3.0)
  to Testnet and Betanet.

## 2021-06-11

- [The weekly update](https://aurora.dev/blog/2021-06-11-update)

### Testnet & Betanet only

- **Aurora Engine**: Deployed release [1.2.0](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.2.0)
  to Testnet and Betanet.

## 2021-06-09

### All endpoints

- **Aurora Relayer**: Fixed a bug in the `eth_getFilterChanges` RPC
  method's return value: the `data` property must never be `null`.
  ([f0a41f1](https://github.com/aurora-is-near/aurora-relayer/commit/f0a41f18e2a76ba3d4fabddd449cf9f677586473))

## 2021-06-04

- [The weekly update](https://aurora.dev/blog/2021-06-04-update)

### All endpoints

- **Aurora Relayer**: Fixed a bug in the `eth_getTransactionByHash` RPC
  method's return value: an empty `input` property must be returned as `"0x"`,
  not `null`.
  ([8cd353e](https://github.com/aurora-is-near/aurora-relayer/commit/8cd353eab5bf54e23b454c115ed8aa325cc3022e))

## 2021-06-02

### All endpoints

- **Aurora Relayer**: Changed the `eth_estimateGas` RPC method's return value
  to 6,721,975, to match Truffle's default gas limit.
  ([d8c672c](https://github.com/aurora-is-near/aurora-relayer/commit/d8c672c249704dc6221a682bf62c101c78fbeb3a),
  [#16](https://github.com/aurora-is-near/aurora-relayer/issues/16))

- **Aurora Relayer**: Ensured that the `eth_sendRawTransaction` RPC method
  rejects transactions that have a gas limit lower than the minimum 21,000.
  ([87b96ed](https://github.com/aurora-is-near/aurora-relayer/commit/87b96ed7b2a50e68f426032079bbd1c0ed16bb9e),
  [#17](https://github.com/aurora-is-near/aurora-relayer/issues/17))

- **Aurora Relayer**: Bumped the `eth_estimateGas` RPC method's return value
  from zero to 300,000, sufficient to cover most MetaMask transactions.
  ([6797a94](https://github.com/aurora-is-near/aurora-relayer/commit/6797a94a781cd239122b73724bb6f528a37a3772),
  [#16](https://github.com/aurora-is-near/aurora-relayer/issues/16))

## 2021-05-29

### Testnet only

- **Aurora Engine**: Deployed release [1.1.0](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.1.0)
  to Testnet.

## 2021-05-28

- [The weekly update](https://aurora.dev/blog/2021-05-28-update)

## 2021-05-24

### All endpoints

- **Aurora Relayer**: Fixed a bug in the `eth_call` RPC method. This had been
  affecting MetaMask users in particular.
  ([1d0d7cd](https://github.com/aurora-is-near/aurora-relayer/commit/1d0d7cd7f00da1f0d118e8a79cfc70362ed773f2))

## 2021-05-19

- We have rolled out [new endpoint URLs](/develop/networks.html). Changing
  from the former endpoint URL `https://rpc.$NETWORK.aurora.dev:8545` to
  `https://$NETWORK.aurora.dev` is recommended and will decrease your
  response latency and increase your rate limits.

## 2021-05-17

### All endpoints

- **Aurora Relayer**: Fixed a response encoding discrepancy with the
  `eth_getTransactionReceipt` RPC method which was causing Truffle to
  believe that the transaction reverted when deploying contracts.
  ([2500fd9](https://github.com/aurora-is-near/aurora-relayer/commit/2500fd9d805f361e2f871c4cd8791308ce8a3417))

## 2021-05-13

### All endpoints

- **Aurora Relayer**: Fixed a regression in the `eth_getTransactionReceipt`
  RPC method.
  ([07dc0da](https://github.com/aurora-is-near/aurora-relayer/commit/07dc0daf291160aa7c81d99a9573d1d1d3af6933))
- Fixed the [CORS preflight](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
  response by ensuring that the response has status code 204 and contains
  the `Access-Control-Allow-Origin: *` and `Access-Control-Allow-Methods:
  OPTIONS, POST` headers.

## 2021-05-12

- [Launched Aurora publicly](https://near.org/blog/aurora-launches-near/).

### All networks

- **Aurora Engine**: Deployed release [1.0.0](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.0.0)
  to Mainnet, Testnet, and Betanet.
