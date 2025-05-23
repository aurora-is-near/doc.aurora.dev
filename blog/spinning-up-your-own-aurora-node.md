---
title: "Spinning up your own Aurora node"
description: "Learn the details of starting your own Aurora node using the Standalone RPC repo"
date: "2023-05-26"
authors: [oleksii_krasynskyi]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1685097397-node.png
---
At Aurora Labs, we encourage everyone to use [mainnet.aurora.dev](https://mainnet.aurora.dev) or [testnet.aurora.dev](https://testnet.aurora.dev) to build and deploy their apps. Those endpoints are scalable and reliable. When registering at [https://aurora.plus](https://aurora.plus/) you can even get a bunch of free transactions (soon through the Aurora Pass wallet).

That said, many dapps that are deployed on Aurora rely on running their own JSON-RPC Etherium-compatible server. Here we call this server – a relayer. You've probably already read the details about our new version of it in [How the Aurora Relayer 2.0 works?](/blog/aurora-relayer-2-0)

<!-- truncate -->

### Who needs it?

Running your own relayer has benefits since you get full control over both hardware and software. Additionally, you will be the one paying for all the transactions in NEAR, thus you are free to charge your users with whatever gas price you desire. Or, maybe, if for some reason you feel like a good samaritan, do not charge for transactions at all.

There is another category of users who might consider running their own setup, and those are developers or newcomers who want to understand a bit more, or even contribute. So, what does it take to run your own relayer? First, we need to understand what is the relayer, and to do that we will take a look at what it consists of.

### Relayer Components

The Relayer consists of three components:

* ***a JSON-RPC server*** compatible with Ethereum's [Web3 API](https://eth.wiki/json-rpc/API) for [Aurora Engine](https://github.com/aurora-is-near/aurora-engine) instances deployed on the NEAR Protocol.
* ***Aurora Refiner*** which allows users to download all NEAR Blocks and produce Ethereum-compatible blocks, transactions, and logs.
* ***Indexer*** which continuously reads JSON files generated by [Aurora Refiner](https://github.com/aurora-is-near/borealis-engine-lib) and populates a database, that is used by the JSON-RPC server to serve data.

![](https://www.datocms-assets.com/95026/1680267260-relayer-20.png)

This means that in order to deploy the relayer, we need to deploy these three components. JSON-RPC server and Indexer is a single project written in Go (you can check all the source code of the Relayer [here](https://github.com/aurora-is-near/relayer2-public)). While [Aurora Refiner](https://github.com/aurora-is-near/borealis-engine-lib) is a separate one written in Rust.

Although there is documentation on how to run and deploy them manually, for the ease of use we have developed an [installation script](https://github.com/aurora-is-near/standalone-rpc) that greatly simplifies the whole process. Now let's take a closer look at it.

### Standalone RPC

\
This installation script is called [standalone-rpc](https://github.com/aurora-is-near/standalone-rpc). It has multiple steps and in this blog post, I would like to explain what it actually does and what options on running relayer do you have.

First, we can split the whole process into a set of steps:

1. Generate NEAR account and signing key.
2. Generating configuration files for relayer, refiner, and nginx.
3. Download the latest database snapshot for relayer (optional, but recommended).
4. Download the latest NEAR Node Data Snapshot and configuration, that is required to correctly run the refiner in `nearcore` mode.
5. Set up AWS credentials if instead of `nearcore` mode you decided to run the refiner in `nearlake` mode.

Download and start four docker containers: `relayer`, `refiner`, `watchtower`, and `nginx`.

If some or all of those steps are unclear – don't worry, we will dig into each of those steps in a moment.

### Generate NEAR account and signing key

When running your own relayer, if you intend to send a transaction via `eth_sendRawTransaction` this transaction will eventually be executed on NEAR. This means that some NEAR will have to be charged from your account for the execution. For the relayer to charge your account, this account needs to be generated first, which is exactly what happens during this step.

Keep in mind that you have to send some NEAR to that account, so it can be properly charged for transactions. You can also use your own NEAR account and signing key and put them into **srpc2/config/relayer/relayer.json** instead of a pre-generated one. If you already have a NEAR account, the simplest way to generate a signing key would be to use [near-cli](https://docs.near.org/tools/near-cli).

### Generating configuration files for relayer, refiner, and nginx

Before diving into the configuration, let's discuss what are the different options to run the Relayer. It's pretty straightforward.

1. You can run `relayer` in mainnet or testnet mode.
2. You can use `nearlake` or `nearcore` as a source of data for the `refiner`.

Choosing to run the mainnet or testnet is quite self-explanatory. But the second option is not.

### Nearcore Mode

In this mode `refiner` is running a `nearcore` under the hood, that is constantly synced with the network. It will constantly extract NEAR blocks from the database, then refine them into Aurora blocks and feed them to the Indexer. If you would like to reindex the whole Aurora network starting from genesis, without using any data snapshots – this is the way to do that. Keep in mind that it will take many weeks, or even months to reindex the whole network, and it will use up to 6TB of storage.

You have the option to download [near data snapshot](https://near-nodes.io/intro/node-data-snapshots) to fasten the process, though it will still take several weeks to refine all of the NEAR blocks into Aurora blocks.

The recommended approach, that is being used in this [installation script,](https://github.com/aurora-is-near/standalone-rpc) is to download the Relayer Database snapshot and NEAR RPC data snapshot. NEAR RPC data snapshot has data for the last two weeks and is made every 12 hours. This is more than enough to quickly sync with the network and catch up with the HEAD; storage wise it is somewhere around ~800 GB.

### Nearlake Mode

The `refiner` can also be run in `nearlake` mode. This mode does not require you to download any NEAR data snapshots, but instead relies on [Near Lake Framework.](https://docs.near.org/concepts/advanced/near-lake-framework) Lake Framework relies on the data being dumped to AWS S3, the Refiner can download it and use it as a source.

This approach will save most of the storage for you and is the fastest way to get started. It does require you to set up AWS credentials which is a requirement for using [Near Lake Framework.](https://docs.near.org/concepts/advanced/near-lake-framework) There is a quick [guide](https://www.youtube.com/watch?v=GsF7I93K-EQ\&t=277s) on how to do that and it shouldn't take a lot of time.

### Starting relayer

The final step of the whole process is to download docker containers and start them. It will be done for you. The containers that will be running are:

1. `nearaurora/srpc2-relayer` – JSON RPC server and indexer.
2. `nearaurora/srpc2-refiner` – [Aurora Refiner](https://github.com/aurora-is-near/borealis-engine-lib) .
3. `nearaurora/reverseproxy` – Nginx (used to isolate backend server from the outer world, redirects requests to the relayer container).
4. `containerrr/watchtower` – service that will check on any updates, and will update images accordingly.

### Conclusions

We have presented a comprehensive overview of the key components of the Relayer and the specific user needs it fulfills. Furthermore, we have thoroughly explored the process of setting up your Aurora RPC Node, focusing on the configuration of the standalone-rpc script, and emphasized the significance of data snapshots in expediting this setup.\
\
Thanks for reading! Stay tuned with the updates!
