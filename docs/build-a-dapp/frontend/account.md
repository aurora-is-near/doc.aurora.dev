---
title:   Get account data
---

We can re-use the project from the [Connect Wallet](/build-a-dapp/frontend/connect-wallet) article to demonstrate how to get the basic account information about your user.

We will get the chain information, address and the native coin balance. The final result will look like this:

![dapp_account_info.png](/img/dapp_account_info.png)

:::note
You can see the same React component shown on the Preview tab of the StackBlitz widget example below, after you connect your wallet to it.
:::

We will focus on the `Account` component code in this article:

<iframe width="700" height="500" src="https://stackblitz.com/edit/vitejs-vite-muf79v?embed=1&file=src%2FApp.tsx,src%2Fcomponents%2FAccount.tsx&view=editor"
 style={{display:"block", margin: "auto"}} title="Connect wallet" frameborder="auto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
 web-share" allowfullscreen></iframe>

## Account data

 To get the account data all you need is Wagmi's [useAccount](https://wagmi.sh/react/api/hooks/useAccount) hook:

 ```tsx [components/Account.tsx]
 import { useAccount } from 'wagmi';

 export function Account() {
  const { address, connector, chain } = useAccount();
  ...
  <div className="stack">
    {address && <div className="text">{formattedAddress}</div>}
    <div className="subtext">
      Connector: {connector?.name}
      <br></br>
      {chain && <span> Chain: {chain.name} </span>}
      <br></br>
       ...
      </div>
  </div>
}
 ```

 You can get the user address, the connector they are using and the chain they are connected to.
 There are more fields go get from it, please read [the UseAccountReturnType object documentation here](https://wagmi.sh/react/api/hooks/useAccount#return-type) to learn more.

## Balance of native token

To get a balance of ETH (or any other native token), you need to use [useBalance](https://wagmi.sh/react/api/hooks/useBalance) hook:

  ```tsx [components/Account.tsx]
 import { useBalance } from 'wagmi';

 export function Account() {
  const balance = useBalance({ address: address });
  ...
  //to display the value, you need to access the formatted field via .data.formatted
    {balance && <span> Balance: {balance.data.formatted} ETH</span>}
  ...
 }
```

As you can see, to display the value, you need to access the formatted field via `.data.formatted`. You can read more about [the UseBalanceReturnType structure here](https://wagmi.sh/react/api/hooks/useBalance#return-type).

:::note
You can also just use `console.log` for such objects to see their structure in your browser console right away.
:::

We will talk about how to get balances of ERC-20 tokens in the next article, because to do that you will need to read from the token contract directly.
