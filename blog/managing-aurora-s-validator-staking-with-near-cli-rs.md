---
title: "Managing Aurora's Validator staking with 'near-cli-rs'"
description: "Let's learn how to manage your staking with Near validators and claim your Aurora validator's rewards by using 'near-cli-rs'"
date: "2024-05-10"
authors: [slava]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1715336122-ncrs.png
---
In this article, we will discuss how to manage your staking on the Aurora Validator. To recap quickly, Aurora is an EVM-compatible blockchain running as an L2 on the Near Protocol. In the heart of it is an Aurora Engine smart contract. That is why every transaction on Aurora is relayed to the Near and has the corresponding Near transaction. You can read more about this [*here*](/blog/convert-aurora-transaction-into-near-s-one). That is why Aurora doesn’t have its own validators – we’re just re-using the Near ones.

<!-- truncate -->

In January 2023, we re-launched [*our validator*](https://aurora.dev/blog/aurora-relaunches-its-validator) with a new address, [*aurora.pool.near*](https://app.mynearwallet.com/staking/aurora.pool.near). What is curious about it is that it gives you the rewards in AURORA tokens directly on the Near network.

Recently, the [*Near Wallet was deprecated*](https://near.org/blog/embracing-decentralization-whats-next-for-the-near-wallet) on the 1st of January, 2024. And that has driven users to other wallets. Unfortunately, many of these don’t support staking capabilities, especially with the non-standard validator as \`aurora.pool.near\` is. 

So, based on the recent support experience, we have decided to publish a guide on how to use your terminal on your laptop or PC to manage your staking on the Aurora’s Validator. Let’s look into the details now!

## Installing \`near-cli-rs\`

Near CLI is your human-friendly companion that helps to interact with Near Protocol from the terminal right away. There are multiple ways to install it, see [*here*](https://github.com/near/near-cli-rs?tab=readme-ov-file#install). I am using Mac, so I will choose the first option and execute in my Terminal:

```shell
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh 
```

You can also run it as an npm package:

```undefined
npx near-cli-rs 
```

After installation, if you execute `near` command you should be able to see this screen:

![](https://www.datocms-assets.com/95026/1714679129-screenshot-2024-05-02-at-20-45-17.png)

## Connecting your account

Now, let's connect your account to the near-cli-rs. To do this, execute the near command and choose the account option, which you've seen in the previous screenshot above, using the `Enter` key.

You will see the next screen saying `What do you want to do with an account?`. Choose the `import-account` option there and press `Enter`:

![](https://www.datocms-assets.com/95026/1714679473-screenshot-2024-04-26-at-12-12-20.png)

You will see a screen with different import options:

![](https://www.datocms-assets.com/95026/1714679597-screenshot-2024-05-02-at-20-52-57.png)

Choose one that fits you! I will try to use `using-web-wallet` option. The browser window with [https://app.mynearwallet.com/](https://app.mynearwallet.com/) will be opened, and you will see a popup asking for your permission to connect:

![](https://www.datocms-assets.com/95026/1714679775-screenshot-2024-04-26-at-12-13-22.png)

Click the `Connect` button to approve. After that, you will need to confirm this choice by typing your full account name into the popup:

![](https://www.datocms-assets.com/95026/1714680087-screenshot-2024-05-02-at-20-59-05.png)

Then, you will get the next alert about successful authorization:

![](https://www.datocms-assets.com/95026/1714680117-screenshot-2024-05-02-at-20-59-31.png)

Now, you can go back to your terminal window, and you will see a message asking you to enter your account name again:

![](https://www.datocms-assets.com/95026/1714680166-screenshot-2024-05-02-at-21-00-07.png)

Enter it there and press `Enter`. After that, choose a keychain to store your keys. I am choosing the first option there:

![](https://www.datocms-assets.com/95026/1714679837-screenshot-2024-04-26-at-12-14-36.png)

You will get the final message that \`... access key is saved in the keychain\` and a console command that can replace this manual process of choosing different options in the future:

![](https://www.datocms-assets.com/95026/1714680238-screenshot-2024-05-02-at-21-00-41.png)

So, all of the things we did here could be achieved also with this command:

```shell
near account import-account using-web-wallet network-config mainnet
```

That is great! As you can see, `near-cli-rs` is teaching you the terminal commands automatically while exploring it!\
\
You have added your Near account to `near-cli-rs`, and it is now ready to be used.\
Let's try it to stake some tokens on the Aurora Validator!

## Staking tokens

TLDR: to stake your tokens, you need to use the next command:

```shell
near staking delegation karkunow.near \
     deposit-and-stake '1 NEAR' \
     aurora.pool.near network-config mainnet \
     sign-with-keychain send
```

Let's review the rest of the section to learn the details about how it works with `near-cli`.\
\
First, make sure you know what validator you will use to stake. You can check the list of validators with this command:

```shell
near staking validator-list network-config mainnet
```

I, of course, will use `aurora.pool.near` for this demo.

To stake your tokens, start with executing the `near` command and choosing the `staking` option from the list:

![](https://www.datocms-assets.com/95026/1714681089-screenshot-2024-05-02-at-21-14-10.png)

Now, choose `delegation`:

![](https://www.datocms-assets.com/95026/1714681106-screenshot-2024-05-02-at-21-14-23.png)

And type your Near account into the console and press Enter. In my case, I have it already listed, so I will just choose mine from the list:

![](https://www.datocms-assets.com/95026/1714681129-screenshot-2024-05-02-at-21-14-38.png)

After that, you need to choose `deposit-and-stake` (not just `stake` or `stake-all`, these options won't work if your tokens were not deposited to the validator yet):

![](https://www.datocms-assets.com/95026/1715217828-screenshot-2024-05-09-at-02-19-05.png)

Then, enter the amount of NEAR tokens to be staked, I am entering 1NEAR for the purpose of this demo:

![](https://www.datocms-assets.com/95026/1715218002-screenshot-2024-05-09-at-02-15-57.png)

Now, type in your validator address or choose from the list (you can use the `tab` key to autocomplete):

![](https://www.datocms-assets.com/95026/1715218061-screenshot-2024-05-09-at-02-16-28.png)

Choose the network now, I will opt for the `mainnet`:

![](https://www.datocms-assets.com/95026/1715218288-screenshot-2024-05-09-at-02-16-56.png)

After this, you will see your transaction formed and ready to be signed. By default, I am signing it with my keychain:

![](https://www.datocms-assets.com/95026/1715218347-screenshot-2024-05-09-at-02-17-12.png)

Now, you can `send` the transaction and execute it:

![](https://www.datocms-assets.com/95026/1715218434-screenshot-2024-05-09-at-02-17-47.png)

You will see the transaction ID and a link to the Explorer after the successful execution:

![](https://www.datocms-assets.com/95026/1715218479-screenshot-2024-05-09-at-02-19-35.png)

We can visit the Explorer link to see the details of the transaction:

## Unstaking tokens

TLDR: You just need to use the next command, which is really similar to the one used for staking:

```undefined
near staking delegation karkunow.near \
     unstake-all \
     aurora.pool.near network-config mainnet \
     sign-with-keychain send
```

If you don't want to unstake all the funds, just use the `unstake` option and enter the amount of NEAR tokens you want to get back.

Now, let's go through a few screenshots to understand better how I got this command from the `near-cli-rs`. As we have learned from the previous section, to manage our staking activities, we just execute:

```shell
near staking delegation [your account here](your account here)
```

Now, if you want to unstake your tokens – just choose the `unstake-all` or `unstake` option from the list:

![](https://www.datocms-assets.com/95026/1715219903-screenshot-2024-05-09-at-02-53-21.png)

After that, you will be guided through the same screens as for the staking to enter the amount, validator address, network config (mainnet or testnet), and then – sign and send it. After the execution, you will see:

![](https://www.datocms-assets.com/95026/1715219915-screenshot-2024-05-09-at-02-52-57.png)

Exactly the same command will be formed by `near-cli-rs` after that process. So now, you can use this shortcut instead.\
\
After unstaking, you will need to wait for the 4 epochs on Near blockchain to pass, which will take around 50-60 hours of time. And then, you will be ready to withdraw them and the associated rewards. The rewards will be automatically unlocked together with the unstaked tokens.

## Withdrawing tokens

I won't go into details with the screenshots here. Now, we're ready just to use the commands.

So, to withdraw your tokens and rewards, you need to execute this:

```undefined
near staking delegation karkunow.near \
     withdraw-all \
     aurora.pool.near network-config mainnet \
     sign-with-keychain send
```

If you don't want to withdraw all the funds, just use \`withdraw\` and enter the amount of NEAR tokens you want to withdraw.

After the execution, you will see:

![](https://www.datocms-assets.com/95026/1714681248-screenshot-2024-05-02-at-21-17-51.png)

## Claiming on Aurora's validator

Aurora's validator allows you to farm the AURORA tokens instead of NEAR by staking NEAR on it. It is based [on this smart contract](https://github.com/referencedev/staking-farm/). That is the reason why you need to use another way to claim these rewards in AURORA tokens. Can we do it with `near-cli-rs`? Yes! Let's see how it is done.\
\
I will use two variables to track the staking pool and account:

```shell
export STAKINGCONTRACT=aurora.pool.near && \
export MYACCOUNT=karkunow.near
```

To track how much tokens you have right now in staking you should execute:

```undefined
near contract call-function as-read-only aurora.pool.near \
     'get_unclaimed_reward' json-args \
     '{"account_id":"'${MYACCOUNT}'", "farm_id":0}' \
      network-config mainnet now
```

You will see the something similar to the next screen:

![](https://www.datocms-assets.com/95026/1715334843-screenshot-2024-05-10-at-10-25-15.png)

The value will be in Wei, so you need to convert it to get the real value of 0.0032 AURORA by multiplying it with 10^-18.

To claim your rewards you need to call the `claim` method on `aurora.pool.near` contract:

```undefined
near contract call-function as-transaction aurora.pool.near \
     'claim' json-args \
     '{"account_id": "'${MYACCOUNT}'", \
       "token_id": "aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near"}' \
     prepaid-gas '100.0 Tgas' attached-deposit '1 yoctoNEAR' \
     sign-as karkunow.near /
     network-config mainnet /
     sign-with-keychain / 
     send
```

We're passing the account and NEP-141 AURORA token address to the contract's `claim` method. Also we attach 100TGas of gas and deposit 1 yoctoNear to it.

After the execution, you will get the transaction hash, which you can now track in the explorer:

![](https://www.datocms-assets.com/95026/1715335148-screenshot-2024-05-10-at-10-58-39.png)

That is it! You claimed your rewards from the Aurora Validator.

If you want to dive deeper, you can read more docs about the `aurora.pool.near` methods [here](https://github.com/referencedev/staking-farm/blob/master/HowTo.md).

## Final thoughts

Thank you for reading the article! We have learned a lot today!\
We hope that `near-cli-rs` will be an indispensable tool for you while working with the Near ecosystem and that it will make it easier for you to interact with the blockchain.\
See you in the next articles!
