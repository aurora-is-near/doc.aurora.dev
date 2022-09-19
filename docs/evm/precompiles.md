---
title: Precompiles
sidebar_position: 2
---

# Precompiles

The Aurora EVM supports all Ethereum precompiles as well as extra precompiles designed to interact
with the NEAR blockchain. The ones denoted in **bold** are extra.

Definitions below from [evm.codes].

[evm.codes]: https://www.evm.codes/precompiled

:::info
`exitToNear` and `exitToEthereum` precompiles can only be invoked from Aurora EVM self-deployed
NEP-141 mapped ERC-20 contract. These ERC-20 contracts are deployed by invoking
the `deploy_erc20_token` function.
:::

<div class="evm-precompiles"></div>

| Address                                                               | Name                     | Minimum Gas | Input                           | Output          | Description                                                                     |
|-----------------------------------------------------------------------|--------------------------|-------------|---------------------------------|-----------------|---------------------------------------------------------------------------------|
| [0x01](#ecrecover)                                                    | ecRecover                | 3000        | `hash, v, r, s`                 | `publicAddress` | Elliptic curve digital signature algorithm (ECDSA) public key recovery function |
| [0x02](#sha2-256)                                                     | SHA2-256                 | 60          | `data`                          | `hash`          | Hash function                                                                   |
| [0x03](#ripemd-160)                                                   | RIPEMD-160               | 600         | `data`                          | `hash`          | Hash function                                                                   |
| [0x04](#identity)                                                     | identity                 | 15          | `data`                          | `data`          | Returns the input                                                               |
| [0x05](#modexp)                                                       | modexp                   | 200         | `Bsize, Esize, Msize, B, E, M`  | `value`         | Arbitrary-precision exponentiation under modulo                                 |
| [0x06](#bn256-add)                                                    | ecAdd                    | 150         | `x1, y1, x2, y2`                | `x, y`          | Point addition (ADD) on the elliptic curve `alt_bn128`                          |
| [0x07](#bn256-multiply)                                               | ecMul                    | 6000        | `x1, y1, s`                     | `x, y`          | Scalar multiplication (MUL) on the elliptic curve `alt_bn128`                   |
| [0x08](#bn256-pairing)                                                | ecPairing                | 45000       | `x1, y1, x2, y2, ..., xk, yk`   | `success`       | Bilinear function on groups on the elliptic curve `alt_bn128`                   |
| [0x09](#blake2-f)                                                     | blake2f                  | 0           | `rounds, h, m, t, f`            | `h`             | Compression function F used in the BLAKE2 cryptographic hashing algorithm       |
| [0x723ffbaba940e75e7bf5f6d61dcbf8d9a4de0fd7](#predecessor-account-id) | **predecessorAccountId** | 0           | `.`                             | `accountId`     | Returns the NEAR predecessor account ID                                         |
| [0x0a3540f79be10ef14890e87c1a0040a68cc6af71](#get-promise-results)    | **getPromiseResults**    | 125         | `.`                             | `data`          | Returns a Borsh serialized vector of PromiseResult                              |
| [0x536822d27de53629ef1f84c60555689e9488609f](#prepaid-gas)            | **prepaidGas**           | 0           | `.`                             | `value`         | Returns the prepaid gas in NEAR                                                 |
| [0xe9217bc70b7ed1f598ddd3199e80b093fa71124f](#exit-to-near)           | **exitToNear**           | 0           | `flag, <amount>, nearAccountId` | `.`             | Used in exiting from Aurora to the NEAR ecosystem as NEP-141 fungible tokens    |
| [0xb0bd02f6a392af548bdf1cfaee5dfa0eefcc8eab](#exit-to-ethereum)       | **exitToEthereum**       | 0           | `flag, <amount>, ethAddress`    | `.`             | Used in exiting from Aurora to Ethereum over the Rainbow bridge                 |

:::note
Some precompiles currently have a gas value of 0. This is temporary as it is difficult to determine
an exact gas value. However, the ones that this applies to the gas cost are generally negligible.
:::

## ECRecover

**Spec**: Ethereum [yellow paper], appendix F

More information about ECDSA can be
found [here](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm).

### Inputs

|       Byte range       | Name | Description                                            |
|:----------------------:|:----:|:-------------------------------------------------------|
|  `[0; 31]` (32 bytes)  | hash | Keccak-256 hash of the transaction                     |
| `[32; 63]` (32 bytes)  |  v   | Recovery identifier, expected to be either 27 or 28    |
| `[64; 95]` (32 bytes)  |  r   | x-value, expected to be in the range `]0; secp256k1n[` |
| `[96; 127]` (32 bytes) |  s   | Expected to be in the range `]0; secp256k1n[`          |

### Output

|      Byte range      |     Name      | Description                                             |
|:--------------------:|:-------------:|:--------------------------------------------------------|
| `[0; 31]` (32 bytes) | publicAddress | The recovered 20-byte address right aligned to 32 bytes |

If an address cannot be recovered, or not enough gas was given, then there is no return data. Please
note, that the return is the address that issued the signature but it won't verify the signature.

## SHA2-256

**Spec**: Ethereum [yellow paper], appendix E. Precompiled Contracts

More information about SHA2 can be found [here](https://en.wikipedia.org/wiki/SHA-2).

### Inputs

|  Byte range   | Name | Description                |
|:-------------:|:----:|:---------------------------|
| `[0; length]` | data | Data to hash with SHA2-256 |

### Output

|      Byte range      | Name | Description     |
|:--------------------:|:----:|:----------------|
| `[0; 31]` (32 bytes) | hash | The result hash |

If not enough gas was given, then there is no return data.

## RIPEMD-160

**Spec**: Ethereum [yellow paper], appendix E. Precompiled Contracts

More information can be found [here](https://en.wikipedia.org/wiki/RIPEMD).

### Inputs

|  Byte range   | Name | Description                  |
|:-------------:|:----:|:-----------------------------|
| `[0; length]` | data | Data to hash with RIPEMD-160 |

### Output

|      Byte range      | Name | Description                                       |
|:--------------------:|:----:|:--------------------------------------------------|
| `[0; 31]` (32 bytes) | hash | The result 20-byte hash right aligned to 32 bytes |

If not enough gas was given, then there is no return data.

## Identity

**Spec**: Ethereum [yellow paper], appendix E. Precompiled Contracts

The identity function is typically used to copy a chunk of memory.

### Inputs

|  Byte range   | Name | Description    |
|:-------------:|:----:|:---------------|
| `[0; length]` | data | Data to return |

### Output

|  Byte range   | Name | Description     |
|:-------------:|:----:|:----------------|
| `[0; length]` | data | Data from input |

If not enough gas was given, then there is no return data.

## ModExp

**Spec**: Ethereum [yellow paper], appendix E. Precompiled Contracts

Arbitrary-precision exponentiation under modulo.

### Inputs

| Byte range                                         | Name  | Description                                                      |
|:---------------------------------------------------|:-----:|:-----------------------------------------------------------------|
| `[0; 31]` (32 bytes)                               | Bsize | Byte size of B                                                   |
| `[32; 63]` (32 bytes)                              | Esize | Byte size of E                                                   |
| `[64; 95]` (32 bytes)                              | Msize | Byte size of M                                                   |
| `[96; 96 + Bsize]`                                 |   B   | Base as unsigned integer                                         |
| `[96 + Bsize; 96 + Bsize + Esize]`                 |   E   | Exponent as unsigned integer, if zero, then `B ** E` will be one |
| `[96 + Bsize + Esize; 96 + Bsize + Esize + Msize]` |   M   | Modulo as unsigned integer, if zero, then returns zero           |

### Output

|  Byte range   | Name  | Description                                                   |
|:-------------:|:-----:|:--------------------------------------------------------------|
| `[0; mSize]`  | value | Result of the computation, with the same number of bytes as M |

If not enough gas was given, then there is no return data.

## BN256 Add

**Spec**: Ethereum [yellow paper], appendix E.1 zkSNARK Related Precompiled Contract

The point at infinity is encoded with both fields `x` and `y` at `0`.

### Inputs

| Byte range             | Name  | Description                                                        |
|:-----------------------|:-----:|:-------------------------------------------------------------------|
| `[0; 31]` (32 bytes)   |  x1   | X coordinate of the first point on the elliptic curve 'alt_bn128'  |
| `[32; 63]` (32 bytes)  |  y1   | Y coordinate of the first point on the elliptic curve 'alt_bn128'  |
| `[64; 95]` (32 bytes)  |  x2   | X coordinate of the second point on the elliptic curve 'alt_bn128' |
| `[96; 127]` (32 bytes) |  y2   | Y coordinate of the second point on the elliptic curve 'alt_bn128' |

### Output

| Byte range            | Name | Description                                                        |
|:----------------------|:----:|:-------------------------------------------------------------------|
| `[0; 31]` (32 bytes)  |  x   | X coordinate of the result point on the elliptic curve 'alt_bn128' |
| `[32; 63]` (32 bytes) |  y   | Y coordinate of the result point on the elliptic curve 'alt_bn128' |

If the input is not valid, or if not enough gas was given, then there is no return data.

## BN256 Multiply

**Spec**: Ethereum [yellow paper], appendix E.1 zkSNARK Related Precompiled Contract

The point at infinity is encoded with both fields `x` and `y` at `0`.

### Inputs

| Byte range            | Name | Description                                                       |
|:----------------------|:----:|:------------------------------------------------------------------|
| `[0; 31]` (32 bytes)  |  x1  | X coordinate of the first point on the elliptic curve 'alt_bn128' |
| `[32; 63]` (32 bytes) |  y1  | Y coordinate of the first point on the elliptic curve 'alt_bn128' |
| `[64; 95]` (32 bytes) |  s   | Scalar to use for the multiplication                              |

### Output

| Byte range            | Name | Description                                                        |
|:----------------------|:----:|:-------------------------------------------------------------------|
| `[0; 31]` (32 bytes)  |  x   | X coordinate of the result point on the elliptic curve 'alt_bn128' |
| `[32; 63]` (32 bytes) |  y   | Y coordinate of the result point on the elliptic curve 'alt_bn128' |

If the input is not valid, or if not enough gas was given, then there is no return data.

## BN256 Pairing

**Spec**: Ethereum [yellow paper], appendix E.1 zkSNARK Related Precompiled Contract

The point at infinity is encoded with both fields `x` and `y` at `0`.

### Inputs

The input must always be a multiple of 6 32-byte values. 0 inputs are valid and return 1. One set of
inputs are defined as follows:

| Byte range              | Name | Description |
|:------------------------|:----:|:------------|
| `[0; 31]` (32 bytes)    |  x1  |
| `[32; 63]` (32 bytes)   |  y1  |
| `[64; 95]` (32 bytes)   |  x3  |
| `[96; 127]` (32 bytes)  |  x2  |
| `[128; 159]` (32 bytes) |  y3  |
| `[160; 191]` (32 bytes) |  y2  |

### Output

| Byte range           |  Name   | Description                                 |
|:---------------------|:-------:|:--------------------------------------------|
| `[0; 31]` (32 bytes) | success | 1 if the pairing was a success, 0 otherwise |

If the input is not valid, or if not enough gas was given, then there is no return data.

## Blake2 F

**Spec**: Ethereum [yellow paper], appendix E.2. BLAKE2 Precompiled Contract

The Blake2 F compression algorithm is defined in this [RFC], section 3.2.

[RFC]: https://www.rfc-editor.org/rfc/rfc7693#section-3.2

### Inputs

| Byte range              |  Name  | Description                                                     |
|:------------------------|:------:|:----------------------------------------------------------------|
| `[0; 3]` (4 bytes)      | rounds | Number of rounds (big-endian unsigned integer)                  |
| `[4; 67]` (64 bytes)    |   h    | State vector (8 8-byte little-endian unsigned integer)          |
| `[68; 195]` (128 bytes) |   m    | Message block vector (16 8-byte little-endian unsigned integer) |
| `[196; 211]` (16 bytes) |   t    | Offset counters (2 8-byte little-endian integer)                |
| `[212; 212]` (1 byte)   |   f    | Final block indicator flag (0 or 1)                             |

### Output

| Byte range           | Name | Description                                            |
|:---------------------|:----:|:-------------------------------------------------------|
| `[0; 63]` (64 bytes) |  h   | State vector (8 8-byte little-endian unsigned integer) |

If the input is not valid, or if not enough gas was given, then there is no return data.

## Predecessor Account ID

**Spec**: Pending AIP

Returns the NEAR predecessor account submitting the transaction.

### Inputs

No input is required.

### Output

| Byte range               |    Name    | Description                 |
|:-------------------------|:----------:|:----------------------------|
| `[0; length]` (32 bytes) | account id | NEAR predecessor account ID |

## Get Promise Results

**Spec**: Pending AIP

Returns the promise results as bytes from executing a NEAR promise.

### Inputs

No input is required.

### Output

| Byte range           |   Name   | Description            |
|:---------------------|:--------:|:-----------------------|
| `borsh([0; length])` | promises | Borsh encoded promises |

## Prepaid Gas

**Spec**: Pending AIP

Returns the prepaid gas denoted in NEAR as part of the underlying NEAR transaction.

### Inputs

No input is required.

### Output

| Byte range | Name | Description           |
|:-----------|:----:|:----------------------|
| `[0; 31]`  | gas  | The prepaid gas value |

## Exit to NEAR

**Spec**: Pending AIP

Transfers either ETH or a NEP-141 mapped ERC-20 token from the Aurora EVM to Near as NEP-141.

This can only be invoked through Engine self-deployed NEP-141 mapped ERC-20
contracts using the `deploy_erc20_token` method on the EVM.

:::note
For completeness, the details are included anyways even though you can not directly interface with
this precompile.
:::

### Inputs

There are two kinds of inputs depending on if you are withdrawing ETH or ERC-20 from a NEP-141
mapped ERC-20 contract.

#### ETH withdraw

| Byte range     |    Name    | Description                                                                |
|:---------------|:----------:|:---------------------------------------------------------------------------|
| `[0]` (1 byte) |    flag    | The flag must be set as 0x0 for ETH transfer                               |
| `[1; length]`  | account_id | The NEAR recipient account which will receive ETH tokens as NEP-141 tokens |

#### ERC-20 withdraw

| Byte range           |    Name    | Description                                                                   |
|:---------------------|:----------:|:------------------------------------------------------------------------------|
| `[0]` (1 byte)       |    flag    | The flag must be set as 0x1 for ERC-20 transfer                               |
| `[1; 32]` (32 bytes) |   amount   | The amount value which is required only for ERC-20 transfers                  |
| `[33; length]`       | account_id | The NEAR recipient account which will receive ERC-20 tokens as NEP-141 tokens |

### Output

There is no output except for log emissions which will trigger the transfer of NEP-141 tokens.

## Exit to Ethereum

**Spec**: Pending AIP

Transfers either ETH or a NEP-141 mapped ERC-20 token from the Aurora EVM to Ethereum over
the [Rainbow Bridge](../bridge/bridge-overview.md).

This can only be invoked through Engine self-deployed NEP-141 mapped ERC-20
contracts using the `deploy_erc20_token` method on the EVM.

:::note
For completeness, the details are included anyways even though you can not directly interface with
this precompile.
:::

### Inputs

There are two kinds of inputs depending on if you are withdrawing ETH or ERC-20 from a NEP-141
mapped ERC-20 contract.

#### ETH withdraw

| Byte range           |    Name     | Description                                                         |
|:---------------------|:-----------:|:--------------------------------------------------------------------|
| `[0]` (1 byte)       |    flag     | The flag must be set as 0x0 for ETH transfer                        |
| `[1; 20]` (20 bytes) | eth_address | The ETH recipient address which will receive ETH tokens on Ethereum |

#### ERC-20 withdraw

| Byte range            |    Name     | Description                                                            |
|:----------------------|:-----------:|:-----------------------------------------------------------------------|
| `[0]` (1 byte)        |    flag     | The flag must be set as 0x1 for ERC-20 transfer                        |
| `[1; 32]` (32 bytes)  |   amount    | The amount value which is required only for ERC-20 transfers           |
| `[33; 52]` (20 bytes) | eth_address | The ETH recipient address which will receive ERC-20 tokens on Ethereum |

### Output

There is no output except for log emissions which will trigger the transfer from Aurora EVM to the
Ethereum blockchain.

[yellow paper]: https://ethereum.github.io/yellowpaper/paper.pdf
