---
title: "How to get NEAR transaction from the Aurora’s one?"
description: "Let's find out how to dig into Aurora transactions and get the underlying NEAR data"
date: "2023-03-30"
authors: [slava]
tags: [tips_and_tricks]
image: https://www.datocms-assets.com/95026/1682082350-na-article-cover.png
---
In this *Tips & Tricks* article, we will learn how to get a NEAR transaction hash by having the Aurora transaction's one.

<!-- truncate -->

Let's consider some random Aurora transaction for our tests, like this one: `0x36e2339784004c5dd40df74e663f1fe6683705a8ad665a05a9ad0aa4e11b559b`*.*

### Aurora Helpers

If you’re not interested in the code-solution, you can take a shortcut and use [*Aurora Helpers dApp*](https://aurora-helpers.vercel.app/aurora_to_near). Go there, paste Aurora’s hash – and you’ll get the result, e.g., for our test transaction, the result will be:

![](https://www.datocms-assets.com/95026/1679324662-screenshot-2023-03-20-at-15-03-32.png)

### NEAR Receipt: Hex

As developers, we’re eager to know how to get all that information in our code directly without using any third parties. So let’s disentangle that and find out how Aurora Helpers work underneath.

First of all, let’s configure our [*web3.js*](https://web3js.readthedocs.io/en/v1.8.2/) provider to be Aurora's mainnet endpoint and set `tx` variable:

```javascript
const mainnet = 'https://mainnet.aurora.dev';
const web3 = new Web3(new Web3.providers.HttpProvider(mainnet));

const tx = 0x36e2339784004c5dd40df74e663f1fe6683705a8ad665a05a9ad0aa4e11b559b;
```

Now, we can get the NEAR transaction receipt by getting Aurora transaction receipt information with the [\`eth_getTransactionReceipt\`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactionreceipt) EVM call:

```javascript
const getNearReceipt = async () => {
    const res = await web3.eth.getTransactionReceipt(tx);
    return res.nearReceiptHash;
};
```

By calling it, you will get the `hex-encoded` hash of the NEAR transaction receipt:

`0x583237e9ef4d449cd828ff19668baa581a5532591058d3a886af65b80df7e938`

### NEAR Receipt: Base58

But NEAR hashes should be `base58` encoded! And that is what we need to do next – let's add the `bs58` library and convert it:

```javascript
const bs58 = require('bs58');
const getNearReceiptBase58 = async () => {
   const receipt = await getNearReceipt();
   bufferHex = Buffer.from(receipt.slice(2), "hex");
   nearReceiptBase58 = bs58.encode(bufferHex);
   return nearReceiptBase58;
};
```

Then, by calling `getNearReceiptBase58` and outputting result to the console, like this: `getNearReceiptBase58().then(console.log)`.

You'll get this result: `6wHHsKvNz2uaEaTyuqTDtLdhChQNtPXSfYJQYu7LrxFy`.

### NEAR Tx Hash: Using Explorer

At this point, you can go to the NEAR Explorer, enter the receipt, and get your transaction information:

![](https://www.datocms-assets.com/95026/1679325885-screenshot-2023-03-20-at-15-24-17.png)

You can check that this is the correct transaction by scrolling down and seeing the corresponding receipt hash in the Transaction Execution Plan section:

![](https://www.datocms-assets.com/95026/1679325931-screenshot-2023-03-20-at-15-24-31.png)

### NEAR Tx Hash: Using Code

But wait – we want to code this! How do we do it? No problem – we can get a NEAR transaction by sending a call to the NEAR Explorer endpoint with the receipt hash in it. Let's use a promise-based HTTP client called [Axios](https://axios-http.com/docs/intro) for doing this:

```javascript
const axios = require('axios');
const nearExplorerEndpoint = 'https://backend-mainnet-1713.onrender.com/trpc/utils.search?batch=1';
const getNearTxHash = async () => {
   const nearReceipt = await getNearReceiptBase58();
   const payload = {
       0: {
         value: nearReceipt,
       },
   }
   const response = await axios.post(nearExplorerEndpoint, payload);
   const transactionHash = response?.data[0]?.result?.data?.transactionHash;
   return transactionHash;
}
```

As you can see, you need to dig into the response result a little bit (in line 11), but we have already done that for you. By running this last script, you will get the final result which is:

`7e5nRG8bYkJt1xRgBC38Veh2sA3fDrdepvPxHckojnut`

### Conclusion

We've discovered today how to convert Aurora transactions into the corresponding NEAR transactions in 3 different ways (AuroraHelpers, Code+Explorer, Plain Code).

By retrieving a NEAR transaction hash, you can now access all of the associated NEAR information behind it. It could be useful, for example, to understand how an Aurora Rainbow Bridge transaction or Aurora Engine works underneath. But that is the matter for the future articles to come!\
\
I hope you have enjoyed this short tutorial! Leave any questions or comments below. See you next time!
