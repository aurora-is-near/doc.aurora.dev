---
title: 	Simple Counter
---

In this guide you will write one of the simplest smart contracts possible and learn how to deploy and interact with it.
We will store just one integer value inside of it and increment it:

```solidity title="contracts/Incrementer.sol"
// SPDX-License-Identifier: MIT
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

To deploy it to the Aurora Testnet you need to follow the steps below.

:::tip
You can find the code of the whole project in [GitHub repository](https://github.com/aurora-is-near/aurora-examples/blob/main/hardhat/incrementer-example/).
:::

## Create project

Open your favorite terminal application and clone the repo:

```bash
git clone git@github.com:aurora-is-near/aurora-examples.git
cd hardhat/incrementer-example
```

## Configure project

Add your Aurora Private key (from MetaMask or other Web3 wallet) to `__.env__` file:

```bash
$ echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env
```

## Interact with contract

:::note
To use the commands below you will need Node.js and `yarn` to be installed. Please follow the [instructions here](https://nodejs.org/en/download/package-manager) to install Node.js.
Then, install `yarn` with `npm install --global yarn` or read more [here](https://classic.yarnpkg.com/lang/en/docs/install/).
:::

To deploy the contract to Testnet run:

```bash
$ make deploy
```

Take the address of the deployed Incrementer from the output to use it in the next steps.

To get the current counter value run:

```bash
$ make get-counter INCREMENTER_ADDRESS=YOUR_INCREMENTER_ADDRESS_HERE
```

To increment the current counter value run:

```bash
$ make increment-counter INCREMENTER_ADDRESS=YOUR_INCREMENTER_ADDRESS_HERE
```

You can observe your transactions by using [Aurora Block Explorer](https://dev.aurora.dev/ecosystem/block-explorer).

## Switch a network

Optionally you can specify any of the following networks for any command: __testnet_aurora__, __mainnet_aurora__, __ropsten__ like this:

```bash
$ make deploy NETWORK=mainnet_aurora
```

## More materials

You can find a more detailed tutorial with a similar Incrementer example in the [Getting Started with Aurora article](https://dev.aurora.dev/posts/getting-started-with-aurora).
