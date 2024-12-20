---
title: RedStone
---
![](https://www.datocms-assets.com/95026/1685655574-redstone-banner-7257fdf47d9e295449b82eb474c10b2c.png)

RedStone is an Oracle that delivers frequently updated, reliable, and diverse data feeds for your dApp and smart contracts on multiple L1s & L2s.

### Why we build another Oracle system[​](https://docs.redstone.finance/docs/introduction#why-we-build-another-oracle-system "Direct link to Why we build another Oracle system")

* Pushing data on-chain regardless of whether it is used or not is a huge waste of resources
* Obsolete and monolithic architecture limits scalability (it's hard to list new assets or reduce latency)
* Protocols cannot fully decide on trusted sources and data update conditions
* End-users are fully dependent on relayers and could be cut off from the service

### Solution[​](https://docs.redstone.finance/docs/introduction#solution "Direct link to Solution")

RedStone offers a radically different design of Oracles catering to the needs of modern DeFi protocols.

* Data providers can avoid the requirement of continuous on-chain data delivery
* Allow end users to self-deliver signed Oracle data on-chain
* Use the decentralized Streamr network to deliver signed oracle data to the end users
* Use token incentives to motivate data providers to maintain data integrity and uninterrupted service
* Leverage the Arweave blockchain as cheap and permanent storage for archiving Oracle data and maintaining data providers' accountability

### Key facts[​](https://docs.redstone.finance/docs/introduction#key-facts "Direct link to Key facts")

* The [modular architecture](https://docs.redstone.finance/docs/smart-contract-devs/how-it-works#data-flow) maintains [data integrity](https://docs.redstone.finance/docs/smart-contract-devs/how-it-works#data-format) from source to smart contracts
* There are [3 different ways](https://docs.redstone.finance/docs/smart-contract-devs/how-it-works#3-ways-to-integrate) to integrate our service tailored to your needs
* We provide feeds for more than [1000 assets](https://app.redstone.finance/#/app/tokens) integrating [~50 data sources](https://app.redstone.finance/#/app/sources)
* We are present on [20+ chains](https://showroom.redstone.finance/)
* RedStone has been live on mainnets since March 2022 with no downtime. Code was audited by ABDK, Packshield and L2Beat Co-Founder.
* RedStone was a launch partner for [DeltaPrime](https://deltaprime.io/) on Avalanche and delivered data feeds not available anywhere else. Thanks to that DeltaPrime became the top 3 fastest growing dApps according to DefiLama.

### EVM-compatible chains[​](https://docs.redstone.finance/docs/smart-contract-devs/chain-integration#evm-compatible-chains "Direct link to EVM-compatible chains") integration

RedStone Oracles can be integrated with EVM-compatible chains out of the box thanks to the [evm-connector](https://docs.redstone.finance/docs/smart-contract-devs/getting-started#usage). Examples of the chains tested by our team can be found [here](https://showroom.redstone.finance/).

If you want to test your chain there is an example contract and script [here](https://github.com/redstone-finance/redstone-showroom/tree/main/example). You need to follow two steps:

1.  Deploy integration example contract to your chain
2.  Fill in missing parameters and run an example Typescript script that does the following things:

* fetches data from the decentralized cache layer,
* adds signed price data to transaction data,
* interacts with the contract and receives price data.

You should be able to see price data logged to the console.
