---
title: "Integrating From Scratch"
sidebar_position: 4
---


In this article, we will go through a development of a simple [Web3Modal](https://docs.walletconnect.com/web3modal/about) example to use Aurora Pass in a dApp.

## Create a simple React app

To start, let's create a React application by using `create-react-app`. Of course, you can just use your already existing codebase instead, we're doing this just for the demonstration purposes.
You will need to run in your terminal:

```bash
npx create-react-app aurora-pass-example
cd aurora-pass-example
npm start
```

Your React app will be running now at `http://localhost:3000`, just open that link in you browser to see the UI.
You can read more about the `create-react-app` [here](https://create-react-app.dev/docs/getting-started/), in the case you want to learn more details.

## Add Aurora Promo Widget

We have talked about the Promo Widget [before](/aurora-cloud/mobile-wallet/promo-widget), but now it is time to try it in practice.

To add the `promo.js` script to our React app we can use the `useEffect` hook like this:

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

Now, let's add a function `openModal` to display our Promo Widget just after the imports somewhere:

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

Now, we can set the `onClick` attribute of the already existing `App-link` element to use `openWidget` function:

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

If you click on `Open Promo` link, you will be able to see the Promo Widget now:
![ap_widget_example_1](/img/ap_widget_example_1.png)

And then, if you click further on the 'Skip, I have a wallet' button, you will see the placeholder message about Web3Modal:
![ap_widget_example_1](/img/ap_widget_example_2.png)

Let's add Web3Modal to it now.

## Adding Web3Modal

We will follow the [Web3Model Wagmi v2 documentation](https://docs.walletconnect.com/web3modal/react/about?platform=wagmi) closely here.

1). First, let's add some new packages to the project:

```bash
npm install @web3modal/wagmi@4.0.0-alpha.0 wagmi viem @tanstack/react-query
```

2). Let's signup now at [WalletConnect Cloud](https://cloud.walletconnect.com/sign-in) to get a WalletConnect `projectId`. You will get some random string like `4aee871f7a80f1ff5c7892226bd3ascd`

3). Let's create a file with a Web3Modal component:

```jsx title="aurora-pass-example/src/Web3Modal.js"
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiProvider } from 'wagmi'
import { aurora, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Setup queryClient
const queryClient = new QueryClient()

// Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID_GOES_HERE';

// Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, aurora]

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata
})

// Create modal
createWeb3Modal({ wagmiConfig, projectId, chains})

// Export component
export default function Web3Modal({ children }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
```

:::note

Please note that it could be important for Aurora chain to be the first one in the list of `chains` for everything to work properly with AuroraPass and Web3Modal v2:

```jsx
/*You can do this */
const chains = [auroraChain, ethereumChain, bscChain];

/*But not this*/
const chains = [ethereumChain, auroraChain, bscChain];
```

To allow the second situation you can use `defaultChain` option while setting up your Web3Modal component.
You can read more [here](https://docs.walletconnect.com/web3modal/react/options#defaultchain).
:::

4). Now, we can use the Web3Modal component in our App. First of all notice that we need to wrap into it the part of the App using the `wagmi` hooks. In this case we wrapping it fully into it:

```jsx title="aurora-pass-example/src/App.js"

function App() {
  ...

  return (
    <div className="App">
      <Web3Modal>
        <header className="App-header">
          ...
        </header>
      </Web3Modal>
    </div>
  );
}
```

But we haven't displayed the popup yet. How can we do it?

5). To open the popup, let's use `useWeb3Modal` hook inside the App component, to be more specific – the `open` function it provides.
We also need to edit a bit our old `openWidget` function to accept `onComplete` argument, and pass there the `open` function:

```jsx title="aurora-pass-example/src/App.js"
import { useWeb3Modal } from '@web3modal/wagmi/react';

const openWidget = (onComplete) => {
  window.openPromo
    ? window.openPromo({ onComplete: onComplete, config: {hideUpdateAppBlock: true} })
    : onComplete()
}

function App() {
  ...
  
  const { open } = useWeb3Modal()
  return (
    <div className="App">
      <Web3Modal>
        <header className="App-header">
          ...
          <a
            className="App-link"
            href="#"
            onClick={() => openWidget(open)}
          >
            Open Promo
          </a>
          ...
        </header>
      </Web3Modal>
    </div>
  );
}
```

You can also safely remove the `openWeb3Modal` function we have had previously with just a placeholder alert in-there.

If you will go into your App now, you will be able to see the WalletConnect popup appearing after you click 'Skip' button in the AuroraPass widget:

![wc_default_modal](/img/wc_default_modal.png)

But, it won't contain the AuroraPass yet. Let's add it there.

6). To do this, we need to modify the `Web3Modal.js` file a bit and add some options to it:

```jsx title="aurora-pass-example/src/Web3Modal.js
let options = {
    defaultChain: aurora, // we can set it to make sure we are using Aurora mainnet by default
    includeWalletIds: [
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', //Metamask
        '76260019aec5a3c44dd2421bf78e80f71a6c090d932c413a287193ed79450694', //AuroraPass
    ]};

// pass the 'options' here as the last argument
createWeb3Modal({ wagmiConfig, projectId, chains, ...options})

```

If we re-open the Web3Modal now, we will see AuroraPass wallet there:

![wc_ap_visible](/img/wc_ap_visible.png)

Now, we can try connecting our wallet, via the QR code:

![wc_ap_qr](/img/wc_ap_qr.png)

But we won't see if the connection was successful yet, because we don't have anything to display that. The popup will just close and we will see the App's initial screen:

![wc_ap_connected_no_ui](/img/wc_ap_connected_no_ui.png)

7). Let's fix it by replacing the 'Edit src/App.js and save to reload' label with a simple `Account` component showing us if we have connected to the dApp already.
We can do that inside the App component file right away by using `useAccount` wagmi hook:

```jsx title="aurora-pass-example/src/App.js
...
import { useAccount } from 'wagmi'
...

function Account () {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>
  if (isDisconnected) return <div>Disconnected</div>
  return <div>{address}</div>
}

function App() {
   ...
   return (
    <div className="App">
      <Web3Modal>
        <header className="App-header">
          ...
          <!-- We have removed a paragraph here and placed the Account component below>
          <Account/>
           <!-- And also renamed the 'Open Widget' button to 'Connect' one>
          <a ...> Connect </a>
          ...
        </header>
      </Web3Modal>
    </div>
  );
}
```

Now we're able to see the status of our connection on the main screen:

![wc_ap_account](/img/wc_ap_account.png)

And the corresponding account after we've connected via the Web3Modal to the dApp:

![wc_ap_connected_ui.png](/img/wc_ap_connected_ui.png)

Congratulations on the completing your first AuroraPass integration!

If you still have some questions, please contact our team via [Discord](https://discord.com/invite/dEFJBz8HQV) by opening a support ticket there.
