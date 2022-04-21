---
title: Transfers to Ethereum
sidebar_position: 5
---

Transfers to Ethereum are probably the most confusing for our users so far.

1. Let’s start with connecting the networks. Select Aurora as the “From” network, and Ethereum as the “To” network. “Connect” both wallets, and click “Continue”. 

:::tip
If you have trouble connecting networks, please refer to the [Bridge Overview](bridge-overview) section.
:::

![bridge-31](/img/31.png)

2. Choose the “ETH” token to send, and enter the amount you want to transfer. Click “Continue”.
We show token balance on the destination network, as this is often useful in calculating how much needs to be transferred.
We also provide a one-click helper to allow you to send the full token balance in the transfer.
...and in the case that you’ve chosen ETH, we show you a warning that you may want to keep a bit around for gas fees!

:::tip
If you are wondering why you only see specific tokens, please refer to the [Transfer Overview](transfer-overview) chapter for more information.
:::

![bridge-32](/img/32.png)

:::danger VERY IMPORTANT
* **ALL** transfers to Ethereum require **TWO** transactions, with one of them required **after** the **first** one has been **completed**, which means that you’ll have to return to the bridge page and manually initiate the second transaction.
* The **first** transaction may take **up to 16 HOURS** (12 on average).
* Transactions **CANNOT BE CANCELED**.
:::danger

On the next screen, check the transfer details, and click “Confirm Transfer”. 
NOTE Along with the confirmation option, we also inform you that the transfer can take up to 16 hours and needs to be finalized.

![bridge-33](/img/33.png)

4. On the next screen, we inform you of the cost of the second transaction and warn that the transfer cannot be canceled.

![bridge-34](/img/34.png)

5. Once you are done on the bridge page, Metamask will open so you can confirm the transfer there.

![bridge-35](/img/35.png)

6. Once done, you’ll see the message informing you that the transfer has started.

![bridge-36](/img/36.png)

Again, note that transfers from Aurora to Ethereum take on average 16 hours and need to be finalized to receive assets on Ethereum.
 
:::tip
If you want to make sure that the transfer has started, you can go to the My Transfers page. If you have just confirmed it, you’ll see the message Processing Transfer – Transaction Pending.
:::

![bridge-37](/img/37.png)

Approximately 1-2 minutes after the confirmation, the bridge will say Processing Transfer—Estimated to complete in about 16 hours.

![bridge-38](/img/38.png)

:::tip
While you are waiting for the first transaction to go through, you can close the browser, turn off your PC and get back to the transfer at your convenience.
:::

7. Once the first transaction has been processed, get back to the bridge page and click “Finalize Transfer”.

![bridge-39](/img/39.png)

8. You’ll be redirected to MetaMask. The wallet will prompt the fee that Ethereum will charge for the second transaction. Check the amount and click “Confirm”.

![bridge-40](/img/40.png)

:::note
Fees for the second transaction depend on the congestion of the Ethereum network. You can wait for lower gas fees and finalize the transfer at any time. Funds are never lost. You may want to use special software to track ETH gas fees 24/7.
:::

:::tip
In case you can’t access the transfer from the bridge interface after 16 hours (e.g. if you clicked “Hide This Transfer” button before), there is this useful option Restore Transfer. You
can find more information on it in the [Advanced Features](advanced-features) chapter.
:::
