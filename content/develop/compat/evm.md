---
title: "Aurora: Compatibility with the EVM"
---

# Compatibility with the Ethereum Virtual Machine (EVM)

## Precompiles

### Standard precompiles

<div id="compat-evm-precompiles-table"></div>

Address | ID          | Name                                 | Spec           | Status
------- | ----------- | ------------------------------------ | -------------- | ------
0x01    | `ECRecover` | ECDSA public key recovery            | [Yellow Paper] | ✅
0x02    | `SHA256`    | SHA-2 256-bit hash function          | [Yellow Paper] | ✅
0x03    | `RIPEMD160` | RIPEMD 160-bit hash function         | [Yellow Paper] | ✅
0x04    | `Identity`  | Identity function                    | [Yellow Paper] | ✅
0x05    | `ModExp`    | Big integer modular exponentation    | [EIP-198]      | ✅
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
The non-zero value that is returned is `0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`.
For example, if the current block height is `h`, then `BLOCKHASH(h) = 0x000...`, `BLOCKHASH(h - 100) = 0xfff...` and `BLOCKHASH(h - 257) = 0x000..`.
This behavior may change in the future, see [nearcore#4256](https://github.com/near/nearcore/pull/4256) to track this issue.

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

- The [`BLOCKHASH` opcode](#blockhash) currently always returns either `0xfff...` (if the input is within 256 blocks) or `0x000...` (for the current height or one more than 256 blocks in the past).
