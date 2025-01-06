---
title: "Aurora Chains: Code Overview"
description: "Discover the source code for Aurora Chains: how fixed gas cost and access control are achieved"
date: "2023-05-19"
authors: [slava]
tags: [core_tech]
image: https://www.datocms-assets.com/95026/1701394771-ac4.png
---
The main goal of this article is to understand the Aurora Chain code. In a future post, we will discuss how it embellishes the Aurora Engine and how the advantages of an Aurora Chain correspond to different parts of code and Aurora architecture.

<!-- truncate -->

For now, just recall that Aurora Chain is just the Aurora Engine with a couple of new features on top of it: see `What are Aurora Chains?` section in [Aurora Chains: Walkthrough](/blog/aurora-chains-demo). Let's take a closer look at the [Aurora Engine repo](https://github.com/aurora-is-near/aurora-engine) to find a code for Aurora Chain. You will see sometimes Aurora Chains called Silos. The meaning is the same. It is just a more user-friendly renaming of the technology. The Rust module for Aurora Chain is actually called `silo`.\
\
The source code of Aurora Chain is inside the pull request (PR) [#746: feat: add possibility to use fixed gas cost (silo).](https://github.com/aurora-is-near/aurora-engine/pull/746) The first question that comes to mind is why it is called so? The clue is in the description right away and leads us to the first feature:

> *The PR adds the possibility to set fixed gas cost per EVM transaction. The feature could be switched on by calling `set_fixed_gas_cost`.*

The second feature is access control, which is realized with the four types of whitelists to regulate the rights to deploy code and submit transactions.

Now, let's look closer at the PR itself and what Aurora Chain actually is.

### Where is it?

First, we take a look at the folders in which developers have changed files:

![](https://www.datocms-assets.com/95026/1684180353-screenshot-2023-05-15-at-20-52-18.png)

`engine-standalone-storage` folder shouldn't worry you: it is kinda an IO for the Engine, definitely not the main part of it. As for the `engine-tests` and `engine-types,` those are not critical for understanding, but they can give you some insights about the details because – as we all know – tests and types are foundational for a nicely working code. So, the only folder left is `engine` and that is the right guess to look into it:

![](https://www.datocms-assets.com/95026/1684180726-screenshot-2023-05-15-at-20-58-36.png)

This folder is the heart of the repo and the Aurora itself. Inside we will see some files of the Engine changed, among which `engine.rs` , and `lib.rs` are the key ones. Also, notice the `src/silo` folder. Which is the thing we were looking for!

### Aurora Chain Module Imports

Aurora Engine is written in Rust, the native language for the NEAR contracts. In our case, the main entry point to the Aurora Chain module is the `mod.rs` file, which is the core part of the module. In its turn, it also relies on two submodules `parameters.rs` and `whitelist.rs`:

```rust
use parameters::{WhitelistArgs, WhitelistKindArgs, WhitelistStatusArgs};
use whitelist::Whitelist;
pub use whitelist::WhitelistKind;

pub mod parameters;
mod whitelist;
```

Let's start with reviewing the `parameters.rs` file.

### Parameters.rs

This file contains all of the important function arguments' structs and enums for Aurora Chain. The reason to have those is to decouple the arguments from the implementation: it will be easier to change them in one place later and leave function implementations as is. The file starts importing some useful types, [traits](https://en.wikipedia.org/wiki/Ad_hoc_polymorphism) , and the `WhitelistKind` enum:

```rust
use aurora_engine_types::account_id::AccountId; // corresponds to NEAR account
use aurora_engine_types::types::{Address, Wei}; // Aurora Address, and Wei for ETH
use borsh::{BorshDeserialize, BorshSerialize}; // borsh traits

use crate::silo::whitelist::WhitelistKind; // type of the whitelist
```

#### Whitelist Kinds

`WhitelistKind` can be one of the four types, you can find the definition in `whitelist.rs`:

```rust
pub enum WhitelistKind {
    /// The whitelist of this type is for storing NEAR accounts. 
    /// Accounts stored in this whitelist have an admin role. 
    /// The admin role allows to add new admins and add new entities
    /// (`AccountId` and `Address`) to whitelists.
    /// This role allows to deploy of EVM code.
    Admin = 0x0,
    /// The whitelist of this type is for storing EVM addresses. 
    /// Addresses included in this whitelist can deploy EVM code.
    EvmAdmin = 0x1,
    /// The whitelist of this type is for storing NEAR accounts.
    /// Accounts included in this whitelist can submit transactions.
    Account = 0x2,
    /// The whitelist of this type is for storing EVM addresses. 
    /// Addresses included in this whitelist can submit transactions.
    Address = 0x3,
}
```

We can whitelist users by a NEAR account or Aurora address. EVM address is their own one, but with the NEAR account situation is trickier because it is the one from which the engine transactions go to the NEAR node (i.e., it is a relayer's NEAR account). This account will pay for the NEAR gas on behalf of the user.\
\
To understand this part better, take a look at this picture which illustrates how Aurora works in general:

![](https://www.datocms-assets.com/95026/1682422805-screenshot-2023-04-25-at-12-39-54.png)

\
The RPC in the picture above is our Relayer instance (it includes [RPC, relayer, and refiner](https://github.com/aurora-is-near/standalone-rpc), but that is a matter for another article). At the triangle base, we have NEAR Node and Engine Contract. So it is the address of the top vertex we're filtering with the account's whitelists.\
\
To continue with the whitelist kinds, we have another dimension to whitelist users: either to allow the deployment of new contracts or allow them to transact. We can make this really clear by using this table (with the exception, that an Admin can also edit whitelists):

![](https://www.datocms-assets.com/95026/1684454005-screenshot-2023-05-19-at-00-53-10.png)

#### Whitelist Args

The main part of the `parameters.rs` is related to the whitelists args of different types:

```rust
pub enum WhitelistArgs {
    WhitelistAddressArgs(WhitelistAddressArgs),
    WhitelistAccountArgs(WhitelistAccountArgs),
} // Enum to separate Address vs Account whitelist args.

pub struct WhitelistAddressArgs {
    pub kind: WhitelistKind,
    pub address: Address,
} // This one contains kind (0x1, 0x3) + Aurora address.

pub struct WhitelistAccountArgs {
    pub kind: WhitelistKind,
    pub account_id: AccountId,
} // Kind (0x0, 0x2) + NEAR account

pub struct WhitelistStatusArgs {
    pub kind: WhitelistKind,
    pub active: bool,
} // Status to track if the whitelist is active or not.
  // If not - it won't be used by a Aurora Chain at all.

pub struct WhitelistKindArgs {
    pub kind: WhitelistKind,
} // just another parametrization to track the kind.
```

There is also one small test at the end of the file with the whitelist args [borsh serialization](https://github.com/near/borsh-rs). I will skip [the code](https://github.com/aurora-is-near/aurora-engine/blob/0de3198c2d602a8f23d5ea9797a6ab4c921e6f52/engine/src/silo/parameters.rs#L60) for brevity.

### Whitelists

Let's move on to the second file: `whitelists.rs`. We have already seen a part of it above – `WhitelistKind` enum.

#### Imports

Now, let's take a look at what imports are inside the file:

```rust
use aurora_engine_sdk::io::{StorageIntermediate, IO};
use aurora_engine_types::storage::{bytes_to_key, KeyPrefix};
use aurora_engine_types::AsBytes;
use borsh::{BorshDeserialize, BorshSerialize};

use crate::prelude::Vec;
//seen those before, right?
use crate::silo::parameters::{WhitelistKindArgs, WhitelistStatusArgs};
```

Aurora Engine SDK is a [FFI way](https://en.wikipedia.org/wiki/Foreign_function_interface) to write a NEAR contract in Rust, which deserves a separate article, so we won't concentrate on it. We're importing it to communicate with the [NEAR storage](https://docs.near.org/concepts/storage/data-storage), which is just a key-value database. To generate a key for the data to store, we use `bytes_to_key` function and `KeyPrefix`. We also have `AsBytes` trait to help us interpret things as an array of bytes.

#### Whitelist Type

Let's overview the Whitelist type now:

```rust
const STATUS: &[u8] = b"LIST_STATUS";

impl<I> Whitelist<I> where I: IO + Copy {
  /// Constructor.
  pub const fn init(io: &I, kind: WhitelistKind) -> Self {...}

  /// Create keys for storage.
  fn key(&self, value: &[u8]) -> Vec<u8> {...}

  /// Status.
  pub fn enable(&mut self) {...} /// set STATUS key in storage to true.
  pub fn disable(&mut self) {...} /// set STATUS key in storage to false.
  pub fn is_enabled(&self) -> bool {...} /// get STATUS key from storage.
  
  /// Entries.
  pub fn add<A: AsBytes + ?Sized>(&mut self, element: &A) {...}
  pub fn remove<A: AsBytes + ?Sized>(&mut self, element: &A) {...}
  pub fn is_exist<A: AsBytes + ?Sized>(&self, element: &A) -> bool {...}
}
```

I have also omitted the bodies for brevity, overall they're just working with storage and get/set the key-value pairs. As you can see, we can separate methods in the Whitelist into two main groups: `Status` and `Entries`. The first group is used to enable or disable the whitelist and check its status. The status "field" tells us if the whitelist will be used by a Aurora Chain or not. The special prefix, defined by the `STATUS` variable, is used to produce a key to store this field.

`The Entries` group is used to add, remove or check the inclusion of an element into the whitelist. Which can be anything, defined by a type `A` here, implementing `AsBytes` trait.

#### Storage and Key functions

Whitelist is also parametrized by a type `I:IO` to allow different ways of IO interactions. Notice that it is a special kind of trait `IO` and not `std::io` . `IO` trait is part of Aurora Engine SDK, created to write NEAR contracts with FFI, so it works with key-value storages (like NEAR storage).

That is the reason why the `key` function is the core of the Whitelist structure: because it heavily relies on storage. Let's take a closer look at it:

```rust
fn key(&self, value: &[u8]) -> Vec<u8> {
    let mut bytes = Vec::with_capacity(1 + value.len());

    bytes.push(u8::from(self.kind));
    bytes.extend_from_slice(value);
    bytes_to_key(KeyPrefix::Whitelist, &bytes)
}

/// Included this one to demonstrate the usage of `key` function.
pub fn add<A: AsBytes + ?Sized>(&mut self, element: &A) {
    let key = self.key(element.as_bytes());
    self.io.write_storage(&key, &[]);
}
```

As you can see, it is based upon the `bytes_to_key` function, and joins the kind prefix byte to the value (in bytes) and adds a special `KeyPrefix` for Whitelist used to differentiate different parts of storage in Aurora Engine.

The last part of the file includes two functions to operate with the whitelist status, but using `WhitelistStatusArgs`, which currently includes `active : bool` field and `WhitelistKind`:

```rust
/// Set status of the whitelist.
pub fn set_whitelist_status<I: IO + Copy>(io: &I, args: &WhitelistStatusArgs) {
    let mut list = Whitelist::init(io, args.kind);
    if args.active {
        list.enable();
    } else {
        list.disable();
    }
}

/// Get status of the whitelist.
pub fn get_whitelist_status<I: IO + Copy>(io: &I, args: &WhitelistKindArgs) -> WhitelistStatusArgs {
    WhitelistStatusArgs {
        kind: args.kind,
        active: Whitelist::init(io, args.kind).is_enabled(),
    }
}
```

These are helpful to operate on any kind of the Whitelist without having an instance of it.

### Aurora Chain Module

We can divide the public functions of this module into two groups: `Whitelists` and `Fixed Gas`. The first is responsible for editing whitelists and checking the user rights. And the second one is for storing the fixed gas price for transactions inside the Aurora Chain.

#### Whitelists

Let's start with the Whitelists. This group can also be divided into 3 subgroups: Entries, Status, and Rights. The `Entries` subgroup is about adding/removing entries from the whitelists:

```rust
pub fn add_entry_to_whitelist<I: IO + Copy>(io: &I, args: &WhitelistArgs) {...}
pub fn add_entry_to_whitelist_batch<I: IO + Copy, A: IntoIterator<Item = WhitelistArgs>> {...}
pub fn remove_entry_from_whitelist<I: IO + Copy>(io: &I, args: &WhitelistArgs) {...}
```

The second one, `Status`, is to get/set the status of the whitelists:

```rust
pub fn set_whitelist_status<I: IO + Copy>(io: &I, args: &WhitelistStatusArgs) {...}
pub fn get_whitelist_status<I: IO + Copy>(io: &I, args: &WhitelistKindArgs) -> WhitelistStatusArgs {...}
```

And the last one, `Rights`, is the most interesting one:

```rust
/// Check if the calling user is in Admin whitelist and owner of the Engine contract.
pub fn assert_admin<I: IO + Env + Copy>(io: &I) -> Result<(), EngineErrorKind> {...}

/// Check if user has rights to deploy EVM code (EVMAdmin and/or Admin whitelists).
pub fn is_allow_deploy<I: IO + Copy>(io: &I, account: &AccountId, address: &Address) -> bool {...}

/// Check if user has rights to submit transaction (Address and/or Account whitelists entry).
pub fn is_allow_submit<I: IO + Copy>(io: &I, account: &AccountId, address: &Address) -> bool {...}
```

Why? Because it is the first place in the code where we see that NEAR Accounts whitelists act in pairs with the EVM addresses ones. If we take a look into `is_allow_deploy` function:

```rust
pub fn is_allow_deploy<I: IO + Copy>(io: &I, account: &AccountId, address: &Address) -> bool {
    let admin_list = Whitelist::init(io, WhitelistKind::Admin);
    let evm_admin_list = Whitelist::init(io, WhitelistKind::EvmAdmin);

    (!admin_list.is_enabled() || admin_list.is_exist(account))
        && (!evm_admin_list.is_enabled() || evm_admin_list.is_exist(address))
}
```

It has checks for both accounts and addresses and the reason for that is that EVM address signs the EVM transaction and afterwards the relayer must wrap it into the NEAR transaction and sign it with its NEAR account – as we have discussed above – while talking about the `WhitelistKind`.

#### Fixed Gas

This group is quite simple, and just stores the `fixed_gas_cost` field or retrieves it from storage:

```rust
/// storage utilities.
const GAS_COST_KEY: &[u8] = b"GAS_COST_KEY";
fn fixed_gas_cost_key() -> Vec<u8> {...}

/// get/set fixed gas cost.
pub fn get_fixed_gas_cost<I: IO>(io: &I) -> Option<Wei> {}
pub fn set_fixed_gas_cost<I: IO>(io: &mut I, cost: Option<Wei>) {}
```

The price is used inside the Aurora Engine in the `submit` function [here](https://github.com/aurora-is-near/aurora-engine/blob/0de3198c2d602a8f23d5ea9797a6ab4c921e6f52/engine/src/engine.rs#L863) , and the `charge_gas` function [here](https://github.com/aurora-is-near/aurora-engine/blob/0de3198c2d602a8f23d5ea9797a6ab4c921e6f52/engine/src/engine.rs#L438), while submitting the EVM transaction to the engine. We will discuss this part of the code with more detail in our next post about Aurora Chains.\
\
The `fixed_gas_cost` could be set by a Aurora Chain admin interacting directly with an Engine contact on the NEAR network and calling `set_fixed_gas_cost`method [here](https://github.com/aurora-is-near/aurora-engine/blob/0de3198c2d602a8f23d5ea9797a6ab4c921e6f52/engine/src/lib.rs#L1080).

### Conclusions

We've overviewed one pull request introducing Aurora Chains within the Aurora Engine repo. Now we know that inside the Aurora Chain, we have access control and fixed gas cost parts hidden. We will discuss the outer connections of the Aurora Chains in articles to come. We will also cover how the methods of the Aurora Chain impact the mechanics of the EVM itself.\
\
Thanks for reading!
