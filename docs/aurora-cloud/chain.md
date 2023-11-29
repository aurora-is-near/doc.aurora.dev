---
title: "Dedicated Blockchains"
sidebar_position: 1
---


# Aurora Chains

Aurora Chain is a dedicated EVM-compatible blockchain built on top of the NEAR Protocol. It is your own instance of Aurora – every Aurora Chain is based upon the Aurora smart contract,
also called [Aurora Engine](/getting-started/aurora-engine). You can use it as a dedicated blockchain environment.

The main benefits of it compared to other competitors (e.g., Polygon's Supernets, Avalanche Subnets) are:

- **No need in separate validators**: Near Blockchain validators will do that job for all of the Aurora Chains.
- **Flexible configuration**: whitelists, custom token, gas mechanics, KYC.
- **Easy Aurora Ecosystem Migration**: Rainbow Bridge, on-ramps, indexers, oracles, DEXes, etc., could be deployed to your chain.
- **Focus on your business**: The tech side of the integration and support are entirely on the [Aurora Labs](https://auroralabs.dev/) team's shoulders.
- **Seamless interoperability** with Aurora, NEAR, and any other Aurora Chains: you can freely move your assets using Rainbow Bridge, and call contracts via cross-contract calls (XCC).
There is no disjointness in between. You can call any smart contract in any other Aurora Chain or NEAR and interact with them freely.
- **Top-notch TPS** – we can provide you dozens of millions of transactions daily for your ecosystem – 1k+ transactions per second.

## What can be configured?
To make Aurora Chain work in the best possible way for your business, we will help you to configure your setup. Among the features to configure are:

- custom token & fee mechanics: e.g., gasless transactions; paying for gas with a custom token; some percentage of any transaction value to be stored in Aurora Chain Treasury, etc.
- custom access control: public vs private chain, whitelist usage - who can transact or deploy contracts? You can learn about how to operate
Aurora Chain Whitelists from your dApp [here](/aurora-cloud/chain#whitelist-management). The private chain can be built using a private NEAR shard with [Calimero](https://www.calimero.network/).

## How to get one?

To get an Aurora Chain for your business, please get in touch with the AuroraLabs team via the *'Contact Us'* popup at [Aurora Cloud website](https://auroracloud.dev/).
We will schedule a call with you to determine the initial configuration of an Aurora Chain
(e.g., public access, gas mechanics, token, services, whitelist usage). When that will be finished, we will deploy one for you.

After the deployment, we start enriching it with services you need (e.g., bridge configuration, oracles, on-ramps, block explorer, etc.). Following that, your Aurora Chain will be ready to be used.

We will provide you with access to the Aurora Cloud Console to manage and monitor your chain.
On the Aurora Chain Summary Page there, you will be able to monitor chain statistics and performance:

![silo_monitoring](/img/silo_monitoring.png)

You can manage and track the information about the configured Aurora Chain with Aurora Cloud Console. The configuration page will provide you with all of the necessary details about your chain:

![silo_config](/img/silo_config.png)

Note the `RPC URL` field above. As you can see, the RPC endpoint looks similar to [the one Aurora Mainnet is using](/getting-started/network-endpoints), and has a format like [https://your-chain.aurora.dev](https://your-chain.aurora.dev).

Talking about the RPC nodes, we will provide a scalable cluster of those for you, hiding just behind that link. But if you want to manage RPCs by yourself, there are two options for you:

1. Either use our docker images on your instances. And run our optimized infrastructure on your hardware. With us supporting it.
2. Or create a [Standalone RPC nodes](https://github.com/aurora-is-near/standalone-rpc) by yourself and allow the community to scale the network.
You can read more about spinning your own Aurora node in [this DevPortal article](https://dev.aurora.dev/posts/spinning-up-your-own-aurora-node).

## Whitelist Management

Every Aurora Chain has two types of whitelists for you to operate on:

- Transaction Access Whitelist: for the user accounts (EOAs) who can execute transactions in your chain.
- Deployment Access Whitelist: for the EOAs who can deploy the contracts to your chain.

Both of them are optional. So, if you want to allow the usage and development for everyone, both of them will be disabled.
If not, you will need to manage them. The easiest way will be to do this with Aurora Cloud Console on the Aurora Chain Permissions Page:

![silo_permissions](/img/silo_permissions.png)

Or you can also manage them by using Cloud Console API, which is described in detail in the table below.

>*Note:* you will still be able to do this via the direct contract calls on Near blockchain, if needed. But we discourage you from using those,
because it is not as convenient as Cloud Console UI or Cloud Console API.

### Aurora Cloud Console: Aurora Chain API

|                                |                                                                               |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **API path**                       | `/chain/whitelists/`|
| **method**                     | `POST`|
| **required request headers**   | Content-Type: application/json <br/>Authorization: Bearer [**ACC API Token**]|
| **required request params**    | *op_type*: `add_entry` and `remove_entry` are supported <br/>*kind*: Type of whitelist. `developer` or `user` are supported. <br/> *entry*: EOA address to add or remove.|
| **response code**              | On success: `200 OK`<br/>On Error:<br/> - `400 BadRequest`: if a request body is empty or could not be parsed or a number of operations is greater than RequestConfig.MaxBatchLen<br/> - `401 Unauthorized`: if authorization header does not satisfy the [conditions](401 Conditions)<br/> - `403 Forbidden`: if a caller is [not authorized](403 Conditions) to perform all updates in request array (i.e., partial updates are not allowed)<br/> - `408 RequestTimeout`: with partial response, if not all responses from storage node are received before RequestConfig.TimeoutMs or `Timeout` header in request<br/> - `500 InternalServerError`: if fails to send an update request to the storage node, or fails to parse a response from the storage node |
| **request example**            | <pre lang="shell">curl --location --request POST '[API ENDPOINT]/chain/whitelists/' --header 'Authorization: Bearer [YOUR_ACC_API_KEY]' --header 'Content-Type: application/json' --data-raw '<br/>[<br/>  {<br/>    "op_type":"add_entry",<br/>    "kind":"developer", <br/>    "entry":"0xe93685f3bBA03016F02bD1828BaDD6195988D951"<br/>  }<br/>]'</pre>|
| **response example - success** | <pre lang="json">[<br/> "The entry: 0xe93685f3bBA03016F02bD1828BaDD6195988D951 has been added to the Developers whitelist successfully"<br/>]</pre>|
| **response examples - error**  | Response Code: 400 Bad Request <pre lang="json">{<br/>  "errorMessage":"engine request at index [1] is not authorized",<br/>  "error":""<br/>}</pre>Note: not all error responses contain response body, but if response body exists it has the above format.<br/>|

## Learn more
Here are some in-depth articles to discover details about how Aurora Chain works and how it has been developed:

- [Aurora Cloud Website](https://auroracloud.dev/)
- [Aurora Chain: Demo Walkthrough](https://dev.aurora.dev/posts/aurora-chain-demo)
- [Aurora Chain: Code Overview](https://dev.aurora.dev/posts/aurora-chain-tech-overview)

## Contact Us
If you feel your business could benefit from having its own blockchain instance, please do not hesitate to contact us at hello@auroracloud.dev.
