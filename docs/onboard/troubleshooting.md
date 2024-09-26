---
title: Troubleshooting
---

### I have sent my tokens to the wrong wallet - can I recover them?

Aurora Pass does not currently support other EVM chains and L2s, except Aurora and Aurora Chains.
Sometimes, by mistake, users can send assets to their address on those non-supported networks instead.

E.g., suppose you have sent your assets to some of your Ethereum addresses.

These tokens can be quickly recovered by importing your address into a compatible wallet, e.g., MetaMask, using your private key or a seed phrase.
After that, you can bridge them back from Aurora to your Ethereum address. Or transfer the tokens to any other address on Aurora, like your AuroraPass address.

If you have transferred them to a CEX address, you can only recover these tokens if that CEX supports Aurora later. Currently, we support Coinbase, KuCoin, and Gate.io CEXes.

### I can't find the token [XYZ] in my wallet – can I add it somehow?

- If you are a developer, please add a PR to [this repository](https://github.com/aurora-is-near/bridge-assets) following [this example](https://github.com/aurora-is-near/bridge-assets/pull/273/files).
- If you are a user, don't hesitate to get in touch with our [Support Team](https://discord.gg/auroralabs) via Discord, and we will help you resolve this issue.

### I have paid for my transaction pack but got no transactions added

Please get in touch with our [Support Team](https://discord.gg/auroralabs), and we will help you get your transaction pack.

### I can't see my balances in Aurora Pass

Sometimes, such a situation could happen because of local restrictions in your country of residence. Try using another internet connection or VPN to solve the issue.

### I get the 'Pairing failed: Pairing already exists' error while connecting to a DApp

This error looks like this:
![ap_pairing_error.png](/img/ap_pairing_error.png)

This error means that DApp is already using some existing pairing, but the wallet doesn't know it was disconnected, so there is some non-sync state between them.

To fix it, please try to follow the next steps:

1. Try to disconnect all previously connected wallets from that DApp.
2. Re-connect with your AuroraPass wallet to a DApp.

If the problem persists, please get in touch with our [Support Team](https://discord.gg/auroralabs).

### I see symbols like 0xab4... while signing a DApp transaction in Aurora Pass - what do they mean?

If you are a user, don't hesitate to get in touch with either the DApp support team or the [Aurora Support Team](https://discord.gg/auroralabs) and ask them to verify the contracts used in that DApp.

If you are a developer, verify your DApp contracts in [Aurora Explorer](https://explorer.aurora.dev/). We're using Blockscout
so that you can read more about it [here](https://docs.blockscout.com/for-users/verifying-a-smart-contract).
Verifying your contracts will ensure that a user sees nicely formatted information - function name and its arguments' names while using the Aurora Pass wallet.

In a non-verified contract, a user will see a non-decoded function name and arguments, which will look incomprehensible and unclear.

We advise you to verify all (or most) of your contracts, which gives your users a better understanding of their interactions with your product via Aurora Pass.

### I have a problem which is not on the list

Please get in touch with our [Support Team](https://discord.gg/auroralabs) on Discord and open a ticket describing your problem.
