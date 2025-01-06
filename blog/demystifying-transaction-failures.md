---
title: "Demystifying Transaction Failures"
description: "Getting transaction receipts and parsing Aurora Engine's transaction statuses"
date: "2023-03-30"
authors: [slava]
tags: [tips_and_tricks]
image: https://www.datocms-assets.com/95026/1682082259-dtf-article-cover.png
---
In this blog post, I want to discuss transaction failures on the Aurora blockchain and guide developers in understanding what exactly has happened with your transaction.

*tl;dr: just use [**Aurora Helpers dApp**](https://aurora-helpers.vercel.app/aurora_to_near) and get the Near transaction error code there*

<!-- truncate -->

### *Errors and Explorer*

One common challenge that developers may face when dealing with transaction failures is the small amount of information provided by [*Block Explorer*](https://explorer.mainnet.aurora.dev/). While some errors may be clearly displayed in it, and at least give some clue about the problem:

![](https://www.datocms-assets.com/95026/1679334253-screenshot-2023-03-16-at-20-55-40.png)

Others may not provide any information at all, leaving developers wondering what went wrong and how to fix it:

![](https://www.datocms-assets.com/95026/1679334351-screenshot-2023-03-16-at-20-56-46.png)

Let's take one of those transactions which fai `Error: Unknown`, e.g., `0x36e2339784004c5dd40df74e663f1fe6683705a8ad665a05a9ad0aa4e11b559b`:

![](https://www.datocms-assets.com/95026/1679336814-screenshot-2023-03-20-at-18-25-56.png)

### Aurora Helpers Tool

In the case of an `Error: Unknown,` you just could go to the [*Aurora Helpers dApp*](https://aurora-helpers.vercel.app/aurora_to_near) and enter your transaction hash there to get the corresponding Near Receipt/Transaction:

![](https://www.datocms-assets.com/95026/1679324662-screenshot-2023-03-20-at-15-03-32.png)

Below you will see the transaction status:

![](https://www.datocms-assets.com/95026/1679350478-screenshot-2023-03-20-at-22-14-25.png)

That is it. The task is solved. You can see in Aurora Helpers directly what this status means, but we will talk a little more about those codes in the next section.

### Error Types

Those `07 03` numbers correspond to the `status` field of the Aurora Engine's transaction. The First number indicates the[Aurora Engine API version](https://github.com/aurora-is-near/aurora-engine/pull/299/files#diff-a0e4fe79c7aa101e4b4e969318e18bb3854f0f8607e4b56d5665e131f98fdfa8R116). And the second one corresponds to the [statuses](https://github.com/aurora-is-near/aurora-engine/blob/a00df8e7d83ae49c035348111cc89be28cb93dab/engine-types/src/parameters/engine.rs#L19-L26) which could transactions have inside the Engine after execution.

Let's compile them into the list below:

* 00 – Succeed: transaction has been executed successfully.
* 01 – Revert: transaction has been reverted, most likely because of internal contract terms.
* 02 – OutOfGas: execution ran out of gas.
* 03 – OutOfFund: not enough funds to start the execution.
* 04 –OutOfOffset: an opcode accesses external information, but the request exceeds the offset limit.
* 05 – CallTooDeep: call stack is too deep.

We can create the enum map inside our code to convert easily between codes and error names:

```javascript
const TxErrors = {
  Succeed: 0,
  Revert: 1,
  OutOfGas: 2,
  OutOfFund: 3,
  OutOfOffset: 4,
  CallTooDeep: 5
};
```

You can use better-styled enums by using Enumify or just using Object.Freeze(), if you're interested – read more [here](https://masteringjs.io/tutorials/fundamentals/enum). But first, let's find out how to get this status field using a NEAR RPC request. We will use a simple Node.js code snippet to do this.

### Calling NEAR RPC

First, we will need the `getNearTxHash()` function from this article to get the corresponding NEAR transaction hash: [How to get NEAR transaction from the Aurora’s one?](/blog/convert-aurora-transaction-into-near-s-one). We are assuming that this code is already written in your code editor.\
\
Second, we will use this helper function to convert `base64` encoding into `decimal` format:

```javascript
function base64ToDecimal(str) {
   const text = Buffer.from(str, 'base64').toString('ascii');
   
   const decimalArray = []

   for (let i in text) {
     decimalArray.push(text.charAt(i).charCodeAt(0))
   }
 
   return decimalArray;
 }
```

We're ready to query the NEAR RPC node (you can get endpoints [here](https://docs.near.org/api/rpc/setup)) using the Axios HTTP client. Notice that we're using `archival-rpc` here to query also historical data (older than  [epochs](https://docs.near.org/concepts/basics/epoch) or ~2.5 days):

```javascript
const getTransactionStatus = async () => {
   const hash = await getNearTxHash();
   const nearRPC = 'https://archival-rpc.mainnet.near.org';

   const response = await axios.post(nearRPC, {
       jsonrpc: '2.0',
       method: 'tx',
       params: [hash, 'aurora'],
       id: 1,
   })

   const status = response?.data?.result?.status?.SuccessValue
   const sliced = base64ToDecimal(status).slice(0, 2));
   /*just for demonstration purposes*/
   console.log('status', status);
   console.log('status', base64ToDecimal(status));
   console.log('status', sliced);
   return sliced;
 }

 getTransactionStatus();
```

By running the code above you will get this output:

```bash
status BwMAAAAAAAAAAAAAAAA=
status [
  7, 3, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0
]
status [ 7, 3 ]
```

\
As you can see, we have a `base64` encoded status field in the first line. Then we decode it into decimals and, after it – slice the first two numbers (others are not in use right now). They're precisely the ones we've been expecting! We have an `OutOfFund` error. Now we can use the JSON map from the beginning of the article `TxErrors` to convert transaction status into a readable format:

```javascript
getTransactionStatus().then((status) => {
  for (var key in TxErrors) {
      if (TxErrors[key] == status[1]) {
          console.log("Transaction has status: " + key);
      }
  }
});
```

### Final Thoughts

In this post, we've learned how to get the info about Aurora Engine transactions errors which sometimes could be hidden from the naked eye inside the corresponding NEAR transaction.\
And all of that was done purely with JS code.\
\
I hope you had fun while reading this! Leave us your feedback, comments, and thoughts below.
