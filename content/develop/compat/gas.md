---
title: "Aurora: Notes on Gas"
---

# Notes on Gas

Aurora runs on top of NEAR, so in some sense [NEAR gas] is the real measure of computational work.
However, for compatibility with Ethereum we want our users to be able to pay for transactions with ether (ETH).
To enable this, the Aurora infrastructure includes relayers which encapsulate ordinary EVM transactions into NEAR transactions, submit them on-chain, and return the transaction result.

In the future, these relayers will charge ETH to the address that sent the transaction based on the amount of NEAR that was spent on the NEAR gas to complete the transaction.
However, in this early-release phase, this logic is not implemented and therefore no ETH is actually charged for the gas spent.
The main takeaway from this discussion is to _set the gas price of Aurora transactions to zero for the time being_.

## Gas limits

Even though no ETH is charged, Aurora still respects gas limits. That is to say, even with a gas price of zero,
if a transaction spends more gas than its limit, it will fail with an _out of gas_ error.

Therefore, developers must still consider what the gas limit of a transaction should be even when the gas price is zero.
The amount of EVM gas spent by a transaction is computed using the standard Ethereum rules.
Therefore, developers can still estimate the cost of transactions as if it were running on any other EVM-compatible network.

## Compatibility limitations

Since the underlying measure of computational work is NEAR gas, an edge case that arises is when the transaction runs out of NEAR gas before running out of EVM gas.

In this case the transaction will be considered as failed on Aurora, but this may or may not be compatible with what the outcome on Ethereum would have been
(if the gas limit was actually high enough for the transaction to complete had NEAR gas not been the limiting factor).

This case will not come up for the vast majority of transactions, and indeed will become less and less likely as we improve the efficiency of our EVM contract
(thus allowing NEAR gas to go further in terms of EVM computation).
Eventually we hope to eliminate this entirely by setting the [ETH block gas limit] on Aurora to be lower than the amount of NEAR which we could spend in one transaction.

[NEAR gas]: https://docs.near.org/docs/concepts/gas
[ETH block gas limit]: https://ethereum.org/en/developers/docs/blocks/#block-size
