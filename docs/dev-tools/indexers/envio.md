---
title: Envio
---
[Envio](https://envio.dev/?utm_source=aurora&utm_medium=partner-docs) is a modular, hyper-performant data indexing solution for Aurora, giving developers real-time and historical access to on-chain data with minimal setup.

Envio offers three solutions for indexing and accessing large amounts of Aurora data.

1. [HyperIndex](https://docs.envio.dev/docs/HyperIndex/overview?utm_source=aurora&utm_medium=partner-docs) - a customizable indexing framework that turns smart contract events into a queryable GraphQL API
2. [HyperSync](https://docs.envio.dev/docs/HyperSync/overview?utm_source=aurora&utm_medium=partner-docs) - a real-time indexed data layer for ultra-fast historical sync
3. [HyperRPC](https://docs.envio.dev/docs/HyperRPC/overview-hyperrpc?utm_source=aurora&utm_medium=partner-docs) - an extremely fast read-only RPC

HyperSync accelerates the synchronisation of historical data on Aurora, so that what usually takes hours to sync millions of events can complete in under a minute, up to 2000x faster than traditional RPC methods.

**Use Envio when you want**

* Real-time and historical Aurora data through a single GraphQL API
* Blazing-fast backfills powered by HyperSync
* Multi-chain data aggregation across EVM and non-EVM networks
* A flexible, developer-friendly indexer backed by a reliable, cost-effective hosted service

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

## About Envio

Envio is a modular, hyper-performant data indexing solution for Web3, giving developers real-time and historical access to on-chain data across EVM and non-EVM networks. Teams use Envio to power dashboards, analytics, wallets, and dApps with fast, reliable, cost-effective data infrastructure.

Need help with your Aurora indexer? Reach out on [Discord](https://discord.gg/envio), where the team is always happy to help.

[Website](https://envio.dev/?utm_source=aurora&utm_medium=partner-docs) | [Docs](https://docs.envio.dev/?utm_source=aurora&utm_medium=partner-docs) | [Discord](https://discord.gg/envio) | [X](https://twitter.com/envio_indexer) | [GitHub](https://github.com/enviodev)
