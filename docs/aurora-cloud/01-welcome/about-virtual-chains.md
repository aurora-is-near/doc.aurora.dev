# 📄 About Virtual Chains

## What are Virtual Chains?

Virtual Chains are a unique innovation from Aurora providing a **dedicated** and **customised** chain, or **appchain**.&#x20;

Each Virtual Chain is a copy of the **Aurora Engine** (the Aurora smart contract) and deployed on **Near**. This means that they inherit most of the performance and security features from Near:

* 1s block time
* 220+ validators from Near
* \~$0.003 per transaction

![image5](/img/.gitbook/assets/image_(5).png)

## How are Virtual Chains different from other appchains (Arbitrum, Avalanche, Polygon)?

Usually, appchains are side chains or rollups, which are completely separate blockchains from the main settlement chain. This has several consequences:

* Each appchain needs to have its own **validators set**, which can be expensive to set up and run, and affects the decentralisation and security of the network. Typically, an appchain requires a minimum of 5 validators (which already comes at a cost)&#x20;
* Appchains come empty, meaning the team will need to redevelop all the tools they might have wanted to use, such as onramps, oracles, indexers, etc... This involves third parties and can be extremely costly and time consuming.

* **Instead, each Virtual Chain automatically gets all the 220 validators from Near**
* Because Virtual Chains are smart contracts on Near, this allowed us to build tools and services that automatically support all new Virtual Chain, such as **onramp, centralised exchange support, Oracle**, etc... so that you don't have to start from scratch.

## How do I get my own Virtual Chain?

Aurora has built a platform for this purpose:  [**Aurora Cloud**](https://auroracloud.dev/).

Aurora Cloud proposes different plans to get your own chain, including **free transactions**, custom **professional services** and much more... in order to let you focus on **building your application**, not setting up infrastructure!
