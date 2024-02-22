---
title: 	Troubleshooting
---

### I have sent my tokens to the wrong wallet - can I recover them?

Aurora Pass does not currently support other EVM chains and L2s, except Aurora and Aurora Chains.
Sometimes by mistake, users can send assets to their address on those non-supported networks instead.

E.g, suppose you have sent your assets to some of your Ethereum addresses.

Then, if you have a private key of that address or a seed phrase - these tokens can be easily recovered by importing your address into a compatible wallet, e.g., MetaMask.
After that, you will be able to bridge them back from Aurora to your Ethereum address. Or transfer the tokens to any other address on Aurora, like your AuroraPass address.

In case if you have transferred them to a CEX address, you won't be able to recover these tokens, if that CEX doesn't support Aurora yet. Currently, we support Coinbase, KuCoin and Gate.io CEXes.

### I can't find the token [XYZ] in my wallet – can I add it somehow?

- If you are a developer, please add a PR to [this repository](https://github.com/aurora-is-near/bridge-assets) following [this example](https://github.com/aurora-is-near/bridge-assets/pull/273/files).
- If you are a user, please contact our [Support Team](https://discord.gg/dEFJBz8HQV) via Discord and we will help you to resolve this issue.

### I have paid for my transaction pack but got no transactions added

Please, contact our [Support [Team](https://discord.gg/dEFJBz8HQV), and we will help you to get your transaction pack.

### I can't see my balances in Aurora Pass

Sometimes such a situation could happen because of some local restrictions in your country of residence. Please, try using another internet connection or VPN to solve the issue.

### I get the 'Pairing failed: Pairing already exists' error while connecting to a DApp

This error looks like this:
![ap_pairing_error.png](/img/ap_pairing_error.png)

This error means that DApp is already using some existing pairing but the wallet doesn't know it was disconnected, so there is some non-sync state between them.

To fix it, please try to follow the next steps:

1. Try to disconnect all previously connected wallets from that DApp.
2. Re-connect with your AuroraPass wallet to a DApp.

In case the problem persists, please contact our [Support Team](https://discord.gg/dEFJBz8HQV).

### I see symbols like 0xab4... during signing a DApp transaction in Aurora Pass - what do they mean?

If you are a user, please contact either the DApp support team or the [Aurora Support Team](https://discord.gg/dEFJBz8HQV) and ask them to verify the contracts used in that DApp.

If you are a developer, make sure to verify your DApp contracts in [Aurora Explorer](https://explorer.aurora.dev/).
This will make sure that a user sees nicely formatted information - function name and its arguments' names while using the Aurora Pass wallet.

In the case of having a non-verified contract, a user will see a non-decoded function name and arguments, which will look incomprehensible and unclear.

So, we advise you to verify all (or most) of your contracts, which gives your users a better understanding of their interactions with your product via Aurora Pass.

### I have a problem, which is not on the list

Please, contact our [Support Team](https://discord.gg/dEFJBz8HQV) on Discord and open a ticket describing your problem.
