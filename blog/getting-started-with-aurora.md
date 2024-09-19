---
title: "Getting started with Aurora"
description: "Practical guide for beginners who want to learn how to use Aurora and develop smart contracts"
date: "2023-06-06"
authors: [olga]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1686009470-gswa.png
---
This article is a practical guide for beginners who want to learn how to work with the Aurora blockchain. It covers various aspects such as the connection of Aurora with Ethereum and Near blockchains, setting up an account on the Aurora's `testnet` using MetaMask, writing a small smart contract, and interacting with it using the Hardhat. Additionally, it includes writing a simple test and exploring different explorers to view transaction details.

The article assumes no prior knowledge of Ethereum or experience working with it. However, it does expect basic programming skills, familiarity with the command line, and a general understanding of blockchain and smart contracts. All commands provided in the article will be specific to the Linux operating system.

<!-- truncate -->

## How Aurora is related to Ethereum and Near.

While working with Aurora, you must often interact with first-layer blockchains such as Ethereum and NEAR. Ethereum is one of the most well-known and popular blockchains with a large ecosystem. Nevertheless, it exhibits some technological limitations, the most significant being the transaction cost. As a result, interacting with contracts on Ethereum often requires a considerable amount of money for transaction fees. Conversely, NEAR is a blockchain developed later with specific technical advantages over Ethereum, including significantly lower transaction costs.

Aurora is a second-layer blockchain built on NEAR and designed to be highly compatible with Ethereum, making it easier to migrate Ethereum's codebase to Aurora.

### Connection with Ethereum

Aurora uses AuroraEth as the payment currency for transactions. AuroraEth is essentially the same as Ether but operates within the Aurora network. You will notice that it is named just ETH everywhere: in Metamask, Explorer, etc., so there is no difference actually for the users and devs. Contracts in Aurora are written in Solidity and have the same structure and syntax as Ethereum contracts. The addressing system is also the same. Consequently, you can use tools such as MetaMask, Hardhat, and other applications to interact with Aurora. The general idea is that contracts developed for Ethereum can be easily transferred to Aurora, providing a seamless user experience and minimizing the need for modifications.

### Connection with Near

Aurora is a second-layer blockchain built on Near. As a result, interaction with Aurora via a NEAR smart contract is possible, allowing, for example, monitoring transactions within Aurora on the NEAR blockchain, see [How to get NEAR transaction from the Aurora’s one?](/blog/convert-aurora-transaction-into-near-s-one). Aurora and NEAR enable efficient cross-chain communication with each other, you can read more about this in the next blog posts: [Cross-Ecosystem Communication](/blog/cross-ecosystem-communication), [Building a game using Near, Aurora and BOS](/blog/building-a-game-using-near-aurora-and-bos).

## Hardhat: create the project

Before we begin writing the contract, setting up the development environment is necessary. This article will utilize [Hardhat](https://hardhat.org/tutorial) to interact with the Aurora contract.

Aurora is designed to be highly compatible with Ethereum, which means that tools and frameworks created for Ethereum can also be used for working with Aurora. This compatibility allows developers to leverage their existing knowledge and tools when working with Aurora. So whether you choose Hardhat, Truffle, or another Ethereum-compatible tool, you can interact with Aurora similarly.

Let's start by [installing Hardhat](https://hardhat.org/hardhat-runner/docs/guides/project-setup):

```bash
yarn init -y
yarn add --dev hardhat
```

To create a Hardhat project, you can use the following command in the desired directory:

```bash
npx hardhat
```

After running the `npx hardhat` command, an interactive process will start. Select `Create JavaScript project`. It will ask a few questions. Enter the values you want to set, or you can just use the default values by pressing `Enter`. Following these steps, you'll have a basic Hardhat project set up and ready to be customized for your specific needs.

In this article, we will not delve into the details of text editors for working with contracts. I use the Clion by myself, which supports plugins for Solidity. You can choose[ Remix](https://remix.ethereum.org/) or even a simple editor like Notepad or Vim.

## The Smart-Contract

It is time to start writing the contract. Delete the `contracts/Lock.sol` file and create a new file called `contracts/Incrementer.sol`. Write the following simple contract:

```solidity
pragma solidity 0.8;

contract Incrementer {
    uint counter;

    constructor(uint startValue) {
        counter = startValue;
    }

    function increment() public {
        counter = counter + 1;
    }

    function getCounter() public view returns (uint) {
        return counter;
    }
}
```

The contract is named `Incrementer`. It has one state variable ` counter  `of type `uint`. When the contract is deployed, the constructor `constructor(uint startValue)` is called. It initializes the `counter` with the `startValue` provided during deployment. The `increment()` function is a public function that increments the value of the `counter` by 1. The `getCounter()` function is a `public view` function that returns the current value of the `counter` without modifying the state of the contract.

## Creating an account on the Aurora testnet using MetaMask

To create the wallet in Aurora, you should install a Chromium-based web browser with the extensions support (e.g., Chrome, Brave, etc.) and then MetaMask ([*https://metamask.io/*](https://metamask.io/)), an Ethereum/Aurora (in general, EVM) wallet that runs as an extension.

During the installation of MetaMask, you will be asked to create a new wallet secured by a "**seed phrase**" consisting of twelve words. Storing this phrase securely is essential, as any unauthorized access could allow anyone to recreate your wallet and steal all your funds!

We must add the Aurora network now that MetaMask is installed in Chrome. (It comes preconfigured with Ethereum, and other networks have to be added manually.) To add Aurora to MetaMask, visit the Aurora Start page:

[*https://aurora.dev/start*](https://aurora.dev/start)

Then click `Add Network` (Testnet) to add the Aurora network to MetaMask.

## Obtaining AuroraEth on the testnet

To interact with the contract, you have to obtain some AuroraEth in the Aurora `testnet`. There are two ways to accomplish this:

### The first method: directly obtain AuroraETH

To directly obtain AuroraETH in the `testnet`, you can follow these steps:

*   Go to the following link: [https://aurora.dev/faucet](https://aurora.dev/faucet)
*   Select the Testnet.
*   Connect to MetaMask. Click on "Connect to Aurora Testnet." This will likely open your MetaMask wallet and prompt you to perform a few simple instructions.
*   Check the wallet address to which you have connected. If you have multiple accounts in MetaMask and it is not connected to the desired account, click on the MetaMask icon in your browser and select the account you want to connect to.
*   Click on "Request 0.001 ETH from the faucet." This will initiate the process of receiving AuroraETH.

Congratulations! You now have AuroraETH in your `testnet` wallet!

![](https://www.datocms-assets.com/95026/1685341594-auroaeth.jpg)

Sadly, using this method can only obtain a limited amount of ETH. Luckily, to acquire larger amounts of AuroraETH, you can follow the method described below.

### The second method: transfer from Ethereum

This method will take approximately 20 minutes. First, we will obtain ETH in Goerli testnet on Ethereum and then transfer it to Aurora using the Rainbow Bridge. Aurora and Ethereum use the same address space. Therefore, the address you created in MetaMask can be used in Aurora and Ethereum.

Obtain the Eth in Goerli testnet in Ethereum:

*   Go to the following link:[ *https://goerli-faucet.pk910.de/*](https://goerli-faucet.pk910.de/). Of course, it is not the only option. But here, you can get the Eth without a daily limit.
*   Enter the address where you want the Eth to be sent.
*   Click “Start Mining” and wait…
*   Finish the mining and receive Eth.

Transfer the Eth to Aurora using the Rainbow Bridge:

*   Visit[ *https://testnet.rainbowbridge.app/*](https://testnet.rainbowbridge.app/)
*   Click “New Transfer” and select “Transfer from Ethereum” and “Transfer to Aurora”
*   Connect to the desired address using MetaMask in both networks
*   Wait for approximately 20 minutes for the transfer to complete

You get the AuroraEth! Now you are ready for contract deployment!

## Contract deployment

First, we should edit the `hardhat.config.js` and add information about aurora testnet.

Your `hardhat.config.js` should look like this:

```javascript
require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    }
  }
};
```

We use the `AURORA_PRIVATE_KEY` environment variable to designate the account through which we will interact with the network.

You should save your private key into an `.env` file by using the following command:

```bash
echo "AURORA_PRIVATE_KEY=[YOUR_AURORA_PRIVATE_KEY_HERE>" >](YOUR_AURORA_PRIVATE_KEY_HERE>" >) .env
```

You can get your private key from MetaMask:

![](https://www.datocms-assets.com/95026/1685342401-metamaskgetprivatekey-1.jpg)

> *WARNING: the space of the account for Aurora testnet, Aurora mainnet, Ethereum mainnet, and Ethereum testnets is the same. So, the Aurora testnet's private key can also be used for Aurora/Ethereum mainnet. Please ensure that the provided account is indeed a test account and that it does not hold any real funds in any live networks*

Let’s edit the `scripts/deploy.js` file:

```javascript
const hre = require("hardhat");

async function main() {
  const Incrementer = await hre.ethers.getContractFactory("Incrementer");
  const incrementer = await Incrementer.deploy(0);
  await incrementer.deployed();

  console.log(
    `Deployed to ${increment.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

In the script above we deploy the `Incrementer` contract and print the deployed contract’s address.

The `hre` (Hardhat Runtime Environment) object from `hardhat` library provides utilities for interacting with the Ethereum/Aurora network and with the contract. In our case, we use `hre` to obtain the contract factory for the `Incrementer` contract.

```javascript
const Incrementer = await hre.ethers.getContractFactory("Incrementer");
const incrementer = await Incrementer.deploy(0);
await incrementer.deployed();
```

These lines obtain the contract factory for the "Incrementer" contract using `hre.ethers.getContractFactory` and then deploy an instance of the contract with an initial counter value of 0 using `Incrementer.deploy(0)`. The `await incrementer.deployed()` ensures that the deployment transaction is confirmed and the contract instance is ready for use. In the function `getContractFactory`, you should specify the contract name. As long as this contract is in the `contracts` folder it will be detected.

```javascript
console.log(`Deployed to ${increment.address}`);
```

This line prints the aurora address of the deployed contract.

To run this script you can execute the following command in your terminal:

```bash
yarn hardhat run scripts/deploy.js --network testnet_aurora
```

Congratulations, your smart contract is deployed! You can find more details about transactions with this contract in the [Aurora Testnet Explorer](https://explorer.testnet.aurora.dev/address/0x0a11fF48B2D9B4eE14658b0836168219E1676118):

![](https://www.datocms-assets.com/95026/1686009148-screenshot-2023-06-06-at-00-52-03.png)

## Interaction with the contract by using HardHat.

Now, we want to learn how to interact with our contract. The easiest way is to create tasks within the `hardhat.config.json` file. Inside each `task` we will write the code of the interaction with the contract.

The structure of the `hardhat.config.json` should look like this:

```javascript
require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;

task('task1', 'Task 1 Description')
    .addParam('arg1', 'Description of the first arg')
    .addParam('arg2', 'Description of the second arg')
    .setAction(async taskArgs => {
        // The first task code here
    });

task('task2', 'Task 2 Description')
    .addParam('arg1', 'Description of the first arg')
    .addParam('arg2', 'Description of the second arg')
    .setAction(async taskArgs => {
       // The second task code here
    });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    }
  }
};
```

To run the task, you can execute the following command in your terminal:

```bash
yarn hardhat task1 ---arg1 [ARG1> --arg2 <ARG2](ARG1> --arg2 <ARG2) --network testnet_aurora
```

Let’s write a task that displays the current `counter` value:

```javascript
task('get-counter', 'Returns the current counter for the provided Incrementer')
    .addParam('incrementerAddress', 'Aurora address of Incrementer contract')
    .setAction(async taskArgs => {
        const incrementerAddress = hre.ethers.utils.getAddress(taskArgs.incrementerAddress);

        const Incrementer = await hre.ethers.getContractFactory("Incrementer");
        const incrementer = await Incrementer
          .attach(incrementerAddress);

        console.log(
          "Current counter value in Incrementer: ",
          (await incrementer.getCounter()).toString()
        );
    });task('get-counter', 'Returns the current counter for the provided Incrementer')
    .addParam('incrementerAddress', 'Aurora address of Incrementer contract')
    .setAction(async taskArgs => {
        const incrementerAddress = hre.ethers.utils.getAddress(taskArgs.incrementerAddress);

        const Incrementer = await hre.ethers.getContractFactory("Incrementer");
        const incrementer = await Incrementer
          .attach(incrementerAddress);

        console.log(
          "Current counter value in Incrementer: ",
          (await incrementer.getCounter()).toString()
        );
    });
```

Here, we create the `get-counter` task. The `addParam` specifies the arguments that must be provided in the terminal. In this case, we will give the Aurora address of the `Incrementer` contract.

In the following lines, we get an incremental contract deployed to a specific address:

```javascript
const incrementerAddress = hre.ethers.utils.getAddress(taskArgs.incrementerAddress);

const Incrementer = await hre.ethers.getContractFactory("Incrementer");
const incrementer = await Incrementer.attach(incrementerAddress);
```

And here we call the `getCounter` view method of the `Incrementer` contract and print the results:

```javascript
console.log(
    "Current counter value in Incrementer: ",
    (await incrementer.getCounter()).toString()
 );
```

To run the `get-counter` task in `aurora testnet`, you should execute the following command in your terminal:

```bash
export INCREMENTER_ADDRESS=0x089d821d729B449DC890cF3F25365589Fc92e1b8
yarn hardhat get-counter --network testnet_aurora --incrementer-address $INCREMENTER_ADDRESS
```

Here I provide the address where the `Incrementer` contract was deployed. You should provide the address which was shown in the terminal after the contract was deployed.

![](https://www.datocms-assets.com/95026/1685344118-run-deploy.jpg)

The task for incrementing `counter` looks similar:

```javascript
task('increment-counter', 'Increments the counter for the provided Incrementer')
    .addParam('incrementerAddress', 'Aurora address of Incrementer contract')
    .setAction(async taskArgs => {
        const incrementerAddress = hre.ethers.utils.getAddress(taskArgs.incrementerAddress);

        const Incrementer = await hre.ethers.getContractFactory("Incrementer");
        const incrementer = await Incrementer
            .attach(incrementerAddress);
        
        await incrementer.increment();
    });
```

The command for running `increment-counter` task:

```bash
yarn hardhat increment-counter --network testnet_aurora --incrementer-address $INCREMENTER_ADDRESS
```

After the increment, you can run `get-counter` task and check that counter is increased:

![](https://www.datocms-assets.com/95026/1685344456-screenshot-from-2023-05-22-17-52-10.png)

## Testing

In the Hardhat template project also, the `test` folder was created. This folder contains the files with the tests for our smart contract. In this section, we will write a small test for the contract and learn how to run it.

First, let’s delete the `test/Lock.js` file and create the `test/Incrementer.js`. In our test, we will deploy the `Incrementer` contract, increment the counter, and check the counter value.

The final `test/Incrementer.js` file:

```javascript
const { expect } = require("chai");
const hre = require("hardhat");

describe("Incrementer", function () {
  it("After calling increment, the counter should increase by one", async function () {
    const Increment = await hre.ethers.getContractFactory("Incrementer");
    const increment = await Increment.deploy( 0 );
    await increment.deployed();

    expect(await increment.getCounter()).to.equal(0);
    await increment.increment();
    expect(await increment.getCounter()).to.equal(1);
  });
});
```

The `describe` function is used to define a test suite for our contract. Inside the test suite, the `it` function is used to define a specific test case. So, the structure of the tests generally looks like this:

```javascript
describe("Test suite", function () {
  it("Test case 1", async function () {
     // The code for the first test here
  });
  
  it("Test case 2", async function () {
     // The code for the second test here
  });
});
```

For writing [asserts](https://ethereum-blockchain-developer.com/2022-04-smart-wallet/05-exceptions-assert/) in tests we use `expect` function from the `chai`ibrary:

```javascript
const { expect } = require("chai");

//...

expect(await increment.getCounter()).to.equal(0);
```

The part with that deploys and interacts with the contracts is the same as in previous sections.

To run the tests in the local network, you can execute the following command in your terminal:

```bash
yarn hardhat test
```

To run the tests in the Aurora Testnet, use the following command:

```bash
yarn hardhat test --network testnet_aurora
```

## Aurora and Near Explorers

After we submit the transaction, we can find it on the Aurora Explorer website:[ *https://explorer.testnet.aurora.dev/*](https://explorer.testnet.aurora.dev/)

For example, here you can find information about one of the transactions in our Increment contract [here.](https://explorer.testnet.aurora.dev/tx/0x17f890b73366dd251d00f2df5b187ee9107b9c344d9cd02ab4bb683125916b58)

You can search for transactions using the transaction hash, contract address, or signer account.

Furthermore, for each transaction on Aurora, we can find the corresponding transaction on the Near blockchain. For example, there is a corresponding transaction in Near Explorer for the transaction mentioned above: [*here.*](https://explorer.testnet.near.org/transactions/5tLaTtR6KuUvVfmUkguKis3JMB8unK7q1cMP1tfRd52F)

To find the correspondent transaction in Near Explorer, you can use [this dApp](https://aurora-helpers.vercel.app/aurora_to_near). More detail in [this blog post](/blog/demystifying-transaction-failures).

## Conclusion

Aurora, a blockchain practically identical to Ethereum, provides a similar experience in terms of how users interact. Smart contracts intended for Ethereum are generally compatible with Aurora, and many Ethereum-centric tools align well. Yet, it operates on the Near blockchain, allowing for interaction akin to a Near smart contract. Consequently, every transaction within this platform can be associated with corresponding activity within Near.

In this article, we have learned how to: (1) create accounts in Aurora, (2) get AuroraETH, and (3) deploy and interact with Aurora contracts using HardHat.

## References

*   HardHat: [https://hardhat.org/tutorial](https://hardhat.org/tutorial)
*   MetaMask: [https://metamask.io/](https://metamask.io/)
*   Get AuroraETH: [https://aurora.dev/faucet](https://aurora.dev/faucet)
*   Mining Goerli ETH: [https://goerli-faucet.pk910.de/](https://goerli-faucet.pk910.de/)
*   Rainbow Bridge for testnet: [https://testnet.rainbowbridge.app/](https://testnet.rainbowbridge.app/)
*   Explorer for Aurora testnet: [explorer.testnet.aurora.dev](https://explorer.testnet.aurora.dev/)
*   Explorer for Near testnet: [https://explorer.testnet.near.org](https://explorer.testnet.near.org)
*   dApp for get Near tx from Aurora tx: [https://aurora-helpers.vercel.app/aurora_to_near](https://aurora-helpers.vercel.app/aurora_to_near)
*   Demystifying Transaction Failures: [/blog/demystifying-transaction-failures](/blog/demystifying-transaction-failures)
