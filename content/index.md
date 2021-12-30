---
hide:
  - navigation
---

# Welcome to Project Aurora

!!! caution "Here be dragons"

    This documentation is a work in progress and may contain incomplete,
    inaccurate, or outdated information.

**[Aurora] is an Ethereum Virtual Machine (EVM) on the [NEAR Protocol]
blockchain, delivering a turn-key solution for developers to operate their
apps on an Ethereum-compatible, high-throughput, scalable, and future-safe
platform, with low transaction costs for their users.**

Aurora provides the Ethereum 1.0 development experience, with layer-2-like
speed and scalability. If you are an Ethereum developer, getting starting on
Aurora is as easy as changing the RPC endpoint you interact with. If you're
ready to dive in check out our [Develop] page for more information.

The capabilities of Aurora are possible because it is built on top of
[NEAR]. NEAR is a modern layer-1 blockchain which is fast (2-3 second
transaction finalization), scalable, and [carbon neutral].

Even though NEAR is a separate blockchain from Ethereum, Aurora aims for
full compatibility with Ethereum development tools such as [Truffle] and
[Hardhat]. Additionally, NEAR's [trustless bridge] to Ethereum means even
the assets on Aurora are the same as Ethereum. For example, account balances
in Aurora's EVM are denominated in the same Ether (ETH) as on Ethereum
itself.

# Aurora Developer cheatsheet

### Gas fees and API Keys
At the moment we cover all the gas costs on the mainnet. This makes Aurora a good target for various DDoS and Spam attacks.
To fight those, we have API keys. There's a public UI in development for developers to be able to get those, but for the time being those have to be issued manually. To request an API key, message Anton ([telegram](https://t.me/antonpaisov), [email](mailto:anton@aurora.dev)) or Ahmed ([telegram](https://t.me/theZeroX)).
To generate an API key we will need an email address to associate with it, so please include it in the message.

To use the key simply append it to the network host address. So `https://mainnet.aurora.dev` becomes `https://mainnet.aurora.dev/YOUR_API_KEY`

### Maximum gas per transaction (a monthly updated section)
The main issue we have on Aurora and we're constantly working on improving is the maximum gas per transaction limit.
The nature of the issue comes from the fact that the block time on NEAR is 1 second (for comparison it's 14 seconds on Ethereum).
Naturally the transaction must fit in a block.
There's no easy way to map NEAR Gas to Ethereum Gas, but the rough current maximum gas per tx corresponds to `1.63mil Eth gas`.
If you see `"error": "wasm execution failed with error: FunctionCallError(HostError(GasLimitExceeded))"`, it means you've hit that limit.
It's ofter possible to optimise the contract to overcome the issue (reducing transaction batch sizes, optimising big transactions).
We're working hard on making the issue non-existant, but it's important to know it's present at the moment.

### Running your own Aurora Node
If you feel like you need to run an Aurora Node yourself, please use [this setup](https://github.com/aurora-is-near/partner-relayer-deploy)
The hardware requirements for the node are same as for [NEAR RPC Node](https://docs.near.org/docs/develop/node/rpc/hardware-rpc#recommended-hardware-specifications) though we recommend to having 20-30% more storage.

### Adding assets to the bridge
We have recently released this [UI interface](https://rainbowbridge.app/deploy) to deploy and view bridge tokens. The metadata status update is also available.
And to add your assets to the bridge you need to create a PR in [bridge-assets](https://github.com/aurora-is-near/bridge-assets) (see readme).

### Requestions Eth for the testnet
To request testnet Eth, go to [Aurora Testnet Faucet](https://testnet.aurora.dev/faucet)

<!-- Read more about [bridging assets from Ethereum to Aurora](learn/bridge/eth.md). -->

Still have questions? Check out our [answers to frequently asked questions
(FAQs)](develop/faq.md).

[NEAR Protocol]:  https://near.org
[NEAR]: https://near.org
[Aurora]: https://aurora.dev
[Develop]: develop/networks.md
[carbon neutral]: https://near.org/blog/near-climate-neutral-product/
[Truffle]: https://www.trufflesuite.com/truffle
[Hardhat]: https://hardhat.org
[trustless bridge]: https://near.org/bridge/
