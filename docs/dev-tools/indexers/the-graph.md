---
title: The Graph
---
[​](https://doc.aurora.dev/integrate/indexers/the-graph#introduction "Direct link to heading")[The Graph](https://thegraph.com/) is an indexing service which collects Ethereum events and exports them through GraphQL endpoints. It is widely used in the Ethereum ecosystem which supports fast and cheap queries for DApps.

This tutorial covers the following topics:

* Running a Graph node on Aurora.
* Creating and deploying a subgraph.
* Querying events from the subgraph.

## Prerequisites[​](https://doc.aurora.dev/integrate/indexers/the-graph#prerequisites "Direct link to heading")

Before delving into the tutorial, you need to make sure that you have setup the following tools on you machine:

* [git](https://git-scm.com/downloads)
* [Docker](https://docs.docker.com/get-docker/)
* [Docker-Compose](https://docs.docker.com/compose/install/)
* [Node 12+](https://nodejs.org/en/download/)
* [jq](https://stedolan.github.io/jq/download/)

## Running Graph Node[​](https://doc.aurora.dev/integrate/indexers/the-graph#running-graph-node "Direct link to heading")

### Clone[​](https://doc.aurora.dev/integrate/indexers/the-graph#clone "Direct link to heading")

Clone the graph node source code

```shell
git clone https://github.com/graphprotocol/graph-node.git
cd graph-node
```

### Configure[​](https://doc.aurora.dev/integrate/indexers/the-graph#configure "Direct link to heading")

In order wire your local graph node with Aurora Testnet RPC, you should change the value of `ethereum` section in `docker/docker-compose.yaml` file from `mainnet:http://host.docker.internal:8545` to `'aurora:https://testnet.aurora.dev'`.

```yaml
....
    environment:
      postgres_host: postgres
      postgres_user: graph-node
      postgres_pass: let-me-in
      postgres_db: graph-node
      ipfs: 'ipfs:5001'
      ethereum: 'aurora:https://testnet.aurora.dev'
      GRAPH_LOG: info
...
```

### Start[​](https://doc.aurora.dev/integrate/indexers/the-graph#start "Direct link to heading")

The following commands will setup the environment and start the graph indexer. The indexing process might take long time to have 100% sync with the chain. This has nothing to do with our tutorial but keep this process running in a separate terminal.

```shell
cd graph-node/docker
./setup.sh
docker-compose up
```

## Create a subgraph[​](https://doc.aurora.dev/integrate/indexers/the-graph#create-a-subgraph "Direct link to heading")

Now we are done with starting our graph node, the next step is to create and deploy a subgraph. The subgraph defines how the data on Ethereum will be indexed and stored on the graph node.

In this tutorial, we are going to use the subgraph example called [GravatarRegistry](https://github.com/aurora-is-near/example-subgraph) (a simple on-chain Gravatar). The GravatarRegistry contract has two events:

```solidity
event NewGravatar(uint id, address owner, string displayName, string imageUrl);
event UpdatedGravatar(uint id, address owner, string displayName, string imageUrl);
```

The contract was already deployed on Aurora Testnet. The deployed `GravatarRegistry` contract address is `0x8773e6832f44b2C17AC78592ffCe407C62d8c36E` and the start block number is `74885768`.

### Clone subgraph[​](https://doc.aurora.dev/integrate/indexers/the-graph#clone-subgraph "Direct link to heading")

Clone subgraph example repo.

```shell
git clone https://github.com/aurora-is-near/example-subgraph.git
cd example-subgraph
```

### Install[​](https://doc.aurora.dev/integrate/indexers/the-graph#install "Direct link to heading")

```shell
yarn install
```

### Configure the Subgraph[​](https://doc.aurora.dev/integrate/indexers/the-graph#configure-the-subgraph "Direct link to heading")

Update the `address` and (the `startBlock` optional) in `subgraph.yaml` as follows:

```yaml
    ...
    network: aurora
    source:
      address: '0x8773e6832f44b2C17AC78592ffCe407C62d8c36E'
      abi: Gravity
      startBlock: 74885768
    ...
```

Also make sure you are pointing into `aurora` as a network.

### Generating types[​](https://doc.aurora.dev/integrate/indexers/the-graph#generating-types "Direct link to heading")

```shell
yarn codegen
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
⚠ Warnings while loading subgraph from subgraph.yaml: Warnings in subgraph.yaml:

    Path: repository
    The repository is still set to https://github.com/graphprotocol/example-subgraph.
    Please replace it with a link to your subgraph source code.

    Path: description
    The description is still the one from the example subgraph.
    Please update it to tell users more about your subgraph.

✔ Load subgraph from subgraph.yaml
  Load contract ABI from abis/Gravity.json
✔ Load contract ABIs
  Generate types for contract ABI: Gravity (abis/Gravity.json)
  Write types to generated/Gravity/Gravity.ts
✔ Generate types for contract ABIs
✔ Generate types for data source templates
✔ Load data source template ABIs
✔ Generate types for data source template ABIs
✔ Load GraphQL schema from schema.graphql
  Write types to generated/schema.ts
✔ Generate types for GraphQL schema

Types generated successfully

✨  Done in 3.38s.
```

### Mappings[​](https://doc.aurora.dev/integrate/indexers/the-graph#mappings "Direct link to heading")

Maps Ethereum event data to the data that has been defined in the `schema.graphql`. For example `handleNewGravatar` parses the new event parameters, and save them in `gravatar`.

```typescript
export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}
```

## Deploy the Subgraph[​](https://doc.aurora.dev/integrate/indexers/the-graph#deploy-the-subgraph "Direct link to heading")

First, we need to register the subgraph name on the graph node. To do that run `yarn create-local`.

```shell
$ yarn create-local
Created subgraph: example
✨  Done in 2.12s.
```

Once the subgraph is registered, now you can deploy it by executing the following command:

```shell
$ yarn deploy-local
✔ Version Label (e.g. v0.0.1) ·
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
⚠ Warnings loading subgraph from subgraph.yaml: Warnings in subgraph.yaml:

    Path: repository
    The repository is still set to https://github.com/graphprotocol/example-subgraph.
    Please replace it with a link to your subgraph source code.

    Path: description
    The description is still the one from the example subgraph.
    Please update it to tell users more about your subgraph.

✔ Load subgraph from subgraph.yaml
  Compile data source: Gravity => build/Gravity/Gravity.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/Gravity/abis/Gravity.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmbSFRGGvHM7Cn8YSjDL41diDMxN4LQUDEMqaa5VVc5sC4
  Add file to IPFS build/Gravity/abis/Gravity.json
                .. QmajZTadknSpgsCWRz9fG6bXFHdpVXPMWpx9yMipz3VtMQ
  Add file to IPFS build/Gravity/Gravity.wasm
                .. QmbK8QL1GWmsdTsgFYawvxFCjLEFwBsPjMGWpeRh6yaXEk
✔ Upload subgraph to IPFS

Build completed: QmUiu7NRW7Lc89rxfacqUViaFLYwftrGUn54segMFgWggu

Deployed to http://127.0.0.1:8000/subgraphs/name/example/graphql

Subgraph endpoints:
Queries (HTTP):     http://127.0.0.1:8000/subgraphs/name/example
Subscriptions (WS): http://127.0.0.1:8001/subgraphs/name/example

✨  Done in 10.23s.
```

Now, you should be able to access your subgraph endpoint through `http://127.0.0.1:8000/subgraphs/name/example`.

## Publish Events (optional)[​](https://doc.aurora.dev/integrate/indexers/the-graph#publish-events-optional "Direct link to heading")

There were already published events starting from block number `74885768`, So you can skip this step.

## Query Events[​](https://doc.aurora.dev/integrate/indexers/the-graph#query-events "Direct link to heading")

To query events, TheGraph protocol provides a [GraphQL endpoint](http://127.0.0.1:8000/subgraphs/name/example) for your local graph node. Go to `http://127.0.0.1:8000/subgraphs/name/example`, it automatically will show up a predefined GraphQL query. Run this query to get the results as shown below:

## Summary[​](https://doc.aurora.dev/integrate/indexers/the-graph#summary "Direct link to heading")

In this tutorial, we started a Graph node locally, then we wired our node to Aurora Testnet RPC. We also configured a subgraph example and deployed that subgraph on our local graph node. Finally the graph node was able to collect and index the subgraph example (GravatarRegistry) events from Aurora Testnet.
