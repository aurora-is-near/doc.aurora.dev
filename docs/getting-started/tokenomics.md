---
sidebar_label: Tokenomics
title: Tokenomics
---

The Aurora DAO approved the creation of the official project governance token, AURORA, with a total supply of 1 billion. The token was deployed on Ethereum as non-upgradable ERC-20 with a fixed supply, and then bridged to NEAR and AURORA using the trustless Rainbow Bridge. Here are respective links to the token on Near and Aurora protocols.

There were 1,000,000,000 Aurora tokens (AURORA) created at Genesis on October 7, 2021.

The article has been updated at the end of June, 2023 which is the 19th month since the Token Generation Event on November 18, 2021 (TGE).

## Token allocation

The current development of the allocation consists of:

![tokenomy_alloc](/img/tokenomy_alloc.png)

- 20% (200 million) – Community Treasury
- 35.2% (352 million) – Aurora DAO Council treasury
- 16% (160 million) – Aurora Labs long-term incentives. Tokens are subjected to a vesting scheme determined by Aurora Labs.
- 9% (90 million) – Aurora Labs private round investors. These tokens are subjected to the unlocking scheme.
- 3% (30 million) – Allocated to Aurora validator delegators.
- 2% (20 million) – Early AURORA contributors. Allocations should be provided by Near Foundation. These tokens should be subjected to the unlocking scheme. Near Foundation may implement a vesting scheme for these tokens.
- 1% (10 million) – Allocated to Aurora Labs to be used as incentives for project advisors
- 1% (10 million) – Allocated for bootstrapping the AURORA ecosystem.
- 3% (30 million) – Allocated for Aurora Labs growth round
- 3.1% (31 million) – Ongoing Grant programs
- 0.8 % (8 million) – Ongoing Bug bounty program
- 5.9 % (59 million) – Allocated for AURORA Staking rewards

As the Protocol grows and new initiatives are approved, the allocation changes: new categories might be added or aggregated.

## Planning circulating supply

“Circulating Supply” is every token that isn’t subject to a lockup at a particular time. The vast majority of the AURORA supply is subject to long-term lockups. Based on the current estimation 99.05% of the total supply is planned to be unlocked by month 132 from the Token Generation Event on November 18, 2021 (TGE).

The chart below shows the increase in circulating supply as tokens unlock:

![tokenomy_supply](/img/tokenomy_supply.png)

The following chart provides more detail on the components of the circulating supply as it grows over time:

![tokenomy_components](/img/tokenomy_components.png)

You can read more details about AURORA token distribution in this [article](https://aurora.dev/tokenomics).

## Burning of AURORA tokens

In modern L1 protocols base tokens usually have two use cases:
1. Consumption: users need to pay for gas in these tokens.
2. Governance/protection: users need to stake tokens to be able to process transactions and perform hard forks.

Aurora ecosystem works on top of Near blockchain, so during Aurora operations it is NEAR token that is consumed (see more [here](/))
 and thus, such a use case cannot be implemented for AURORA token in full.

During the execution of NEAR transactions, only 70% of NEAR is burned, while the other 30% is transferred to the smart contract that was called
 (see more [here](https://docs.near.org/concepts/basics/transactions/gas)).
  This measure was implemented as a way to compensate smart contract developers.

The above means that Aurora smart contracts (Aurora Engine, Aurora Cloud instances, Rainbow Bridge contracts, etc.) actually collect NEAR tokens over time.

We use these NEAR tokens to buy back AURORA from the market and burn it. Here’s how this is implemented:

- Every month, security councils of the core Aurora Protocol contracts withdraw the NEAR tokens that were earned and transfer them to the Aurora DAO Council ([auroradao.sputnik-dao.near] account).
- Aurora DAO Council should then transfer these NEAR tokens to Aurora and deposit it into the wallet that is used by the purchase script
- Purchase script to execute small purchases of AURORA tokens using 1inch aggregator over the next month
- Aurora DAO Council to withdraw the bought AURORA, transfer it over Rainbow Bridge to Ethereum and burn it.

You can read more about the connected DAO proposal [here](https://forum.aurora.dev/t/aurora-token-economy-2-0/2166).
In this [article](https://dev.aurora.dev/posts/practical-erc20-burning), we describe how the ERC-20 tokens are burned.
Here are a few examples of the burns already executed:

- 2648 AURORA in [Feb 2024](https://twitter.com/auroraisnear/status/1764622033600823800)
- 2100 AURORA in [Jan 2024](https://twitter.com/auroraisnear/status/1753372174629634252)
- 5780 AURORA in [Dec 2023](https://twitter.com/auroraisnear/status/1742878778777616754)
- 10482 AURORA in [Oct-Nov 2023](https://twitter.com/auroraisnear/status/1737050257522053365)

[auroradao.sputnik-dao.near]: https://nearblocks.io/address/auroradao.sputnik-dao.near
