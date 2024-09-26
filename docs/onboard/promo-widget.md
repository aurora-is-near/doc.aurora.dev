---
title: "Promo Widget"
---

# Promo Widget

If you develop a DApp, you will need a way to get your users to install the Aurora Pass application on their phones. We have created a widget to simplify this step.
This modal leads a user to download the wallet application for iOS or Android by scanning a QR code:

![ap_widget_qr_and_main](/img/ap_widget_qr_and_main.png)

Users can always say they already have the wallet installed, and this popup won't be shown for them next time.

## Quick integration guide

1. Load a script from this [link](https://pass.auroracloud.dev/promo.js), and import it to your project.
2. This adds a function to the `window` object called `openPromo`.
3. To open the widget, call `window.openPromo` and pass the `onComplete` function as a parameter `window.openPromo({ onComplete: function })`
4. You can also check if the function is available before calling it `window.openPromo ? window.openPromo({ onComplete: function }) : function()`
5. Optionally, you can hide the _Update your app_ header by passing the `hideUpdateAppBlock` variable via the `config` argument:
   `window.openPromo({ onComplete: () => {...}, config: {hideUpdateAppBlock: true}})`

You can also find the same instructions [here](https://pass.auroracloud.dev/).
A more detailed example of integration is below.

## Detailed integration guide

In the case of building a React app, you can add the `promo.js` script to it by using the `useEffect` hook like this:

```jsx title="aurora-pass-example/src/App.js"
...
import { useEffect } from "react";

let scriptAdded = false;

function App() {
  useEffect(() => {
    if(!scriptAdded) {
      const script = document.createElement("script");
      script.src = "https://pass.auroracloud.dev/promo.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

 ...
}
```

:::note
We assume the project we're working on here is a default `create-react-app` application to simplify things. You can read more about it [here](https://create-react-app.dev/docs/getting-started/).
:::

Then, let's add a function `openModal` to display our Promo Widget just after the imports somewhere:

```jsx title="aurora-pass-example/src/App.js"
...
const openWeb3Modal = () => {
  alert("Just a placeholder for now. We will add Web3Modal here later.")
};

const openWidget = () => {
  window.openPromo
    ? window.openPromo({ onComplete: openWeb3Modal, config: {hideUpdateAppBlock: true} })
    : openWeb3Modal()
}
...
```

Now, we can set the `onClick` attribute of one of our UI components to display the modal. We can re-use the already existing `App-link` element to use the `openWidget` function:

```jsx title="aurora-pass-example/src/App.js"

function App() {
  ...

  return (
    <div className="App">
      <header className="App-header">
        ...
        <a
          className="App-link"
          href="#"
          onClick={openWidget}
        >
          Open Promo
        </a>
      </header>
    </div>
  );
}
```

If you click on the `Open Promo` link, you will be able to see the Promo Widget now:
![ap_widget_example_1](/img/ap_widget_example_1.png)

And then, if you click further on the 'Skip, I have a wallet' button, you will see the placeholder message about Web3Modal:
![ap_widget_example_1](/img/ap_widget_example_2.png)

You can also look at the more extensive [integration example here](/onboard/wallets/web3modal#integrate-web3modal) to learn how to add Web3Modal to your project,
particular section describing it is [here](/onboard/wallets/web3modal#add-web3modal).

### What should be called in the `onComplete` function?

The widget calls any function you pass to it. So you could pass anything to it, whether that’s opening Web3Modal or RainbowKit popups or any other function.
But it works best and is meant to be used with WebModal v3 since the modal is styled similarly.

## Examples of integration

To see the widget in use, visit one of the projects on the list:

- [Aurora+](https://aurora.plus/)
- [Pipeflare](https://pipeflare.io/flare2-token/spin)

## Troubleshooting

Please, take a look at our [Troubleshooting Page](/onboard/troubleshooting). In case you still have questions, please get in touch with our [Support Team](https://discord.gg/auroralabs)
on Discord and open a support ticket there.
