---
title: "Aurora: Changelog"
---

# Changelog

## 2021-05-17
### All endpoints
- Aurora Relayer: Fixed a response encoding discrepancy with the
  `eth_getTransactionReceipt` RPC method which was causing Truffle to
  believe that the transaction reverted when deploying contracts.
  ([2500fd9](https://github.com/aurora-is-near/aurora-relayer/commit/2500fd9d805f361e2f871c4cd8791308ce8a3417))

## 2021-05-13
### All endpoints
- Aurora Relayer: Fixed a regression in the `eth_getTransactionReceipt` RPC method.
  ([07dc0da](https://github.com/aurora-is-near/aurora-relayer/commit/07dc0daf291160aa7c81d99a9573d1d1d3af6933))
- Fixed the [CORS preflight](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
  response by ensuring that the response has status code 204 and contains
  the `Access-Control-Allow-Origin: *` and `Access-Control-Allow-Methods:
  OPTIONS, POST` headers.

## 2021-05-12
- [Launched Aurora publicly](https://near.org/blog/aurora-launches-near/).
### All networks
- Aurora Engine: Deployed release [1.0.0](https://github.com/aurora-is-near/aurora-engine/releases/tag/1.0.0)
  to MainNet, TestNet, and BetaNet.
