---
sidebar_label: 	Advanced features
title: Advanced Features
---

Now let’s cover some less popular but also useful bridge features.

## Restore Transfer
This option is useful if you accidentally (or on purpose) hide a transfer and have difficulty finding it later.
It also comes in handy when sometimes the bridge interface would say, “Processing transfer… Should have completed about 2 hours ago.” It does not mean that the transaction hasn’t been completed.
More often than not it means that the bridge interface hasn't been updated yet.

1. To access the option, either click “Restore Transfer” in the upper right corner on the bridge page or enter it manually as rainbowbridge.app/restore.

![rainbow_bridge_46](/img/rainbow_bridge_46.png)

2. Paste the first transaction ID into the field on the page below to get access to the transfer.

The system will automatically locate it, you just need to click “Restore Transfer”.
You’ll then get redirected to the bridge page where you can see the transaction and click “Finalize Transfer” in order to get access to your funds, if needed.

![rainbow_bridge_47](/img/rainbow_bridge_47.png)

## Security
As its name suggests, this option helps you understand how to secure your assets. This applies to transfers of ERC-20 tokens like USDC **FROM** Ethereum.

![rainbow_bridge_48](/img/rainbow_bridge_48.png)

It explains the difference between limited and unlimited approval in MetaMask.
Approval in this case refers to the amount of assets that you are allowed to transfer before the bridge asks you for approval again (in case the amount is set to limited).

The page provides a pretty elaborate explanation and examples. If you still have questions, feel free to use the Questions button or our public channels to obtain clarification.

![rainbow_bridge_49](/img/rainbow_bridge_49.png)

## Deploy Token
This feature is useful if you want to transfer a token that has not been added to the bridge yet.

![rainbow_bridge_50](/img/rainbow_bridge_50.png)

Once you paste the token address, you’ll be redirected to the page with detailed instructions on how to deploy the token and have it fully integrated into the bridge.

![rainbow_bridge_51](/img/rainbow_bridge_51.png)

## Status communications

[https://rainbowbridge.app/status](https://rainbowbridge.app/status)

Sometimes issues come up that interrupt the smooth operation of the bridge, such as DDoS attacks. In order to keep the users up to date, we implemented a status page driven by the CMS,
on which we display the full-text of the latest update, and zipped-up (but expandable) summaries of all past updates.

![rainbow_bridge_52](/img/rainbow_bridge_52.png)

Whenever there's a status alert—which can be <span style={{color: 'red', fontWeight: 'bold'}}>red</span> (alert),
 <span style={{color: '#F9DA78', fontWeight: 'bold'}}>yellow</span> (warning)
 or <span style={{color: 'green', fontWeight: 'bold'}}>green</span> (all good)—we display a colored banner in the header throughout the entire bridge interface.

Green banners are displayed only for 24 hours, and then disappear from the main page (but remain on the historical status page).

That is all, friends! We hope you found this manual useful. Happy bridging!

P.S. If you happen to be interested in what’s going on behind the scenes while you are flowing through a transfer, please read [this](https://aurora.dev/blog/2021-how-the-rainbow-bridge-works).

If you just want more detailed information on bridge features, please reference our [user knowledge base](https://help.aurora.dev).
