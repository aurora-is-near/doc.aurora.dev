---
title: "Promo Widget"
sidebar_position: 2
---

# Promo Widget

![ap_widget](/img/ap_widget.png)

We have already created a widget to ease the onboarding of users for your dApp. It leads them to download the wallet application for iOS or Android by scanning a QR code:

![ap_widget_qr](/img/ap_widget_qr.png)

You download the code for the widget and find the instructions here: https://pass.auroracloud.dev/
For your convenience, we will also place the instructions below.

## Quick integration guide

1. Load the script from https://pass.auroracloud.dev/promo.js
2. When the script is ready, it adds a function to the window called `openPromo`.
3. To open the widget, call `window.openPromo` and pass the `onComplete` function as a parameter `window.openPromo({ onComplete: function })`
4. You can also check if the function is available before calling it `window.openPromo ? window.openPromo({ onComplete: function }) : function()`
5. Optionally, you can hide the _Update your app_ header by passing the `hideUpdateAppBlock` variable via `config` argument: `window.openPromo({ onComplete: () => {...}, config: {hideUpdateAppBlock: true}})`

You can also take a look at the [integration example here](/aurora-cloud/mobile-wallet/integration-example).

## Examples of integration

To see the widget in use, visit one of the projects on the list:
 - [Aurora+](https://aurora.plus/)
 - [Pipeflare](https://pipeflare.io/flare2-token/spin)

## What should be called in onComplete function?

The widget calls any function you pass to it. So you could pass anything to it, whether that’s opening WalletConnect v2 or v1 or any other function.
But, it works best and is meant to be used with WalletConnect v2 since the modal is styled in the same style.