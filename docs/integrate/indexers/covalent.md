---
title: "Covalent"
sidebar_position: 2
---

# Introduction

[Covalent](https://www.covalenthq.com/?utm_source=aurora&utm_medium=partner-docs) provides a unified API to bring full transparency and visibility to assets across all blockchains including Aurora's Mainnet and Testnet.

To get started, sign up for an [**API Key**](https://www.covalenthq.com/platform/?utm_source=aurora&utm_medium=partner-docs). 

|   *JSON support*    | *CSV support* |
| :-----------: | :-----------: |
| ![Developer Mode](https://www.covalenthq.com/static/images/partner-docs/developer_mode.png) | ![Analyst Mode](https://www.covalenthq.com/static/images/partner-docs/analyst_mode.png)|

The Covalent API is RESTful and offers the following out-of-the-box for *Aurora*:

| **Covalent API** |         |
| ----------- | ----------- |
| **Response formats** | JSON and CSV |
| **Real time response** | 2 blocks |
| **Batch response** | 30 minutes |
| **Request volume limit** | None |
| **Request rate limit** | 5 requests per second |
| **Base URL** | https://api.covalenthq.com/v1/|
| **Networks & `chain_id`** | Mainnet - `1313161554`<br> Testnet: - `1313161556`|
| **Supported Endpoints** | **Class A Universal** <br>- [Balances](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1313161554) <br> - [Transactions](https://www.covalenthq.com/docs/api/#/0/Get%20transactions%20for%20address/USD/1313161554) <br> - [Transfers](https://www.covalenthq.com/docs/api/#/0/Get%20ERC20%20token%20transfers%20for%20address/USD/1313161554) <br> - [Token Holders](https://www.covalenthq.com/docs/api/#/0/Get%20token%20holders%20as%20of%20any%20block%20height/USD/1313161554) <br> - [Log Events (Contract Address)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20contract%20address/USD/1313161554) <br> - [Log Events (Topic Hash)](https://www.covalenthq.com/docs/api/#/0/Get%20log%20events%20by%20topic%20hash(es)/USD/1313161554)

Try the supported endpoints directly in your browser from our [API Reference](https://covalenthq.com/docs/api/?utm_source=aurora&utm_medium=partner-docs) or use the following code examples. **The JSON response format is the same for all endpoints:**
```
❴ 
    "data": ..., 
    "error": false,
    "error_message": null,
    "error_code": null
❵
```

### Curl
```
curl -X GET "https://api.covalenthq.com/v1/{chain_id}/address/{address}/balances_v2/?key={YOUR API KEY}" -H "Accept: application/json"
```

### JavaScript
```
const APIKEY = 'YOUR API KEY';
const baseURL = 'https://api.covalenthq.com/v1'
const auroraChainId = '1313161554'
const demoAddress = '0xb0bD02F6a392aF548bDf1CfAeE5dFa0EefcC8EaB'

async function getWalletBalance(chainId, address) {
    const url = new URL(`${baseURL}/${chainId}/address/${address}/balances_v2/?key=${APIKEY}`);
    const response = await fetch(url);
    const result = await response.json();
    const data = result.data;
    console.log(data)
    return data;
}

// Example address request
getWalletBalance(auroraChainId, demoAddress);
```

### Python
```
import requests

API_KEY = 'YOUR API KEY'
base_url = 'https://api.covalenthq.com/v1'
aurora_chain_id = '1313161554'
demo_address = '0xb0bD02F6a392aF548bDf1CfAeE5dFa0EefcC8EaB'

def get_wallet_balance(chain_id, address):
    endpoint = f'/{chain_id}/address/{address}/balances_v2/?key={API_KEY}'
    url = base_url + endpoint
    result = requests.get(url).json()
    data = result["data"]
    print(data)
    return(data)


# Example address request
get_wallet_balance(aurora_chain_id, demo_address)
```

&nbsp;
# Use Cases
The Covalent API supports a broad range of Web3 data use cases including:

| | | | |
| :-----------: | :-----------: | :-----------: | :-----------: |
| ![Gaming](https://www.covalenthq.com/static/images/partner-docs/gaming.png) | ![DeFi](https://www.covalenthq.com/static/images/partner-docs/defi.png) | ![KYC](https://www.covalenthq.com/static/images/partner-docs/kyc.png)| ![NFT](https://www.covalenthq.com/static/images/partner-docs/nft_icon.png)|
| Gaming| DeFi Taxes | KYC | NFTs |
| ![Wallets](https://www.covalenthq.com/static/images/partner-docs/wallets.png) | ![Dashboards](https://www.covalenthq.com/static/images/partner-docs/dashboards.png) | ![On-Chain Forensics](https://www.covalenthq.com/static/images/partner-docs/forensics.png)| ![DAO](https://www.covalenthq.com/static/images/partner-docs/dao.png)|
| Wallets| Dashboards | On-Chain Forensics | DAO Data |
| ![Trading](https://www.covalenthq.com/static/images/partner-docs/trading.png) | ![Predictions](https://www.covalenthq.com/static/images/partner-docs/predictions.png) | ![Governance](https://www.covalenthq.com/static/images/partner-docs/governance.png)| ![Pricing](https://www.covalenthq.com/static/images/partner-docs/pricing.png)|
| DEXs & Trading| Predictive Analytics| Governance | Pricing |


Check out our collection of ready-to-ship [**Code Templates**](https://github.com/covalenthq/web3-templates) you can use immediately to build Web3 data-powered dApps.

&nbsp;
# Resources
Here are some additional resources to help you get started with the Covalent API:
- [Aurora Network Details](https://www.covalenthq.com/docs/networks/aurora/?utm_source=aurora&utm_medium=partner-docs)
- [Covalent API Reference](https://covalenthq.com/docs/api/?utm_source=aurora&utm_medium=partner-docs)
- [Project Showcase](https://www.covalenthq.com/docs/project-showcase/?utm_source=aurora&utm_medium=partner-docs)
- [API FAQs](https://www.covalenthq.com/docs/developer/faq/?utm_source=aurora&utm_medium=partner-docs)
- [Discord Support](https://www.covalenthq.com/discord/?utm_source=aurora&utm_medium=partner-docs)

&nbsp;
# About Covalent
Covalent provides the industry-leading Unified API bringing visibility to billions of Web3 data points. Developers use Covalent to build exciting multi-chain applications like crypto wallets, NFT galleries, and investor dashboard tools utilizing data from most major blockchains. Covalent is trusted by a community of 25,000+ developers and powers data for thousands of applications including 0x, Zerion, Rainbow Wallet, Rotki, Bitski and others.

[Website](https://www.covalenthq.com/?utm_source=aurora&utm_medium=partner-docs) | [Discord](https://covalenthq.com/discord/?utm_source=aurora&utm_medium=partner-docs) | [Telegram](https://t.me/CovalentHQ) | [Twitter](https://twitter.com/covalent_hq) | [YouTube](https://www.youtube.com/channel/UCGn-T9qPiXAx490Wr6WPbOw/?utm_source=aurora&utm_medium=partner-docs) | [WeChat](https://mp.weixin.qq.com/s?__biz=MzU0MzY5ODMzMg==&mid=2247483899&idx=1&sn=9c1d4df3acc04bc35c429b244307d3c7&chksm=fb063d08cc71b41e2da96b4747513acf2ab9182babe57c135e4a7d1fef9255eb3b310217835c&token=2144505038&lang=zh_CN#rd)
