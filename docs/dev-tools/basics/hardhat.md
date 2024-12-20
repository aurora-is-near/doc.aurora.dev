---
title: Hardhat
---
[​](https://doc.aurora.dev/interact/hardhat/#introduction "Direct link to heading")[Hardhat](https://hardhat.org/) is an Ethereum development environment. It is known for debugging the Solidity code and the explicit error messages. Moreover it has extra nice features such as the interactive JavaScript console and the user defined tasks.

The main objective of this tutorial is to show how to deploy and interact with the Solidity smart contracts on Aurora using Hardhat. This tutorial assumes that you are familiar with `Hardhat` and the ERC-20 tokens. For more details about the fungible token standard, please refer to the [ERC-20 Standard specification](https://eips.ethereum.org/EIPS/eip-20).

## Installation[​](https://doc.aurora.dev/interact/hardhat/#installation "Direct link to heading")

This tutorial assumes that you have Node.js 12+ and Yarn. Please refer to the [Yarn installation how-to](https://classic.yarnpkg.com/en/docs/install#mac-stable) if you don't yet have the yarn command installed locally.

* To install the prerequisite packages, clone the examples repository:

```shell
git clone https://github.com/aurora-is-near/aurora-examples.git
cd aurora-examples/hardhat/erc20/
```

* Add your Aurora Private key (from MetaMask) to **.env** file and then run yarn :\


```shell
echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env
yarn install
```

## Deploy ERC-20[​](https://doc.aurora.dev/interact/hardhat/#deploy-erc-20 "Direct link to heading")

The ERC-20 example is about a native Watermelon token 🍉. You can exchange them into actual Watermelons 🍉🍉🍉. The total supply is `1000000`, the minter is the contract deployer address, and the decimals are `0` (One token --> One watermelon).

To deploy the `ERC-20` token contract, use the following command:

```shell
$ make deploy NETWORK=testnet_aurora
yarn hardhat run scripts/deploy.js --network testnet_aurora
yarn run v1.22.10
Deploying contracts with the account: 0x6A33382de9f73B846878a57500d055B981229ac4
Account balance: 2210010200000000000
WatermelonToken deployed to: 0xD7f2A76F5DA173043E6c61a0A18D835809A07766
✨  Done in 14.96s.

# export the token address
$ export TOKEN_ADDRESS='YOUR OUTPUT FROM DEPLOY (e.g. 0xD7f2A76F5DA173043E6c61a0A18D835809A07766)'
```

## Hardhat Tasks[​](https://doc.aurora.dev/interact/hardhat/#hardhat-tasks "Direct link to heading")

Hardhat tasks take care of parsing the values provided for each parameter. It gets the values, performs the type validation and converts them into your desired type.

In this example, we will go through a set of pre-defined Hardhat tasks that uses the Hardhat Runtime Environment ([HRE](https://hardhat.org/advanced/hardhat-runtime-environment.html)). In order to complete the tutorial, you should use them in the same order:

### ETH Balance[​](https://doc.aurora.dev/interact/hardhat/#eth-balance "Direct link to heading")

The following Hardhat task uses the `Web3` plugin to get the account’s balance:

```typescript
task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async taskArgs => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });
```

To get the `ETH` balance, use the following command:

```shell
npx hardhat balance --network testnet_aurora --account 0x6A33382de9f73B846878a57500d055B981229ac4
2.2100102 ETH
```

You should notice that `--network` is a global built-in option (parameter) in Hardhat. We will use it for the following commands as well.

### Total Supply[​](https://doc.aurora.dev/interact/hardhat/#total-supply "Direct link to heading")

The following task script gets the total supply of the Watermelon ERC-20 token. First it attaches the token contract, gets the sender address and finally retrieves the total supply by calling `totalSupply()` method in our ERC-20 contract. The `--token` address is the ERC-20 contract address.

```typescript
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

To get the `totalSupply`, use the following command:

```shell
$ npx hardhat totalSupply --token $TOKEN_ADDRESS --network testnet_aurora
Total Supply is 1000000
```

### Transfer ERC-20[​](https://doc.aurora.dev/interact/hardhat/#transfer-erc-20 "Direct link to heading")

The `transfer` option allows anyone holding an ERC-20 tokens to transfer them to any Ethereum address. In the following script, the minter address will mint (implicitly) and transfer `10 WTM` tokens to the `spender` address:

```typescript
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

To call `transfer`, use the following command:

```shell
$ npx hardhat transfer --token $TOKEN_ADDRESS --amount 10 --spender 0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe --network testnet_aurora
0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 has transferred 10 tokens to 0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe
```

### BalanceOf ERC-20[​](https://doc.aurora.dev/interact/hardhat/#balanceof-erc-20 "Direct link to heading")

We can prove that the `spender` has received the exact amount of tokens by calling the `balanceOf` as shown below:

```typescript
task("balanceOf", "Total supply of ERC-20 token")
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

To get the `balance`, use the following command:

```shell
$ npx hardhat balanceOf --token $TOKEN_ADDRESS --account 0x6A33382de9f73B846878a57500d055B981229ac4 --network testnet_aurora
Account 0x6A33382de9f73B846878a57500d055B981229ac4 has a total token balance:  999970 WTM
```

### Approve ERC-20[​](https://doc.aurora.dev/interact/hardhat/#approve-erc-20 "Direct link to heading")

In some cases, instead of calling the `transfer` directly, the sender can approve a specific amount of tokens to be withdrawn from his account to specific recipient address later. This can be done by calling `approve` then calling `transferFrom`.

```typescript
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

To call `approve`, use the following command:

```shell
npx hardhat approve --token $TOKEN_ADDRESS --spender 0x8722C88e82AbCC639148Ab6128Cd63333B2Ad771 --amount 10 --network testnet_aurora
0x6A33382de9f73B846878a57500d055B981229ac4 has approved 10 tokens to 0x8722C88e82AbCC639148Ab6128Cd63333B2Ad771
```

### TransferFrom ERC-20[​](https://doc.aurora.dev/interact/hardhat/#transferfrom-erc-20 "Direct link to heading")

After approving the tokens, a recipient can call `transferFrom` to move the `allowance` to his account.

```typescript
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

To call `transferFrom`, use the following command:

```shell
# export the recipient private key
AURORA_PRIVATE_KEY="THE RECIPIENT PRIVATE KEY" npx hardhat transferFrom --token $TOKEN_ADDRESS --sender 0x6A33382de9f73B846878a57500d055B981229ac4  --amount 10 --network testnet_aurora
0x8722C88e82AbCC639148Ab6128Cd63333B2Ad771 has received 10 tokens from 0x6A33382de9f73B846878a57500d055B981229ac4
```

Checking the balance of `0x8722C88e82AbCC639148Ab6128Cd63333B2Ad771`:

```shell
npx hardhat balanceOf --token $TOKEN_ADDRESS --account 0x8722C88e82AbCC639148Ab6128Cd63333B2Ad771  --network testnet_aurora
Account 0x8722C88e82AbCC639148Ab6128Cd63333B2Ad771 has a total token balance:  10 WTM
```

## Conclusion[​](https://doc.aurora.dev/interact/hardhat/#conclusion "Direct link to heading")

In this tutorial we deployed an ERC-20 token using Hardhat on the Aurora Testnet, transferred, and approved ERC-20 tokens. Moreover, we added other utility tasks such as getting the total supply, and the account balance. The only difference is we changed the Ethereum Mainnet to the Aurora RPC endpoint.
