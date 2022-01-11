---
title: Hardhat
sidebar_position: 3
---

The ERC-20 example is about a naive Watermelon token 🍉. You can exchange
them into actual Watermelons 🍉🍉🍉. The total supply is `1000000`, the
minter is the contract deployer address, and the decimals are `0`
(One token --> One watermelon).

To deploy the `ERC-20` token contract, use the following command:

```bash
$ make deploy NETWORK=testnet_aurora
yarn hardat run scripts/deploy.js --network testnet_aurora
yarn run v1.22.10
Deploying contracts with the account: 0x6A33382de9f73B846878a57500d055B981229ac4
Account balance: 2210010200000000000
WatermelonToken deployed to: 0xD7f2A76F5DA173043E6c61a0A18D835809A07766
✨  Done in 14.96s.

# export the token address
$ export TOKEN_ADDRESS='YOUR OUTPUT FROM DEPLOY (e.g. 0xD7f2A76F5DA173043E6c61a0A18D835809A07766)'
```
