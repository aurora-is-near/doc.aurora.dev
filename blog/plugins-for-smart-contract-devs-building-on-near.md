---
title: "Plugins for smart contract devs building on Near"
description: "Let’s discover how ‘near-plugins’ library could be used by your project, and how it can save you some time during the development of your smart contracts"
date: "2024-01-19"
authors: [moritz]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1705627571-np2.png
---
Some common functionality is required for many smart contracts. Examples are temporarily pausing certain features, staging and deploying a new version of the contract, and restricting access to contract methods. While such functionality is out of scope for an SDK like `near-sdk-rs`, ideally it is not implemented anew for every smart contract.

The most obvious benefits of an open-source library are reusability and the value it adds to the ecosystem. The smart contract features mentioned above can be tricky to implement and cumbersome to test. Without a library, developers might gloss over functionality that does not add business value but still is critical for security. As `near-plugins` is open-source and used by many developers, there are more engineering hours and eyeballs dedicated to it compared to a solution specific to a single smart contract.

<!-- truncate -->

## Case study: A counter managing permissions with ACL

Let’s look at a case study to see how `near-plugins` can be useful to smart contract developers. We are building a `Counter` that stores its current value and has methods to increment, decrement, and reset the value. It is intentionally kept simple to allow us to focus on how `near-plugins` adds functionality. This is what the contract looks like prior to using any plugins:

```rust
#[near_bindgen]
impl Counter {
    #[init]
    pub fn new() -> Self {
        Self { value: 0 }
    }

    /// Anyone can retrieve the current value.
    pub fn value(&self) -> i64 {
        self.value
    }

    /// Increases the value of the counter by one.
    pub fn increment(&mut self) {
        self.value += 1;
    }

    /// Decreases the value of the counter by one.
    pub fn decrement(&mut self) {
        self.value -= 1;
    }

    /// Resets the value of the counter to zero.
    pub fn reset(&mut self) {
        self.value = 0;
    }
}
```

The final version of the code is available [*in this repository on github*](https://github.com/mooori/counter-acl-example). The *`Counter`* example is inspired by [*near-examples/counter-rust*](https://github.com/near-examples/counter-rust).

### Permissions

The contract methods defined above can be called by anyone since they are public and inside an implementation block marked with `#[near_bindgen]`. Using `near-sdk-rs` it is possible to restrict some methods such that they can be called only by the contract itself. Either by using `#[private]` or by not exposing the method publicly, as described in the [documentation](https://docs.near.org/sdk/rust/contract-interface/private-methods).

However, what if we wanted to implement more flexible permissions (e.g. allowing only some set of accounts to call a given function)? This is where the [`AccessControllable`](https://github.com/aurora-is-near/near-plugins#accesscontrollable) plugin comes in handy.

### Managing permissions with ACL

ACL stands for *access control lists* and they are used in the following way within the `AccessControllable` plugin. The user defines the roles required for their use case as Rust enum variants. Then it is possible to restrict access to a method to accounts that have been granted roles. Restricting access is possible with one line of code, for example:

```rust
#[access_control_any(roles(Role::Decrementer))]
pub fn decrement(&mut self) {
    // ...
}
```

Let’s walk through it step by step to see how you can make your Near smart contract `AccessControllable`.

### Step 1: Add `near-plugins` as a dependency

For now, `near-plugins` has not yet been published on crates.io. Still, the crate is ready for usage and it can be added as git dependency:

```toml
# Add `near-plugins` under `dependencies` in your Cargo.toml.

[dependencies]
near-plugins = { git = "https://github.com/aurora-is-near/near-plugins.git", tag = "v0.2.0" }
```

### Step 2: Define roles

Every use case may require a different set of roles, so users may define their roles as variants of an enum. For the `Counter` example, we define the following roles:

```rust
#[derive(AccessControlRole, Deserialize, Serialize, Copy, Clone)]
#[serde(crate = "near_sdk::serde")]
pub enum Role {
    /// Grantees of this role may decrease the counter.
    Decrementer,
    /// Grantees of this role may reset the counter.
    Resetter,
}
```

Deriving the `AccessControlRole` trait prepares the `Role` enum for usage in the `AccessControllable` plugin.

### Step 3: Make the contract `AccessControllable`

The contract is made `AccessControllable` by attaching the `access_control` attribute macro on the definition of the struct which represents the contract’s state. We pass our `Role` as argument to make the `AccessControllable` implementation aware of it:

```rust
#[access_control(role_type(Role))]
#[near_bindgen]
#[derive(PanicOnDefault, BorshDeserialize, BorshSerialize)]
pub struct Counter {
    value: i64,
}
```

### Step 4: Restrict contract methods

Access to a contract method is restricted by attaching `#[access_control_any]` and providing the roles to be whitelisted as arguments:

```rust
#[near_bindgen]
impl Counter {
    // We must be inside an implementation block with `#[near-bindgen]`.

    /// Resets the value of the counter to zero.
    ///
    /// Only accounts that have been granted `Role::Resetter` may successfully call this method.
    /// If called by an account without this role, the method panics and state remains unchanged.
    #[access_control_any(roles(Role::Resetter))] // enables ACL for this method
    pub fn reset(&mut self) {
        self.value = 0;
    }

    /// By the way, it is also possible to restrict access to accounts that have been granted any of
    /// multiple roles. This is how the syntax looks.
    #[access_control_any(roles(Role::Decrementer, Role::Resetter))]
    pub fn no_op(&self) { }
}
```

Now the contract is set up for access control. The only step that is missing is granting roles to accounts, enabling them to call restricted methods.

### Step 5: Grant permissions

In our contract’s constructor method `new()` we make the contract itself super admin:

```rust
near_sdk::require!(
    contract.acl_init_super_admin(env::current_account_id()),
    "Failed to initialize super admin",
);
```

The `AccessControllable` super admin is an admin for every role defined in the `Role` enum. For this example, it is sufficient to know that a super admin may grant and revoke every role. Making the contract itself super admin facilitates the setup procedure as well as testing. More detailed information on admin roles can be found in the [documentation](https://github.com/aurora-is-near/near-plugins/blob/master/near-plugins/src/access_controllable.rs) of the `AccessControllable` trait.

To grant the `Resetter` role to the account `alice.near`, the contract can call the following function on itself:

```rust
/// See `AccessControllable::acl_grant_role` for details.
acl_grant_role("Resetter", "alice.near");
```

The `AccessControllable` trait provides many more methods to administer ACL permissions. After following the steps above, all of them are automatically implemented for a contract using the `AccessControllable` plugin.

## Done

The steps above are sufficient to add complex and configurable ACL permissions to a contract using `near-plugins`. At this point, `alice.near` is the only account which has been granted the `Resetter` role. This means that only `alice.near` may successfully call the contract’s `reset()` method.

The repo contains an [integration test](https://github.com/mooori/counter-acl-example/blob/main/tests/workflow.rs) which verifies that `AccessControllable` was set up correctly for our `Counter` contract. Take a look at it to learn more about interacting with an `AccessControllable` contract. To run the test on-chain in a local sandbox, it suffices to clone the repo and execute the following command. This is made possible by [near-workspaces-rs](https://github.com/near/near-workspaces-rs).

```undefined
cargo test
```

## Teaser: How it works internally

Using `AccessControllable` extends the contract state to store the permissions that have been granted. Moreover, the `AccessControllable` trait is implemented for the contract to enable administering permissions. When `#[access_control_any(roles(...))]` is attached to a method, `near-plugin` injects code that checks if the caller was granted any of the required roles. If not, a panic is generated which aborts the function call.

To learn about all the details, you can dive into the [implementation](https://github.com/aurora-is-near/near-plugins/blob/master/near-plugins-derive/src/access_controllable.rs) of the `AccessControllable` macro.

## A note on testing

The functionality provided by `near-plugins` is critical for security and we strive to test it exhaustively. In tests, we compile demo contracts for all plugins and deploy them on-chain in a local sandbox. Then we verify that using a particular plugin adds exactly the expected functionality to the contract. These tests and demo contracts can be found [here](https://github.com/aurora-is-near/near-plugins/tree/master/near-plugins-derive/tests).

## Ready for production, though?

As mentioned earlier, `near-plugins` comes with the caveat of not yet being published to *crates.io*. Nevertheless, it is already used in some contracts on mainnet, e.g. contracts related to the [Rainbow Bridge](https://rainbowbridge.app/transfer). Moreover, both [Hacken](https://www.datocms-assets.com/50156/1680101850-hacken-near-plugins-final-report-updated-march2023.pdf) and [AuditOne](https://www.datocms-assets.com/50156/1680590522-auditone-near-plugins-final-report-updated-march2023.pdf) audited `near-plugins`, awarding it high scores.

## Conclusion

Using `near-plugins`, developers can add complex functionality to their smart contracts with just a few lines of code. Developers can focus on creating value for their users by relying on `near-plugins` for some cumbersome administrative tasks that are nevertheless critical for security. We are testing all plugins extensively and the `near-plugins` crate has been audited twice. We hope to contribute to the Near ecosystem by providing secure smart contract plugins which developers can build upon.

This article provides a step-by-step guide to using the `AccessControllable` plugin. In principle, using other plugins is similar. Head over to the [repository](https://github.com/aurora-is-near/near-plugins) and have a look at the documentation and tests to get started with other plugins.
