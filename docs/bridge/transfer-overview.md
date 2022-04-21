---
title: Transfer Overview
sidebar_position: 2
---

The **New Transfer page** is the **default page** that shows up when you open the bridge website.
If you already have transactions, then the list of transfers would be the default page and you’ll need to click the **New Transfer** button on the left in order to open the transfer form.

![rainbow_bridge_08](/img/rainbow_bridge_08.png)

:::note
There are two ways you can move funds: you can **Bridge** them or you can Send them.
:::

The **Bridge** option allows you to move funds within DIFFERENT networks, e.g. if you choose to transfer FROM Ethereum, you’ll notice that you’ll only be able to select Aurora or NEAR as the destination network while the Ethereum network will be grayed out.

![rainbow_bridge_09](/img/rainbow_bridge_09.png)

There is also the box **I'm transferring to an address other than my own**.
This feature allows users to send funds to someone else’s address in a different network. All you have to do is to check the box and paste another person’s wallet address into the “Destination Address” field.

![rainbow_bridge_10](/img/rainbow_bridge_10.png)

The default bridge version allowed sending funds only between different networks as outlined above. However — understandably — sometimes we just want to move tokens from one wallet to another within the SAME network. With this in mind, we came up with the **Send** option.
To start a transfer, click the Send tab, select “Transfer From” and “Transfer To”, enter a wallet address of the respective network into the “Destination Address” field and click “Continue”.

![rainbow_bridge_11](/img/rainbow_bridge_11.png)

Reading the network and user-wallet status by MetaMask can take a few moments. During this time we show some ghosted token placeholder icons, until we have the data necessary to show real token icons.
:::note
The bridge displays icons for just those tokens for which you have a balance in your wallet, e.g. in the case below it’s Aurora, NEAR, and ETH.
:::

![rainbow_bridge_12](/img/rainbow_bridge_12.png)

Of course, we also provide a link to show the user all tokens that the bridge supports (**Show All Tokens**), and on that screen we gray out all tokens for which the user does not have a balance (since they can not be selected).
You can either select a token icon or paste the token address into the Search field.
:::tip
The token list can also be found at https://aurora.dev/tokens.
:::

![rainbow_bridge_13](/img/rainbow_bridge_13.png)

From the very first screen, during the entire process we also show **context-sensitive FAQs** that appear in the interface, in specific places. These are little prompts that serve as useful reminders and warnings to ensure that you are fully informed of the bridge features and pitfalls.

![rainbow_bridge_14](/img/rainbow_bridge_14.png)

:::danger VERY IMPORTANT
No transfers can be canceled in the current bridge version. Please be careful when approving/confirming transactions. For more information on why transactions cannot be canceled, please read https://help.aurora.dev/article/105-why-cant-cancel.
:::danger
