---
sidebar_label: 	Chain Signatures
title: Chain Signatures
---

## Introduction

Every virtual chain (EVM built as a smart contract, e.g., Aurora) on top of NEAR protocol can benefit from [Chain Signatures](https://linktr.ee/chainsignatures) technology.

Chain Signatures on virtual chains enable all addresses, both EOAs and smart contracts, to sign and execute transactions across many blockchain protocols. More info about the supported chains is in [this discussion](https://github.com/near/NEPs/issues/503#issuecomment-1713734171).

:::tip
**Currently, we support Bitcoin, Ethereum, Ripple, BNB, TRON, Polkadot, Polygon, Avalanche, Cosmos, Hedera, Filecoin, Internet Computer, Mantle, and any EVM chains.**
:::

You can use Chain Signatures on your virtual chain by:

1. Deploying [Chain Signatures Signer](https://github.com/aurora-is-near/chain-signatures-signer) contract to your virtual chain.
2. Using libs to derive accounts, create and relay transactions ([Chain Signatures JS](https://github.com/aurora-is-near/chain-signatures-js/), [Near Multichain Examples](https://github.com/near-examples/near-multichain/tree/main)).

Under the hood, the solution is composed of two pieces of tech together:

1. [Cross Contract Calls (XCC)](xcc/aurora-to-near/introduction) between virtual chain and NEAR Protocol.
2. [Chain Signatures on NEAR](https://linktr.ee/chainsignatures) (or in other words, MPC contract to sign the payload).

![chain-signatures-virtual-chain](/img/chain-sigs-vchain.png)

This unlocks the next level of blockchain interoperability by giving ownership of diverse assets, cross-chain accounts, and data to every virtual chain account.

## Benefits

Integration with Chain Signatures brings many benefits to Web3 developers:

- **Single Account, Multi-Chain Operations:** Developers can manage interactions with external blockchains from one virtual chain account. This simplifies key management and reduces the need for multiple wallets or addresses, enhancing user experience and security.

- **Reduced Overhead in Cross-Chain Development:**  Developers can write smart contracts on a virtual chain that directly sign for cross-chain transactions. This also means that you could have your contracts on a virtual chain only, so you don't need to have the same contracts on different chains.

- **Runtime Environment for chains without smart contracts**: you can build smart contracts with familiar EVM tools on top of Bitcoin, Ripple or other non-EVM chains by using virtual chain smart contracts. You're maintaining control over external accounts and assets on these networks.

- **Secure Transaction Signing:** Using Multi-Party Computation (MPC), developers gain access to a decentralized signing process for multi-chain transactions. This means no single entity controls the signing key, reducing risks associated with centralized custodianship.

:::tip

Keep in mind that Chain Signatures is a “one-way” solution to sign and execute outbound transactions happening on other blockchains.
If want to access states on external blockchains, you should check out Omnibridge, Bitcoin or Ethereum Light Clients on NEAR.

:::

## Use Cases

### Bitcoin DeFi

Developers can build decentralized finance (DeFi) applications on a virtual chain, such as decentralized exchanges (DEXs), lending platforms, or yield farming protocols, while directly leveraging Bitcoin liquidity. The business logic resides on a virtual chain, while BTC is used for actual payments.

#### Examples

- Atomic Swaps: Facilitate trustless, instant exchanges between Bitcoin and other cryptocurrencies, enhancing liquidity and reducing counterparty risk.
- Receive Bitcoin payments with a native transfer to a Chain Signature derived account.
- Use Chain Signatures to control the payment flow and execute Bitcoin transactions, such as locking or transferring assets.
- Use smart contracts on a virtual chain to encapsulate business logic such as interest calculations, borrowing, order processing, reward distribution, and repayments.

### Cross-Chain NFT Platforms

Developers can create a NFT marketplace on a virtual chain where users purchase NFTs using external cryptocurrencies such as Bitcoin. The marketplace could handle:

- BTC payments via Chain Signatures and Omnibridge.
- NFT minting and trading logic on a virtual chain. (_NFTs could also be minted on multiple blockchains thanks to Chain Signatures_)

## How it works?

On the NEAR Protocol side chain signatures work like this:

![chain-signatures](/img/chain-sigs-near.png)

1. The accounts, which you control on other chains could be derived from your NEAR account.
2. Signatures with keys from these accounts are provided by the MPC contract.
3. You build a transaction involving your derived accounts.
4. Sign it with the `sign` method of the MPC contract.
5. Then reconstruct signed transaction from the response (from `big_affine` and `scalar` values).
6. Relay the transaction to the target chain (e.g., Bitcoin, Arbitrum, Base, etc.).

XCC has allowed us to develop a [Chain Signatures Signer](https://github.com/aurora-is-near/chain-signatures-signer/) contract for virtual chains, which is used:

1. To call `sign` method of the MPC contract from a virtual chain.
2. To have a subaccount on NEAR for that smart contract.
3. From that subaccount we can [get the derived addresses](https://github.com/aurora-is-near/chain-signatures-js/tree/main?tab=readme-ov-file#deriving-your-addresses-on-bitcoin).
 for every EOA or smart contract of a virtual chain [by using them as derivation paths](https://github.com/aurora-is-near/chain-signatures-signer/blob/main/src/ChainSignaturesSigner.sol#L66).

Which allows to:

1. Sign the transaction for the target chain, e.g., Bitcoin, from a virtual chain directly.
2. [Relay it](https://docs.near.org/build/chain-abstraction/chain-signatures#5-relaying-the-signature) to target chain from our frontend or backend, after callback with signed data is received.

The full cycle is described by the image at the top of the article.

## How to integrate?

1. Make sure you have NEAR ERC-20 token deployed to your virtual chain. If not, contact Aurora Support Team to do that for you.
2. Check if your virtual chain has `AuroraSDK` contract deployed to it. If not – contact us or [deploy it yourself](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/aurora-solidity-sdk).
3. Deploy [Chain Signatures Signer Solidity Contract](https://github.com/aurora-is-near/chain-signatures-signer) to your chain.
4. Set allowance for NEAR for the Chain Signatures Signer to at least 2 NEAR. Better to add a bit more if you want to sign some transactions with it.
5. Use `init` method on Chain Signatures Signer Contract to create subaccount on NEAR.
6. Now, you can use `sign` method on it to sign your transactions from a virtual chain.
7. [Reconstruct your signed transaction](https://docs.near.org/build/chain-abstraction/chain-signatures#4-reconstructing-the-signature) from the callback data ([example](https://explorer.mainnet.aurora.dev/tx/0x7231f39351187d2e694b82a0f3b57a70eabaddf5534152d4d6b3ee77ebd271ec?tab=logs)).
8. [Relay it](https://docs.near.org/build/chain-abstraction/chain-signatures#5-relaying-the-signature) to the target chain via some RPC Node.

## Resources

Here are some helpful links and resources where you can learn more about Chain Signatures:

Dev Libraries:

- [Chain Signatures Signer Solidity Contract](https://github.com/aurora-is-near/chain-signatures-signer)
- [Near Multichain Examples for EVM and Bitcoin](https://github.com/near-examples/near-multichain/tree/main)
- [Chain Signatures JS Tools for Bitcoin](https://github.com/aurora-is-near/chain-signatures-js/)
- [NEAR Chain Abstraction Layer Typescript Library by Mintbase](https://github.com/BitteProtocol/near-ca)

Documentation and articles:

- [Introduction to Chain Signatures](https://medium.com/nearprotocol/a-first-look-at-chain-signatures-cross-chain-without-bridges-81c8421d153c)
- [Chain Signatures | NEAR Documentation](https://docs.near.org/concepts/abstraction/chain-signatures)
- [Chain Signatures Use Cases | NEAR Documentation](https://docs.near.org/blog/chain-signatures-use-cases)
- [NEAR Chain Signatures Linktree](https://linktr.ee/chainsignatures)
