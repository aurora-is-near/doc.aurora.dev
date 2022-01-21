---
title: "EVM"
---

# Compatibility with the Ethereum Virtual Machine (EVM)

The Aurora Engine implements an Ethereum Virtual Machine (EVM) on top of the
NEAR Protocol.

## Balances

EVM address balances are denominated in ether (ETH) for compatibility with
Ethereum.

## Gas

See [notes on gas](gas.md).

## Precompiles

### Standard precompiles

<div class="compat-evm-precompiles-table"></div>

Address | ID          | Name                                 | Spec           | Status
------- | ----------- | ------------------------------------ | -------------- | ------
0x01    | `ECRecover` | ECDSA public key recovery            | [Yellow Paper] | ✅
0x02    | `SHA256`    | SHA-2 256-bit hash function          | [Yellow Paper] | ✅
0x03    | `RIPEMD160` | RIPEMD 160-bit hash function         | [Yellow Paper] | ✅
0x04    | `Identity`  | Identity function                    | [Yellow Paper] | ✅
0x05    | `ModExp`    | Big integer modular exponentiation   | [EIP-198]      | ✅
0x06    | `BN128Add`  | Elliptic curve addition              | [EIP-196]      | ✅
0x07    | `BN128Mul`  | Elliptic curve scalar multiplication | [EIP-196]      | ✅
0x08    | `BN128Pair` | Elliptic curve pairing check         | [EIP-197]      | ✅
0x09    | `Blake2F`   | BLAKE2b `F` compression function     | [EIP-152]      | ✅

[Yellow Paper]: https://ethereum.github.io/yellowpaper/paper.pdf
[EIP-152]:      https://eips.ethereum.org/EIPS/eip-152
[EIP-196]:      https://eips.ethereum.org/EIPS/eip-196
[EIP-197]:      https://eips.ethereum.org/EIPS/eip-197
[EIP-198]:      https://eips.ethereum.org/EIPS/eip-198

## Opcodes

### `BLOCKHASH`

This opcode currently does not return a real blockhash.
However, it does respect the logic that a non-zero value is returned for the most recent 256 blocks (not including the current block).
For all other inputs it returns zero.
The non-zero value that is returned is computed based on the block height and properties of the Aurora Engine contract (chain ID and account ID).
Concretely, as of [#213](https://github.com/aurora-is-near/aurora-engine/pull/213/), the value returned is

```text
BLOCKHASH(h: u64) = sha256( 0x00 || h || chain_id || account_id )
```

where `||` is byte concatenation and it is assumed `h` (a 64-bit number) is converted to bytes in big endian encoding.
The leading zero byte in the concatenation is a version byte which may change if a new blockhash scheme is introduced in the future.
The `chain_id` depends on the network the Aurora Engine contract is deployed to (see [networks table](/develop/networks.html#networks)).
The `account_id` is the name of the NEAR account where the contract is deployed (see the Engine ID column in the [networks table](https://doc.aurora.dev/develop/networks.html#networks)).

### `COINBASE`

This opcode returns the EVM address of the Aurora Engine.

For example, for the Aurora Engine deployment on the `aurora` account,
`COINBASE` returns _0x4444588443C3a91288c5002483449Aba1054192b_.

### `DIFFICULTY`

This opcode always returns zero, since NEAR is not a proof-of-work (PoW)
network.

### `GASLIMIT`

This opcode always returns
_0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff_
(2^256-1).

## Limitations

- The Berlin hard fork is not yet supported. The EVM currently supports the
  feature set of the Istanbul hard fork.

- The [`BLOCKHASH` opcode](#blockhash) does not return the hash of an actual block (see above for details).

## Source Code

The Aurora Engine source code repository is at:
[github.com/aurora-is-near/aurora-engine](https://github.com/aurora-is-near/aurora-engine).
