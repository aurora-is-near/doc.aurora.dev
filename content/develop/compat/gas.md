---
title: "Aurora: Notes on Gas"
---

# Notes on Gas

Aurora runs on top of NEAR, so in some sense NEAR gas is the real measure of computational work.
However, in order to maintain compatibility with Ethereum we want our users to be able to pay for transactions with ETH.
To enable this, the Aurora infrastructure includes relayers which turn normal Ethereum transactions into NEAR transactions, submit them and return the result.
In the future the relayer will charge ETH to the address that sent the transaction based on the amount of NEAR that was spent on the NEAR gas to complete the transaction.
However, in this early-release phase, this logic is not implemented and therefore no ETH is actually charged for the gas spent.
The main take-away from this discussion is to *set the gas price of Aurora transactions to zero for the time being*.

## Gas limits

Even though no ETH is charged, Aurora still respects gas limits. That is to say, even with a gas price of zero,
if a transaction spends more gas than its limit it will fail with an out of gas error.
Therefore, developers must still consider what the gas limit of a transaction should be even though the gas price is always zero.
The amount of EVM gas spent by a transaction is computed using the usual Ethereum rules; this logic is part of our EVM contract.
Therefore, developers can still estimate the cost of transactions as if it were running on any other Ethereum network.

## Compatibility limitations

Since the real measure of computational work is NEAR gas, an edge case that arises is when the transaction runs out of NEAR gas before running out of EVM gas.
In this case the transaction will be considered as failed on Aurora, but this may or may not be compatible with what the outcome on Ethereum would have been
(if the gas limit was actually high enough for the transaction to complete had NEAR gas not been the limiting factor).
This case will not come up for most transactions, and indeed will become less and less frequent as we improve the efficiency of our EVM contract
(thus allowing NEAR gas to go further in terms of EVM computation).
Eventually we hope to eliminate this entirely by setting the [ETH block gas limit] on Aurora to be lower than the amount of NEAR which we could spent in one transaction.

[ETH block gas limit]: https://ethereum.org/en/developers/docs/blocks/#block-size
