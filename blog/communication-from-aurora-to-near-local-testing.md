---
title: "Integration tests for XCC communication"
description: "XCC is a powerful tool to merge blockchain ecosystems together. In this post we will talk about how to write integration tests for the XCC contracts communicating between Aurora and Near using Rust"
date: "2023-09-08"
authors: [olga]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1694085970-article-cover.png
---
In this article, we will learn how to write local tests for the Aurora contracts, which use [XCC calls](/blog/cross-ecosystem-communication) to Near ecosystem. I will use a simple example to demonstrate it, step by step, we will write:

1.  A simple counter contract for Near blockchain.
2.  Contract on Aurora, which calls the contract on Near by using the XCC.
3.  One integration test in the `sandbox`.
4.  Setup the `git action` for running this test automatically.

The example described in this article: [https://github.com/olga24912/AuroraToNearXCCExample](https://github.com/olga24912/AuroraToNearXCCExample)

<!-- truncate -->

## Counter contract on Near

I assume that you have already cloned a git repo locally or just created your own repo, in the case you want to add everything file by file to your project using this article.

We will start with creating a simple Counter contract on Near, which just has two functions: `increment` – for changing the value, and `get_num` – to return the current value.

We should have the following directories and files in `near` folder:

```toml
AuroraToNearXCCExample: 
|-- near
|   |-- contracts
|   |   |-- build.sh
|   |   |-- Cargo.toml
|   |   |-- src
|   |   |   |-- lib.rs
```

Let's take a look at each of the files.

`lib.rs`:

```rust
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen, PanicOnDefault};

#[near_bindgen]
#[derive(PanicOnDefault, BorshDeserialize, BorshSerialize)]
pub struct Counter {
    val: u64,
}

#[near_bindgen]
impl Counter {
    #[init]
    pub fn new() -> Self {
        Self{
            val: 0
        }
    }

    pub fn get_num(&self) -> u64 {
        return self.val;
    }

    pub fn increment(&mut self, value: u64) {
        self.val += value;
    }
}
```

`Cargo.toml`:

```toml
[package]
name = "counter"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
near-sdk = "4.1.1"
```

For compiling the contract into a WASM file, we will use the script `build.sh`:

```bash
#!/bin/sh
set -e

rustup target add wasm32-unknown-unknown
RUSTFLAGS='-C link-arg=-s' cargo build --target wasm32-unknown-unknown --release
```

To compile the contract run:

```bash
./build.sh
```

The target file: `near/contracts/target/wasm32-unknown-unknown/release/counter.wasm`

## Counter contract on Aurora

We already created a counter contract for Near, and now let's create the counter contract on Aurora, which will have one method `incrementXCC` inside, which we will call the `increment` method in the Near Counter contract.

First, create the following folder structure and the `Counter.sol` file

```bash
AuroraToNearXCCExample:
|-- aurora
|   |-- contracts
|   |   |-- src
|   |   |   |-- Counter.sol
|-- near
```

`Counter.sol` file:

```solidity
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AuroraSdk, NEAR, PromiseCreateArgs} from "@auroraisnear/aurora-sdk/aurora-sdk/AuroraSdk.sol";

contract Counter {
    using AuroraSdk for NEAR;
    using AuroraSdk for PromiseCreateArgs;    

    uint64 constant COUNTER_NEAR_GAS = 10_000_000_000_000;
    
    NEAR public near;
    string counterAccountId;

    constructor(address wnearAddress, string memory counterNearAccountId) {
        near = AuroraSdk.initNear(IERC20(wnearAddress));
        counterAccountId = counterNearAccountId;
    }

    function incrementXCC() external {
        bytes memory args = bytes('{"value": 1}');
        PromiseCreateArgs memory callCounter = near.call(
            counterAccountId,
            "increment",
            args,
            0,
            COUNTER_NEAR_GAS
        );
        callCounter.transact();
    }
}
```

More information about how the aurora contracts with XCC work can be found [here,](/blog/cross-ecosystem-communication) or [in this game example,](/blog/building-a-game-using-near-aurora-and-bos) or in these [official docs](https://github.com/aurora-is-near/aurora-contracts-sdk/blob/main/docs/NearFromAurora.md) in aurora-contracts-sdk repo.

### Install dependencies for counter contract on Aurora

For deploying the counter contract on Aurora in integration tests, we should install `foundry` and the dependencies. First, go to `aurora` folder and install `aurora-sdk` by running:

```bash
yarn init
yarn add @auroraisnear/aurora-sdk
```

For compiling aurora contracts in the test, we will use foundry. How to install foundry you can read [here](https://book.getfoundry.sh/getting-started/installation).

We should create `foundry.toml` in `aurora/contracts` folder.

```bash
AuroraToNearXCCExample:
|-- aurora
|   |-- contracts
|   |   |-- src
|   |   |-- foundry.toml
|   |-- integration-tests
|-- near
```

`foundry.toml`:

```toml
[profile.default]
src = 'src'
out = 'out'
libs = ['lib', '../node_modules']
allow_paths = []
solc = "0.8.17"
```

After that you need to run the next command from `aurora/contracts` folder:

```bash
rm -rf lib/aurora-contracts-sdk
forge install aurora-is-near/aurora-contracts-sdk --no-commit
```

After command execution in the `aurora/contracts` directory, the `lib` folder with `aurora-contracts-sdk` and all necessary files inside will be created.

## Integration test

It is time to create an integration test! Go back to the `aurora` folder with `cd ..` and run (or just use already existing folder from repo):

```solidity
cargo new --lib integration-tests
```

The `integration-tests` folder will be created. We should also create the following `rust-toolchain` file in this folder:

```rust
[toolchain]
channel = "1.66.1"
```

We need this because this channel is used in dependencies, and we should use the same channel to make contracts work properly. For people outside the Rust community, you can think about this as setting the Rust version, more info is [here](https://rust-lang.github.io/rustup/concepts/toolchains.html).

We should obtain this folder structure:

```bash
AuroraToNearXCCExample:
|-- aurora
|   |-- contracts
|   |-- integration-tests
|   |   |-- Cargo.toml
|   |   |-- src
|   |   |   |-- lib.rs
|   |   |-- rust-toolchain
|-- near
```

Edit now `lib.rs`:

```rust
#[cfg(test)]
mod tests {
    use aurora_sdk_integration_tests::tokio;
    
    #[tokio::test]
    async fn counter_test() {
    
    }
}
```

`and Cargo.toml`:

```toml
[package]
name = "integration-tests"
version = "0.1.0"
edition = "2021"

[dependencies]
aurora-sdk-integration-tests = { git = "https://github.com/aurora-is-near/aurora-contracts-sdk.git" }
near-sdk = "4.1.1"
```

The command for running the test should run this succesfully:

```bash
cargo test
```

You should see output like this afterwards:

```shell
Compiling integration-tests v0.1.0 (/Users/aurora/Projects/AuroraToNearXCCExample/aurora/integration-tests)
    Finished test [unoptimized + debuginfo] target(s) in 2.86s
     Running unittests src/lib.rs (target/debug/deps/integration_tests-307b69604bee401f)

running 1 test
test tests::counter_test ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00ss
```

### Deploy Near contract in integration tests

Let's start writing our test with compiling and deploying the Counter contract on Near inside the sandbox. To do this we will: create the sandbox workspace with `workspaces::sandbox()`, compile near contract by using `build.sh` script (as we did above in section `Create Counter contract on Near`), deploy the contract with `worker.dev_deploy` and call the constructor with `near_counter.call("new").`

All of that is inside the `deploy_near_counter` function, which we will use now directly in our `counter_test`. The full code is below:

```bash
#[cfg(test)]
mod tests {
    use aurora_sdk_integration_tests::{tokio, workspaces, {utils::process}};
    use aurora_sdk_integration_tests::workspaces::Contract;
    use std::path::Path;


    #[tokio::test]
    async fn counter_test() {
        let worker = workspaces::sandbox().await.unwrap();
        let near_counter = deploy_near_counter(&worker).await;
    }

    async fn deploy_near_counter(
        worker: &workspaces::Worker[workspaces::network::Sandbox](workspaces::network::Sandbox),
    ) -> Contract {
        let contract_path = Path::new("../../near/contracts");
        let output = tokio::process::Command::new("bash")
            .current_dir(contract_path)
            .args(["build.sh"])
            .output()
            .await
            .unwrap();

        process::require_success(&output).unwrap();

        let artifact_path =
            contract_path.join("target/wasm32-unknown-unknown/release/counter.wasm");
        let wasm_bytes = tokio::fs::read(artifact_path).await.unwrap();
        let near_counter = worker.dev_deploy(&wasm_bytes).await.unwrap();

        near_counter.call("new").transact().await.unwrap().into_result().unwrap();

        near_counter
    }
}
```

You can run `cargo test` to check if your code is working at this stage.

### Deploy Aurora Engine and wNEAR

Now, let's deploy the Aurora Engine contract itself to the sandbox. Also, we will need to deploy wNEAR in Aurora. It is the ERC-20 on Aurora which corresponds to the Near token on Near. We will use this token later for the payment.

```bash
#[cfg(test)]
mod tests {
    use aurora_sdk_integration_tests::{tokio, workspaces, {utils::process}, aurora_engine, wnear, workspaces::Contract};
    use aurora_sdk_integration_tests::workspaces::Contract;
    use std::path::Path;

    #[tokio::test]
    async fn counter_test() {
        let worker = workspaces::sandbox().await.unwrap();
        let near_counter = deploy_near_counter(&worker).await;

        let engine = aurora_engine::deploy_latest(&worker).await.unwrap();
        let wnear = wnear::Wnear::deploy(&worker, &engine).await.unwrap();
    }
    ...
}
```

### Deploy counter contract on Aurora in integration tests

Moving to deploying counter contract to Aurora. We are creating a new user account and function to deploy the counter. This function takes: (1) aurora engine, (2) user account, (3) wNear address on aurora, (4) Counter Account ID on Near.

Let's add new dependencies first:

```rust
#[cfg(test)]
mod tests {
    use aurora_sdk_integration_tests::{tokio, workspaces, {utils::process}, aurora_engine, wnear, ethabi};
    use aurora_sdk_integration_tests::workspaces::Contract;
    use std::path::Path;
    
    use aurora_sdk_integration_tests::aurora_engine_types::types::{Address};
    use aurora_sdk_integration_tests::aurora_engine::AuroraEngine;
    use aurora_sdk_integration_tests::utils::forge;
    use aurora_sdk_integration_tests::utils::ethabi::DeployedContract;
...
```

Now let's define `deploy_aurora_counter` function and add it to out test:

```rust
//....
    #[tokio::test]
    async fn counter_test() {
        //....
        
        let user_account = worker.dev_create_account().await.unwrap();
        let aurora_counter = deploy_aurora_counter(&engine, &user_account, wnear.aurora_token.address, &near_counter).await;
    }

    async fn deploy_aurora_counter(engine: &AuroraEngine,
                                   user_account: &workspaces::Account,
                                   wnear_address: Address,
                                   near_counter: &Contract) -> DeployedContract {
        //....
    }
```

To deploy aurora contract we should first compile and deploy `aurora_sdk_lib`, and corresponding dependencies:

```rust
async fn deploy_aurora_counter(engine: &AuroraEngine,
                                   user_account: &workspaces::Account,
                                   wnear_address: Address,
                                   near_counter: &Contract) -> DeployedContract {
    let contract_path = "../contracts";

    let aurora_sdk_path = Path::new("../contracts/lib/aurora-contracts-sdk/aurora-solidity-sdk");
    let codec_lib = forge::deploy_codec_lib(&aurora_sdk_path, engine).await.unwrap();
    let utils_lib = forge::deploy_utils_lib(&aurora_sdk_path, engine).await.unwrap();
    let aurora_sdk_lib = forge::deploy_aurora_sdk_lib(&aurora_sdk_path, engine, codec_lib, utils_lib).await.unwrap();

    //....
}
```

After that, we can compile and deploy the counter contract itself:

```rust
    //....
    
    let constructor = forge::forge_build(
                      contract_path,
                      &[format!(
                         "@auroraisnear/aurora-sdk/aurora-sdk/AuroraSdk.sol:AuroraSdk:0x{}",
                         aurora_sdk_lib.encode()
                       )], 
                       &["out", "Counter.sol", "Counter.json"]).await.unwrap();

    let deploy_bytes = constructor.create_deploy_bytes_with_args(&[
            ethabi::Token::Address(wnear_address.raw()),
            ethabi::Token::String(near_counter.id().to_string()),
        ]);

    let address = engine
            .deploy_evm_contract_with(user_account, deploy_bytes)
            .await
            .unwrap();

    constructor.deployed_at(address)
}
```

### Mint wNEAR for user

When we use XCC for the first time in our setup, the implicit contract on the Near will be created. You can read more about it [here](https://github.com/aurora-is-near/aurora-contracts-sdk/blob/main/docs/NearFromAurora.md). We also could call this implicit contract as sub-account. The overall scheme could be presented as:

![](https://www.datocms-assets.com/95026/1694083461-screenshot-2023-09-07-at-11-42-21.png)

Creation of a sub-account will cost you 2 NEAR tokens. That is why we need to mint 2 wNEAR for our user on Aurora after approving the spending of the wNear by counter contract.

```rust
///....
use aurora_sdk_integration_tests::aurora_engine_sdk::types::near_account_to_evm_address;
use aurora_sdk_integration_tests::aurora_engine_types::{U256, types::Wei};

#[tokio::test]
async fn counter_test() {
    //....

    let user_address = near_account_to_evm_address(user_account.id().as_bytes());
    const NEAR_DEPOSIT: u128 = 2 * near_sdk::ONE_NEAR;

    engine.mint_wnear(&wnear, user_address, NEAR_DEPOSIT).await.unwrap();

    let evm_call_args = wnear
        .aurora_token
        .create_approve_call_bytes(aurora_counter.address, U256::MAX);
    
    let result = engine
        .call_evm_contract_with(
        &user_account,
        wnear.aurora_token.address,
        evm_call_args,
        Wei::zero()).await.unwrap();
    aurora_engine::unwrap_success(result.status).unwrap();
}
```

### Call incrementXCC method in counter contract on Aurora

In this section, we will write a function that calls the `incrementXCC` method in the Counter contract on Aurora. `incrementXCC` method is calling inside the `increment` method from the Near contract and counter is incremented on Near.

Let's write `increment` function in our test now, which will call the `incrementXCC` from the Aurora's contract. We'll provide as input: (1) aurora engine contract deployed in the sandbox, (2) the near account of the user which will sign the transaction, (3) the counter contract deployed on aurora.

Notice that we're going to call the method in the aurora contract, but in this function, the user account ID on Near is provided. We can do this because it is possible to call the aurora's counter contract method by using `call` method from the Aurora Engine contract. In that case, the near user will sign a transaction, but inside the Aurora Engine, there is [an implicit mapping](https://github.com/aurora-is-near/aurora-engine/blob/71980db92a9d4b95d4e1f53954b98e0e8f002a4b/engine-sdk/src/types.rs#L28) between the near account ID and aurora addresses. And it is precisely how we will communicate with the contract in our test.

Now, let's first encode the arguments for the `call` method in the `AuroraEngine` contract on Near and after that – submit a transaction and check its result:

```rust
//....
use aurora_sdk_integration_tests::aurora_engine_types::parameters::engine::{CallArgs, FunctionCallArgsV1};

#[tokio::test]
async fn counter_test() {
    //....

    increment(&engine, &user_account, aurora_counter).await;
}

async fn increment(
    engine: &AuroraEngine,
    user_account: &workspaces::Account,
    aurora_counter: DeployedContract
) {
  
  let contract_args = aurora_counter.create_call_method_bytes_without_args("incrementXCC");

  let result = engine
      .call_evm_contract_with(
          &user_account,
          aurora_counter.address,
          ContractInput(contract_args),
          Wei::zero(),
      )
      .await
      .unwrap();
  
  aurora_engine::unwrap_success(result.status).unwrap();
}
```

### Check counter value on Near

Let’s check that the counter has been incremented at the Counter contract on Near. For that, call the `get_num` view method at the counter and check that the result equals 1.

```rust
#[tokio::test]
async fn counter_test() {
    //....
    
    let counter_val: u64 = near_counter.view("get_num").await.unwrap().json().unwrap();
    assert_eq!(counter_val, 1);
}
```

### Run final test

Now, when everything is ready, let's go to `aurora/integration-tests/` directory and run to check that we have the expected results:

```bash
cargo test
```

## Git Action

Now, let's set up the git action so that the test runs automatically every time we push changes. To set it up, we must create `.github/workflow/test.yml` and `Makefile`.

```bash
AuroraToNearXCCExample:
|-- aurora
|-- near
|-- Makefile
|-- .github/workflow/test.yml
```

The `.github/workflows/test.yml` contains the git action description. In our case, we are going to run it on `push` events. First, we install `foundry` for compiling our Solidity contracts, second, we checkout the repository with all submodules, and in the end, run the script from Makefile.

```yaml
name: aurora-to-near-xcc-example test automatically

on: [push]

jobs:
  test-counter:
    runs-on: ubuntu-latest
    name: Test counter
    steps:
      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@v1
      - name: Clone the repository
        uses: actions/checkout@v3
        with: 
          submodules: recursive
      - name: Test
        run: |
          make test-counter
```

Now, let’s take a closer look at the `Makefile` . First, we go to the `aurora` directory and install dependencies, second, we compile near contracts, and in the end, run our integration test.

```makefile
test-counter:
        cd aurora && \\
        yarn add @auroraisnear/aurora-sdk && \\
        cd ../near/contracts && \\
        ./build.sh && \\
        cd ../../aurora/integration-tests && \\
        cargo test --all --jobs 4 -- --test-threads 4
```

That is it, we have set up the git action! Now, our integration test will run automatically after each push to our GitHub repo.

## Conclusion

In this article, we have created a simple contract on Aurora, which calls the function from Near contract. We have learned how it is possible to test such contracts inside the sandbox locally. And in the end, we have set up the git action to make the test run automatically.

I hope this article will make it easier for you to develop contracts on Aurora with XCC to Near.

Happy development! In a case you will have any questions about this article, feel free to contract our DevSupport team on [our Discord server](https://discord.com/invite/dEFJBz8HQV).

The example from this article you can find in this repo: [https://github.com/olga24912/AuroraToNearXCCExample](https://github.com/olga24912/AuroraToNearXCCExample)
