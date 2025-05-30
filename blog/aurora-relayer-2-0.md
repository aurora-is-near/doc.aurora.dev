---
title: "How the Aurora Relayer 2.0 works?"
description: "Learn about Aurora's relayer inner workings and how those innovate the future of the blockchain technologies"
date: "2023-03-31"
authors: [oleksii_krasynskyi]
tags: [core_tech]
image: https://www.datocms-assets.com/95026/1682082014-relayer-article-cover.png
---
In the blockchain world, relayers are off-chain facilitators of data exchange and transactions between blockchain networks and/or layers. They are used primarily in decentralized finance applications, cross-chain communication, and Layer 2 solutions, like sidechains or state channels. In general, relayers listen for events and transactions from one point and then submit the corresponding data or transactions to another. For that, they can charge fees for their services, incentivizing them to operate and maintain their infrastructure.

Initially developed in-house at NEAR, the Aurora EVM is the official EVM for the NEAR ecosystem. Powered by the SputnikVM, it accomplishes a 1:1 experience with the Ethereum protocol.

This compatibility between Aurora and Ethereum is achieved by the **Aurora Relayer**, a JSON-RPC compatible server with Ethereum's [Web3 API](https://eth.wiki/json-rpc/API) for the [Aurora Engine](https://github.com/aurora-is-near/aurora-engine)It has its own internal database to serve multiple read methods and an indexer that is constantly following the head and indexing blocks, transactions and logs to that internal database.

<!-- truncate -->

### **Relayer 2.0**

As mentioned above, the Aurora Relayer has two main components. First, an implementation of Ethereum’s JSON-RPC specification—a standard collection of methods that all clients must implement and the canonical interface between users and the Ethereum network—on Aurora’s Ethereum Virtual Machine (EVM), a.k.a. the Aurora Engine. Second, an indexer that continuously reads the NEAR network for blocks and other relevant information relevant to Aurora.

The Relayer had [its first version](https://github.com/aurora-is-near/aurora-relayer) deployed in October 2021. Developed in Typescript and JavaScript. It has been deprecated and replaced by [version 2.0](https://github.com/aurora-is-near/relayer2-public), with a JSON-RPC server written in go-lang and the indexer developed in go-lang and rust.

![](https://www.datocms-assets.com/95026/1680267251-relayer-10.png)

Relayer 2.0 was motivated by the necessity of migrating from JavaScript to a more reliable language like golang that is designed for concurrency and is particularly good at managing multiple connections and resource-intensive tasks, making it very well-suited for the type of high-performance RPC systems required in blockchains.

Additionally, it required migrating to a more efficient database system, so it was migrated from `PostgreSQL` to `badger-db` an embedded key-value database. As a result, there is now a relayer with faster execution speed,  lower machine resource usage, and lower data latency that is easier to code, debug, optimize, and deploy. Now, let’s have a general overview of some of the internals of the Relayer.

#### **The JSON-RPC**

Written in go-lang, it exposes endpoints that implement the methods of Ethereum’s JSON-RPC protocol, commonly known as the Web3 API. This middleware leverages a messaging system that forwards JSON-PRC calls to the NEAR network and vice versa. Its source code is open and available to developers, contributors, and anyone who would like to build, run and experiment with it natively. A list of all the implemented methods and the server's source code can be found in the GitHub [*repo*](https://github.com/aurora-is-near/relayer2-public). Also, there is a standalone version available [*here*](https://github.com/aurora-is-near/standalone-rpc).

![](https://www.datocms-assets.com/95026/1680267260-relayer-20.png)

#### **The Database**

Embedded databases are a better choice for applications that don't require complex querying planning, as it provides a lightweight solution with fewer dependencies. They are also well-suited for applications that benefit from local data storage with low latency and need single-process concurrency for concurrent read and write operations without external coordination.\
\
BadgerDB—our database of choice—is an embeddable, persistent, fast key-value (KV) database written in pure Go. It is ideal for JSON-RPC servers as most methods grab data by key while benefitting from better data compression and lower latency. In addition, other teams inside Aurora are also using it, therefore, the required competencies and know-how were already there.

#### **The Indexer**

The new embedded indexer continuously reads JSON files generated by the [Aurora Refiner](https://github.com/aurora-is-near/borealis-engine-lib) that populate a local database. The refiner allows users to download all NEAR Blocks and get all information relevant to Aurora.

NEAR Blocks data can be consumed from two different sources: the [NEAR data lake](https://docs.near.org/concepts/advanced/near-lake-framework)— a repository of blocks and events from the NEAR network as JSON files on AWS — and an archival instance, [the NEARCore](https://github.com/near/nearcore). In general, Aurora Relayer infrastructure implements an indexer of NEAR blocks, an indexer of blocks from `tar` backups and an indexer of pre-history blocks (height < 34 mln). An open-source repository for the Aurora Refiner can be found [*here*](https://github.com/aurora-is-near/borealis-engine-lib).

#### **And more…**

In addition, and due to the nature of Aurora’s relayer infrastructure and its interactions with the NEAR network, it was possible to upgrade our internal infrastructure to use our relayer with additions that allow the implementation–among other things–of complex multi-tenant, rule-based accounting systems that support virtually any possible way to account for transactions, to enforce gas prices, pre- or post-run transactions, etc.

So it is possible to have users with prepaid fees, prepaid gas, no gas, and many other configurations for distributing gas and fees between relayers, users, and owners of smart contracts. This means that anyone willing to spin a relayer will have access to more sophisticated economic mechanisms for its users or on behalf of others, thus acting the same way ERC-4337 bundlers do, i.e., as validators who earn incentives for completing transactions.

### **The Future of User Experience**

By improving efficiency and reliability and by adding innovative functionality into the relayer, Aurora builders and developers can offer faster, more robust applications and significant improvements to the user’s experience where — among other things — per-transaction fees could be eliminated and accounts could be detached from keys.

Therefore, the Aurora Relayer stands as a groundbreaking innovation in the world of decentralised blockchain technologies. Furthermore, as we continue to see rapid advancements and increasing adoption, the Aurora Relayer sets the stage for a more interconnected and efficient future with the potential to unlock unprecedented levels of usability, scalability, security, and cost-effectiveness, ultimately contributing to a more accessible landscape for all types of users.

If you are interested in getting to know Aurora Relayers in more depth, in our next post, we will teach you how to modify and launch a stand-alone version of the relayer that can be called by a smart contract that can execute functions without charging gas to its callers, stay tuned!
