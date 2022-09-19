---
title: EVM Overview
sidebar_position: 1
---

# EVM Overview

Initially developed in-house at NEAR, the Aurora EVM is the official EVM for the
NEAR ecosystem. _It accomplishes a 1:1 experience with the Ethereum protocol
including adopting ETH as the base currency_. Beyond the base scope, the EVM also allows
for extra precompiles. Such precompiles enable the EVM to interact with the rest of the NEAR ecosystem.

:::tip
We implore you to interact through the EVM through MetaMask or Hardhat as we provide
an identical experience through our RPC. However, you may also interact with it through [NEAR
workspaces], the [NEAR CLI], or the [Aurora CLI].

[NEAR workspaces]: https://github.com/near/workspaces

[NEAR CLI]: https://github.com/near/near-cli

[Aurora CLI]: https://github.com/aurora-is-near/aurora-cli
:::

:::caution
Since the underlying measure of computational work is _NEAR gas_, an edge case that arises is when
the transaction runs out of NEAR gas before running out of _EVM gas_.

_In this case the transaction will be considered as failed on Aurora_, but this may or may not be
compatible with what the outcome on Ethereum would have been (if the gas limit was actually high
enough for the transaction to complete had NEAR gas not been the limiting factor).

This case will not come up for the vast majority of transactions, and indeed will become
less likely as we improve the efficiency of our EVM contract (thus allowing NEAR gas to go further
in terms of EVM computation). Eventually, we hope to eliminate this entirely by setting
the [ETH block gas limit] on Aurora to be lower than the amount of NEAR which we could spend in one
transaction.

[ETH block gas limit]: https://ethereum.org/en/developers/docs/blocks/#block-size
:::

## Powered by SputnikVM

The Aurora EVM utilises the power of the [SputnikVM] in its current implementation. Additionally,
part of the Aurora Labs team have been made contributors to the project due to the significant
contributions that they have made. However, we intend to explore other implementations and possibly
develop our own backend depending on performance considerations.

[SputnikVM]: https://github.com/rust-blockchain/evm

## Additional Features

### Changes to the output of some Opcodes

Some of the Opcodes provided by Ethereum we are not able to entirely support. Though we do not
believe that this will impact EVM contracts that use these Opcodes, it is important to note these
changes which can be found in the [Aurora EVM opcode documentation].

[Aurora EVM opcode documentation]: ./opcodes.md

### Additional precompiles

In order to provide additional support to the NEAR ecosystem, some additional precompiles are
available. However, the `exitToNear` and `exitToEthereum` precompiles are only accessible through
the NEP-141 to ERC-20 contract which only can be deployed via the `deploy_erc20_token` function in
the Aurora EVM.

More information about these precompiles can be found in the [Aurora EVM precompile documentation].

[Aurora EVM precompile documentation]: ./precompiles.md

### Default NEP-141 mapped ERC-20 contract

Under the hood, all bridged ERC-20 contracts are NEAR NEP-141 fungible tokens through the process
described in the [Rainbow Bridge overview].

In order to grant the ability to access to NEP-141 fungible tokens as an ERC-20 contract, we use the
NEP-141 mapped ERC-20 contract which is automatically deployed by the Aurora EVM when invoking the
`deploy_erc20_token` function. This allows users to deposit ERC-20 fungible tokens through the
Rainbow Bridge which will generate a proof for the Engine to confirm the transfers' existence. Thus
enabling the user to access their NEP-141 or Ethereum ERC-20 tokens on Aurora.

[Rainbow Bridge Overview]: ../bridge/bridge-overview.md
