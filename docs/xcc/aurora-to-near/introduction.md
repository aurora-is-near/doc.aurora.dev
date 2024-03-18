---
sidebar_label: 	Introduction
title: Aurora to Near XCC
---

The purpose of this feature is to enable EVM smart contracts on Aurora to interact with Wasm smart contracts in the broader NEAR ecosystem.
Since the Aurora EVM is itself a smart contract on NEAR, this feature boils down to cross-contract calls between smart contracts on NEAR, hence the name.

Developers might be interested in this feature for any number of reasons; the NEAR ecosystem is large.
But for example they may be interested in integrating their dapp with liquidity pools on NEAR (e.g. [ref.finance](https://www.ref.finance/)) or NFT marketplaces.

## Architecture

Schematically we can represent Near to Aurora XCC flow with the next picture:

![aurora-near-xcc](/img/aurora-near-xcc.avif)

## How to use XCC

The Aurora EVM has a special precompile address (`0x516Cded1D16af10CAd47D6D49128E2eB7d27b372`) which other EVM smart contracts can call to access the XCC feature.
This address accepts as input a [borsh](https://borsh.io/)-encoded structure that describes the NEAR call to make.
This structure is discussed in more detail below.
For convenience, we have developed a Solidity SDK which contains functions for calling the XCC precompile address with the appropriate input.
See the [examples](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/examples) for more details on using the SDK with XCC.
When a NEAR call is requested via the XCC precompile, the call is not actually performed until the EVM transaction is complete (for details on why this is the case, see the section below).
Therefore, unlike normal EVM cross-contract calls, developers cannot simply obtain the output from the XCC and act on it immediately in the same transaction.
To get the result of the NEAR call back inside the EVM, you need to attach a callback which triggers the Aurora EVM again after the NEAR call completes.
The SDK also contains convenience functions to make this easier, as shown in [this example](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/examples/social-db-from-aurora).
Note that the `msg.sender` of the callback will not be equal to the same address that triggered the XCC in the first place.
The reason for this is discussed in detail in the following section.
The SDK contains a function for computing the sender address that will be used in the callback.

In order to use XCC, the address making the NEAR call must have a wrapped NEAR (wNEAR) balance of at least 2 wNEAR.
The reason for this is discussed in the following section.
The address must also have approved (in the ERC-20 sense) the XCC precompile address to spend that wNEAR.
The 2 wNEAR cost is only for the first usage of XCC, after that no further wNEAR is needed (unless the contracts being interacted with require it).


## How XCC works

### NEAR’s asynchronous environment

When the XCC precompile address is called, nothing happens immediately.
This is to respect the revert semantics of the EVM; a revert should undo any effects caused by a call and any sub-calls it made.
If the XCC precompile were to eagerly cause NEAR calls to happen then there would be no way to cancel them in the case of a revert.
This is because NEAR cross-contract calls happen asynchronously.
While each synchronous contract execution is atomic, the whole asynchronous transaction is not; if an asynchronous call fails it does not revert the effects of the prior calls that made it.
For more information about NEAR transactions in general, see [their documentation](https://docs.near.org/concepts/basics/transactions/overview).
Therefore, the asynchronous NEAR call a developer requests the XCC precompile to make does not happen until the EVM transaction is complete.
This has implications for how to use the result of a NEAR call, as discussed above.
Namely, the result of a NEAR call must be handled as a callback to the EVM.

### The identity of an EVM address on NEAR

Many NEAR contracts (especially financial ones) differentiate between the NEAR accounts that call them.
Therefore, it is important for each address using XCC to be distinguished from one another in NEAR.
This is accomplished by the XCC precompile creating a NEAR account on behalf of each address that uses the feature.
If address `A` uses XCC on Aurora (which has account `aurora` on NEAR) then a new account `A.aurora` will be created.
This account includes a small smart contract which accepts data from the Aurora EVM to construct and execute the NEAR call.
This way the NEAR contract being called will see `A.aurora` as the predecessor account.

This sub-account is the reason why 2 wNEAR is needed on the first XCC invocation.
It is used to cover the [storage staking](https://docs.near.org/concepts/storage/storage-staking) cost of the account and its contract.

### Getting the result of a NEAR call

As mentioned above, the only way to get the result of a NEAR call back to the EVM is using a callback.
Specifically, this must be done via the `call` method of the Aurora Engine (this is the method which is used by NEAR contracts to interact with the EVM).
The `submit` method cannot be used because it accepts signed EVM transactions only and generating such input inside an EVM transaction would not be secure since the private key would be available
 to anyone that introspected the contract.

The `call` method can be used by any NEAR contract to interact with the EVM, not just the special sub-accounts created by XCC.
The mechanism the `call` method uses to assign an EVM address to the predecessor account ID is the same for all accounts (no special case is made for XCC sub-accounts).
This leads to the quirk we mentioned above that the sender address in the callback is not equal to the address that initiated the XCC.
The way the address is calculated is by taking the last 20 bytes of the keccak hash of the NEAR account ID
 (see [Aurora contract code](https://github.com/aurora-is-near/aurora-engine/blob/2.8.1/engine-sdk/src/types.rs#L25-L27)).
20-byte addresses are standard in Ethereum, and are derivied from the public key of the account in the same way as we derive an address from a Near account ID
 (taking the last 20 bytes of the keccak hash).
Therefore, we do not concern ourselves with the possibility of an address collision.
It would be quite a difficult proof of work problem to find two account IDs that give the same EVM address, and the probability of it happening randomly is incredibly low!

### The data structures used by XCC

The XCC precompile accepts borsh-encoded data of the following type:

```rust
/// The XCC request can be `Eager` or `Delayed`.
/// In an `Eager` request, the call will happen automatically after the EVM execution is finished.
/// In a `Delayed` request the data to make the NEAR call is persisted in the address' sub-account
/// (the sub-account for each address concept is discussed above).
/// The benefit of `Eager` over `Delayed` is that the NEAR call happens automatically without the
/// need for any other NEAR account.
/// The benefit of `Delayed` is that more complex behavior is possible because the total gas limit
/// on NEAR is reset between transactions.
/// To elaborate on that a little more, there is a maximum amount of gas that is allowed to be
/// attached to a NEAR transaction (at the time of writing it is 300 Tgas), and each asynchronous
/// call requires some gas to be attached to it from that initial amount in the transaction.
/// Therefore, if there is some complicated EVM logic followed by a cross-contract call to some
/// complicated NEAR logic then it may not be possible to fit all that within the gas limit.
/// Using a `Delayed` XCC request effectively doubles the amount of gas available because the EVM
/// execution will happen in a separate transaction (with a separate gas limit) from the subsequent NEAR execution.
pub enum CrossContractCallArgs {
    Eager(PromiseArgs),
    Delayed(PromiseArgs),
}

/// describes the NEAR call to be performed
pub enum PromiseArgs {
    /// A call to a single NEAR contract.
    Create(PromiseCreateArgs),
    /// A NEAR call with single callback.
    /// This is useful to make a single NEAR call and then callback to Aurora, for example.
    Callback(PromiseWithCallbackArgs),
    /// A recursive data type that captures arbitrary promise combinators (`then`, `and` are
    /// promise combinators because they combine multiple promises into a single promise).
    Recursive(NearPromise),
}

pub struct PromiseCreateArgs {
    pub target_account_id: AccountId,
    pub method: String,
    pub args: Vec<u8>,
    pub attached_balance: Yocto,
    pub attached_gas: NearGas,
}

pub struct PromiseWithCallbackArgs {
    pub base: PromiseCreateArgs,
    pub callback: PromiseCreateArgs,
}

pub enum NearPromise {
    Simple(SimpleNearPromise),
    Then {
        base: Box<NearPromise>,
        callback: SimpleNearPromise,
    },
    And(Vec<NearPromise>),
}

pub enum SimpleNearPromise {
    Create(PromiseCreateArgs),
    Batch(PromiseBatchAction),
}

pub struct PromiseBatchAction {
    pub target_account_id: AccountId,
    pub actions: Vec<PromiseAction>,
}

pub enum PromiseAction {
    CreateAccount,
    Transfer {
        amount: Yocto,
    },
    // ... (elided)
}
```

For most applications the `PromiseWithCallbackArgs` should be sufficient.
If your application needs the more general `NearPromise` then see the [NEAR documentation](https://nomicon.io/RuntimeSpec/Components/BindingsSpec/PromisesAPI) for more information.

