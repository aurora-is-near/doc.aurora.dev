---
title: "Turning Smart Contracts into Indexers"
description: "Learn how you can use functional programming patterns in Rust to share a codebase between both a smart contract and an indexer, and how cross-compilation can benefit your project"
date: "2023-08-25"
authors: [michael]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1692963087-tsci.png
---
Recently, Michael Birch gave a [*talk at a virtual Rust conference*](https://www.conf42.com/Rustlang\_2023\_Michael_Birch_smart_contracts_indexers_crosscompilation) about some work we have done here at Aurora to enable our technology. In case you missed it, this blog post is a written version of the talk. That talk was aimed at a more general audience, giving background about Aurora, Near, and blockchain technology in general. However, this post assumes you are already familiar with most of the Aurora/Near/blockchain background (you are here on our website, after all) and instead focuses more on the Rust side of things.

<!-- truncate -->

## Motivation

The goal of this post is to describe how you can use functional programming patterns in Rust to share a codebase between both a smart contract and an indexer. But the first question to answer is why this is desirable in the first place.

Indexers provide a specialized view of the blockchain state to enable low-latency responses to particular kinds of queries. For example, block explorers will use an indexer to show the balances of all the tokens held by a user. An indexer is required to accomplish this because the on-chain information about balances is indexed in the opposite way to how the block explorer displays the information. By which I mean that on-chain each token has information about all the addresses with a non-zero balance, but the block explorer shows all the non-zero balances for a single address.

Generally, indexers are specialized to follow the state of a particular contract (or class of contracts). Therefore, the code for the indexer is closely related to the code for the smart contract it follows. Thus, it would be lower developer maintenance to have a common codebase for the smart contract and its associated indexer. Additionally, sharing a codebase makes it possible to create much more powerful indexers than simply something that can respond to queries. For example, an indexer with access to the smart contract logic can simulate whole transactions off-chain to provide free and low-latency feedback to users on potential errors.

In the case of Aurora, the indexer we use for the Aurora Engine smart contract serves data that is used by [our RPC implementation.](/blog/spinning-up-your-own-aurora-node) The Ethereum RPC spec includes a few methods (e.g., `eth_estimateGas`) which require simulating transactions before submitting them to the chain. Therefore, we have a clear use for the extra indexer features that are enabled by having a shared codebase between the Aurora Engine and its indexer.

## Rust Features

To reach the goal of having a shared codebase between the Aurora Engine and an indexer for the Engine, we leverage some features of Rust.

### Cross-Compilation

The Aurora Engine is written in Rust because it is a smart contract on Near which uses Web Assembly as its runtime. Rust has good support for Web Assembly (Wasm) as a compilation target, so it is a good language choice for writing smart contracts for Near. But, of course, it also is able to compile the same code to executable binaries for typical platforms (e.g., Linux). Compiling the same code to multiple output targets is referred to as “cross-compiling”.

The first step to having our smart contract code also be used as an indexer is to cross-compile the same code as both Wasm and a native executable. In Rust, it is easy to install other compilation targets (the default target will be whatever platform you installed Rust on) and to specify them as the compilation target. The following commands show installing the Wasm target and compiling a project to Wasm.

```shell
$ rustup target add wasm32-unknown-unknown
$ cargo build --release –-target wasm32-unknown-unknown
```

### Conditional Compilation

When you start compiling code to multiple platforms, likely there will be situations where you want the implementation to differ depending on the compilation target. For example, native code can read from a local file system, whereas Wasm modules need to delegate to their host (the machine running the Wasm VM) to access state.

In Rust, you can use conditional compilation to have different implementations depending on the target. In the example below, the function \`foo\` has different implementations depending on if the compilation target is Wasm or not.

```rust
fn foo() {
    #[cfg(target_arch = "wasm32")]
    foo_for_wasm();

    #[cfg(not(target_arch = "wasm32"))]
    foo_for_generic_arch();
}
```

However, conditional compilation has some drawbacks. First of all, it’s a little verbose, which hurts code readability. You can see in the example above that the function `foo` is “noisier” than it would be if not for the extra conditional compilation annotations. Secondly, IDEs do not handle conditional compilation especially well. They will only analyze one branch of the code at a time, and it is a little tedious to switch between which target you are asking the IDE to check.

Fortunately, we do not need to use conditional compilation very much because we can adopt coding style patterns from functional programming. The key idea is to write code that is abstract with respect to the implementation of target-specific effects such as reading/writing state. In Rust, we can accomplish this using traits and type generics.

### Traits and Type Generics

Rust’s trait defines an interface. It gives the type signatures of the methods a type implementing that trait must have, but does not necessarily specify the implementation of those methods (though you are allowed to give a default implementation of a method in a trait). Consider the following example:

```rust
trait IO {
    fn read(&self, key: &[u8]) -> Vec<u8>;
    fn write(&mut self, key: &[u8], value: &[u8]);
}

fn get_balance<I: IO>(io: &I, user: User) -> u128 {
    u128::from_be_bytes(&io.read(&user.id()))
}r
```

This example includes a trait with a (simplified) interface for interacting with state as well as a function with a generic type parameter. The syntax means “this function accepts any type so long as it implements `IO` the interface”. The benefit of coding in this style is that the `get_balance` function can now be reused in any program, regardless of what compilation target it uses, so long as there is an `IO` implementation for it. This is exactly what enables us to share a codebase between our smart contract and indexer.

In this example above, it might seem like we are going through a lot of trouble to reuse one line of code in two different places. But this approach scales. The function we share does not need to be only a single line, it could have any amount of complexity. Moreover, state access is not the only target-specific effect. We can have traits for accessing environment variables (in the blockchain context, these would be variables like the current block height, the signer of the transaction, etc) and interacting with other processes (in the blockchain context, this corresponds to calling other smart contracts).

Beyond reusability, there are other benefits to coding in this style. Code written in this way is easier to test because you can simulate the effects in-memory (for example, instead of actually reading and writing files). It is also easier to reason about this style of code. When there are no side-effects, the function signature gives you all the information you need about the function. If a function needs access to state, then you know it will include the `IO` trait bound, and conversely, if the state is not needed, then it will not include that bound. When you can learn so much about a function without reading its implementation body, it becomes much easier to navigate the codebase.

## Application: Aurora Engine

The entire Aurora Engine is written in this style. For example, [*here*](https://github.com/aurora-is-near/aurora-engine/blob/2.10.2/engine/src/engine.rs#L1280) is the real version of the `get_balance` function we showed a toy example of above. And similarly, there is a `set_balance` [*function*](https://github.com/aurora-is-near/aurora-engine/blob/2.10.2/engine/src/engine.rs#L1269). These two functions are composed together to make an `add_balance` [*function*](https://github.com/aurora-is-near/aurora-engine/blob/2.10.2/engine/src/engine.rs#L1258).

```rust
pub fn get_balance<I: IO>(io: &I, address: &Address) -> Wei {
    let raw = io
        .read_u256(&address_to_key(KeyPrefix::Balance, address))
        .unwrap_or_else(|_| U256::zero());
    Wei::new(raw)
}

pub fn set_balance<I: IO>(io: &mut I, address: &Address, balance: &Wei) {
    io.write_storage(
        &address_to_key(KeyPrefix::Balance, address),
        &balance.to_bytes(),
    );
}

pub fn add_balance<I: IO>(
    io: &mut I,
    address: &Address,
    amount: Wei,
) -> Result<(), BalanceOverflow> {
    let current_balance = get_balance(io, address);
    let new_balance = current_balance.checked_add(amount).ok_or(BalanceOverflow)?;
    set_balance(io, address, &new_balance);
    Ok(())
}
```

You can see the implementation of the `IO` trait for both the [*Near Runtime*](https://github.com/aurora-is-near/aurora-engine/blob/2.10.2/engine-sdk/src/near_runtime.rs#L128), and the “[*standalone engine*](https://github.com/aurora-is-near/aurora-engine/blob/2.10.2/engine-standalone-storage/src/engine_state.rs#L82)” which uses a `rocksdb` instance to persist the state. The former is used in the Wasm artifact, which is deployed to Near as the Aurora Engine smart contract. The standalone engine is used to [*implement the eth_estimateGas RPC method*](https://github.com/aurora-is-near/borealis-engine-lib/blob/v0.23.4/refiner-app/src/socket.rs#L129), and the state is populated by [*consuming Near blocks*](https://github.com/aurora-is-near/aurora-engine/blob/2.10.2/engine-standalone-storage/src/sync/mod.rs#L229) (from [*Near data lake for example*](https://github.com/aurora-is-near/borealis-engine-lib/tree/v0.23.4#near-data-lake)).

## Conclusion

The take-home message from this post is that following the functional programming pattern of only writing business logic using abstractions of target-specific effects such as IO results in code that is easier to test, maintain, and reuse. In the particular case of Aurora, that reuse manifests as having the Aurora Engine smart contract and the indexer that serves the Aurora RPC share a codebase.
