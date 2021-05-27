---
title: "Aurora: Deploying a Contract Using Truffle"
---

# Deploying a Contract Using Truffle

## Introduction
This example is originally forked from [OpenZeppelin examples](https://docs.openzeppelin.com/contracts/4.x/erc721). However it implements a simple COVID-19 vaccine token 💊💊. This tutorial assumes that you are familiar with non-fungible tokens (NFT) concept. For more details about the non-fungible token standard (ERC721), please refer to [OpenZeppelin ERC721 implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/1b37c21da58f6379cfe09c0140cf56d67b19a0bc/contracts/token/ERC721).

## COVID Vaccine NFT

![](../../_img/Truffle-nft-aurora-example.png)

1. The `minter` address (which is managed by the vaccination program manager) can distribute (mint) the vaccine tickets (NFT tokens 💊💊💊) to the people who are part of the vaccination program. 
2. When a participant receives the token 💊, he/she can get access to the vaccine by spending the NFT token. 
3. This means whether burning the NFT token or sending it back to the minter address.
4. Now the `minter` can redistribute that ticket 🎫 to new participant in the line.
5. And now that participant have access to the same ticket that have been spended by participant-1.


## Installing Prerequisites
This tutorial assumes that you have `Node 12+` and `yarn`. Please refer to the [Yarn installation page](https://classic.yarnpkg.com/en/docs/install) if you don't have `yarn` installed locally.

To install the prerequisites packages, clone the examples code then run `yarn` in order to install the prerequisites:
```
git clone https://github.com/aurora-is-near/aurora-examples.git
cd aurora-examples/truffle/erc721-example/
yarn 
```

## Connecting Truffle to Aurora

Export your `MNEMONIC` as follows:
```
export MNEMONIC='YOUR MNEMONICS HERE'
```
The `truffle-config.js` will pickup your `MNEMONIC` and extract the address that will be used for sending, and signing transactions on Aurora network.

Now in `truffle-config.js`, you have to change the `from` address as shown below in the aurora network section.

```
...
aurora: {
      provider: () => setupWallet('https://testnet.aurora.dev'),
      network_id: 0x4e454153,
      gas: 10000000,
      from: '0x6A33382de9f73B846878a57500d055B981229ac4' // CHANGE THIS ADDRESS
    },
```

## Deploying The Contract

To deploy the `CovidVaccineToken` contract, you can run the yarn command as follows:

```
yarn deploy:aurora
....
_deploy_contracts.js
=====================

   Deploying 'CovidVaccineToken'
   -----------------------------
   > transaction hash:    0x282012c791d65d0ce2fd1fd9fcc41179dba5bd06c3b02e31e53dbe9cc8af62c1
   > Blocks: 7            Seconds: 5
   > contract address:    0x3635D999d8CdA2fAf304b390fb26a9c2f364dFbd
   > block number:        49151611
   > block timestamp:     1622034185
   > account:             0x6A33382de9f73B846878a57500d055B981229ac4
   > balance:             0
   > gas used:            2576274 (0x274f92)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05152548 ETH
....
```

## Play with Truffle console:

Now you can test the flow that we discussed before:

### Mint

Minters mints and transfer NFT tokens for the vaccine program participant-1. The new participant address is `0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe` and the minter address is `0x6A33382de9f73B846878a57500d055B981229ac4`.

Please make sure that you are using the same deployer address otherwise the `mint` transaction will revert.

```bash
% truffle console --network aurora
truffle(aurora)> const cvt = await CovidVaccineToken.deployed()
truffle(aurora)> await cvt.minter()
'0x6A33382de9f73B846878a57500d055B981229ac4'
truffle(aurora)> await cvt.mint('0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe')
```

You should notice that participants are not allowed to transfer their tokens except for the minter. 

So lets try to use a participant address to validate that no one can transfer this token except the minter. So first you should exit from the 
truffle terminal then in the `aurora` network configuration in `truffle-config.js`, change the value of `from` field to a new address (e.g the participant address `0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe`).

```
{
    ...
    aurora: {
      provider: () => setupWallet('https://testnet.aurora.dev'),
      network_id: 0x4e454153,
      gas: 10000000,
      from: '0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe'
    },
}
```

Connect to Aurora network throught Truffle console again:

```bash
% truffle console --network aurora
truffle(aurora)> const cvt = await CovidVaccineToken.deployed()
truffle(aurora)> await cvt.mint('0x3531a4D108619a20ACeE88C4354a50e9aC48ecf5') // a random address
Uncaught:
Error: Unknown address - unable to sign transaction for this address: "0x2531a4d108619a20acee88c4354a50e9ac48ecfe"
...
reason: 'Invalid Transfer',
  hijackedStack: 'Error: Unknown address - unable to sign transaction for this address: "0x2531a4d108619a20acee88c4354a50e9ac48ecfe"\n'
```

### Transfer

Participant can transfer the token to the `minter` after receiving the vaccine. As shown below a participant can only send this token if the receiver for this token is the minter (`0x6A33382de9f73B846878a57500d055B981229ac4`). 

```javascript
function safeTransferFrom(address from, address to, uint256 tokenId) public virtual override {
        require(minter == msg.sender || to == minter, 'Invalid Transfer');
        safeTransferFrom(from, to, tokenId, "");
    }
```

### Transfer back

So let the participant signs the transaction and send the token back to the minter.

```bash 
truffle(aurora)> await cvt.mint('0x6A33382de9f73B846878a57500d055B981229ac4') // minter Address
```

### Burn
TBC

### Redistribute

Finally, the `minter` will send the same token to a new partcipant.

```bash
truffle(aurora)> await cvt.safeTransferFrom('0x6A33382de9f73B846878a57500d055B981229ac4','0x8722C88e82AbCC639148Ab6128Cd63333B2Ad771', 1)
```
## Summary:

This simple NFT example shows how to deploy a contract with Truffle and invoke transactions on Aurora testnet.