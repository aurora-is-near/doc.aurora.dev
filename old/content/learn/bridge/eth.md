---
title: "Aurora: Bridging ETH Balances"
---

# Bridging ETH Balances

!!! note
    Bridging ETH is currently only enabled for Ropsten Testnet to Aurora Testnet.

Before you begin, ensure you have the Ropsten Testnet selected in MetaMask (see instructions [here](../connect/metamask.md)).

If you need Ropsten ETH to transfer, you can get some from faucets such as [MetaMask's](https://faucet.metamask.io/) or [DeFi Karen's](https://faucet.ropsten.be/).
For this tutorial, you should have (at least) 2 Ropsten ETH already on your account.

![metamask-two-ropsten-eth](../../_img/metamask_two_ropsten_eth.png)

Go to the [Bridge UI](https://testnet.aurora.dev/bridge).
If you have not yet connected MetaMask to the UI, follow the instructions [here](../connect/metamask.md).
Enter the amount of ETH to transfer in the `Amount` box (in this example we send 1 ETH) then click `Continue`.

![bridge-send-one-eth-to-aurora](../../_img/bridge_send_one_eth_to_aurora.png)

Click `Confirm`, then confirm the transaction in the MetaMask pop-up.

![bridge-send-one-eth-to-aurora-confirm](../../_img/bridge_send_one_eth_to_aurora_confirm.png)

![bridge-send-one-eth-to-aurora-metamask-confirm](../../_img/bridge_send_one_eth_to_aurora_metamask_confirm.png)

After a minute or two the transaction on the Ropsten network will confirm in MetaMask.
At this point the ETH is locked on the Ropsten side in a contract, and it has emitted a `Deposit` event.
The Aurora relayers watch for such events and automatically forward a transaction to the NEAR network (where Aurora runs).
This takes some time because we must wait for multiple block confirmations on Ropsten to be sure it will not revert.
While this is happening you will see an intermediate message in the Bridge UI.

![bridge-send-one-eth-to-aurora-waiting](../../_img/bridge_send_one_eth_to_aurora_waiting.png)

![bridge-send-one-eth-to-aurora-processing-transfer](../../_img/bridge_send_one_eth_to_aurora_processing_transfer.png)

After the transaction is complete (several minutes later) it will appear as "Completed" in the UI.

![bridge-send-one-eth-to-aurora-completed](../../_img/bridge_send_one_eth_to_aurora_completed.png)

You can now see your balance in MetaMask by switching to the Aurora Testnet.

![metamask-aurora-testnet-with-one-eth](../../_img/metamask_aurora_testnet_with_one_eth.png)
