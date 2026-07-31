---
title: Envio
---
The fastest, most flexible way to get real-time and historical onchain data on Aurora.

[Envio](https://envio.dev/?utm_source=aurora&utm_medium=partner-docs) is the data layer for blockchain apps. It gives developers a complete toolkit to index, access, and deploy on Aurora data, from a single GraphQL API to raw high-speed data access. Aurora is [fully supported](https://docs.envio.dev/docs/HyperIndex/aurora?utm_source=aurora&utm_medium=partner-docs) across [HyperIndex](https://docs.envio.dev/docs/HyperIndex/overview?utm_source=aurora&utm_medium=partner-docs), [HyperSync](https://docs.envio.dev/docs/HyperSync/overview?utm_source=aurora&utm_medium=partner-docs), [HyperRPC](https://docs.envio.dev/docs/HyperRPC/overview-hyperrpc?utm_source=aurora&utm_medium=partner-docs), and [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service?utm_source=aurora&utm_medium=partner-docs).

## Why Envio?

Compared to other indexing options, the main reasons developers choose Envio are:

* ⚡ **Blazing-fast sync** powered by HyperSync, so historical backfills on Aurora that once took hours can complete in under a minute, up to 2000x faster than traditional RPC.
* 🧩 **A complete toolkit** in one place, with HyperIndex for full indexing, HyperSync for raw high-speed data, HyperRPC as a drop-in read-only RPC, and Envio Cloud for managed hosting.
* 🧑‍💻 **Developer-friendly** by design, with automatic code generation, a queryable GraphQL API, and flexible language support (TypeScript, JavaScript, and ReScript).
* 🌐 **Multichain** from day one, aggregating Aurora data alongside other EVM and non-EVM networks.
* ☁️ **Managed or self-hosted**, so you can deploy and scale on Envio Cloud without the infrastructure headaches, or run your own setup.

### Features

* ✅ Real-time indexing with historical backfills at 30,000+ events per second
* ✅ Auto-generate an indexer from any verified Aurora contract with `pnpx envio init`
* ✅ A GraphQL API over your indexed Aurora data
* ✅ Reorg support that gracefully handles chain reorganisations
* ✅ Multichain data aggregation across EVM and non-EVM networks
* ✅ Direct data access via HyperSync (`https://aurora.hypersync.xyz`) and HyperRPC (`https://aurora.rpc.hypersync.xyz`)
* ✅ Managed hosting on Envio Cloud, or self-host your own deployment

## Getting Started

1️⃣ Initialise your indexer and import your Aurora contract.

```shell
pnpx envio init
```

Choose **Contract Import** and provide your verified Aurora contract address to auto-generate a config, schema, and event handlers. See the [Quickstart](https://docs.envio.dev/docs/HyperIndex/quickstart?utm_source=aurora&utm_medium=partner-docs) for the full walkthrough.

2️⃣ Configure Aurora in your `config.yaml` using chain ID `1313161554`.

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

See the [configuration guide](https://docs.envio.dev/docs/HyperIndex/configuration-file?utm_source=aurora&utm_medium=partner-docs) for the full set of options.

3️⃣ Run your indexer locally with Docker, or deploy it with a git-based workflow on [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service-deployment?utm_source=aurora&utm_medium=partner-docs).

4️⃣ Query your indexed Aurora data through the GraphQL API.

For raw, high-speed data without a full indexer, point a [HyperSync](https://docs.envio.dev/docs/HyperSync/overview?utm_source=aurora&utm_medium=partner-docs) client at `https://aurora.hypersync.xyz`, or use [HyperRPC](https://docs.envio.dev/docs/HyperRPC/overview-hyperrpc?utm_source=aurora&utm_medium=partner-docs) as a drop-in read-only RPC at `https://aurora.rpc.hypersync.xyz`.

## Need help?

Reach out on [Discord](https://discord.gg/envio), where the team is always happy to help.

[Website](https://envio.dev/?utm_source=aurora&utm_medium=partner-docs) | [Docs](https://docs.envio.dev/?utm_source=aurora&utm_medium=partner-docs) | [Discord](https://discord.gg/envio) | [X](https://twitter.com/envio_indexer) | [GitHub](https://github.com/enviodev)
