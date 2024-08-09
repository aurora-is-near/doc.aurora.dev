---
title:   Send transactions
---

In this article, we will teach you how to send transactions in Wagmi. We will re-use the project from the [Connect Wallet guide](/build-a-dapp/frontend/connect-wallet)
and use the [useSendTransaction](https://wagmi.sh/react/api/hooks/useSendTransaction) and [useWaitForTransactionReceipt](https://wagmi.sh/react/api/hooks/useWaitForTransactionReceipt) hooks.

## Code Example

We will focus our attention on the `SendTransaction` component, which is essentially just an HTML Form allowing us to send some ETH to other accounts:

![dapp_eth_form](/img/dapp_eth_form.png)

After you enter the values into it and click the "Send" button – you will get a transaction to sign in your wallet and a link to the [Explorer](https://explorer.testnet.aurora.dev/)
with the transaction hash will appear below that form.

Let's take a look at the code sandbox here:

<iframe width="700" height="500" src="https://stackblitz.com/edit/vitejs-vite-muf79v?embed=1&file=src%2FApp.tsx,src%2Fcomponents%2FSendTransaction.tsx&view=editor"
 style={{display:"block", margin: "auto"}} title="Connect wallet" frameborder="auto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
 web-share" allowfullscreen></iframe>

<br></br>

## useSendTransaction hook

To send a transaction you will need to use [useSendTransaction](https://wagmi.sh/react/api/hooks/useSendTransaction) hook like this:

```tsx [components/SendTransaction.tsx]
import { useSendTransaction } from 'wagmi';

export function YourComponent() {
  const {
    data: hash, // transaction hash
    error, // used to catch some errors
    isPending, // check if the transaction is in Pending state
    sendTransaction, // function to call to send a transaction
  } = useSendTransaction();

  ...
  async function submit(e: FormEvent<HTMLFormElement>) {
    ...
    sendTransaction({ to, value: parseEther(value) });
  }

  ...
  return
      //calling sendTransaction function onSubmit
    <form className="set" onSubmit={submit}>
      <input name="address" placeholder="Address" required />
      <input name="value" ... required/>
    </form>
}
 ```

 The main actor here is `sendTransaction` function. You can read more about its parameters [here](https://wagmi.sh/core/api/actions/sendTransaction).
 You can also pass [data](https://wagmi.sh/core/api/actions/sendTransaction#data) argument to it to call a contract write method.
 Please read more about how to encode that field [in the official Ethereum docs](https://ethereum.org/en/developers/docs/transactions/#the-data-field).

:::note
You can read more about catching errors and using transaction statuses in the [official Wagmi guide](https://wagmi.sh/react/guides/send-transaction).
Or just read the code example in StackBlitz widget above.
:::

## useWaitForTransactionReceipt hook

After sending a transaction - we need to wait to it to be finalized or, in other words, wait for the receipt.
That is the moment we will want to use [useWaitForTransactionReceipt](https://wagmi.sh/react/api/hooks/useWaitForTransactionReceipt) hook.

The usage example could look like this:

```tsx [components/SendTransaction.tsx]
import { useWaitForTransactionReceipt } from 'wagmi';

export function YourComponent() {
  const {
    data: hash, // transaction hash
    ...
  } = useSendTransaction();

  const { data: receiptData, isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash, // the hash from SendTransaction hook is used here
    });

  ...
  return
      //using isConfirming and isConfirmed statuses in UI to track progress
      <>
      {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
      </>
}
 ```

When a transaction is accepted and included in a block you can find the receipt information in the [data](https://wagmi.sh/react/api/hooks/useWaitForTransactionReceipt#data) field.

## Your transaction in Explorer

After the transaction will be processed, you will get a link to the Explorer page with all information about it:

![dapp_tx_sent](/img/dapp_tx_sent.png)

If you [click on it](https://explorer.testnet.aurora.dev/tx/0x0b94a546ffc3754015e01980519763ef43428d876e4c423c2ba9c2d1ba6b2249), you will get an Explorer window opened in a new tab:

![dapp_explorer_sendtx](/img/dapp_explorer_sendtx.png)

You will see all the info about the transaction there and can also track your activity there.
