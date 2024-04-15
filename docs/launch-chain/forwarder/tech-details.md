---
title: 	Technical Details
---

In technical terms, the Forwarder is a smart contract deployed on Near, which generates a unique Near address based on your Aurora address (one per Aurora network).
 When the contract receives tokens from the curated token list, it will automatically send these assets to your address on the Aurora network selected
 (at the moment, only Aurora Mainnet is available through the interface).

The Forwarder architecture consists of a few smart contracts and an indexer service:

1. Factory Contract (deposit.aurora): This contract creates a Deposit Address on Near for every user and ensures that all necessary details for the transaction are accurately recorded.
2. Deposit Addresses (one per user, destination chain, and fee contract). It starts with some hash and ends with .deposit.aurora suffix. E.g., h5wc…fgho.deposit.aurora
3. Transfer Indexer: An off-chain monitoring service that detects transfers to the Forwarder Deposit Addresses contracts and initiates the forwarding process.
4. Fees/Treasury Contract (fees.deposit.aurora): Responsible for the transparent calculation and collection of the transaction fees, safeguarding against unauthorized fund access.

The overall flow can be described by this picture:

![forwarder_tech](/img/forwarder_tech.png)

We have simplified the moment with how the transfer to the Aurora Chain happens here. In reality, we have the Aurora Engine contract on Near for every Aurora Chain. E.g., for the Aurora Mainnet it is `aurora`, and to forward the assets we need to interact with it on the Near blockchain.

You can find the source code for all of the Forwarder Contracts [here](https://github.com/aurora-is-near/aurora-forwarder-contracts/tree/main).
