---
sidebar_label: 	Introduction
title: Near to Aurora XCC
---

This article describes the concepts involved in using Wasm-based smart contracts deployed on [Near](https://near.org/) to interact with EVM-based smart contracts deployed on Aurora.

We need to learn about the 3 main concepts to understand how it works:

1. Implicit EVM Address
2. Aurora interface for `deploy_code`
3. Aurora interface for `call`

## Implicit EVM Address

When a call is made to a contract on Near there is always a predecessor account ID.
This is the account ID that initiated the transaction in the case of a direct call, or the previous contract in the case of a cross-contract call.
The Aurora EVM uses the predecessor account ID to create an "implicit address" that is used as the origin for any EVM transactions that are caused by a Near call.
The `submit` function is an exception to this since it takes signed EVM transactions directly, therefore the origin address can be derived from the Secp256k1 signature on that EVM transaction.
However, Near contracts will generally interact with Aurora via the `deploy_code` and `call` methods and so the implicit address is an important concept to understand.
The reason `submit` cannot be used by Near contracts is because there would be no way to keep a secret key safe on-chain (all on-chain data is public knowledge).

The implicit EVM address of a Near account ID is derived by taking the last 20 bytes of the keccak256 hash of the account ID.
For example `alice.near` has an implicit address `0x10315b5BE6B5369E2188C8d7b18ec932c936a21e`.

The EVM does not treat these implicit addresses special compared to any other address.
They can hold an ETH balance, they have a nonce, will be the `msg.sender` when making contract calls, etc.
You can think of the "implicit address" as being the identity of that Near account inside the EVM.

The implicit address for any Near account ID can be computed using the Aurora Rust SDK with the function `near_account_to_evm_address`.

## Aurora interface for 'deploy_code'

The [Aurora Engine](https://github.com/aurora-is-near/aurora-engine) is the smart contract that contains the EVM.
It has two main methods for interacting with the EVM from Near contracts.
The `deploy_code` function is used to deploy new EVM contracts.
It takes as input the raw EVM bytecode that is used to deploy the contract.
Note that if this bytecode is obtained from compiling a Solidity contract with a constructor that takes arguments then you will need to be sure those arguments are properly encoded as part of
 the bytecode sent to `deploy_code`. The encoded arguments have to be appended to the contracts bytecode since the constructor is invoked during deployment.
For example you can use a library like [ethabi](https://crates.io/crates/ethabi) to encode the deploy arguments correctly.

## Aurora interface for 'call'

The `call` function of the Aurora Engine is used for Near contracts to call EVM contracts.
The input and output are both [Borsh-encoded](https://borsh.io/).
The input is a versioned enum due to allowing it to evolve in a backwards compatible way.
The current version looks like

```rust
#[derive(BorshSerialize, BorshDeserialize, Debug, PartialEq, Eq, Clone)]
pub struct FunctionCallArgsV2 {
    pub contract: Address,
    /// Wei compatible Borsh-encoded value field to attach an ETH balance to the transaction
    pub value: WeiU256,
    pub input: Vec<u8>,
}
```

where `contract` is the address of the EVM contract you are calling, `value` is the amount of Wei (1 ETH = 10^18 Wei) the implicit address will spend on the call
 (encoded as a 256-bit big endian unsigned integer), and `input` is the data passed to the contract. The attached `value` will be deducted from the implicit EVM address corresponding
  to the Near account ID that invokes `call`.
The input data will generally be encoded using the Solidity ABI, again a library like [ethabi](https://crates.io/crates/ethabi) can be helpful here.
Note that the EVM will not charge any ETH for gas because the transaction is still running on Near (the EVM is just another Near smart contract) so the computational cost is covered
 by the NEAR spent to execute the call in the first place.

The Aurora Rust SDK contains the `CallArgs` type definition which can be used to make well-formed invocations of `call`.
See also the `examples` directory of this repository for examples of making calls to Aurora from Near.
