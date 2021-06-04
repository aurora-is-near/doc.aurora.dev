---
title: "Aurora: Getting Started with Hardhat"
---

# Getting Started with Hardhat

## Introduction
[HardHat](https://hardhat.org/) is yet another Ethereum development environment. It is known for debugging the Solidity code and the explicit error messages. Moreover it has extra nice features such as the interactive Javascript console and the user defined tasks. 

The main objective of this tutorial is to show how to deploy and interact with the Solidity smart contracts on Aurora using Hardhat. This tutorial assumes that you are familiar with `HardHat` and the ERC20 tokens. For more details about the fungible token standard, please refer to the [ERC20 Standard specification](https://eips.ethereum.org/EIPS/eip-20).

## Installation 
This tutorial assumes that you have Node.js 12+ and Yarn. Please refer to the [Yarn installation how-to](https://classic.yarnpkg.com/en/docs/install#mac-stable) if you don't yet have the yarn command installed locally.

- To install the prerequisite packages, clone the examples repository:

```bash
$ git clone https://github.com/aurora-is-near/aurora-examples.git
$ cd aurora-examples/hardhat/erc20/
```

- Add your Aurora Private key (from Metamask) to __.env__ file and then run yarn : <br/>

```bash
$ echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env
$ yarn install
```

## Deploy ERC20 
The ERC20 example is about a naive Watermelon token 🍉. You can exchange them into actual Watermelons 🍉🍉🍉. The total supply is `1000000`, the minter is the contract deployer address, and the decimals are `0` (One token --> One watermelon).

To deploy the `ERC20` token contract, use the following command:
```bash
$ make deploy NETWORK=testnet_aurora
yarn hardhat run scripts/deploy.js --network testnet_aurora
yarn run v1.22.10
Deploying contracts with the account: 0x6A33382de9f73B846878a57500d055B981229ac4
Account balance: 2210010200000000000
WatermelonToken deployed to: 0xD7f2A76F5DA173043E6c61a0A18D835809A07766
✨  Done in 14.96s.
```

## Hardhat Tasks
In this example, we have a user defined tasks that uses the Hardhat Runtime Environment [hre](https://hardhat.org/advanced/hardhat-runtime-environment.html). In order to complete the tutorial, you should use them in the same order.

### ETH Balance

The following Hardhat task uses the `Web3` plugin to get the account’s balance:

```javascript
task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async taskArgs => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });
```
To run this task, use the following command:
```
npx hardhat balance --network testnet_aurora --account 0x6A33382de9f73B846878a57500d055B981229ac4
2.2100102 ETH
```
You should notice that `--network` is a global built-in option (parameter) in Hardhat.

### Total Supply

```javascript
task("totalSupply", "Total supply of ERC20 token")
.addParam("token", "Token address")
.setAction(async function ({ token }, { ethers: { getSigners } }, runSuper) {
  const watermelonToken = await ethers.getContractFactory("WatermelonToken")
  const watermelon = watermelonToken.attach(token)
  const [minter] = await ethers.getSigners();
  const totalSupply = (await (await watermelon.connect(minter)).totalSupply()).toNumber()
  console.log(`Total Supply is ${totalSupply}`);
});
```

```bash
$ npx hardhat totalSupply --token 0xD7f2A76F5DA173043E6c61a0A18D835809A07766 --network testnet_aurora
Total Supply is 1000000
```

### Transfer ERC20
```javascript
task("transfer", "ERC20 transfer")
    .addParam("token", "Token address")
    .addParam("spender", "Spender address")
    .addParam("amount", "Token amount")
    .setAction(async function ({ token, spender, amount }, { ethers: { getSigners } }, runSuper) {
        const watermelonToken = await ethers.getContractFactory("WatermelonToken")
        const watermelon = watermelonToken.attach(token)
        const [minter] = await ethers.getSigners();
        await (await watermelon.connect(minter).transfer(spender, amount)).wait()
        console.log(`${minter.address} has transferred ${amount} to ${spender}`);
    });
```
```bash
$ npx hardhat transfer --token 0xD7f2A76F5DA173043E6c61a0A18D835809A07766 --amount 10 --spender 0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe --network testnet_aurora
0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 has transferred 10 to 0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe
```

### BalanceOf ERC20

```javascript
task("balanceOf", "Total supply of ERC20 token")
.addParam("token", "Token address")
.addParam("account", "Account address")
.setAction(async function ({ token, account }, { ethers: { getSigners } }, runSuper) {
  const watermelonToken = await ethers.getContractFactory("WatermelonToken")
  const watermelon = watermelonToken.attach(token)
  const [minter] = await ethers.getSigners();
  const balance = (await (await watermelon.connect(minter)).balanceOf(account)).toNumber()
  console.log(`Account ${account} has a total token balance:  ${balance} WTM`);
});
```

```bash
$ npx hardhat balanceOf --token 0xD7f2A76F5DA173043E6c61a0A18D835809A07766 --account 0x6A33382de9f73B846878a57500d055B981229ac4 --network testnet_aurora
Account 0x6A33382de9f73B846878a57500d055B981229ac4 has a total token balance:  999970 WTM
```

### Approve ERC20
TBD
### TransferFrom ERC20
TBD




