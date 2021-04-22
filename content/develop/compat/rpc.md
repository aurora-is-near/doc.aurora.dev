---
title: "Aurora: Compatibility with Web3 JSON-RPC"
---

# Compatibility with the Web3 JSON-RPC Protocol

<div id="compat-json-rpc-table"></div>

Method | Status | Notes
------ | ------ | -----
[web3_clientVersion] | ✅ |
[web3_sha3] | ✅ |
[net_listening] | ✅ |
[net_peerCount] | ✅ |
[net_version] | ✅ |
[eth_accounts] | ✅ |
[eth_blockNumber] | ✅ |
[eth_call] | 🚧 |
[eth_chainId] | ✅ |
[eth_coinbase] | ✅ |
[eth_compileLLL] | ❌ | Unsupported
[eth_compileSerpent] | ❌ | Unsupported
[eth_compileSolidity] | ❌ | Unsupported
[eth_estimateGas] | ✅ |
[eth_gasPrice] | ✅ |
[eth_getBalance] | ✅ |
[eth_getBlockByHash] | ✅ |
[eth_getBlockByNumber] | ✅ |
[eth_getBlockTransactionCountByHash] | ✅ |
[eth_getBlockTransactionCountByNumber] | ✅ |
[eth_getCode] | ✅ |
[eth_getCompilers] | ✅ |
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
[eth_newPendingTransactionFilter] | 🚧 |
[eth_pendingTransactions] | ✅ | [Undocumented](https://github.com/ethereum/go-ethereum/issues/1648#issuecomment-130591933)
[eth_protocolVersion] | ✅ |
[eth_sendRawTransaction] | 🚧 |
[eth_sendTransaction] | 🚧 |
[eth_sign] | 🚧 |
[eth_signTransaction] | 🚧 |
[eth_signTypedData] | 🚧 | EIP-712
[eth_submitHashrate] | ❌ | Unsupported
[eth_submitWork] | ❌ | Unsupported
[eth_syncing] | ✅ |
[eth_uninstallFilter] | 🚧 |
[db_getHex] | ❌ | Deprecated
[db_getString] | ❌ | Deprecated
[db_putHex] | ❌ | Deprecated
[db_putString] | ❌ | Deprecated
[shh_addToGroup] | ❌ | Discontinued
[shh_getFilterChanges] | ❌ | Discontinued
[shh_getMessages] | ❌ | Discontinued
[shh_hasIdentity] | ❌ | Discontinued
[shh_newFilter] | ❌ | Discontinued
[shh_newGroup] | ❌ | Discontinued
[shh_newIdentity] | ❌ | Discontinued
[shh_post] | ❌ | Discontinued
[shh_uninstallFilter] | ❌ | Discontinued
[shh_version] | ❌ | Discontinued

**Legend**: ❌ = not supported. 🚧 = work in progress. ✅ = supported.

[web3_clientVersion]: https://eth.wiki/json-rpc/API#web3_clientVersion
[web3_sha3]: https://eth.wiki/json-rpc/API#web3_sha3
[net_listening]: https://eth.wiki/json-rpc/API#net_listening
[net_peerCount]: https://eth.wiki/json-rpc/API#net_peerCount
[net_version]: https://eth.wiki/json-rpc/API#net_version
[eth_accounts]: https://eth.wiki/json-rpc/API#eth_accounts
[eth_blockNumber]: https://eth.wiki/json-rpc/API#eth_blockNumber
[eth_call]: https://eth.wiki/json-rpc/API#eth_call
[eth_chainId]: https://eips.ethereum.org/EIPS/eip-695
[eth_coinbase]: https://eth.wiki/json-rpc/API#eth_coinbase
[eth_compileLLL]: https://eth.wiki/json-rpc/API#eth_compileLLL
[eth_compileSerpent]: https://eth.wiki/json-rpc/API#eth_compileSerpent
[eth_compileSolidity]: https://eth.wiki/json-rpc/API#eth_compileSolidity
[eth_estimateGas]: https://eth.wiki/json-rpc/API#eth_estimateGas
[eth_gasPrice]: https://eth.wiki/json-rpc/API#eth_gasPrice
[eth_getBalance]: https://eth.wiki/json-rpc/API#eth_getBalance
[eth_getBlockByHash]: https://eth.wiki/json-rpc/API#eth_getBlockByHash
[eth_getBlockByNumber]: https://eth.wiki/json-rpc/API#eth_getBlockByNumber
[eth_getBlockTransactionCountByHash]: https://eth.wiki/json-rpc/API#eth_getBlockTransactionCountByHash
[eth_getBlockTransactionCountByNumber]: https://eth.wiki/json-rpc/API#eth_getBlockTransactionCountByNumber
[eth_getCode]: https://eth.wiki/json-rpc/API#eth_getCode
[eth_getCompilers]: https://eth.wiki/json-rpc/API#eth_getCompilers
[eth_getFilterChanges]: https://eth.wiki/json-rpc/API#eth_getFilterChanges
[eth_getFilterLogs]: https://eth.wiki/json-rpc/API#eth_getFilterLogs
[eth_getLogs]: https://eth.wiki/json-rpc/API#eth_getLogs
[eth_getProof]: https://eips.ethereum.org/EIPS/eip-1186
[eth_getStorageAt]: https://eth.wiki/json-rpc/API#eth_getStorageAt
[eth_getTransactionByBlockHashAndIndex]: https://eth.wiki/json-rpc/API#eth_getTransactionByBlockHashAndIndex
[eth_getTransactionByBlockNumberAndIndex]: https://eth.wiki/json-rpc/API#eth_getTransactionByBlockNumberAndIndex
[eth_getTransactionByHash]: https://eth.wiki/json-rpc/API#eth_getTransactionByHash
[eth_getTransactionCount]: https://eth.wiki/json-rpc/API#eth_getTransactionCount
[eth_getTransactionReceipt]: https://eth.wiki/json-rpc/API#eth_getTransactionReceipt
[eth_getUncleByBlockHashAndIndex]: https://eth.wiki/json-rpc/API#eth_getUncleByBlockHashAndIndex
[eth_getUncleByBlockNumberAndIndex]: https://eth.wiki/json-rpc/API#eth_getUncleByBlockNumberAndIndex
[eth_getUncleCountByBlockHash]: https://eth.wiki/json-rpc/API#eth_getUncleCountByBlockHash
[eth_getUncleCountByBlockNumber]: https://eth.wiki/json-rpc/API#eth_getUncleCountByBlockNumber
[eth_getWork]: https://eth.wiki/json-rpc/API#eth_getWork
[eth_hashrate]: https://eth.wiki/json-rpc/API#eth_hashrate
[eth_mining]: https://eth.wiki/json-rpc/API#eth_mining
[eth_newBlockFilter]: https://eth.wiki/json-rpc/API#eth_newBlockFilter
[eth_newFilter]: https://eth.wiki/json-rpc/API#eth_newFilter
[eth_newPendingTransactionFilter]: https://eth.wiki/json-rpc/API#eth_newPendingTransactionFilter
[eth_pendingTransactions]: https://github.com/ethereum/wiki/issues/685
[eth_protocolVersion]: https://eth.wiki/json-rpc/API#eth_protocolVersion
[eth_sendRawTransaction]: https://eth.wiki/json-rpc/API#eth_sendRawTransaction
[eth_sendTransaction]: https://eth.wiki/json-rpc/API#eth_sendTransaction
[eth_sign]: https://eth.wiki/json-rpc/API#eth_sign
[eth_signTransaction]: https://eth.wiki/json-rpc/API#eth_signTransaction
[eth_signTypedData]: https://eips.ethereum.org/EIPS/eip-712
[eth_submitHashrate]: https://eth.wiki/json-rpc/API#eth_submitHashrate
[eth_submitWork]: https://eth.wiki/json-rpc/API#eth_submitWork
[eth_syncing]: https://eth.wiki/json-rpc/API#eth_syncing
[eth_uninstallFilter]: https://eth.wiki/json-rpc/API#eth_uninstallFilter
[db_getHex]: https://eth.wiki/json-rpc/API#db_getHex
[db_getString]: https://eth.wiki/json-rpc/API#db_getString
[db_putHex]: https://eth.wiki/json-rpc/API#db_putHex
[db_putString]: https://eth.wiki/json-rpc/API#db_putString
[shh_addToGroup]: https://eth.wiki/json-rpc/API#shh_addToGroup
[shh_getFilterChanges]: https://eth.wiki/json-rpc/API#shh_getFilterChanges
[shh_getMessages]: https://eth.wiki/json-rpc/API#shh_getMessages
[shh_hasIdentity]: https://eth.wiki/json-rpc/API#shh_hasIdentity
[shh_newFilter]: https://eth.wiki/json-rpc/API#shh_newFilter
[shh_newGroup]: https://eth.wiki/json-rpc/API#shh_newGroup
[shh_newIdentity]: https://eth.wiki/json-rpc/API#shh_newIdentity
[shh_post]: https://eth.wiki/json-rpc/API#shh_post
[shh_uninstallFilter]: https://eth.wiki/json-rpc/API#shh_uninstallFilter
[shh_version]: https://eth.wiki/json-rpc/API#shh_version
