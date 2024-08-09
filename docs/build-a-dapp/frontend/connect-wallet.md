---
title: 	Connect a wallet
---

The ability for a user to connect their wallet is a core function for any Dapp. It allows users to perform tasks such as: writing to contracts, signing messages, or sending transactions.

[Wagmi](https://wagmi.sh/react/guides/connect-wallet) contains everything you need to get started with building a Connect Wallet module.
To get started, you can either use a [third-party library](#third-party-libraries) or [build your own](#build-your-own).

## Third-party Libraries

:::note
We recommend integrating [Aurora [Pass](/onboard/introduction) wallet with Web3Modal Wallet Connect solution. You can follow the [corresponding guide here](/onboard/wallets/web3modal).
:::

You can use a pre-built Connect Wallet module from a third-party library such as:

- [AppKit (known also as Web3Modal)](https://walletconnect.com/appkit) – [Aurora Pass Guide](/onboard/wallets/web3modal),
[Wallet Connect Guide](https://docs.walletconnect.com/appkit/react/core/installation)
- [RainbowKit](https://www.rainbowkit.com/) – [Guide](https://www.rainbowkit.com/docs/installation)
- [ConnectKit](https://docs.family.co/connectkit) – [Guide](https://docs.family.co/connectkit/getting-started)
- [Dynamic](https://www.dynamic.xyz/) – [Guide](https://docs.dynamic.xyz/quickstart)
- [Privy](https://privy.io) – [Guide](https://docs.privy.io/guide/react/wallets/usage/wagmi)

The above libraries are all built on top of Wagmi, handle all the edge cases around wallet connection, and provide a seamless Connect Wallet UX that you can use in your Dapp.

## Build Your Own

Wagmi provides you with the Hooks to get started building your own Connect Wallet module.
Let's take a look at the code right away:

<iframe width="700" height="500" src="https://stackblitz.com/edit/vitejs-vite-muf79v?embed=1&file=src%2FApp.tsx,src%2Fcomponents%2FConnect.tsx,src%2Fwagmi.tsx&view=editor"
 style={{display:"block", margin: "auto"}} title="Connect wallet" frameborder="auto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
 web-share" allowfullscreen></iframe>

<br></br>

:::tip
Click "Preview" button at the bottom right corner to interact with the UI of the project and to try connecting your wallet.
You can also fork the project with the bottom left "Fork on StackBlitz" button to work with it in the fullscreen mode.
:::

:::note
You can download the project locally from the widget above or fork it right away on StackBlitz platform. To run it, use: `pnpm install && pnpm run dev`
:::

The final UI of the project looks like this (and is the `Connect.tsx` component):

![dapp_wallets.png](/img/dapp_wallets.png)

:::note
You can see the same React component shown on the Preview tab of the StackBlitz widget example above.
:::

To develop the project above from scratch we need to do the following steps:

1. Configure Wagmi
2. Wrap our App component in Context Provider
3. Display Wallet Options
4. Display Connected Account

This project is realized by the three main actors:

1. [Wagmi Configuration](https://wagmi.sh/react/getting-started#create-config) in `wagmi.tsx`

```tsx [wagmi.tsx]

const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';

export const config = createConfig({
  chains: [auroraTestnet, aurora],
  connectors: [
    injected(),
    walletConnect({ projectId, showQrModal, qrModalOptions }),
    metaMask(),
    safe(),
  ],
  transports: {
    [aurora.id]: http(),
    [auroraTestnet.id]: http(),
  },
});
```

2. [useChainId](https://wagmi.sh/react/api/hooks/useChainId) and [useConnect](https://wagmi.sh/react/api/hooks/useConnect) hooks that inject
`chainId` value and `connect` function into our UI in `Connect.tsx`

```tsx [components/Connect.tsx]
export function Connect() {
  const chainId = useChainId();
  const { connectors, connect } = useConnect();

  return (
    <div className="buttons">
      {connectors.map((connector) => (
        <ConnectorButton
          key={connector.uid}
          connector={connector}
          onClick={() => connect({ connector, chainId })}
        />
      ))}
    </div>
  );
}
```

3. [useDisconnect](https://wagmi.sh/react/api/hooks/useDisconnect) hook to allow a user to disconnect from your dApp.

:::note
The detailed guide on how to write this project is [here, in official Wagmi docs](https://wagmi.sh/react/guides/connect-wallet).
:::

The project above:

1. Allows you to connect to your dApp via 4 different wallets: injected browser wallet, MetaMask, Wallet Connect and Safe Wallet (`connectors` field of Wagmi config).
2. Configures Aurora and Aurora Testnet chains to be accessible via your dApp (`chains` and `transports` fields of Wagmi config).
3. Displays account information if a user is connected by using Account component and Wagmi hooks.
