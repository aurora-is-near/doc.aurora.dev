---
sidebar_label: 	Initialize a chain
title: Initialize a chain
---

To get an Aurora Chain for your business, please get in touch with the Aurora Labs team via the 'Contact Us' form on the [Aurora Cloud website](https://auroracloud.dev/).
We will schedule a call with you to determine the initial scope of your project in order to define the configuration of your Aurora Chain
(e.g., public access, gas mechanics, token, services, whitelist usage).
You will then get access to your chain and to the Aurora Cloud Console within a couple of days.

Once deployed, you can choose to enrich it with a selection of services you require (e.g., bridge configuration, oracles, on-ramps, block explorer, etc.) and start your development.

We will provide you with access to the Aurora Cloud Console to manage and monitor your chain. On the Aurora Chain Summary Page, you will be able to monitor chain statistics and performance:

![silo_monitoring](/img/silo_monitoring.png)

You can manage and track the information about the configured Aurora Chain with Aurora Cloud Console. The configuration page will provide you with all of the necessary details about your chain:

![silo_config](/img/silo_config.png)

Note the `RPC URL` field above. As you can see, the RPC endpoint looks similar to [the one Aurora Mainnet is using](/dev-reference/network-endpoints), and has a format like [https://your-chain.aurora.dev](https://your-chain.aurora.dev).

Talking about the RPC nodes, we will provide a scalable cluster of those for you, accessible by that link. But if you want to manage RPCs by yourself, there are two options for you:

1. Either use our docker images on your instances. And run our optimized infrastructure on your hardware, with us supporting it.

2. Or create a [Standalone RPC nodes](https://github.com/aurora-is-near/standalone-rpc) by yourself and allow the community to scale the network.
You can read more about spinning your own Aurora node in [this DevPortal article](/blog/spinning-up-your-own-aurora-node).
