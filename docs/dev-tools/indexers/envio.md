---
title: Envio
---
[Envio](https://envio.dev/?utm_source=aurora&utm_medium=partner-docs) is the data layer for blockchain apps. It gives Aurora developers the fastest, most flexible way to get real-time and historical onchain data, with minimal setup.

Envio offers a complete toolkit for indexing, accessing, and deploying on Aurora data.

1. [HyperIndex](https://docs.envio.dev/docs/HyperIndex/overview?utm_source=aurora&utm_medium=partner-docs) - a full-featured indexing framework that turns smart contract events into a queryable GraphQL API
2. [HyperSync](https://docs.envio.dev/docs/HyperSync/overview?utm_source=aurora&utm_medium=partner-docs) - a real-time indexed data layer for ultrafast historical sync
3. [HyperRPC](https://docs.envio.dev/docs/HyperRPC/overview-hyperrpc?utm_source=aurora&utm_medium=partner-docs) - an extremely fast, read-only RPC
4. [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service?utm_source=aurora&utm_medium=partner-docs) - a fully managed platform to deploy and scale your indexers without the infrastructure headaches

HyperSync accelerates the synchronisation of historical data on Aurora, so that what usually takes hours to sync millions of events can complete in under a minute, up to 2000x faster than traditional RPC methods.

**Use Envio when you want**

* Real-time and historical Aurora data through a single GraphQL API
* Blazing-fast backfills powered by HyperSync
* Multi-chain data aggregation across EVM and non-EVM networks
* A flexible, developer-friendly indexer with managed hosting on Envio Cloud

> [**Start indexing Aurora with Envio**](https://docs.envio.dev/docs/HyperIndex/quickstart?utm_source=aurora&utm_medium=partner-docs)

## Network details

Envio supports Aurora across HyperSync and HyperRPC.

| **Field**                  | **Value**                                                                    |
| -------------------------- | ---------------------------------------------------------------------------- |
| **Aurora Chain ID**        | 1313161554                                                                   |
| **HyperSync URL Endpoint** | `https://aurora.hypersync.xyz` or `https://1313161554.hypersync.xyz`         |
| **HyperRPC URL Endpoint**  | `https://aurora.rpc.hypersync.xyz` or `https://1313161554.rpc.hypersync.xyz` |

## HyperIndex

[HyperIndex](https://docs.envio.dev/docs/HyperIndex/overview?utm_source=aurora&utm_medium=partner-docs) is Envio's full-featured indexing framework. It offers automatic code generation, flexible language support (TypeScript, JavaScript, and ReScript), and multi-chain data aggregation, letting you go from smart contract events to a queryable GraphQL API in minutes.

Add Aurora to your indexer by defining a chain configuration.

```yaml
name: IndexerName # Specify indexer name
description: Indexer Description # Include indexer description
chains:
  - id: 1313161554 # Aurora
    start_block: START_BLOCK_NUMBER # Specify the starting block
    contracts:
      - name: ContractName
        address:
          - "0xYourContractAddress1"
          - "0xYourContractAddress2"
        events:
          - event: Event # Specify event
          - event: Event
```

For more on how to set up your config, define a schema, and write event handlers, see the [configuration guide](https://docs.envio.dev/docs/HyperIndex/configuration-file?utm_source=aurora&utm_medium=partner-docs).

### Get started

* [Quickstart](https://docs.envio.dev/docs/HyperIndex/quickstart?utm_source=aurora&utm_medium=partner-docs) - build your first Aurora indexer in minutes
* [Documentation](https://docs.envio.dev/docs/HyperIndex/overview?utm_source=aurora&utm_medium=partner-docs) - learn the full HyperIndex framework
* [Contract Import](https://docs.envio.dev/docs/HyperIndex/contract-import?utm_source=aurora&utm_medium=partner-docs) - auto-generate an indexer from any verified Aurora contract

## HyperSync

[HyperSync](https://docs.envio.dev/docs/HyperSync/overview?utm_source=aurora&utm_medium=partner-docs) is Envio's real-time indexed data layer, purpose-built to make retrieving large amounts of Aurora data dramatically faster than traditional RPC. Point your client at the Aurora endpoint and stream logs, transactions, blocks, and traces at high speed.

* HyperSync endpoint for Aurora is `https://aurora.hypersync.xyz`
* Works with the HyperSync clients for Rust, Python, and Node.js

See the [HyperSync documentation](https://docs.envio.dev/docs/HyperSync/overview?utm_source=aurora&utm_medium=partner-docs) to get started.

## HyperRPC

[HyperRPC](https://docs.envio.dev/docs/HyperRPC/overview-hyperrpc?utm_source=aurora&utm_medium=partner-docs) is an extremely fast, read-only RPC for data-heavy workloads on Aurora. It is a drop-in endpoint for read requests where you need high throughput over historical data.

* HyperRPC endpoint for Aurora is `https://aurora.rpc.hypersync.xyz`

## Deploy with Envio Cloud

[Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service?utm_source=aurora&utm_medium=partner-docs) is a fully managed platform for running your Aurora indexers in production, so you can deploy and scale without the infrastructure headaches. It gives you a git-based deployment workflow similar to modern platforms like Vercel, plus hosted GraphQL APIs, built-in monitoring and alerting, zero-downtime deploys, and continuous backups.

* [Deploying your indexer](https://docs.envio.dev/docs/HyperIndex/hosted-service-deployment?utm_source=aurora&utm_medium=partner-docs) - ship your Aurora indexer with a git-based workflow
* [Envio Cloud features](https://docs.envio.dev/docs/HyperIndex/hosted-service-features?utm_source=aurora&utm_medium=partner-docs) - production-ready hosting, monitoring, and scaling

## About Envio

Envio is the data layer for blockchain apps, giving developers the fastest, most flexible way to access real-time and historical onchain data across EVM and non-EVM networks. Teams use Envio to power dashboards, analytics, wallets, and dApps with fast, reliable, cost-effective data infrastructure.

Need help with your Aurora indexer? Reach out on [Discord](https://discord.gg/envio), where the team is always happy to help.

[Website](https://envio.dev/?utm_source=aurora&utm_medium=partner-docs) | [Docs](https://docs.envio.dev/?utm_source=aurora&utm_medium=partner-docs) | [Discord](https://discord.gg/envio) | [X](https://twitter.com/envio_indexer) | [GitHub](https://github.com/enviodev)
