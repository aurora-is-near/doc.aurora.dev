---
title: "JSON-RPC"
---

# Compatibility with the Web3 JSON-RPC Protocol

The Aurora Relayer implements the Web3 JSON-RPC protocol.

## Methods

<div class="compat-json-rpc-table"></div>

Method | Status | Notes
------ | ------ | -----
[web3_clientVersion] | ✅ |
[web3_sha3] | ✅ |
[net_listening] | ✅ |
[net_peerCount] | ✅ |
[net_version] | ✅ |
[eth_accounts] | ✅ |
[eth_blockNumber] | ✅ |
[eth_call] | ✅ |
[eth_chainId] | ✅ |
[eth_coinbase] | ✅ |
eth_compileLLL | ❌ | Unsupported
eth_compileSerpent | ❌ | Unsupported
eth_compileSolidity | ❌ | Unsupported
[eth_estimateGas] | ✅ |
[eth_gasPrice] | ✅ |
[eth_getBalance] | ✅ |
[eth_getBlockByHash] | ✅ |
[eth_getBlockByNumber] | ✅ |
[eth_getBlockTransactionCountByHash] | ✅ |
[eth_getBlockTransactionCountByNumber] | ✅ |
[eth_getCode] | ✅ |
eth_getCompilers | ✅ |
[eth_getFilterChanges] | 🚧 |
[eth_getFilterLogs] | 🚧 |
[eth_getLogs] | 🚧 |
[eth_getProof] | ❌ | EIP-1186
[eth_getStorageAt] | ✅ |
[eth_getTransactionByBlockHashAndIndex] | ✅ |
[eth_getTransactionByBlockNumberAndIndex] | ✅ |
[eth_getTransactionByHash] | 🚧 |
[eth_getTransactionCount] | ✅ |
[eth_getTransactionReceipt] | 🚧 |
[eth_getUncleByBlockHashAndIndex] | ✅ |
[eth_getUncleByBlockNumberAndIndex] | ✅ |
[eth_getUncleCountByBlockHash] | ✅ |
[eth_getUncleCountByBlockNumber] | ✅ |
[eth_getWork] | ❌ | Unsupported
[eth_hashrate] | ✅ |
[eth_mining] | ✅ |
[eth_newBlockFilter] | 🚧 |
[eth_newFilter] | 🚧 |
[eth_newPendingTransactionFilter] | ✅ |
[eth_pendingTransactions] | ✅ | [Undocumented](https://github.com/ethereum/go-ethereum/issues/1648#issuecomment-130591933)
[eth_protocolVersion] | ✅ |
[eth_sendRawTransaction] | ✅ |
[eth_sendTransaction] | ❌ | Unsupported
[eth_sign] | ❌ | Unsupported
[eth_signTransaction] | ❌ | Unsupported
[eth_signTypedData] | ❌ | Unsupported
[eth_submitHashrate] | ❌ | Unsupported
[eth_submitWork] | ❌ | Unsupported
[eth_syncing] | ✅ |
[eth_uninstallFilter] | 🚧 |
db_getHex | ❌ | Deprecated
db_getString | ❌ | Deprecated
db_putHex | ❌ | Deprecated
db_putString | ❌ | Deprecated
shh_addToGroup | ❌ | Discontinued
shh_getFilterChanges | ❌ | Discontinued
shh_getMessages | ❌ | Discontinued
shh_hasIdentity | ❌ | Discontinued
shh_newFilter | ❌ | Discontinued
shh_newGroup | ❌ | Discontinued
shh_newIdentity | ❌ | Discontinued
shh_post | ❌ | Discontinued
shh_uninstallFilter | ❌ | Discontinued
shh_version | ❌ | Discontinued
[txpool_content] | ✅ | Geth extension
[txpool_inspect] | ✅ | Geth extension
[txpool_status] | ✅ | Geth extension
[parity_pendingTransactions] | ✅ | Parity extension

**Legend**: ❌ = not supported. 🚧 = work in progress. ✅ = supported.

## Limitations

- The `eth_getProof` method ([EIP-1186]) is not supported and is unlikely to be
  possible to implement.

## Notes

- For now, the `eth_estimateGas` method returns a fixed value (6,721,975,
  matching Truffle's default gas limit).

- Ethereum is a proof-of-work (PoW) network, and NEAR is a proof-of-stake (PoS)
  network.
  Therefore with Aurora all mining-related methods such as `eth_getWork`,
  `eth_submitHashrate`, and `eth_submitWork` are not supported and return
  an error code.
  Additionally, PoW-related block metadata such as `nonce` and `difficulty`
  contain all zeroes.

- The `eth_coinbase` method returns the EVM address of the Aurora Engine.
  For example, for the Aurora Engine deployment on the `aurora` account,
  `COINBASE` returns _0x4444588443C3a91288c5002483449Aba1054192b_.

- There is no concept of uncle (aka ommer) blocks.
  The `eth_getUncleByBlockHashAndIndex` and `eth_getUncleByBlockNumberAndIndex`
  methods always return `null`.
  The `eth_getUncleCountByBlockHash` and `eth_getUncleCountByBlockNumber`
  methods return zero for valid block IDs and `null` for invalid block IDs.
  Additionally, uncle-related block metadata such as `sha3Uncles` contain
  all zeroes.

- There is no access to pending transactions.
  The `eth_newPendingTransactionFilter` method creates a filter that returns
  nothing when polled with `eth_getFilterChanges`.

- The nonstandard Geth tracing APIs are not supported at present, but we do
  have plans to implement them going forward.
  ([#12](https://github.com/aurora-is-near/aurora-relayer/issues/12))

- The nonstandard Parity tracing APIs are not supported at present, but we do
  have plans to implement them going forward.
  ([#13](https://github.com/aurora-is-near/aurora-relayer/issues/13))

- The `eth_getFilterChanges` only returns logs since the filter was created,
  regardless of the block passed in to create the filter.

## Source Code

The Aurora Relayer source code repository is at:
[github.com/aurora-is-near/aurora-relayer](https://github.com/aurora-is-near/aurora-relayer).

[web3_clientVersion]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/web3_clientversion
[web3_sha3]: https://openethereum.github.io/JSONRPC-web3-module#web3_sha3
[net_listening]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/net_listening
[net_peerCount]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/net_peercount
[net_version]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/net_version
[eth_accounts]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_accounts
[eth_blockNumber]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_blocknumber
[eth_call]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_call
[eth_chainId]: https://eips.ethereum.org/EIPS/eip-695
[eth_coinbase]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_coinbase
[eth_estimateGas]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_estimategas
[eth_gasPrice]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_gasprice
[eth_getBalance]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getbalance
[eth_getBlockByHash]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getblockbyhash
[eth_getBlockByNumber]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getblockbynumber
[eth_getBlockTransactionCountByHash]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getblocktransactioncountbyhash
[eth_getBlockTransactionCountByNumber]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getblocktransactioncountbynumber
[eth_getCode]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getcode
[eth_getFilterChanges]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterchanges
[eth_getFilterLogs]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/filter-methods/eth_getfilterlogs
[eth_getLogs]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getlogs
[eth_getProof]: https://eips.ethereum.org/EIPS/eip-1186
[eth_getStorageAt]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getstorageat
[eth_getTransactionByBlockHashAndIndex]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_gettransactionbyblockhashandindex
[eth_getTransactionByBlockNumberAndIndex]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_gettransactionbyblocknumberandindex
[eth_getTransactionByHash]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_gettransactionbyhash
[eth_getTransactionCount]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_gettransactioncount
[eth_getTransactionReceipt]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_gettransactionreceipt
[eth_getUncleByBlockHashAndIndex]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getunclebyblockhashandindex
[eth_getUncleByBlockNumberAndIndex]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getunclebyblocknumberandindex
[eth_getUncleCountByBlockHash]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getunclecountbyblockhash
[eth_getUncleCountByBlockNumber]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getunclecountbyblocknumber
[eth_getWork]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_getwork
[eth_hashrate]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_hashrate
[eth_mining]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_mining
[eth_newBlockFilter]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/filter-methods/eth_newblockfilter
[eth_newFilter]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/filter-methods/eth_newfilter
[eth_newPendingTransactionFilter]: https://openethereum.github.io/JSONRPC-eth-module.html#eth_newpendingtransactionfilter
[eth_pendingTransactions]: https://github.com/ethereum/wiki/issues/685
[eth_protocolVersion]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_protocolversion
[eth_sendRawTransaction]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_sendrawtransaction
[eth_sendTransaction]: https://openethereum.github.io/JSONRPC-eth-module.html#eth_sendtransaction
[eth_sign]: https://openethereum.github.io/JSONRPC-eth-module.html#eth_sign
[eth_signTransaction]: https://openethereum.github.io/JSONRPC-eth-module.html#eth_signtransaction
[eth_signTypedData]: https://eips.ethereum.org/EIPS/eip-712
[eth_submitHashrate]: https://openethereum.github.io/JSONRPC-eth-module.html#eth_submithashrate
[eth_submitWork]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_submitwork
[eth_syncing]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/eth_syncing
[eth_uninstallFilter]: https://docs.infura.io/infura/networks/ethereum/json-rpc-methods/filter-methods/eth_uninstallfilter
[txpool_content]: https://geth.ethereum.org/docs/rpc/ns-txpool#txpool_content
[txpool_inspect]: https://geth.ethereum.org/docs/rpc/ns-txpool#txpool_inspect
[txpool_status]: https://geth.ethereum.org/docs/rpc/ns-txpool#txpool_status
[parity_pendingTransactions]: https://openethereum.github.io/JSONRPC-parity-module#parity_pendingtransactions

[EIP-1186]: https://eips.ethereum.org/EIPS/eip-1186
