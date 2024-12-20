---
title: "Aurora Chains: Walkthrough"
description: "Dive into the Aurora Innovation Chain details: custom access control, сustom token mechanics, interoperability and more"
date: "2023-04-28"
authors: [slava]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1701394098-ac2.png
---
Aurora Chains are dedicated blockchains that go beyond mere Ethereum compatibility through a set of industry-first innovations like:

* *custom token & fee mechanics* (e.g., gasless transactions; paying for gas with a custom token; some percentage of any transaction value to be stored in Aurora Chain Treasury, etc.);
* *custom access control* (public vs private chain, who can transact, who can deploy contracts? e.g., NFT-based access to the blockchain, private chain can be built by using a private NEAR shard – [Calimero](https://www.calimero.network/));
* *seamless interoperability* with Aurora, NEAR, and any other Aurora Chains: you can freely move your assets using Rainbow Bridge, call contracts via cross-contract calls, etc.; This is the main difference between Chains and other solutions (like Avalanche or Cosmos). There is no disjointness in between. You can call any smart contract in any other Chain or Near and interact with it freely.
* *tremendous transaction throughput – *we can provide you with dozens of millions of transactions daily for your ecosystem.

Every Aurora Chain is based upon the [Aurora smart contract.](https://github.com/aurora-is-near/aurora-engine/) Aurora Chain is just another instance of it that can be configured in way that will work in the best way possible to be aligned with your business model and goals. The Aurora Labs team will gladly help you maintain and support your chain.

\
If you feel your business could benefit from its own blockchain, please do not hesitate to contact us at [hello@auroracloud.dev](emailto:hello@auroracloud.dev).\
\
Let's do a walkthrough demo of Aurora Innovation Chain to see how it benefits your users.

<!-- truncate -->

**Note**: you will see sometimes Aurora Chains called Silos on the screenshots. The meaning is the same. It is just a more user-friendly renaming of the technology.

### Access Control

Let's go to the [https://auroracloud.dev/demo](https://auroracloud.dev/demo) site first, connect the [Metamask wallet](https://dev.aurora.dev/ecosystem/metamask), and we'll be ready for our first step – Access Control demo:

![](https://www.datocms-assets.com/95026/1682424716-screenshot-2023-04-25-at-12-05-26.png)

In the case of the Innovation Chain, we just need to fill in a simple form and submit it for review to Aurora:

![](https://www.datocms-assets.com/95026/1682424978-screenshot-2023-04-25-at-12-07-41.png)

After submitting it, you will need to wait for some time until you will get your access approved:

![](https://www.datocms-assets.com/95026/1682425059-screenshot-2023-04-25-at-13-17-04.png)

After approval, you will see this confirmation message:

![](https://www.datocms-assets.com/95026/1682425145-screenshot-2023-04-25-at-13-18-35.png)

And receive your first free 500 INNO tokens to be used:

![](https://www.datocms-assets.com/95026/1682425188-screenshot-2023-04-25-at-12-19-41.png)

With those in hand, we can move on to the next step.

### Ethereum compatibility & custom token mechanics

In the next stage, we will see a popup notifying us that every transaction in Aurora Innovation Chain will cost us 1 INNO token. Isn't that great?

![](https://www.datocms-assets.com/95026/1682455553-screenshot-2023-04-25-at-21-42-50.png)

\
You can also notice the balance of INNO tokens at the top right corner widget on the site. As you can see, we got 500 INNO tokens after the access approval. So we have some tokens to pay for the gas on the Innovation Chain now and play with it.\
\
Let's try this Chain in a real-world example and swap some tokens. First, we’ll swap INNO for our "dog-token", Poodle, using a Uniswap fork. Notice, that in every Chain, you can pre-install key applications from the list of Aurora partners (including Oracles, AMMs, Lending platforms, NFT marketplaces, etc.) So you can benefit immediately from the ecosystem we already have on Aurora!

Let's swap the tokens now and enter some amount of INNO into the widget:

![](https://www.datocms-assets.com/95026/1682455898-screenshot-2023-04-25-at-21-51-26.png)

After clicking the Swap button we will see the following info about the transaction in Metamask:\


![](https://www.datocms-assets.com/95026/1682456030-screenshot-2023-04-25-at-21-53-11.png)

As expected, we will spend 1 INNO per gas fee on that transaction! After the swap is complete, you will notice that your Poodle balance has been updated, and you will be able to see the transaction on the Chain Explorer:

![](https://www.datocms-assets.com/95026/1682456144-screenshot-2023-04-25-at-21-55-03.png)

Chain Explorer is a dedicated instance of the [Block Explorer.](https://dev.aurora.dev/ecosystem/block-explorer) It can help you monitor your activity, look into the details of transactions, verify contracts, and call your contract methods from the UI directly. Every Chain can have its own explorer, which we can set up for you.\
\
Let's open the following [link](https://explorer.innovation.aurora.dev/tx/0x729676bb7db14c0dd907d2398d2905d1f9286a0e0478cb6aa5375dde0d1bfb25), we will see the Aurora Innovation Explorer window with all the details of the transaction executed:\


![](https://www.datocms-assets.com/95026/1682516992-screenshot-2023-04-26-at-14-49-39.png)

As you can see, the data exactly corresponds to our expectations: we have 1 INNO spent as a fee and 10 INNO swapped. And notice that transaction has been confirmed within 1.116 seconds, corresponding to the usual time on NEAR and Aurora.

### Interoperability

Let's now move on to the next step and talk about the interoperability of the Aurora Chain:\


![](https://www.datocms-assets.com/95026/1682517331-screenshot-2023-04-26-at-14-54-31.png)

Aurora Chains can transfer assets to and from Ethereum, NEAR, and Aurora, and in between any other Aurora Chains using the Rainbow Bridge technology. We will move AURORA tokens between NEAR and Aurora Innovation in this demo. Let's connect a NEAR wallet to do this:\


![](https://www.datocms-assets.com/95026/1682517522-screenshot-2023-04-26-at-14-58-15.png)

After clicking the "Connect NEAR Wallet" button, you will need to choose your wallet:\


![](https://www.datocms-assets.com/95026/1682518634-screenshot-2023-04-26-at-14-59-01.png)

I will continue by choosing the "NEAR Wallet" option. After that, you will be redirected to the NEAR Wallet page to confirm the connection to the [auroracloud.dev](https://auroracloud.dev/) site, and then you will see the next widget:

![](https://www.datocms-assets.com/95026/1682518704-screenshot-2023-04-26-at-15-13-30.png)

Now you can transfer some Aurora tokens from NEAR to Aurora Innovation here. This transfer is possible to do with Rainbow Bridge (read more about how the bridge works [here](https://near.org/blog/eth-near-rainbow-bridge/) or [here)](https://aurora.dev/blog/2021-how-the-rainbow-bridge-works), which our developers have configured to process transactions between Aurora Innovation and NEAR. The abilities of this widget are limited due to the demo purposes, but you can bridge any ERC-20 token or ETH using it on your own Aurora Chain.

Let's bridge the 0.48 AURORA we have in the wallet to Aurora Innovation now, let's enter the value and push the "Transfer tokens" button. You will need to confirm the transaction on NEAR now:\


![](https://www.datocms-assets.com/95026/1682519151-screenshot-2023-04-26-at-15-14-10.png)

And just in a second, it is done! You will see this confirmation message with the link to the NEAR Explorer transaction:

![](https://www.datocms-assets.com/95026/1682519295-screenshot-2023-04-26-at-15-15-15.png)

We now notice that your Aurora Innovation balance has been topped up in the top-right corner widget by the amount you've bridged. And if we go directly to the [NEAR explorer link:](https://nearblocks.io/txns/86EGzooMqaSsetC1BbwknjNRTytthaFgFgLCWH153QT7)

![](https://www.datocms-assets.com/95026/1682519404-screenshot-2023-04-26-at-15-28-37.png)

We will see there our bridge transfer which has been done using a call to the NEP-141 token:\
*aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near *which represent AURORA token on NEAR. And that balance of the [aurora-silo-dev.near](https://nearblocks.io/address/aurora-silo-dev.near) has been topped up, which is our Aurora Chain contract on NEAR, the little brother of the [aurora.near,](https://nearblocks.io/address/aurora.near) but with the same capabilities in a nutshell.

### Contract Deployment Rights

Now we can move to the easiest part of the demo, where we can just make sure that we can not deploy a contract on Aurora Innovation:

![](https://www.datocms-assets.com/95026/1682520005-screenshot-2023-04-26-at-15-34-16.png)

This rule was also made simple for demonstration purposes, but of course, we can implement any other rule: e.g., having a whitelist of accounts that can deploy contracts. And actually, we have it! However we have only allowed the contract deployment to be done by some of our developers on the team. So let's deploy the contract anyway and push the button. We will receive the Metamask transaction popup:

![](https://www.datocms-assets.com/95026/1682520201-screenshot-2023-04-26-at-15-34-33.png)

Let's confirm it, and then we'll get this message:

![](https://www.datocms-assets.com/95026/1682520228-screenshot-2023-04-26-at-15-35-16.png)

We can check the transaction history in Metamask to see that it has failed:

![](https://www.datocms-assets.com/95026/1682520426-screenshot-2023-04-26-at-15-45-58.png)

### Conclusions

Now we're at the end of the demo:

![](https://www.datocms-assets.com/95026/1682520850-screenshot-2023-04-26-at-15-35-27.png)

That is it for today! We've seen how Aurora Chain can implement Custom Access Control, be fully Ethereum compatible, have its token mechanics, and have fast interoperability with NEAR using Rainbow Bridge.\
\
In upcoming articles, we will discuss the technical details of the Aurora Chains and other Aurora Cloud components. So stay tuned for the updates!\
\
Thank you for your reading!
