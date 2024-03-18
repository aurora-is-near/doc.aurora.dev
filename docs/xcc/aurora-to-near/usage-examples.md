---
sidebar_label: 	Usage examples
title: Usage Examples
---

## Tic-Tac-Toe XCC Example

In this example the dApp is a tic-tac-toe game where the board state and game management are handled in Solidity, while the Computer opponent logic is in Rust.
The purpose of this example is to illustrate how you can use the strengths of both Aurora and Near to build one unified dApp, in the same way that a single Web 2.0 application can consist of both JavaScrip and WebAssembly components.
In this particular case the whole thing could have been written for either platform.
But you can imagine how a real use-case might involve solutions to multiple problems, some of which are easier to solve in Solidity (for example maybe there is a convenient OpenZepillin library) and others easier in Rust or in the Near ecosystem in general (for example maybe you want to take advantage of the protocol-level account abstraction).

This project has been deployed to testnet!
You can interact with it [live on the Blockchain Operating System (BOS)](https://bos.gg/#/nearcon.birchmd.near/widget/Aurora-Tic-Tac-Toe).
If you don't want to interact with it yourself you can [watch the demo on YouTube](https://youtu.be/_tSuGRN9Lok).

You can read an article about this on our DevPortal [here](https://dev.aurora.dev/posts/building-a-game-using-near-aurora-and-bos).

And also find the repo by this [link](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/examples/tic-tac-toe).

## `social-db` from Aurora

`social-db` is the storage layer backing [near.social](https://near.social/), a decentralized social media platform on the Near blockchain.
It is realised as a smart contract on the Near blockchain.

In this example we show how to interact with `social-db` from the Aurora EVM using the XCC feature.
In particular, we expose the [set method](https://github.com/NearSocial/social-db/tree/39016e654739b0a3e8cb7ffaea4b03157c4aea6e#storing-data) of the SocialDB contract to allow storing data in the DB from Aurora:

```solidity
    // Exposes the [set interface](https://github.com/NearSocial/social-db/tree/39016e654739b0a3e8cb7ffaea4b03157c4aea6e#storing-data)
    // of the SocialDB contract. This function is access controlled because it is important that
    // only authorized users can instruct keys to be set in the DB.
    // An amount of wNEAR is also required for this call to cover the storage cost of the data
    // being persisted on Near.
    function set(uint128 attachedNear, bytes memory data) public onlyRole(SETTER_ROLE) {
        wNEAR.transferFrom(msg.sender, address(this), attachedNear);

        PromiseCreateArgs memory callSet =
            near.call(socialdbAccountId, "set", data, attachedNear, SET_NEAR_GAS);
        PromiseCreateArgs memory callback =
            near.auroraCall(address(this), abi.encodePacked(this.setCallback.selector), 0, SET_CALLBACK_NEAR_GAS);

        callSet.then(callback).transact();
    }
```

Take a look at [the full repo here](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/examples/social-db-from-aurora).

## Fungible token refund

The purpose of this example is to demonstrate a proper way to do token bridging between Near and Aurora and to properly refund tokens that might have been stuck in the XCC contract otherwise.

More specifically, we have a Solidity contract `S` on Aurora which sends a fungible token (FT) on Near via calling `ft_transfer_call` on its contract `T`.
There is another receiving Near contract `R`, which denies the sent FT in its `ft_on_transfer` function, resulting in a refund from `T` to the XCC contract address.
The XCC contract now needs to bridge back the FT to the signing EVM wallet by calling `ft_transfer_call` on the token again, this time sending the tokens to Aurora.

If you want to read a detailed article on our DevPortal about this example, here is the [link](https://dev.aurora.dev/posts/contract-callbacks-in-xcc).

An overview is given in the following diagram:

![Overview diagram](/img/ft-refund-overview.svg)

A key aspect of this example is the fact that a callback to Aurora makes a further cross-contract call (XCC) which also spends NEAR (since `ft_transfer_call` requires 1 yoctoNEAR attached).
This is a little tricky to get right because the sender of the callback transaction to Aurora is derived from the XCC representative account on NEAR by hashing the account ID.
It is not equal to the address of the contract which caused the callback to be sent.
Therefore, additional setup is required to make this work; there must be an extra XCC call into Aurora where the derived account gives allowance to the Solidity contract to spend its WNEAR.
