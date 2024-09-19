---
title: "Practical ERC20 Burning"
description: "Token burning is the act of permanently removing a certain number of tokens from circulation. This article delves into its intricacies and offers guidance based on my real-world experiences at Aurora"
date: "2023-09-22"
authors: [alex_lapitsky]
tags: [tips_and_tricks]
image: https://www.datocms-assets.com/95026/1695381651-article-cover.png
---

Token burning is the act of permanently removing a certain number of tokens from circulation. This article delves into its intricacies and offers guidance based on my real-world experiences at Aurora

<!-- truncate -->

## Why is there a problem?

The ERC20 standard does not inherently specify a token burning mechanism.

The most common implementation of ERC20 [provides](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20?ref=lapitsky.com#ERC20Burnable) `ERC20Burnable` to solve that, but not all deployed OpenZepellin contracts include `ERC20Burnable`. Many ERC20 contracts are locked and not upgradeable.

Due to these constraints, projects seek alternative ways to approach token burns.

## Do not use contract burns

One often recommended way to burn tokens involves creating a contract that immediately self-destructs and sends tokens to its own address. However, this method comes with its set of challenges:

*   The overhead of creating, deploying, and testing such contracts, especially if the burn needs to happen periodically
*   Even if the contract uses `SELFDESTRUCT` it does not preclude the possibility of redeploying another contract at the same address. This has been successfully exploited in the infamous [Tornado Cash attack](https://forum.tornado.ws/t/full-governance-attack-description/62?ref=lapitsky.com) by using a metamorphic contract factory.
*   There is a negative sentiment against `SELFDESTRUCT` opcode and (although stagnant) [EIP-4758](https://eips.ethereum.org/EIPS/eip-4758?ref=lapitsky.com) that highlights some security concerns.
*   Token burns via this method aren't recognized on most analytics platforms.

Given the listed concerns, I advise against this approach and encourage the use of burn addresses.

## Use well-known burn addresses

A burn address is a recognized externally owned account ([EOA](https://ethereum.org/en/whitepaper/?ref=lapitsky.com#ethereum-accounts)) where tokens can be sent to symbolize their destruction. While the token count remains unchanged, these tokens are effectively removed from circulation since no private key can control the burn address.

One of the common questions is "What if somebody knows or brute forces the private keys for such EOA addresses?"

Ethereum security model rests on the practical impossibility of brute forcing EOA accounts, so it does not make sense to take the risk of such an attack into account when planning the burns. To mitigate the risk of malicious burn addresses, use only the well-known ones.

You can find the list of burn addresses on [Etherscan](https://etherscan.io/accounts/label/burn?ref=lapitsky.com) but I recommend limiting it to the top two that stand out by the TVL and number of transactions: `0x0000000000000000000000000000000000000000` (*null*) and `0x000000000000000000000000000000000000dEaD` (*dead*).

Interestingly, OpenZeppelin's ERC20 implementation restricts transfers to *null* which could leave you with the second-best choice: *dead.*

The benefit of using well-known burn addresses over "contract burns" is that burn addresses are accounted for and integrated into numerous analytics tools, ensuring accurate token burn data representation.

## Bonus tips

*   Ensure that your ERC20 contract is locked and immutable before initiating burns.
*   For ERC20 tokens on multiple networks, execute burns on your primary network only, for unified tracking and analytics.
*   For the first burn, refrain from using decentralized or ZK-bridges. If your contract unexpectedly rejects the transaction (like disallowing transfers to *null*) – it might muddle your analytics even though the tokens are technically burned.

Big thanks to [Lance Henderson](https://www.linkedin.com/in/lance-henderson/?ref=lapitsky.com) for technical insights and for reviewing this post!
