---
title: Pending and Completed Transfers
sidebar_position: 6
---

Great user experience doesn't stop after the transfer is initiated or completed.
As you can see, we visually separate pending from completed transactions, to draw the user's focus to those transactions that need attention.
For **pending transactions**, we visually indicate the transfer direction.
We allow the pending section of the screen to scale and scroll horizontally. Above you can see that I have one pending transaction.

![bridge-41](/img/41.png)
![bridge-42](/img/42.png)

For **completed transfers**, we emphasize the token icons and amounts, and visually indicate the direction of transfer.
We always ensure making a new transaction is readily available in the upper left.

![bridge-43](/img/43.png)

If you navigate to the **three dots next to a transfer**, you’ll be able to:
* View the source transaction in an explorer.
* Copy the transaction ID of the source transaction.
Copy the contract address of the token on the destination network.
* Add the destination token to MetaMask, so that it appears in the asset list.
* Finally, hide a transfer. Sometimes there are transactions that will forever appear pending on the blockchain, and I'd like to simply remove them from the bridge interface.

![bridge-44](/img/44.png)

### Transaction filters

For a multi-chain product like Rainbow Bridge 2.0, that allows transfers with up to six different direction combinations, you're going to need some filters to quickly find that historical transaction you're after. On that, we've got you covered!
There are checkboxes that allow you to choose transfers based on from and/or to what network they were made.

![bridge-45](/img/45.png)
