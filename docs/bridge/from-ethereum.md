---
sidebar_label: 	From Ethereum
title: Bridge from Ethereum
---

Transfers from the Ethereum network are similar to those between Aurora/NEAR yet a little more complex when it comes to moving ERC-20 tokens.

1. Let’s start with a simpler transfer of the ETH token (it is not ERC-20—just a friendly reminder)
from Ethereum to Aurora.
Select Ethereum as the “From” network, and Aurora as the “To” network. “Connect” both wallets, and click “Continue”.

:::tip
If you have trouble connecting networks, please refer to the [Bridge Overview](introduction) section.
:::

![rainbow_bridge_20](/img/rainbow_bridge_20.png)

2. Choose tokens you want to transfer, “Enter Amount” and “Click Continue”.
We show token balance on the destination network, as this is often useful in calculating how much needs to be transferred.

We also provide a one-click helper to allow you to send the full token balance in the transfer.

...and in the case that you’ve chosen ETH, we show you a warning that you may want to keep a bit around for gas fees!

:::tip
If you are wondering why you only see specific tokens, please refer to the [Transfer Overview](introduction) chapter for more information.
:::

![rainbow_bridge_21](/img/rainbow_bridge_21.png)

3. On the next screen, check the transfer details, and click “Confirm Transfer”.

![rainbow_bridge_22](/img/rainbow_bridge_22.png)

4. Check the total amount that will be spent during the transfer (Amount + Gas) and click “Confirm” in MetaMask.

![rainbow_bridge_23](/img/rainbow_bridge_23.png)

5. Voila! The transfer has started.

:::tip
The bridge informs you that the transfer may take up to 10 minutes.
:::

![rainbow_bridge_24](/img/rainbow_bridge_24.png)

From here, you can either click “Go To My Transfers” or close the page.
If you choose to go to the list of your transfers,
please refer to the [Pending and Completed Transfers](introduction) section for more information about what details you can get from this page.

Just when you thought we were about to finish this chapter, there is one **IMPORTANT** point that we want to draw your attention to. Yes—with regard to **ERC-20** tokens transfer mentioned above.

​When making a transfer of **ERC-20** tokens from Ethereum to Aurora, **two steps—Approve and Confirm**—need to be **completed before the transfer** is started.
This is different from a transfer from Aurora TO Ethereum where you need to confirm
the transfer after the approval step has been completed (16 hours later). You’ll read more about this in the next chapter featuring transfers to Ethereum.

1. First you “Approve Transfer” on the bridge page.

![rainbow_bridge_25](/img/rainbow_bridge_25.png)

2. Then you approve it in MetaMask.

![rainbow_bridge_26](/img/rainbow_bridge_26.png)

3. … And wait for the approval to be processed.

![rainbow_bridge_27](/img/rainbow_bridge_27.png)

4. Once the approval step is over, you’ll have to “Confirm Transfer” on the bridge page…

![rainbow_bridge_28](/img/rainbow_bridge_28.png)

5. … And in MetaMask.

![rainbow_bridge_29](/img/rainbow_bridge_29.png)

6. Phew! Finally your transfer is under way. Again, the bridge will prompt you that transfers from Ethereum to Aurora take about 10 minutes.

:::note
If you have issues **accessing your funds** after the transfer or the transfer looks like it failed, most likely you have completed the Approve transaction only.
**You can start a bridge transfer again and the Approve step will not be needed because it is already completed.**
:::

And… on a different
**NOTE** Let’s make sure to check out the **Security** option that is directly relevant to ERC-20 tokens. You’ll find detailed information in the [Advanced Features](advanced) chapter.

![rainbow_bridge_30](/img/rainbow_bridge_30.png)
