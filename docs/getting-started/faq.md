---
sidebar_label: FAQs
title: Frequently Asked Questions
---

### How do I get started with Aurora as a user?

Add Aurora Mainnet network to your MetaMask or any other EVM-compatible wallet [here](https://aurora.dev/start).
We also recommend you [download the Aurora Pass wallet](https://auroracloud.dev/pass) to get 50 free transactions every month and to have the best mobile wallet experience.
You can read more about Aurora Pass [here](/onboard/introduction).

After that, you can start exploring the ecosystem:

- Take a look at the [Aurora+](/getting-started/explore) and its possibilities: swapping, staking, on-ramping, lending, etc.
- Try using [RainbowBridge](https://rainbowbridge.app/) to transfer your assets between Ethereum, Near and Aurora.
- On-ramp using CEXes using [Forwarder](/launch-chain/forwarder/how-to-use/general).
- Learn more about different projects on our [Ecosystem Page](https://aurora.dev/ecosystem).

### How do I get started with Aurora as a developer?

Explore the documentation on this site, and also visit our [DevPortal](https://dev.aurora.dev/), take a look at:

- [DevTools Ecosystem](https://dev.aurora.dev/ecosystem)
- [The Dev Portal Blog](https://dev.aurora.dev/blog)
- [Getting Started Article](https://dev.aurora.dev/posts/getting-started-with-aurora)
- [Tutorial about getting ERC-20 testnet tokens](https://dev.aurora.dev/posts/how-to-get-usdc-tokens-on-aurora-testnet)

### Do you have a faucet to get some ETH for Testnet development?

To request some ETH on Aurora Testnet, go to [Aurora Testnet Faucet](https://aurora.dev/faucet)
For a regular development 0.001ETH is more than enough to start with, notice that the gas price is 0.07Gwei only.
But if you will need a lot more - just let our [Support Team](https://discord.gg/auroralabs) know.

### How do transaction fees work on Aurora?

The base fee token of Aurora is ETH, which will make your users feel right at home.
By leveraging the underlying low-cost capabilities of the Near Protocol, Aurora transactions will typically cost pennies (~$0.02). The gas cost is always constant on Aurora, there is no gas auction.
Currently, it equals 0.07GWei.
You read more about how it is calculated [here](https://dev.aurora.dev/posts/evm-gas-near-gas-on-aurora).

### How to run your own Aurora Node?

If you feel like you need to run an Aurora Node yourself, please use [this setup](https://github.com/aurora-is-near/standalone-rpc/).
The hardware requirements for the node are the same as for [NEAR RPC Node](https://docs.near.org/docs/develop/node/rpc/hardware-rpc#recommended-hardware-specifications)
though we recommend having 20-30% more storage. You can also read [a detailed article about the node setup](https://dev.aurora.dev/posts/spinning-up-your-own-aurora-node).

### I'm an app developer. Why should I choose Aurora over other EVMs?

Aurora was built by the same team that created the Near Protocol, considered to be among the most highly regarded blockchain technologies in the crypto space.
Although created at Near, Aurora exists as a separate entity, governed by the decentralized AuroraDAO, and is leveraging the unique underlying Near technologies to
align incentives of the network, product owners, and end users.
When you choose to deploy your app on Aurora, you’re partnering with a highly capable and dedicated organization, and
building upon a technical foundation that will scale to meet all your future needs.

### What is Aurora's TPS metric?

To answer that question we need to understand how gas on Near works. It can be thought as a computation time: 1 Tgas ~ 1 ms. So you can consider the TPS as a gas-related quantity.
For example, if your transactions are on average 10Tgas, then 1 will take 10ms, so you can do 100 such per second. So on Aurora, we have a computation-dependent TPS metric.
It could be scaled by using more shards of Near and deploying more [Aurora Chains](/launch-chain/introduction) to handle the load.
On average, we can provide you dozens of millions of transactions daily for your ecosystem – 300-500TPS per 1 instance of the Aurora chain running.

### Do you have a limit of gas per transaction?

The specifics of Near Protocol is that it has a time-based limitation for the gas per block. So, 1PGas is equal to 1s of the computation time on Near.
Or equivalently - 1 block. Every transaction on Near has a 300TGas limit and can not exceed it.

Therefore, we do have the same limit on Aurora too. And we're constantly working on improving it. You can read more about how we tackle it
and calculate the gas prices [here](https://dev.aurora.dev/posts/evm-gas-near-gas-on-aurora).

If you see `"error": "wasm execution failed with error: FunctionCallError(HostError(GasLimitExceeded))"`, it means you've hit that limit.

It's often possible to optimize the contract to overcome the issue (reducing transaction batch sizes, optimizing big transactions).
Nowadays we have optimized our contracts so well that the issue is almost non-existent, but it's important to know it could be achieved theoretically.

### I have a few more questions. Where can I get help?

For support and help with any questions, don't hesitate to reach out on Telegram channels: [official channel], [support in Discord], [development channel].

[official channel]: https://t.me/auroraisnear
[support in Discord]: https://discord.gg/auroralabs
[development channel]: https://t.me/auroraisneardev
