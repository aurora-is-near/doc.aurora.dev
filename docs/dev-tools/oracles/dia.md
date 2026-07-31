---
title: DIA
---

[DIA](https://www.diadata.org/) is a cross-chain, trustless oracle network delivering verifiable price feeds for Aurora. DIA sources raw trade data directly from primary markets and computes it onchain, ensuring complete transparency and data integrity.

## Key Features

- Complete verifiability from source to destination smart contract.
- Direct data sourcing from 100+ primary markets eliminating intermediary risk.
- Support for 20,000+ assets across all major asset classes.
- Custom oracle configuration with tailored sources and methodologies.

## How to Access Price Feeds

Call the `getValue(string memory key)` function on the oracle contract with the Query Symbol (e.g., `BTC/USD`). The function returns the asset price with 8 decimal precision and the timestamp of the last update. DIA maintains the supported assets [here](https://www.diadata.org/docs/guides/chain-specific-guide/aurora). We'll use this oracle address on Aurora testnet: `0xf4e9C0697c6B35fbDe5a17DB93196Afd7aDFe84f`.

```solidity
pragma solidity ^0.8.13;

interface IDIAOracleV2 {
    function getValue(string memory) external view returns (uint128, uint128);
}

contract DIAOracleV2Consumer{
    /**
     * @notice The DIA oracle to read from.
     * Network: Aurora Testnet
     * Address: 0xf4e9C0697c6B35fbDe5a17DB93196Afd7aDFe84f
     */
    address constant ORACLE = 0xf4e9C0697c6B35fbDe5a17DB93196Afd7aDFe84f;

    function getPrice(string memory key)
    external
    view
    returns (
        uint128 latestPrice,
        uint128 timestampOfLatestPrice
    ) {
        (latestPrice, timestampOfLatestPrice) =
                 IDIAOracleV2(ORACLE).getValue(key);
    }
}
```

View the complete integration guide for Aurora [here](https://www.diadata.org/docs/guides/chain-specific-guide/aurora).

## Request a Custom Oracle

For assets not currently available or dApps requiring specific configurations, DIA deploys production-grade custom oracles tailored to your requirements with configurable data sources, pricing methodologies, update triggers, and coverage for any of 20,000+ supported assets.

→ [Request a Custom Oracle](https://www.diadata.org/docs/guides/how-to-guides/request-a-custom-oracle)

## Resources

- Developer Support: [Discord](https://discord.com/invite/ZvGjVY5uvs) | [Telegram](https://t.me/diadata_org)
- [Aurora Integration Guide](https://www.diadata.org/docs/guides/chain-specific-guide/aurora)
- [DIA Documentation](https://www.diadata.org/docs)
