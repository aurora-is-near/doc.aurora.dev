---
title: eRPC
---

## What is eRPC?

[eRPC](https://github.com/erpc/erpc) is an open-source (Apache-2.0), self-hosted RPC proxy for EVM chains, written in Go. It is not a hosted provider: you run it yourself, in front of one or more Aurora RPC providers, and point your app at it.

eRPC adds:

- Failover across upstreams
- Retries and hedged requests
- A reorg-aware response cache
- Rate limiting

## Run eRPC for Aurora

1. Create `erpc.yaml` and list the Aurora RPC endpoints you want eRPC to use, for example the public ones:

   ```yaml
   logLevel: info
   projects:
     - id: main
       upstreams:
         - id: aurora-public
           endpoint: https://mainnet.aurora.dev
         - id: drpc-public
           endpoint: https://aurora.drpc.org
   ```

2. Start eRPC with Docker:

   ```bash
   docker run -v $(pwd)/erpc.yaml:/erpc.yaml -p 4000:4000 ghcr.io/erpc/erpc:latest
   ```

3. Send requests to `http://localhost:4000/main/evm/1313161554` for Aurora Mainnet:

   ```bash
   curl http://localhost:4000/main/evm/1313161554 \
     -H 'Content-Type: application/json' \
     -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
   ```

   For Aurora Testnet, add testnet upstreams and use chain ID `1313161555`.

## Useful resources

- [eRPC Documentation](https://docs.erpc.cloud)
- [eRPC GitHub](https://github.com/erpc/erpc)
