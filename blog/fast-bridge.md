---
title: "Fast Rainbow Bridge: How it works?"
description: "Discover how the Fast Rainbow Bridge allows users to transfer tokens from NEAR to Ethereum within minutes"
date: "2023-06-30"
authors: [olga]
tags: [core_tech]
image: https://www.datocms-assets.com/95026/1686179803-frb.png
---
The classical Rainbow Bridge makes it possible to transfer tokens from the NEAR blockchain (or the Aurora Blockchain) to Ethereum. However, it is important to note that these transactions may have longer processing times, typically ranging from 4 to 8 hours, and the final transaction cost remains unpredictable at the time of initiation. These attributes significantly impact the overall user experience, and in certain scenarios, transaction speed becomes a critical factor.

In this article, we introduce the innovative Fast Rainbow Bridge. This groundbreaking solution enables the transfer of tokens from NEAR to Ethereum with just a few minutes of delay. As an added advantage, this bridge also provides the ability to determine the transfer cost during its initialization stage.

<!-- truncate -->

## Introduction

At the moment, the transfer of tokens from Aurora or NEAR to Ethereum is carried out using the classic [Rainbow Bridge](https://aurora.dev/blog/2021-how-the-rainbow-bridge-works), and that solution has the following characteristics:

*   **Optimistic approach (4 hours challenge period): **The verification of signatures of NEAR blockchain validators on the Ethereum blockchain is an extremely gas-intensive operation, resulting that it is being unfeasible to verify all the signatures on-chain. Due to this factor, the classical Rainbow Bridge adopts an optimistic approach. By default, the validator signatures are not immediately checked on-chain, by default, they are assumed to be correct. To mitigate the possible fraud blocks, a challenging period is instituted, necessitating a 4-hour wait for the proof check to take place. During that period, a watchdog, a special service, can verify the signatures off-chain and challenge them on-chain in case there's any single invalid signature.
*   **NEAR Light Client finality delay: **NEAR block headers are sent to Ethereum only once in 4 hours. This is because Ethereum gas fees make it very expensive to send every block, and there's a necessary 4-hour challenge period. As a result, in the worst case, the token transfer can take up to 4 hours (if the bridge tx was created right after the last light client update) + 4 hours (challenge period) = 8 hours.
*   **Two-phase transfer: **To complete the token transfer, you need to perform two actions: initiate the transfer on the NEAR side and finalize the transfer on the Ethereum side to receive tokens. The finalization step requires the user to pay himself Ethereum gas fees for the transaction containing the proof. As mentioned earlier, there is a time gap of approximately 4-8 hours between these two actions. So while it's possible to estimate the finalization cost, during the initialization of the transfer, Ethereum gas fees might change quite a lot during that time, sometimes resulting in the finalization of the transfer being quite expensive (or cheaper) than the estimated amount.
*   **No cancellation: **Once the transfer is initialized, the user can’t cancel this transaction. After the tokens are locked on the NEAR side, it's impossible to revert the transfer. So the only way to get it back on the NEAR side — is to finish the transaction on the Ethereum side and transfer it back to NEAR. This will require around 4/8 hours + 20 mins to receive funds back on the NEAR side.

To provide a second option for the users and mitigate the inconveniences of some of the previously listed properties, we present the Fast Rainbow Bridge, which allows transferring tokens from NEAR to Ethereum within minutes.

## General idea

The Fast Bridge implementation is possible because it doesn't use the Rainbow Bridge's NEAR Light Client on the Ethereum side. Instead, it uses a 3rd party liquidity Provider to facilitate the fast transfer.

Let's imagine that a User wants to transfer some tokens from NEAR to Ethereum in a short time.\
If he decided to use the classical Rainbow Bridge because it would take at least 4 hours.

Now let's assume that some Provider already has the target tokens on the Ethereum side and agrees to exchange them for the same tokens on the Near side. In that case:

*   The User can lock its tokens with a fee for the Provider on the Near side.
*   The Provider can easily check that tokens are locked and transfer tokens to the User on the Ethereum side.
*   The Provider will claim his tokens and earned fees on the NEAR side by showing proof of the token transfer from the Ethereum side.

In this scenario, the User should not wait for any NEAR Light Client on Ethereum update and gets tokens on the Ethereum side extremely fast.

The Fast Bridge solution is decentralized and trustless. This is achieved because the Fast Bridge allows multiple relayers (P to provide liquidity, thus allowing a competitive market for fast transfers. Users, on the other hand, may claim their tokens back if their transfer was not completed (for example, in case the relayer is down or the provided fee is too low) within the max transfer time window (currently equals to 4 hours). Moreover, to claim tokens back on the NEAR side, the relayer must provide proof of the finalized bridge transaction from the Ethereum side.

## General Architecture

First and foremost, within the classical Rainbow Bridge, we have the capability to verify proofs of Ethereum events on the NEAR side. Specifically, our focus lies on the components known as Ethereum-to-NEAR-relayer (`EthToNearRelayer`) and Ethereum on Near Light Client (`EthOnNearLightClient`).

![](https://www.datocms-assets.com/95026/1686065067-screenshot-from-2023-06-06-18-23-59.png)

But for what concerns the Fast Bridge, we need three extra components:

*   `LP-Relayer` — liquidity provider relayer – an off-chain service with an account on both Ethereum and Near sides, having liquidity in tokens on the Ethereum side. It transfers tokens on the Ethereum side and unlocks them back on the Near side.

*   `NearErc20FastBridge` — contract on the NEAR side, which locks tokens and transfers them to the relayer when proof of the transaction on the Ethereum side is provided.

*   `EthErc20FastBridge` — contract on the Ethereum side, which the relayer uses to transfer tokens. The contract generates events of token transfer on the Ethereum side.

    Here is the picture, which illustrates the components and how the actions in-between are happening:

![](https://www.datocms-assets.com/95026/1686064894-architectore.jpg)

## Flow

In this section, we describe the transaction flow from the picture above.

1.  The User initiates the token transfer from Near to Ethereum by calling the `init_transfer()` of the `NearErc20FastBridge` contract.
2.  `NearErc20FastBridge` generates the `FastBridgeInitTransferEvent` with a unique `nonce`.
3.  `LP-Relayer` extracts `FastBridgeInitTransferEvent` and initiates the transfer of tokens to the user on the Ethereum side by calling `transferTokens()` of the `EthErc20FastBridge` contract.
4.  `EthErc20FastBridge` transfers tokens from LP-Relayer to User and generates a `TransferTokens` event.
5.  `EthToNearRelayer` transfers Ethereum blocks to the NEAR side.
6.  `LP_Relayer` claims tokens on the NEAR side by calling `lp_unlock()` of the `NearErc20FastBridge` contract and providing proof of the transaction event. `NearErc20FastBridge` verifies the proof and transfers tokens and fees to the LP-Relayer on the NEAR side.

Let's now take a more detailed look at the components. We start with `NearErc20FastBridge`.

## Components

### NearErc20FastBridge

The `NearErc20FastBridge` contract locks the User tokens on the transfer initiation and unlocks them when the transfer proof is provided.

For the transfer initiation, the User should call the `init_transfer()` function. But, before calling it, the user should transfer the corresponding amount of tokens to the `NearErc20FastBridge` contract.

To call `init_transfer()` the User will need to provide the following information as arguments:

*   `valid_till: u64` — time(Unix Time Stamp in nanoseconds) until which the tokens can be transferred to the user on the Ethereum side. After that time, if tokens weren't transferred to the user on the Ethereum side, the User can unlock it by himself by providing proof of non-existent transfer.

*   `transfer: TransferDataEthereum`

    *   `token_near: AccountId` — the transferred token’s account on NEAR.
    *   `token_eth: EthAddress` — the transferred token’s account on Ethereum.
    *   `amount: U128` — the amount of transferred tokens.

*   `fee: TransferDataNear`

    *   `token: AccountId` — the account of fee token on Near.
    *   `amount: U128` — fee amount.

*   `recipient: EthAddress` — the User’s account on Ethereum.

*   `valid_till_block_height: Option<u64>` — the same as `valid_till`, but in block height, not in nanoseconds. If both values are provided, tokens will be locked on the max of the two values. (In that stage, for User only `None` value makes sense)

On transaction initialization: this `TransferMessage` checks on the validity → User tokens are locked → the unique `nonce` is generated →  `valid_till_block_height` calculated based on `valid_till` value → `FastBridgeInitTransferEvent` event is emitted, which contains the `nonce`, User account on Near and `transfer_message`.

There are two scenarios for tokens withdrawing: (1) `lp_unlock()` — when `LP_Relayer` provides the proof of token transaction on the Ethereum side. (2) `unlock()` — can be called by the user after `valid_till` time passes if tokens weren’t transferred to him on the Ethereum side by this time (with providing proof of this).

After that, LP-Relayer or User (in a case, if `valid_till` time passes) can withdraw tokens by calling `withdraw()` method of the contract.

### EthErc20FastBridge

`LP-Relayer` transfers tokens to the User on Ethereum by using the `EthErc20FastBridge` contract. The key function is `transferTokens()`. After the tokens' transfer, the `TransferTokens` event will be generated, and the proof of the event should be provided on the NEAR side for the tokens’ unlock.

`LP-Relayer` should provide permission to the `EthErc20FastBridge` contract for token transfers by calling the `increaseAllowance()` method on the ERC-20 token contract.

Also, the token whitelist is supported, and only tokens from the whitelist can be transferred.

### LP_Relayer

The `LP-Relayer` is an off-chain component that transfers the tokens to the user on Ethereum and later claims tokens and earned fees on the NEAR side. It performs several functions: (1) monitors all new `FastBridgeInitTransferEvent` events from `NearErc20FastBridge` contract and transfers the correspondent tokens to the User on Ethereum by calling the `transferTokens()` method in ` EthErc20FastBridge  `contract; (2) waits for the correspondent Ethereum blocks transfers to the Near and unlocks the tokens with proof providing.

### Rebalancer

Rebalancer is an off-chain service responsible for supporting relayer liquidity. It monitors the relayer balance of whitelisted tokens on the NEAR side. When some specified amount of tokens is accumulated, the Rebalancer bridges `LP-Relayer`'s liquidity from NEAR to Ethereum using the classical Rainbow Bridge to ensure there's enough liquidity on the Ethereum side.

## Results

### Speed

The flow of the token transfer from NEAR to Ethereum using the classical Rainbow Bridge:

*   The user initiates a token transfer on the NEAR side. The tokens are locked. The user can’t cancel the transaction anymore.
*   Once in 4 hours, NEAR blocks are transferred to NEAR Light Client on Ethereum. As a result, for the user, it will take 4-8 hours before the bridge transfer can be finalized.
*   The user unlocks tokens on the Ethereum side by showing proof of the successful bridge transaction.
*   The user gets tokens on the Ethereum side.

Total: The user gets the tokens after 4-8 hours after the transfer’s initiation.

The flow of the token transfer from NEAR to Ethereum using the Fast Rainbow Bridge:

*   The user initiates a token transfer on the NEAR side. The tokens are locked.
*   The off-chain Relayer gets the `initTokenTransfer` event, checks this event, and transfers tokens to the user on the Ethereum side. (usually within a few minutes)
*   The User gets tokens on the Ethereum side. The event of `TokenTransfer` is generated.
*   Ethereum blocks are transferred from the Ethereum to `EthOnNearClient` on the NEAR side in ~20 minutes.
*   The relayer gets tokens and fees on the NEAR side.

Total: user gets tokens in a few minutes, relayer gets tokens in 20-30 minutes.

### Price

In the classical Rainbow Bridge, for Aurora/NEAR to Ethereum transfer, the estimated price for the finalization transaction is ~16$ (Jun 30). This price is the price of gas fees for unlocking tokens on the Ethereum side with the proof checking. The user needs to pay for the finalization of the transfer using his own Ethereum wallet and pay gas fees in Ether. It is the second phase of the tokens transfer, which happens 4-8 hours later after the transfer initialization. As a result, the exact price of the finalization is unknown at the moment of the initialization.

The cost of the transfer for the Fast Bridge is a fee for the relayer. The User himself doesn’t pay for the gas, but the relayer pays. The good thing is that the relayer doesn’t have to wait before making a transaction, reducing the risk of possible major gas price fluctuations.

The Gas fee for Fast Rainbow Bridge on Ethereum is currently equal to ~$20 as a fixed fee + 0.1% of the transferred amount. The fees are paid in the transferred tokens.

### Limitations

*   If there is no relayer that will be ready to handle the transfer, or the transfer doesn't satisfy the relayer's requirements on gas fees or supported tokens, the transfer will not be processed. The tokens will be locked until `valid_till` time.
*   The transfer amount is limited by the relayer liquidity.
*   Only the tokens from the whitelist can be transferred.
*   Currently, it's not possible to initiate the Fast Bridge transfer directly from the Aurora network, so it requires having a NEAR wallet for the operation. The Aurora team is currently working to add this support soon.

## Conclusion

The Fast Rainbow Bridge allows users to transfer tokens from NEAR to Ethereum within minutes, which is a significant speed-up compared to the original 4-8 hours. Also, in the Fast Bridge, the transaction price can be calculated at the moment of initialization, the User doesn’t run the risk of unpredictable price change, and the User doesn't need to pay the gas fees on the Ethereum side.

The Fast Rainbow Bridge also has some limitations. Only whitelisted tokens can be transferred (this is managed), the transfer amount is limited by the available liquidity size. The user’s transaction can be canceled if it is not executed within the specified time window. Currently, Fast Rainbow Bridge requires a NEAR account to create the transfer. However, our team is already working on adding the Fast Bridge option for the Aurora network.

We believe that using this bridge will greatly improve the user experience. And the speed of transactions will open new cases of Rainbow Bridge usage.
