---
title: "Cross-Ecosystem Communication"
description: "Discover how cross-contracts calls communication can happen between NEAR and Aurora using Aurora Contracts SDK"
date: "2023-04-21"
authors: [boris]
tags: [core_tech]
image: https://www.datocms-assets.com/95026/1682340168-cec-article-cover.png
---
Aurora’s infrastructure is built upon an innovative combination—our Ethereum Virtual Machine (EVM) operates as a smart contract running atop the powerful NEAR protocol. Harnessing NEAR's innate ability for smart contracts to communicate with one another, we seamlessly route EVM-compatible transactions to any smart contract deployed within NEAR. By doing so, developers are granted unparalleled access to the best of both ecosystems - from a rich collection of sound and robust Solidity libraries to the groundbreaking NEAR accounts model and an ever-growing, expansive user base.

<!-- truncate -->

Embracing Aurora's dedication to exceptional user experiences, our team has crafted a Software Development Kit (SDK) tailored to provide developers with a seamless method for facilitating cross-blockchain transactions. Access the SDK in the dedicated [repository](https://github.com/aurora-is-near/aurora-contracts-sdk), or integrate it into your project effortlessly. Aurora's Solidity developers can install an npm package by executing `npm i @auroraisnear/aurora-sdk` in any terminal, while NEAR Rust developers can similarly incorporate a cargo package from our [repository](https://github.com/aurora-is-near/aurora-engine.git). For a more customized installation, or if you want to contribute to the project, you can also follow the installation instructions in the repository.

![](https://www.datocms-assets.com/95026/1682019691-screen-shot-2023-04-20-at-12-41-15-pm.png)

For this article, we have prepared two examples for developers to understand how to use the SDK. The first is a Solidity smart contract that connects the SocialDB contract, the storage layer that backs the [NEAR.social](https://near.social/#/) decentralized social media platform. Even though this integration would allow using MetaMask as an entry point into that social network, its importance extends further. SocialDB, initially designed to store various types of social data on the NEAR protocol, has evolved over time to become the foundation for a user-centric Open Web, where users maintain control over their data. This approach has ultimately led to the development of NEAR's Blockchain Operating System (BOS). As such, the seamless integration of SocialDB with BOS is crucial, as it provides Aurora developers with access to one of the most potent tools within the NEAR ecosystem .\
\
The second integration example involves calling the Uniswap contract deployed in Aurora from a Rust contract deployed in NEAR. This integration is vital because it allows NEAR users to access Uniswap's decentralized exchange platform, one of the most popular and widely used in the cryptocurrency space. By having access to Uniswap, NEAR users can benefit from its liquidity pools, token swaps, and other DeFi services, enhancing their ability to trade and interact with a diverse range of digital assets. This seamless connection between NEAR and Uniswap not only enriches the user experience but also fosters the growth of the broader decentralized finance ecosystem in both protocols.

### From Aurora to NEAR

In this example, a solidity contract called \`SocialDB.sol\` will call the \`set\` function–used to store data in the SocialDB rust contract deployed on NEAR and will implement a callback function that receives the result of the \`set\` call.\
\
In summary, this contract interacts with the SocialDB contract on the NEAR platform. It sends wNEAR tokens as a fee to cover the storage cost of data being persisted on NEAR and using promises to chain cross-contract calls and callbacks. This regular solidity contract implements common libraries such as OpenZeppelin's AccessControl.

![](https://www.datocms-assets.com/95026/1682019506-screen-shot-2023-04-20-at-12-37-46-pm.png)

Now, to interact with the SocialDB contract, this contract imports the Aurora SDK.

```solidity
import "@aurora/sdk/solidity/AuroraSdk.sol";
```

Then, it attaches the AuroraSdk library functions to the `NEAR`, `PromiseCreateArgs`, and `PromiseWithCallback` data types, allowing the contract to call these functions as if they were methods of the respective data types. This enables a more intuitive and readable syntax when working with NEAR instances, such as `near.call()` or `near.auroraCall()`, and simplifies the usage of `PromiseCreateArgs` and `PromiseWithCallback` instances, like `callSet.then()` and `callSet.then(callback).transact()`.

```solidity
using AuroraSdk for NEAR;
using AuroraSdk for PromiseCreateArgs;
using AuroraSdk for PromiseWithCallback;
```

In addition, it defines two constants, `SET_NEAR_GAS` and `SET_CALLBACK_NEAR_GAS`, representing the amount of NEAR gas attached to the calls and callbacks. When calling another NEAR contract, you must specify how much NEAR gas will be attached to the call (similar to the `gas` argument in the EVM `call` opcode). The typical unit on Near is the teragas (Tgas), where 1 Tgas = 10^12 gas. For example, the block gas limit on NEAR is 1000 Tgas, and the transaction gas limit is 300 Tgas.

```solidity
uint64 constant SET_NEAR_GAS = 50_000_000_000_000;
uint64 constant SET_CALLBACK_NEAR_GAS = 10_000_000_000_000;
```

The core of the SocialDB contract, written in Solidity, comprises two primary functions. The first function, `set`, exposes the contract's interface for setting data within the SocialDB contract in NEAR. Access control is essential for this function to ensure that only authorized users can instruct keys to be set in the database. Additionally, an amount of `wNEAR` is necessary for this call to cover the storage cost of the data being saved on NEAR.

```solidity
function set(uint128 attachedNear, bytes memory data) public onlyRole(SETTER_ROLE) {
       wNEAR.transferFrom(msg.sender, address(this), attachedNear);
       PromiseCreateArgs memory callSet = near.call(socialdbAccountId, "set", data, attachedNear, SET_NEAR_GAS);
       PromiseCreateArgs memory callback = near.auroraCall(address(this), abi.encodePacked(this.setCallback.selector), 0, SET_CALLBACK_NEAR_GAS);
       callSet.then(callback).transact();
   }
```

The second function, `setCallback`, verifies the success of the previous promise result. If unsuccessful, the transaction is reverted. This function is not intended for use by externally owned accounts (EOAs) and should only be executed as a callback from the main `set` method mentioned earlier. Consequently, it employs its own distinct access control mechanism, independent of other functions.

```solidity
function setCallback() public onlyRole(CALLBACK_ROLE) {
if (AuroraSdk.promiseResult(0).status != PromiseResultStatus.Successful){
           revert("Call to set failed");
       }
 }
```

As we can see, the SDK provides a way to wrap functions in NEAR contracts easily. Similarly, it is possible to make calls the other way around. Now, let’s look at how to call Aurora contracts from NEAR.

### From NEAR to Aurora

In this example, a NEAR contract calls the Uniswap V3 contract deployed on Aurora. A callback is attached to the NEAR contract so that it can check the result of the EVM execution. Because the entire Uniswap API is complex, this example only implements one function–`exactOutputSingle`–to illustrate the pattern. The `exactOutputSingle` function performs a token swap using a single liquidity pool where the swap is constrained to give an exact amount of the "output" token within some price limitation of the "input" token. The return value is the number of input tokens spent to make the swap.

![](https://www.datocms-assets.com/95026/1682019594-screen-shot-2023-04-20-at-12-39-37-pm.png)

To interact with the Uniswap contract, this contract imports the Aurora SDK.

```rust
use aurora_sdk::{
   ethabi, near_sdk, Address, CallArgs, FunctionCallArgsV1, SubmitResult, TransactionStatus, U256,
};
```

The Near contract works as a proxy with a method called ` exact_output_single  `that takes the same input as Uniswap's `exactOutputSingle.` To work well in the Near ecosystem, the `exact_output_single` function takes the arguments as a JSON encoded object and then re-encodes it into the Solidity ABI. The `exact_output_single` function returns a promise because, under the hood, it is making a Near cross-contract call to the Aurora EVM where the Uniswap code is deployed.

```rust
pub fn exact_output_single(&self, params: SerializableExactOutputSingleParams) -> Promise {
    let params: ExactOutputSingleParams = params.try_into().unwrap();
    let evm_token = ethabi::Token::Tuple(vec![
        ethabi::Token::Address(params.token_in.raw()),
        ethabi::Token::Address(params.token_out.raw()),
        ethabi::Token::Uint(params.fee.into()),
        ethabi::Token::Address(params.recipient.raw()),
        ethabi::Token::Uint(params.deadline),
        ethabi::Token::Uint(params.amount_out),
        ethabi::Token::Uint(params.amount_in_max),
        ethabi::Token::Uint(params.price_limit),
    ]);
    let evm_input = ethabi::encode(&[evm_token]);
    let aurora_call_args = CallArgs::V1(FunctionCallArgsV1 {
        contract: self.uniswap,
        input: [
            EXACT_OUTPUT_SINGLE_SELECTOR.as_slice(),
            evm_input.as_slice(),
        ]
        .concat(),
    });
    aurora_sdk::aurora_contract::ext(self.aurora.clone())
    .with_unused_gas_weight(3)
    .call(aurora_call_args)
    .then(Self::ext(env::current_account_id()).parse_exact_output_single_result())
}
```

Finally, it attaches a callback to the promise to interpret the output obtained from Aurora and present it more Near-friendly (i.e., encoding it in JSON instead of a binary format).

```rust
pub fn parse_exact_output_single_result(
    &self,
    #[serializer(borsh)]
    #[callback_unwrap]
    result: SubmitResult,
) -> ExactOutputSingleResult {
    match result.status {
        TransactionStatus::Succeed(bytes) => {
            let amount_in = U256::from_big_endian(&bytes);
            ExactOutputSingleResult {
                amount_in: amount_in.to_string(),
            }
        }
        TransactionStatus::Revert(bytes) => {
            let error_message =
            format!("Revert: {}", aurora_sdk::parse_evm_revert_message(&bytes));
            env::panic_str(&error_message)
        }
        other => env::panic_str(&format!("Aurora Error: {other:?}")),
    }
}
```

Using the same paradigm as the solidity SDK, the NEAR version provides a way to wrap functions in Aurora contracts easily.

\
In conclusion, the cross-chain contract calls between Aurora and NEAR offer a powerful and flexible solution for developers and users who wish to access the benefits of both platforms. By leveraging the capabilities of Aurora and the NEAR Protocol, these communications enable seamless interaction between the two ecosystems.\
\
Moreover, cross-chain contracts facilitate greater interoperability and foster a more decentralized ecosystem. As more developers build innovative solutions utilizing cross-chain functionality, we can expect an even more vibrant and interconnected space, with enhanced opportunities for users to access a wider array of decentralized products and services.

In the future, we anticipate an increasing number of cross-chain contracts and infrastructure solutions that will further unite Aurora and NEAR ecosystems. By continuing to develop and refine these cross-chain capabilities, we can unlock new levels of innovation, utility, and adoption across the blockchain industry, ultimately paving the way for a more decentralized and interconnected future.

*We want to thank Michael Birch for his support and contributions to this article, we really appreciate it!*
