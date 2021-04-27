---
title: "Aurora: Compatibility with the EVM"
---

# Compatibility with the Ethereum Virtual Machine (EVM)

## Precompiles

### Standard precompiles

<div id="compat-evm-precompiles-table"></div>

Address | ID          | Name                                 | Standard       | Status
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
