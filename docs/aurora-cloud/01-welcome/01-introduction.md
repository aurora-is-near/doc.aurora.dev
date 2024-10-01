# 💡 Welcome to Aurora

**What is Aurora?**

Aurora is an **EVM** (Ethereum Virtual Machine) compatible blockchain layer 2 on top of **Near protocol**, combining the compatibility with the Ethereum ecosystem and the performance and scalability of Near.



**How is Aurora different from other Ethereum layer 2s?**

Aurora is not a rollup or a side chain. It is implemented as a **smart contract** on the NEAR Protocol. This means that Aurora inherits most of the features from Near protocol such as:

* **1s block time**
* **220+** Near validators&#x20;
* Scalability through **sharding** technology

While providing ethereum compatibility:

* ETH is the base token of Aurora
* Transaction fees (gas fees) in Aurora are paid in ETH and are constant ([gas price](https://dev.aurora.dev/posts/evm-gas-near-gas-on-aurora) is 0.07 GWei, which is around **$0.003 per transaction**).
* Aurora supports all the Ethereum ecosystem tools — [MetaMask](https://metamask.io/), [Foundry](https://github.com/foundry-rs), [Truffle](https://www.trufflesuite.com/truffle), [Hardhat](https://hardhat.org/), [Remix](https://remix.ethereum.org/), etc...

**What are the TPS on Aurora?**

Transactions Per Second is a common measure of performance for blockchains. Since Aurora inherits its characteristics from Near Protocol, the TPS are the same as on Near which are around **1k TPS.**

Note that the TPS number depends a lot on the size of transactions (a simple transfer will be smaller than a swap for instance) so numbers can vary greatly.

* During peaks, TPS on Aurora could be around **10k**
* Thanks to the sharding technology of Near, TPS could go up to **100k** with the current shards
* And theoretically it actually has **no limit** since sharding offers horizontal scaling

**What programming language do I need to know to deploy on Aurora?**

As an EVM compatible chain, smart contracts on Aurora are written in Solidity, exactly how it is done on Ethereum, Polygon, Arbitrum or any other EVM chain. &#x20;

**I already have a dapp on Polygon, can I migrate to Aurora?**

Absolutely, since both chains are EVM compatible, you can simply redeploy your smart contracts on Aurora without additional development, and you will instantly benefit from the **high throughput** and **low transaction costs**.

**What are Virtual Chains?**

Virtual Chains are dedicated instances of the Aurora Engine, customised to a specific application. Read more about Virtual Chains in the next section.
