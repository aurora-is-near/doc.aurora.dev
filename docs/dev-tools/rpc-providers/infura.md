---
title: Infura
---
Infura helps Web3 developers build world-class applications on blockchain infrastructure. The Infura Web3 connections to common APIs provide easy, robust, and reliable access to Web3 networks, leaving developers to focus on what they do best: growing their products, services, and communities. Our [tutorial section](https://docs.infura.io/infura/tutorials) will teach you more about blockchain and crypto development fundamentals using Infura.

> **​**[**Infura is free**](https://infura.io/welcome)**​:** *You get 100,000 daily requests to start with, free [archive data](https://docs.infura.io/infura/features/archive-data) access within the limits of your subscription, and the ability to scale up when necessary.*

Let's create an Infura project and send some requests to the Aurora network to try it out.

### 1. Sign up to Infura

To sign up for an account on the [Infura website](https://infura.io/), enter your email address and password, and click **SIGN UP**.

![](https://www.datocms-assets.com/95026/1679605373-inf1.webp)

Infura sign upTo activate your account, verify your email address by clicking the link sent to your inbox.

### 2. Create a project

Once verified, you’ll be taken to the [Infura dashboard](https://infura.io/dashboard) where you can create projects, view analytics, select add-ons, or raise support requests. Infura supports the following projects, based on the networks:

![](https://www.datocms-assets.com/95026/1679605426-screenshot-2023-03-23-at-21-00-00.png)

You must create an API key to authenticate your requests for your project. Click **CREATE NEW KEY**.

![](https://www.datocms-assets.com/95026/1679605466-inf3.png)

From the pop-up, select the network and provide a name, then click **CREATE**.

![](https://www.datocms-assets.com/95026/1679605506-inf4.webp)

Your new project page has all the information you need to connect to the network. Use the available endpoints to send API requests.Web3 network endpoints:

![](https://www.datocms-assets.com/95026/1679605681-inf5.webp)

### 3. Secure your project

Configure security settings in the **SECURITY** tab. This is optional.

> The `SECURITY` tab is only available for Web3 and IPFS projects.

Force API requests to include the API key secret and/or [JSON Web Tokens (JWTs)](https://docs.infura.io/infura/learn/json-web-token-jwt).

![](https://www.datocms-assets.com/95026/1679605849-inf6.webp)

Use an allowlist to prevent unwanted access to your project. Refer to the [allowlist documentation](https://docs.infura.io/infura/networks/ethereum/how-to/secure-a-project/use-an-allowlist) for configuration instructions and best practices.

![](https://www.datocms-assets.com/95026/1679605888-inf7.webp)

### 4. Send requests

Interact with the project by sending requests. The following examples interact with the Ethereum network by sending requests using `HTTP`.

> All requests are `POST` requests.

Use a tool such as the [Client Uniform Resource Locator (curl)](https://docs.infura.io/infura/learn/curl) or [Postman](https://www.postman.com/downloads/) to make requests. We recommend using Postman if you're a Windows user.

> Replace `YOUR-API-KEY` with your own unique project `API` key.

#### 4.1 Get the current block number

Retrieve the current block number:

```shell
curl https://aurora-mainnet.infura.io/v3/YOUR-API-KEY \
    -X POST \
    -H "Content-Type: application/json" \
    --data '{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}'
```

You'll receive a response similar to:

```json
{"jsonrpc":"2.0","id":1,"result":"0x53e6a6f"}
```

The data returned is in hexadecimal, prefixed with `0x`. If you [convert](https://www.rapidtables.com/convert/number/hex-to-decimal.html) `0x53e6a6f` to decimal, the resulting number is `87976559`, representing the current block number at the time the query was made.

#### 4.2 View the Ether balance of a specified contract

Check the balance of an Ethereum smart contract. The example code checks the latest balance of the Ethereum Proof of Stake (PoS) contract.

```shell
curl https://aurora-mainnet.infura.io/v3/YOUR-API-KEY \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{"jsonrpc":"2.0","method":"eth_getBalance","params": ["0xb0bD02F6a392aF548bDf1CfAeE5dFa0EefcC8EaB", "latest"],"id":1}'
```

You'll receive a result similar to:

```json
{"jsonrpc":"2.0","id":1,"result":"0x202f5a53554cb2be9160"}
```

This result is the hexadecimal value of the contract in Wei (the smallest denomination of Ether). The decimal conversion of the result is `151989233062967380971872`Wei, which equals `151989.233062967380971872` Ether.

### 5. Use the Infura dashboard

The Infura dashboard shows performance and API usage data such as methods called, bandwidth usage, and most active usage times.\
Optimize your app and better understand your users by [reviewing the dashboard](https://docs.infura.io/infura/dashboard-stats) regularly.

![](https://www.datocms-assets.com/95026/1679606470-inf8.webp)

### 6. Manage your account

You can find additional settings in **Profile Settings** to manage your account. You can [set notifications for daily limits](https://docs.infura.io/infura/networks/ethereum/how-to/avoid-rate-limiting#tips-to-avoid-rate-limiting) in the **Accounts** tab.

You can update your [usage limits](https://docs.infura.io/infura/networks/ethereum/how-to/secure-a-project/set-rate-limits) and [network add-ons](https://docs.infura.io/infura/networks/ethereum/how-to/add-a-network-add-on) in the **Manage Plan tab**. You can manage [shared projects](https://docs.infura.io/infura/features/project-sharing) in the **Project Sharing** tab.

![](https://www.datocms-assets.com/95026/1679606490-inf9.webp)

If you want to learn more, please consult [official Infura documentation](https://docs.infura.io/infura/).
