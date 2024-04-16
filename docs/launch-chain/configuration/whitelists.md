---
sidebar_label: 	Add whitelists
title: Add whitelists
---

Every Aurora Chain has two types of whitelists defining the level of permissions for your users:

1. *Transaction Access Whitelist:* to enable user accounts (EOAs) to execute transactions in your chain.
2. *Deployment Access Whitelist:* to enable EOAs to deploy contracts to your chain.

Both of them are optional. So, if you want to allow the usage and development for everyone, both of them will be disabled. If not, you will need to manage them.
The easiest way of doing this is via the Aurora Cloud Console on the Aurora Chain Permissions Page:

![silo_permissions](/img/silo_permissions.png)

You can also manage them by using Cloud Console API, which is described in detail in the table below.

>*Note:* you will still be able to do this via the direct contract calls on Near blockchain, if needed. But we discourage you from using those,
because it is not as convenient as Cloud Console UI or [Whitelists API](/launch-chain/reference/whitelists-api).
