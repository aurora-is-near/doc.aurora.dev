---
title: "How to get USDC tokens on Aurora testnet"
description: "While developing your smart contracts on Aurora, there are situations when you will need to get native Ethereum ERC-20 tokens on your testnet account – let’s find out how to get these by using the USDC token as an example"
date: "2023-07-28"
authors: [olga]
tags: [tips_and_tricks]
image: https://www.datocms-assets.com/95026/1690542624-usdc.png
---
When you develop a contract, quite often you need ERC-20 tokens for testing. If your contract is rather small and doesn't use cross-contract calls, most likely, you don't need official USDC tokens or any other specific tokens. In that case, the best solution is just to take the standard ERC-20 contract, deploy it, and mint as many test tokens as you wish.

However, sometimes the easier solution for testing can be to get official testing tokens. For example, if your contract is use difficult cross-contract calls and dependencies contracts are already deployed on testnet and support only limited numbers of tokens. When I am testing RainbowBridge during development I use the USDC tokens on testnet.

In this article, I will explain how to get official native Ethereum ERC-20 tokens on your Aurora testnet account in the example of USDC tokens. This method will work with other popular native Ethereum ERC-20 as well, and it will be clear how to get these tokens also in Goerli Ethereum and in Near testnet.

<!-- truncate -->

## Plan for getting USDC tokens on Aurora testnet

For getting USDC tokens, we're going to use the following plan:

1. Create an account in MetaMask for the Ethereum Goerli network and Aurora testnet
2. Mint Ether for your Ethereum account
3. Swap Ether to the USDC tokens in the Ethereum network
4. Transfer USDC tokens from Ethereum to Aurora by using Rainbow Bridge

The instructions for steps 1 and 2 you can find in article ["Getting started with Aurora"](/blog/getting-started-with-aurora), so I will not describe them here. For the 1 step see section "Creating an account on the Aurora testnet using MetaMask", for the 2 step see section "Obtaining AuroraEth on the testnet" -> "The second method: transfer from Ethereum".

I assume that you already have an account in MetaMask for both Goerli Ethereum network and Aurora testnet and also you have some Ether in Goerli Ethereum network.

## USDC tokens accounts

There can be a large number of accounts for USDC on the testnets. Moreover, you can take a USDC token contract and deploy it on your own. We are interested in the official deployment of USDC tokens on Goerli Ethereum and the official wrappers of this token on Aurora and Near.

Official USDC address on Goerli Ethereum: [0x07865c6E87B9F70255377e024ace6630C1Eaa37F](https://goerli.etherscan.io/token/0x07865c6e87b9f70255377e024ace6630c1eaa37f)

For search the addresses on the Near and Aurora testnet networks and check that address is supported by Rainbow Bridge you can go to [https://testnet.rainbowbridge.app/deploy](https://testnet.rainbowbridge.app/deploy) , write the address of the USDC token in the search and click the `Find Token` button:

![](https://www.datocms-assets.com/95026/1690544553-screenshot-2023-07-28-at-12-40-45.png)

You will see the query result:

![](https://www.datocms-assets.com/95026/1690545689-screenshot-2023-07-28-at-13-01-18.png)

As we can see from the image above, the address on the NEAR is: `07865c6e87b9f70255377e024ace6630c1eaa37f.factory.goerli.testnet`

And the address on the Aurora is: `0x901fb725c106e182614105335ad0e230c91b67c8`

**WARNING: **Some sites can mint USDC tokens, but with a different address, so you need to double-check the address of minted tokens.

This [repo](https://github.com/aurora-is-near/bridge-assets/tree/master/tokens) also contains the list of tokens supported by the Rainbow Bridge, however this list is not full for the testnets, for example, the USDC tokens are not included.

## Get USDC token on Ethereum

We have the Goerli Ethereum account and some GoerliETH. Let’s exchange some Ether for USDC tokens! For swapping, we're going to use Uniswap.

**1. Open Uniswap site:** [https://app.uniswap.org/#/swap](https://app.uniswap.org/#/swap)

**2. Connect to Goerli Network.** It can look like it doesn’t support testnet network, but it actually support it, just it is not clear from the web interface.

* Click the `Connect` button. Choose MetaMask and connect to your account.

![](https://www.datocms-assets.com/95026/1689675168-uniswapconnect.jpg)

* Switch on `Show testnets` option on the Uniswap site:

![](https://www.datocms-assets.com/95026/1690544253-screenshot-2023-07-28-at-12-35-32.png)

![](https://www.datocms-assets.com/95026/1690544262-screenshot-2023-07-28-at-12-35-41.png)

![](https://www.datocms-assets.com/95026/1690544274-screenshot-2023-07-28-at-12-35-54.png)

* Change the network to Goerli Testnet.

![](https://www.datocms-assets.com/95026/1690544545-screenshot-2023-07-28-at-12-39-49.png)

**3. Swap GoerliEth into USDC**

* Click `Select token`. Yes, you doesn’t see the USDC tokens in the list. It is Ok, don’t worry:

![](https://www.datocms-assets.com/95026/1690544771-screenshot-2023-07-28-at-12-45-29.png)

In the search field write `USDC` and select the `USD Coin` from the list. For some tokens, even searching by the token's name doesn't help. In that case, try to use the **token's address** in the search.

![](https://www.datocms-assets.com/95026/1690544783-screenshot-2023-07-28-at-12-45-51.png)

![](https://www.datocms-assets.com/95026/1690544794-screenshot-2023-07-28-at-12-45-57.png)

* Put some small amount of ETH in first line. 0.01 GöETH will be enough.

![](https://www.datocms-assets.com/95026/1690544849-screenshot-2023-07-28-at-12-44-59.png)

* Click Swap

![](https://www.datocms-assets.com/95026/1690544873-screenshot-2023-07-28-at-12-45-06.png)

Congratulations! Now you get a lot of test USDC in your Ethereum account. You can check, that you receive tokens in MetaMask and check the address of the received tokens. If you don’t see the USDC tokens click "Import tokens" in MetaMask and put the address of USDC token.

## Transfer USDC tokens to Aurora

Now the easy part: transfer USDC tokens from Ethereum to Aurora.

* Open the Rainbow Bridge for testnet: [https://testnet.rainbowbridge.app/](https://testnet.rainbowbridge.app/)
* Click New Transfer:

![](https://www.datocms-assets.com/95026/1690544972-screenshot-2023-07-28-at-12-48-40.png)

* Connect to your accounts on Ethereum and on Aurora:

![](https://www.datocms-assets.com/95026/1690545004-screenshot-2023-07-28-at-12-48-57.png)

And now, choose USDC.e tokens and amount for transferring, and click `Continue`:

![](https://www.datocms-assets.com/95026/1690545027-screenshot-2023-07-28-at-12-49-11.png)

Done! Now you need to wait *20 minutes* before you get your test USDC on Aurora.

*Remark*: you also can transfer the USDC tokens or other tokens to your Near accounts in the same way.

## Conclusion

In this short article, we learned how to get a lot of USDC tokens on Ethereum, Near and Aurora. This method is also applicable to other popular Ethereum ERC-20 tokens. Now you can use these tokens to test your contracts. Happy development and testing!

## References

* Article with instructions on how to install MetaMask and mint Ether: [/blog/getting-started-with-aurora](/blog/getting-started-with-aurora)
* USDC tokens address on Ethereum Goerli: [https://goerli.etherscan.io/address/0x07865c6e87b9f70255377e024ace6630c1eaa37f](https://goerli.etherscan.io/address/0x07865c6e87b9f70255377e024ace6630c1eaa37f)
* Uniswap: [https://app.uniswap.org/#/swap](https://app.uniswap.org/#/swap)
* Rainbow Bridge For Testnet: [https://testnet.rainbowbridge.app/](https://testnet.rainbowbridge.app/)
* Checking the supported tokens for Rainbow Bridge on Testnet: [https://testnet.rainbowbridge.app/deploy](https://testnet.rainbowbridge.app/deploy)
