---
title: "Gas"
---

# Notes on Gas

Aurora runs on top of NEAR, so in some sense [NEAR gas] is the real measure of computational work.
However, for compatibility with Ethereum we want our users to be able to pay for transactions with ether (ETH).
To enable this, the Aurora infrastructure includes relayers which encapsulate ordinary EVM transactions into NEAR transactions, submit them on-chain, and return the transaction result.

Transaction cost ~$0.02

## Compatibility limitations

Since the underlying measure of computational work is NEAR gas, an edge case that arises is when the transaction runs out of NEAR gas before running out of EVM gas.

In this case the transaction will be considered as failed on Aurora, but this may or may not be compatible with what the outcome on Ethereum would have been
(if the gas limit was actually high enough for the transaction to complete had NEAR gas not been the limiting factor).

This case will not come up for the vast majority of transactions, and indeed will become less and less likely as we improve the efficiency of our EVM contract
(thus allowing NEAR gas to go further in terms of EVM computation).
Eventually we hope to eliminate this entirely by setting the [ETH block gas limit] on Aurora to be lower than the amount of NEAR which we could spend in one transaction.

[NEAR gas]: https://docs.near.org/docs/concepts/gas
[ETH block gas limit]: https://ethereum.org/en/developers/docs/blocks/#block-size
