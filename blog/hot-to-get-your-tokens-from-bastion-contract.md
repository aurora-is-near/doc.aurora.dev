---
title: "How to get your tokens from Bastion contracts?"
description: "In this article, you will learn how you can retrieve the stables from Bastion by using Aurora Explorer to call its smart contracts"
date: "2024-05-17"
authors: [slava]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1715949186-bastion.png
---
Recently, we became aware of this issue and the lack of a way to do it in the Bastion UI, so we decided to create a tutorial for everyone to use independently. Big thanks to the people in the community who helped me create and test this tutorial and provided invaluable insights and feedback!

To formulate the problem more precisely, a user has some `cUSDCcUSDTLP` tokens and wants to convert these back to stables. The Bastion project's UI doesn't allow this today, so the only way is to call smart contracts directly.

We will go through the next steps:

* What contracts should we call?
* What method should we call, and how?
* How to convert `cUSDC` and `cUSDT` into regular stables?

We will use the most convenient way for users to interact with smart contracts—the Explorer. However, devs can always write a script to perform the steps described in this article with Ethers or Web3.js.

Let's go!

<!-- truncate -->

## What contracts?

The main actor of this article will be [`SwapFlashLoan` contract](https://explorer.aurora.dev/address/0x6287e912a9Ccd4D5874aE15d3c89556b2a05f080?tab=write_contract):

![](https://www.datocms-assets.com/95026/1715902943-screenshot-2024-05-17-at-00-39-24.png)

The plan is:

1. Approve [cUSDCcUSDTLP token](https://explorer.aurora.dev/address/0x0039f0641156cac478b0DebAb086D78B66a69a01?tab=write_proxy) to be used by the `SwapFlashLoan` contract.
2. Get cUSDC and cUSDT from `SwapFlashLoan`.
3. Redeem [cUSDC](https://explorer.aurora.dev/token/0xe5308dc623101508952948b141fD9eaBd3337D99) and [cUSDT](https://explorer.mainnet.aurora.dev/address/0x845E15A441CFC1871B7AC610b0E922019BaD9826) from their contracts to get stables.

## Approve cUSDCcUSDTLP

Let's start with connecting your wallet. To do this, please open [cUSDCcUSDTLP token contract](https://explorer.aurora.dev/address/0x0039f0641156cac478b0DebAb086D78B66a69a01?tab=write_proxy) and click Contract -> Write Contract -> Connect Wallet:

![](https://www.datocms-assets.com/95026/1715948365-screenshot-2024-05-17-at-13-19-16.png)

Then you will see the next popup to connect your wallet:

![](https://www.datocms-assets.com/95026/1715903570-screenshot-2024-05-17-at-00-52-39.png)

We recommend using [the Aurora Pass wallet](https://auroracloud.dev/pass), which you can connect via the Wallet Connect option above and a QR code. It offers 50 free transactions a month on the Aurora blockchain and is a very user-friendly mobile wallet.

After connecting it, we're ready to move further.\
\
If you scroll down, you will see the contract methods, and here is the one we need – `approve` and enter the arguments there with `spender` being the `swapFlashLoan` contract address and `amount` equal to the number of tokens you want to get back (probably all you have right now):

![](https://www.datocms-assets.com/95026/1715948641-screenshot-2024-05-17-at-13-22-10.png)

Now, we're ready to execute the transaction, just click the "Write" button on the right and confirm it in your wallet!

## Get cUSDC and cUSDT

Let's open now the [`SwapFlashLoan` contract](https://explorer.aurora.dev/address/0x6287e912a9Ccd4D5874aE15d3c89556b2a05f080?tab=write_contract). Go to the Contract -> Write Contract tab. If you scroll down, you will see the contract methods, and here is the one we need – `removeLiquidity`:

![](https://www.datocms-assets.com/95026/1715903828-screenshot-2024-05-17-at-00-56-14.png)

We're unsure about the arguments here yet, so let's find out what values we should use. To do this, we will look at one such transaction, which has already been executed by someone. We need to find it in history. So here is [one](https://explorer.aurora.dev/tx/0x0b079aee0e1feae4c10e127a5535877baee23567f22bc5293a5f885ba8d249f9):

![](https://www.datocms-assets.com/95026/1715903950-screenshot-2024-05-17-at-00-58-43.png)

You can see what exactly has happened here during the execution in terms of the token transfers:

* `cUSDCcUSDTLP` tokens were burned
* `cUSDT` and `cUSDC` tokens were transferred to the caller

Now, let's scroll down a bit and click on "View details" link at the left bottom of the page, you will see the arguments of the method used there:

![](https://www.datocms-assets.com/95026/1715904026-screenshot-2024-05-17-at-00-58-57.png)

We can conclude by looking at the both screenshots above that:

1. `amount` argument is equal to your `cUSDCcUSDTLP` tokens amount with 18 decimals added. E.g. in this case, the user has 2021.941835489438, so the correct value should be 2021294184354893800000. You can use [this tool](https://www.eth-to-wei.com/) to convert your values.
2. `deadline` is your time now, with 20 minutes added to it in a timestamp format. You can use [the EpochConverter](https://www.epochconverter.com/) tool to get the correct value. Just add 20 minutes to the datetime there and copy-paste the timestamp value.
3. The first value in `minAmounts` corresponds to the `cUSDT` token amount transferred back, and the second one is for the `cUSDC`. They have 8 decimals, and if you sum them up, you will get your amount of `cUSDCcUSDTLP` tokens. So you can just enter any values which in sum give you a value smaller or equal to the `amount`.

We're ready to execute the method now. Just enter the correct arguments to your Explorer tab, it should look like this:

![](https://www.datocms-assets.com/95026/1715907308-screenshot-2024-05-17-at-01-54-36.png)

After that, just click the "Write" button and confirm the transaction in your wallet.\
That is it! Now you got back your `cUSDC` and `cUSDT` tokens.

## How to convert cTokens to stables?

To do this, we will need to point our attention to these contracts:

* cUSDT: [0x845E15A441CFC1871B7AC610b0E922019BaD9826](https://explorer.mainnet.aurora.dev/address/0x845E15A441CFC1871B7AC610b0E922019BaD9826)
* cUSDC:[ 0xe5308dc623101508952948b141fD9eaBd3337D99](https://explorer.aurora.dev/token/0xe5308dc623101508952948b141fD9eaBd3337D99)

For both of them, the process will look the same, so let's just talk about `cUSDT` case. To unwrap you need to call this method – \`redeem\`:

![](https://www.datocms-assets.com/95026/1715907708-screenshot-2024-05-17-at-02-01-35.png)

It has only one argument, which is the amount of tokens to unwrap with 8 decimals added to it. So, for [the transaction from the previous section](https://explorer.aurora.dev/tx/0x0b079aee0e1feae4c10e127a5535877baee23567f22bc5293a5f885ba8d249f9), it should be 167994638559. It is the amount of the `cUSDT` tokens you have received after your `removeLiquidity` call.

## Final thoughts

That is it – you have successfully got your `cUSDCcUSDTLP` tokens converted back to stables. If you need any help or have a similar issue, please come [to our Discord](https://discord.com/invite/dEFJBz8HQV), and we will help you! Thank you for reading!\
