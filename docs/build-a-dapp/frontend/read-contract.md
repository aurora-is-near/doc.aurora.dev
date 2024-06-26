---
title: 	Read contract
---

We will use an instance of an already deployed [Watermelon ERC-20 token](https://explorer.testnet.aurora.dev/address/0xF257a66Ddf715049E32aEe591Dc5Ef107B9d9340)
from our [previous article](/build-a-dapp/contracts/erc-20).

:::note
If you want to test the ERC-20 transfers in the [Write Contract](#write-contract) section below – please go through [the ERC-20 tutorial](/build-a-dapp/contracts/erc-20),
and deploy your own Watermelon contract to mint tokens to your account and use them there.
:::

For the quickstart you can just read through the code here:

<iframe width="700" height="500" src="https://stackblitz.com/edit/vitejs-vite-muf79v?embed=1&file=src%2FApp.tsx,src%2Fcomponents%2FReadContract.tsx&view=editor"
 style={{display:"block", margin: "auto"}} title="Read Contract" frameborder="auto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
 web-share" allowfullscreen></iframe>

<br></br>

Our goal is simple, call the `balanceOf` function on the ERC-20 contract to get our Watermelon balance:

![dapp_read_contract](/img/dapp_read_contract.png)

We do this by specifying the contract information:

```tsx [components/ReadContract.tsx]
import { erc20Abi } from 'viem';

const erc20Address = '0xF257a66Ddf715049E32aEe591Dc5Ef107B9d9340';
const contractConfig = {
  abi: erc20Abi,
  address: erc20Address,
};

```

:::note
The core part of it is the contract's ABI. If you don't know what is it and where to get it, please read these articles:
 [1](https://www.quicknode.com/guides/ethereum-development/smart-contracts/what-is-an-abi), [2](https://docs.blockscout.com/for-users/api/rpc-endpoints/contract#get-abi-for-a-verified-contract),
 [3](https://docs.soliditylang.org/en/latest/abi-spec.html). In simple terms, it allows communication with a contract and shows what its methods look like.
:::

After that, we just need to add [useReadContract](https://wagmi.sh/react/api/hooks/useReadContract) Wagmi hook to call a `balanceOf` function:

```tsx [components/ReadContract.tsx]
export function ERC20Balance() {
  ...
  const {
    data: balance,
    error,
    isPending,
  } = useReadContract({
    ...contractConfig,
    functionName: 'balanceOf',
    args: [address],
  });

  if (isPending) return <div>Loading...</div>;

  if (error)
    return (
      <div>Error: {(error as BaseError).shortMessage || error.message}</div>
    );

  return (
    <div className="container">
      Your 🍉Watermelon🍉 Balance: {balance?.toString()}WTM
    </div>
  );
}
```
