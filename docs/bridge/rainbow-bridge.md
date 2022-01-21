---
title: Rainbow Bridge
sidebar_position: 1
---

# Overview

For bridging the origin chain of the token matters. It is not possible to mint a token on Aurora and move it to Ethereum.

Tokens that originated on Ethereum can be bridged to NEAR

Tokens that are presented on NEAR (originated ones and transferred from Ethereum) can be bridged to Aurora.

Tokens originated on Aurora cannot be bridged to NEAR.

Tokens originated on NEAR cannot be bridged to Ethereum.

So, if you want your token to trade on three networks, then deploy it on Ethereum, then bridge to NEAR, then bridge to Aurora. Deploy → Approve → Bridge

## Bridging ETH Balances

:::note

Bridging ETH is currently only enabled for Ropsten Testnet to Aurora Testnet.

:::

If you need Ropsten ETH to transfer, you can get some from faucets such as [MetaMask's](https://faucet.metamask.io/) or [DeFi Karen's](https://faucet.ropsten.be/).
For this tutorial, you should have (at least) 2 Ropsten ETH already on your account.

![metamask-two-ropsten-eth](/img/metamask_two_ropsten_eth.png)

Go to the [Bridge UI](https://testnet.aurora.dev/bridge).
Enter the amount of ETH to transfer in the `Amount` box (in this example we send 1 ETH) then click `Continue`.

![bridge-send-one-eth-to-aurora](/img/bridge_send_one_eth_to_aurora.png)

Click `Confirm`, then confirm the transaction in the MetaMask pop-up.

![bridge-send-one-eth-to-aurora-confirm](/img/bridge_send_one_eth_to_aurora_confirm.png)

![bridge-send-one-eth-to-aurora-metamask-confirm](/img/bridge_send_one_eth_to_aurora_metamask_confirm.png)

After a minute or two the transaction on the Ropsten network will confirm in MetaMask.
At this point the ETH is locked on the Ropsten side in a contract, and it has emitted a `Deposit` event.
The Aurora relayers watch for such events and automatically forward a transaction to the NEAR network (where Aurora runs).
This takes some time because we must wait for multiple block confirmations on Ropsten to be sure it will not revert.
While this is happening you will see an intermediate message in the Bridge UI.

![bridge-send-one-eth-to-aurora-waiting](/img/bridge_send_one_eth_to_aurora_waiting.png)

![bridge-send-one-eth-to-aurora-processing-transfer](/img/bridge_send_one_eth_to_aurora_processing_transfer.png)

After the transaction is complete (several minutes later) it will appear as "Completed" in the UI.

![bridge-send-one-eth-to-aurora-completed](/img/bridge_send_one_eth_to_aurora_completed.png)

You can now see your balance in MetaMask by switching to the Aurora Testnet.

![metamask-aurora-testnet-with-one-eth](/img/metamask_aurora_testnet_with_one_eth.png)

## Add token to Rainbow Bridge

If you are a developer, and you can deploy tokens using the Rainbow Bridge:

- Ethereum ERC-20 tokens can be deployed to NEAR and Aurora.
- NEAR NEP-141 tokens can be deployed to Aurora.

Following is the process:

1. Access the [Rainbow Bridge deployment](https://rainbowbridge.app/deploy) feature.
2. The UI will walk you through the deployment steps.
3. Once deployed, raise a pull request [on this repository](https://github.com/aurora-is-near/bridge-assets) to have the Aurora team add your metadata.
4. Once the Aurora team process and approve your PR, your token will be searchable by symbol on the
bridge transfer form and other dApps will be able to display balances correctly.

For questions, you can reach the bridge team at [bridge@aurora.dev](mailto:bridge@aurora.dev).

## Mint on Ethereum → Bridge to Near & Aurora
