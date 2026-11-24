---
title: Tatum
---

[Tatum](https://tatum.io/chain/aurora) runs JSON-RPC gateways for Aurora Mainnet and Aurora Testnet.

## Public RPCs

- Aurora Mainnet: `https://aurora-mainnet.gateway.tatum.io`
- Aurora Testnet: `https://aurora-testnet.gateway.tatum.io`

Both endpoints use HTTPS and answer without an API key at up to 5 requests per minute, which covers development and testing. Paid Tatum plans come with an API key and a higher limit.

## Example

Get the latest block number on Aurora Mainnet:

```bash
curl https://aurora-mainnet.gateway.tatum.io \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```

## Useful resources

- [Tatum Aurora RPC](https://tatum.io/chain/aurora)
- [Free Aurora RPC endpoints](https://freerpc.com/aurora)
