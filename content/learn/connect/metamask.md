---
title: "Aurora: Connecting with MetaMask"
---

# Connecting with MetaMask

The easiest way to connect Aurora to MetaMask is to use the Bridge UI.
If you want to manually add Aurora as a custom RPC in MetaMask, then check out the [tutorial under the Develop tab].
If that last sentence didn't make sense to you, that's good, you're in the right place.

We assume you already have the MetaMask browser extension installed.
If you need help getting set up with MetaMask in the first place, please see [their website](https://metamask.io/).

## Connecting to the Bridge front-end

Aurora is still a work in progress, so our bridge is currently only working with the Ropsten testnet (and Ethereum test network).
For the remainder of the tutorial we will focus on adding the Aurora testnet to MetaMask.

Before we begin, ensure that you have the Ropsten network selected in MetaMask.
In the MetaMask UI click the network selection drop-down in the top right, then click `Ropsten test network`.

![metamask-ropsten-network-select](../../_img/metamask_ropsten_network_select.png)

Go to [the Bridge webpage](https://testnet.aurora.dev/bridge) and click the `Connect wallet` button in the top right.

![bridge-connect-wallet](../../_img/bridge_connect_wallet.png)

In the pop-up MetaMask window click `Next` then `Connect`.

![bridge-connect-with-metamask](../../_img/bridge_connect_with_metamask.png)

If you see `Unsupported` in the top right corner of the Bridge page, make sure you have the Ropsten network selected in MetaMask (per the previous steps),
otherwise you should now see `Ropsten Testnet` in the top right corner.

![bridge-ropsten-connected](../../_img/bridge_ropsten_connected.png)

To connect MetaMask with Aurora, click the `<>` arrows between `Ropsten Testnet` and `Aurora Testnet`.

![bridge-switch-ropsten-to-aurora](../../_img/bridge_switch_ropsten_to_aurora.png)

In the MetaMask pop-up window click `Approve` then `Switch network`.

![bridge-add-aurora-to-metamask](../../_img/bridge_add_aurora_to_metamask.png)

That's it! If you look in the MetaMask UI you will see that you are now connected to the `Aurora Testnet` network.

![metamask-aurora-testnet](../../_img/metamask_aurora_testnet.png)

## Next steps

While you are on the bridge page, why not [transfer some ETH from your account on Ropsten to your account on Aurora]?
Or if you want to try deploing a smart contract, check out the [tutorial using Remix with MetaMask].

[tutorial under the Develop tab]: ../../develop/start/metamask.md
[transfer some ETH from your account on Ropsten to your account on Aurora]: ../bridge/eth.md
[tutorial using Remix with MetaMask]: /develop/start/metamask.html#deploying-an-erc-20-token-using-remix
