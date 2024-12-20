---
title: Metamask
---
MetaMask is a browser extension and mobile app that serves as a secure and user-friendly gateway to interact with the Ethereum blockchain. As a cryptocurrency wallet, it allows users to store, manage, and transact Ether (ETH) and various Ethereum-based tokens (ERC-20 and ERC-721). In addition, MetaMask simplifies access to decentralized applications (dApps) by enabling users to authenticate and execute transactions without the need for a separate blockchain client. By providing a seamless bridge between web browsers and the Ethereum network, MetaMask plays a vital role in the widespread adoption and use of blockchain-based applications.

### Introduction[​](https://doc.aurora.dev/interact/metamask#introduction "Direct link to heading")

[MetaMask](https://metamask.io/) is a convenient UI for interacting with Ethereum-compatible blockchains (such as Aurora). For the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed. If you need help getting started with MetaMask itself, [check out their documentation](https://metamask.io/faqs.html).

In this tutorial we will walk through connecting MetaMask to the Aurora Testnet, deploying a simple ERC-20 contract using [Remix](https://remix.ethereum.org/), and transferring the new token using MetaMask.

### Connecting MetaMask to Aurora[​](https://doc.aurora.dev/interact/metamask#connecting-metamask-to-aurora "Direct link to heading")

In the top-right corner of the MetaMask interface, click the network selection drop-down and then click `Custom RPC`.

![](https://www.datocms-assets.com/95026/1679469164-metamask_choose_network-0d3034f88dcd7bc92f61df7d1be9bb7c.png)

Fill in the form with the following information:

* Network Name: Aurora Testnet
* New RPC URL: `https://testnet.aurora.dev/`
* Chain ID: 1313161555
* Currency Symbol: ETH

![](https://www.datocms-assets.com/95026/1679469198-metamask_create_aurora_rpc-e61eab72f8fa70386b43ed3c1d403d11.png)

Click `Save`, and you should see `Aurora Testnet` is now the network selected in MetaMask. To see MetaMask in action, we will connect it to [Remix](https://remix.ethereum.org/) and perform some transactions.

### Deploying an ERC-20 Token using Remix[​](https://doc.aurora.dev/interact/metamask#deploying-an-erc-20-token-using-remix "Direct link to heading")

In a new tab, open the Remix IDE at [remix.ethereum.org](https://remix.ethereum.org/). It might take a minute to load, but once it has, create a new file `ERC20Token.sol` in the workspace panel on the left:

![](https://www.datocms-assets.com/95026/1679469248-remix_new_file-15cadba3e578d16df451448175231e8b.png)

Copy and paste the following code into the central editor panel:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor (string memory name, string memory symbol) ERC20(name, symbol) {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }
}
```

This code is a slightly modified (the Solidity compiler and [OpenZeppelin](https://openzeppelin.com/contracts/) versions are newer) version of the [example from Solidity by Example](https://solidity-by-example.org/app/erc20/).

Click the `Solidity Compile` button on the far left panel (the second icon down); ensure your selected Solidity compiler version is 0.8 (minor versions within 0.8, e.g., 0.8.4 work too), and click `Compile ERC20Token.sol`.

![](https://www.datocms-assets.com/95026/1679469384-remix_solidity_compile-1f459820c9caef73c47d3af1c87e71a6.png)

Once the contract is compiled, click the `Deploy & run transactions` button in the far left panel (the icon below the Solidity compiler). In the `ENVIRONMENT` drop-down select `Injected Web3`

![](https://www.datocms-assets.com/95026/1679469397-remix_injected_web3-dbb0d671a1703239451d7d4e133f68ba.png)

You will see a MetaMask pop-up window asking you to give the Remix IDE permission to access it. Click `Next` and then `Connect` to grant access.

![](https://www.datocms-assets.com/95026/1679469450-remix_connect_with_metamask-9d8214740f372d3b41e489cbe23c5884.png)

Back in the Remix interface, click the arrow next to the `DEPLOY` section of the left panel. Fill in the token details with whatever you like (`MyToken` and `MT`in the example), and click `transact.`

![](https://www.datocms-assets.com/95026/1679469541-remix_deploy_contract-6423d60330003a7ffc0dc28ee5cd8178.png)

Another MetaMask pop-up will appear asking you to confirm the transaction. Click `Confirm.`

![](https://www.datocms-assets.com/95026/1679469583-remix_deploy_contract_metamask_confirm-6b4f8c2a751ec4a4b6ad9df96584c623.png)

After a few moments the transaction will be confirmed by the network. You will see a success message in the bottom panel and the contract listed under `Deployed Contracts` on the left panel. Click the copy button to copy the address of the newly deployed contract.

![](https://www.datocms-assets.com/95026/1679469624-remix_deploy_contract_confirmed-59390e985747c30736f46356a88b4ff1.png)

Now that the contract is deployed on the Aurora network, we can interact with it via MetaMask.

### Adding an ERC-20 Token to MetaMask[​](https://doc.aurora.dev/interact/metamask#adding-an-erc-20-token-to-metamask "Direct link to heading")

In the MetaMask interface (with the Aurora Testnet network still selected), click the `Add Token` button:

![](https://www.datocms-assets.com/95026/1679469657-metamask_add_token_button-bab734e9daaa3f2ed163762334d7f67b.png)

Paste the token address copied from Remix in the previous step. The remaining token details should fill in automatically as MetaMask finds the contract on-chain. Click `Next`:

![](https://www.datocms-assets.com/95026/1679469702-metamask_add_token-aba3998a127e59aa23fa54f0c9261fd3.png)

On the next screen you see the balance (100 tokens), as minted in our contract constructor. Click `Add Tokens:`

![](https://www.datocms-assets.com/95026/1679469741-metamask_add_token_confirm-7de3a02b810088ad3e92616a1ede4302.png)

The token has now been added to MetaMask and we can use the MetaMask interface to view the token balance and to transfer the token to others.

### Transferring an ERC-20 Token with MetaMask[​](https://doc.aurora.dev/interact/metamask#transferring-an-erc-20-token-with-metamask "Direct link to heading")

Continuing from the previous step, click the `Send` button in the MetaMask interface:

![](https://www.datocms-assets.com/95026/1679469777-metamask_my_token-7cb2274862fa1761a4f09e4a4cf732a4.png)

Select a recipient (if you have multiple accounts in MetaMask you can simply select another account), and an amount of tokens to send. Click `Next:`

![](https://www.datocms-assets.com/95026/1679469840-metamask_send_my_token-225db13fcf5b816e3f054f512b40f439.png)

Click `Confirm` to send the transaction to the network:

![](https://www.datocms-assets.com/95026/1679469894-metamask_send_my_token_confirm-7c919aba75d05efe04f8be29210a129b.png)

After a few moments the transaction will be confirmed by the network. You can see the updated balance your account holds in the MetaMask interface:

![](https://www.datocms-assets.com/95026/1679469923-metamask_my_token_sent_account1-139c1b898d909970a81f111acd870d80.png)

If you transferred to another MetaMask account you hold then you can follow the aforementioned instructions for adding the token to MetaMask on the other account, and view its balance also.

![](https://www.datocms-assets.com/95026/1679469959-metamask_add_token_account2-2450b009a315943298fe01d52ecffb3e.png)

### Summary[​](https://doc.aurora.dev/interact/metamask#summary "Direct link to heading")

In this tutorial we connected MetaMask to the Aurora Testnet, deployed an ERC-20 token contract using Remix, and transferred that token using MetaMask. The only difference to doing this on the original Ethereum network was setting the RPC endpoint to be Aurora's.
