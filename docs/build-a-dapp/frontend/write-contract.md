---
title: 	Write contract
---

Writing to the contract is a very similar operation to [sending a transaction](/build-a-dapp/frontend/transactions).
In fact, it does send the transaction under the hood but provides a more convenient way to encode the `data` argument for it. Let's look at the code right away:

<iframe width="700" height="500" src="https://stackblitz.com/edit/vitejs-vite-muf79v?embed=1&file=src%2FApp.tsx,src%2Fcomponents%2FWriteContract.tsx&view=editor"
 style={{display:"block", margin: "auto"}} title="Write contract" frameborder="auto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
 web-share" allowfullscreen></iframe>

<br></br>

In the UI we will have a form to transfer Watermelon tokens to another account:

![dapp_write_contract](/img/dapp_write_contract.png)

It will call a `transfer` method on the ERC-20 contract to send the tokens. We will need to specify the contract information: hash and ABI first.
And then, do the job with the [useWriteContract](https://wagmi.sh/react/api/hooks/useWriteContract) hook:

```tsx [components/SendTransaction.tsx]
import { useWriteContract } from 'wagmi';

export function ERC20Transfer() {
  const { data: hash, writeContract, error, isPending } = useWriteContract();

  async function submit(e: FormEvent<HTMLFormElement>) {
    ...
    writeContract({
      ...contractConfig,
      functionName: 'transfer',
      args: [
        to, //recipient address
        value, //amount of WTM tokens to transfer
      ],
    });
  }

  return (
    <div className="container">
      <div className="stack">
        <div>Send Watermelons 🍉🍉🍉</div>
        <br />
        <form className="set" onSubmit={submit}>
          <input name="address" placeholder="Address" required />
          <input
            name="value"
            placeholder="Amount (Watermelons)"
            type="number"
            step="1"
            required
          />
          <button disabled={isPending} type="submit">
            {isPending ? 'Confirming...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
```

You can also use [useWaitForTransactionReceipt](https://wagmi.sh/react/api/hooks/useWaitForTransactionReceipt) hook to get the receipt and track confirmation
of the transaction as it was done in [Send Transaction](/build-a-dapp/frontend/transactions) article.

:::note
If you want to practice more, you can also read this [Wagmi tutorial](https://wagmi.sh/react/guides/write-to-contract) with minting NFTs.
:::
