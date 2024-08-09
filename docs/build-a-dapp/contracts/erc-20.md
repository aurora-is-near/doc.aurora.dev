---
title: 	ERC-20 Token
---

In this article, we will consider a bit more complex, yet standard example of an ERC-20 token contract.

:::note

In case you are not familiar with a standard we advise you to read more about it on the OpenZeppelin website:
[ERC-20 article](https://docs.openzeppelin.com/contracts/5.x/erc20) and [ERC-20 API](https://docs.openzeppelin.com/contracts/5.x/api/token/erc20).
:::

Here is the full contract code below:

```solidity title="contracts/WatermelonToken.sol"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WatermelonToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Watermelon", "WTM") {
        _mint(msg.sender, initialSupply);
    }

    function decimals() public pure override(ERC20) returns (uint8) {
        return 0;
    }
}
```

As you can see, the implementation is just as simple as inheriting from OpenZeppelin's ERC20 contract.
Notice two modifications done to the standard implementation:

- During the construction, all of the `initialSupply` is minted to the contract deployer.
- Decimals are set to zero.

:::note
You can find [a GitHub repo here](https://github.com/aurora-is-near/aurora-examples/blob/main/hardhat/erc20/)
and [another version of this tutorial](https://dev.aurora.dev/ecosystem/hardhat) on Aurora Developer Portal.
:::

## Create project

To create a project, clone the examples repository and go to `erc-20` folder:

```bash
git clone https://github.com/aurora-is-near/aurora-examples.git
cd aurora-examples/hardhat/erc20/
yarn install
```

## Configure project

Add your Aurora Private key (from MetaMask or other Web3 wallet) to `__.env__` file:

```bash
$ echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env
```

## Deploy contract

This example is about a naive Watermelon token 🍉. The total supply is 1,000,000, the
minter is the contract deployer address, and the decimals are 0, so one token is one non-divisible watermelon.

:::note
To use the commands below you will need Node.js and `yarn` to be installed. Please follow the [instructions here](https://nodejs.org/en/download/package-manager) to install Node.js.
Then, install `yarn` with `npm install --global yarn` or read more [here](https://classic.yarnpkg.com/lang/en/docs/install/).
:::

To deploy the token contract, use the following command:

```bash
make deploy NETWORK=testnet_aurora
```

You will see the next output with your Token Address on your screen:

```bash
yarn hardhat run scripts/deploy.js --network testnet_aurora
yarn run v1.22.10

Deploying contracts with the account: 0x6A33382de9f73B846878a57500d055B981229ac4
Account balance: 2210010200000000000
WatermelonToken deployed to: 0xD7f2A76F5DA173043E6c61a0A18D835809A07766
✨  Done in 14.96s.
```

You should also export your Token Address as an environment variable to re-use later during CLI interactions with the contract:

```bash
# export the token address
export TOKEN_ADDRESS='YOUR OUTPUT FROM DEPLOY (e.g. 0xD7f2A76F5DA173043E6c61a0A18D835809A07766)'
```

## Interact with contract

We will use Hardhat tasks to take care of parsing the values provided for each parameter.
It gets the values, performs the type validation and converts them into your desired type.

In this example, we will go through a set of predefined Hardhat tasks that use the [Hardhat Runtime Environment](https://hardhat.org/advanced/hardhat-runtime-environment.html).

:::note
The Hardhat Runtime Environment is an object containing all the functionality that Hardhat exposes when running a task, test or script. In reality, Hardhat is the HRE.

To communicate with contracts from UI you will need a web3-library like [viem](https://viem.sh/docs/introduction), [ethers.js](https://docs.ethers.org/) or [web3.js](https://web3js.readthedocs.io/en).
Hardhat uses ethers.js by default.
:::

If you want to complete all steps of this tutorial, you should execute the tasks in the same order they are mentioned below.
But if you want just take a look at how to interact with some particular method - you can just use the code snippet as is.

### Get total supply

The following task script gets the total supply of the Watermelon ERC-20 token.
First, it gets the token contract, then gets the sender address and then retrieves the total supply
by calling `totalSupply()` method in our ERC-20 contract:

```javascript
task("totalSupply", "Total supply of ERC-20 token")
.addParam("token", "Token address")
.setAction(async function ({ token }, { ethers: { getSigners } }, runSuper) {
  const watermelonToken = await ethers.getContractFactory("WatermelonToken")
  const watermelon = watermelonToken.attach(token)
  const [minter] = await ethers.getSigners();
  const totalSupply = (await (await watermelon.connect(minter)).totalSupply()).toNumber()
  console.log(`Total Supply is ${totalSupply}`);
});
```

To get the total supply, just use the following command:

```bash
npx hardhat totalSupply --token $TOKEN_ADDRESS --network testnet_aurora
```

### Transfer tokens

The `transfer` method allows anyone holding ERC-20 tokens to transfer
them to any EVM address (user or contract one).

In the following script, the minter address
will mint (implicitly) and transfer 10 WTM tokens to the spender address:

```javascript
task("transfer", "ERC-20 transfer")
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

To call the task now, please use the following command:

```bash
export $SPENDER_ADDRESS=HERE_GOES_THE_ADDRESS_TO_TRANSFER_TO
npx hardhat transfer --token $TOKEN_ADDRESS --amount 10 --spender $SPENDER_ADDRESS --network testnet_aurora
```

### Get a balance

We can prove that spender has received the exact amount of tokens by calling the `balanceOf` as shown below:

```javascript
task("balanceOf", "Balance of ERC-20 token for particular user")
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

To get a balance, use the following command:

```bash
npx hardhat balanceOf --token $TOKEN_ADDRESS --account $SPENDER_ADDRESS --network testnet_aurora
```

### Approve and TransferFrom

In some cases, instead of calling the `transfer` directly, a sender
can approve a specific amount of tokens to be withdrawn from his account
to the recipient's address later. This can be done by calling `approve` and then calling `transferFrom` method.

```javascript
task("approve", "ERC-20 approve")
    .addParam("token", "Token address")
    .addParam("spender", "Spender address")
    .addParam("amount", "Token amount")
    .setAction(async function ({ token, spender, amount }, { ethers: { getSigners } }, runSuper) {
        const watermelonToken = await ethers.getContractFactory("WatermelonToken")
        const watermelon = watermelonToken.attach(token)
        const [sender] = await ethers.getSigners();
        await (await watermelon.connect(sender).approve(spender, amount)).wait()
        console.log(`${sender.address} has approved ${amount} tokens to ${spender}`);
    });

module.exports = {};
```

To call `approve`, use the following command:

```bash
npx hardhat approve --token $TOKEN_ADDRESS --spender $SPENDER_ADDRESS --amount 10 --network testnet_aurora
```

Now, after approving tokens, a recipient can call `transferFrom` to move
the `allowance` to his account.

```javascript
task("transferFrom", "ERC-20 transferFrom")
    .addParam("token", "Token address")
    .addParam("sender", "Sender address")
    .addParam("amount", "Token amount")
    .setAction(async function ({ token, sender, amount }, { ethers: { getSigners } }, runSuper) {
        const watermelonToken = await ethers.getContractFactory("WatermelonToken")
        const watermelon = watermelonToken.attach(token)
        const [recipient] = await ethers.getSigners()
        console.log(recipient.address);
        await (await watermelon.connect(recipient).transferFrom(sender, recipient.address, amount)).wait()
        console.log(`${recipient.address} has received ${amount} tokens from ${sender}`)
    });
```

To call `transferFrom`, use the following command:

```bash
# export the spender's private key
export AURORA_PRIVATE_KEY="THE RECIPIENT PRIVATE KEY"
npx hardhat transferFrom --token $TOKEN_ADDRESS --sender $MINTER_ADDRESS  --amount 10 --network testnet_aurora
```

After this, you can check the balance of a recipient's account to make sure he has the tokens now.

## Switch a network

Optionally you can specify any of the following networks for any command: __testnet_aurora__, __mainnet_aurora__, __ropsten__ like this:

```bash
$ make deploy NETWORK=mainnet_aurora
```

## Conclusion

In this tutorial, we have deployed an ERC-20 token using Hardhat on the Aurora
Testnet, transferred, and approved ERC-20 tokens. Moreover, we have added other
utility tasks such as getting the total supply, and the account balance.
