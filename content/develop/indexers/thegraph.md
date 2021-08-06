---
title: "Aurora: The Graph"
---

# The Graph

## Introduction

[The Graph](https://thegraph.com/) is an indexing service in which collects Ethereum 
events and exports them through GraphQL endpoints. It is widely used in the Ethereum 
ecosystem which supports fast and cheap queries for DApps. 

This tutorial covers the following topics:

- Running Graph node on Aurora. 
- Creating and deploying a subgraph. 
- Querying the subgraph.

## Prerequisites

Before delving into the tutorial, you need to make sure that you have 
setup the following tools on you machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)
- [Hardhat](https://hardhat.org/getting-started/)

## Running Graph Node

### Clone 

```bash
$ git clone https://github.com/graphprotocol/graph-node/
```

### Configure

The full configurations for the `docker-compose.yaml`

```yaml
version: '3'
services:
  graph-node:
    image: graphprotocol/graph-node
    ports:
      - '8000:8000'
      - '8001:8001'
      - '8020:8020'
      - '8030:8030'
      - '8040:8040'
    depends_on:
      - ipfs
      - postgres
    environment:
      postgres_host: postgres
      postgres_user: graph-node
      postgres_pass: let-me-in
      postgres_db: graph-node
      ipfs: 'ipfs:5001'
      ethereum: 'aurora:https://testnet.aurora.dev'
      GRAPH_LOG: info
  ipfs:
    image: ipfs/go-ipfs:v0.4.23
    ports:
      - '5001:5001'
    volumes:
      - ./data/ipfs:/data/ipfs
  postgres:
    image: postgres
    ports:
      - '5432:5432'
    command: ["postgres", "-cshared_preload_libraries=pg_stat_statements"]
    environment:
      POSTGRES_USER: graph-node
      POSTGRES_PASSWORD: let-me-in
      POSTGRES_DB: graph-node
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
```

In order to enable the connection between your local graph node and Aurora testnet RPC, 
change the value of `ethereum` section in `docker-compose.yaml` file from 
`mainnet:http://host.docker.internal:8545` to `'aurora:https://testnet.aurora.dev'`.

### Setup
```bash
$ cd graph-node/docker
$ ./setup.sh
```
### Start

```bash
$ docker-compose up

...

graph-node_1  | Aug 04 11:41:46.081 INFO Syncing 2 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 2, blocks_behind: 2, latest_block_head: 57783334, current_block_head: 57783332, provider: aurora-rpc-0, component: BlockIngestor
graph-node_1  | Aug 04 11:41:47.868 INFO Syncing 4 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 4, blocks_behind: 4, latest_block_head: 57783338, current_block_head: 57783334, provider: aurora-rpc-0, component: BlockIngestor
graph-node_1  | Aug 04 11:41:50.552 INFO Syncing 4 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 4, blocks_behind: 4, latest_block_head: 57783342, current_block_head: 57783338, provider: aurora-rpc-0, component: BlockIngestor
graph-node_1  | Aug 04 11:41:52.796 INFO Syncing 3 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 3, blocks_behind: 3, latest_block_head: 57783345, current_block_head: 57783342, provider: aurora-rpc-0, component: BlockIngestor
graph-node_1  | Aug 04 11:41:54.698 INFO Syncing 4 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 4, blocks_behind: 4, latest_block_head: 57783349, current_block_head: 57783345, provider: aurora-rpc-0, component: BlockIngestor
graph-node_1  | Aug 04 11:41:56.906 INFO Syncing 2 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 2, blocks_behind: 2, latest_block_head: 57783351, current_block_head: 57783349, provider: aurora-rpc-0, component: BlockIngestor
graph-node_1  | Aug 04 11:41:58.340 INFO Syncing 2 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 2, blocks_behind: 2, latest_block_head: 57783353, current_block_head: 57783351, provider: aurora-rpc-0, component: BlockIngestor
graph-node_1  | Aug 04 11:42:00.060 INFO Syncing 2 blocks from Ethereum., code: BlockIngestionStatus, blocks_needed: 2, blocks_behind: 2, latest_block_head: 57783355, current_block_head: 57783353, provider: aurora-rpc-0, component: BlockIngestor
...
```

## Deploy Sample Contract

In this tutorial, we are going to use the `covid-19` example. You can find full tutorial about [Covid-19 NFT here](../start/truffle.md)

### Clone

First of all, clone the NFT covid-19 example from [aurora-examples]() repo.

```bash
$ git clone https://github.com/aurora-is-near/aurora-examples.git
$ cd aurora-examples/subgraph
```

### Install
```bash
yarn install
```
### Deploy

```bash
$ yarn deploy:aurora
Compiling 12 files with 0.8.4
Compilation finished successfully
Deploying contracts with the account: 0x6A33382de9f73B846878a57500d055B981229ac4
Account balance: 5010010200000000000
CovidVaccineToken deployed to: 0x6a82DC18F5a0f694b55A59429402C7F868dA10E4
✨  Done in 32.49s.
```

Export the token contract address:

```bash
$ export TOKEN_ADDRESS='0x6a82DC18F5a0f694b55A59429402C7F868dA10E4'
```

## Prepare the Subgraph

### Generating types

```bash
yarn subgraph:codegen
yarn run v1.22.10
$ npx graph codegen --output-dir src/types/
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Load contract ABI from abis/CovidVaccineToken.json
✔ Load contract ABIs
  Generate types for contract ABI: CovidVaccineToken (abis/CovidVaccineToken.json)
  Write types to src/types/CovidVaccineToken/CovidVaccineToken.ts
✔ Generate types for contract ABIs
✔ Generate types for data source templates
✔ Load data source template ABIs
✔ Generate types for data source template ABIs
✔ Load GraphQL schema from schema.graphql
  Write types to src/types/schema.ts
✔ Generate types for GraphQL schema

Types generated successfully

✨  Done in 5.06s.
```

### Mappings

Maps Ethereum event data to the data that has been defined in the `schema.graphql`.

```javascript
export function handleTransfer(event: Transfer): void {
    let vaccinated = Vaccinated.load(event.address.toHex())
    if (vaccinated === null) {
        vaccinated = new Vaccinated(event.address.toHex())
    }
    if (event.params.to.toHex() != MINTER)
        vaccinated.count += 1
    vaccinated.save()
}
```

This handler check that the receiver is not the `MINTER` address then increment the count of vaccinated people so far.

## Deploy the Subgraph

First you have to create the subgraph on your local graph node, the following command will 
automatically defines: 

`username` — the account 
`subgraphName` — refers to the Subgraph name
`graph-node` — refers to the URL of the hosted service to use. Typically, for a local Graph Node is http://127.0.0.1:8020


```bash
$ yarn subgraph:create
Created subgraph: aurora/CovidVaccineToken
✨  Done in 4.78s.
```

Then deploy the subgraph by running the following command:

```bash
$ yarn subgraph:deploy
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: CovidVaccineToken => build/CovidVaccineToken/CovidVaccineToken.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/CovidVaccineToken/abis/CovidVaccineToken.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmPRPucU4AdzAWSWgZ5aFxGxkfJnxEL1AWXVZsZ2exVn5f
  Add file to IPFS build/CovidVaccineToken/abis/CovidVaccineToken.json
                .. QmQRGJC1roJyG2iHh9ib9kWCjAFwj5TF8XwT44oCwHhhd9
  Add file to IPFS build/CovidVaccineToken/CovidVaccineToken.wasm
                .. QmZ5Lr99i8P2i41Qq83aCDnF6kvp4QswJdF7ea6KPBGgLy
✔ Upload subgraph to IPFS

Build completed: QmXCcobUT5fv32SWDBxNDQjwPqT5tL7yfsE2qfQzEKA7eD

Deployed to http://127.0.0.1:8000/subgraphs/name/aurora/CovidVaccineToken/graphql

Subgraph endpoints:
Queries (HTTP):     http://127.0.0.1:8000/subgraphs/name/aurora/CovidVaccineToken
Subscriptions (WS): http://127.0.0.1:8001/subgraphs/name/aurora/CovidVaccineToken

✨  Done in 16.46s.
```

You should be able to access your subgraph endpoint through `http://127.0.0.1:8000/subgraphs/name/aurora/CovidVaccineToken`.

## Publish Events

In oder to use query the subgraph endpoint, you should first seed your contract with a coulple 
of events. The following command line will trigger a `Hardhat task` in which sends multiple transfer transactions which in turn will emit the `Transfer` event.

```bash
$ npx hardhat mint --token $TOKEN_ADDRESS
The minter 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 has transferred vaccine token to account: 0xb7AFc7b0453AE893E6A9f2dD3C4593fd696BdeF2
The minter 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 has transferred vaccine token to account: 0x761d77bCeF097DBEdb8e48cF4aC9dC7238Bf3C8E
The minter 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 has transferred vaccine token to account: 0x4A79B63bA5e9d23A93a4b887eE00949C454720C2
The minter 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 has transferred vaccine token to account: 0x614E188acBB597C2b2BF0CB39819975b05217C33
```

## Query Events

To query events, TheGraph protocol provides a [GraphQL endpoint](http://127.0.0.1:8000/subgraphs/name/aurora/CovidVaccineToken) for your local graph node.

## Conclusion

