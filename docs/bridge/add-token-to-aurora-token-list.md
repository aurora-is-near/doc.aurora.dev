---
title: Add token to Aurora token list
---

For your token to be traded on three networks (Ethereum, NEAR, Aurora) the token should originate on Ethereum (it is not possible to mint a token on Aurora and move it to Ethereum).

If your token was originated on Ethereum, follow the procedure:

1. [Deploy](https://rainbowbridge.app/deploy) the token to Rainbow Bridge.  The UI of the deployment feature will walk you through the deployment steps.
2. Once deployed, raise a pull request [on this repository](https://github.com/aurora-is-near/bridge-assets) to have the Aurora team add your metadata.
3. Once the Aurora team process and approve your PR,
your token will be searchable by symbol on the bridge transfer form and other dApps will be able to display balances correctly. Besides, your token will appear in the [Aurora Token List](https://aurora.dev/tokens).

Aurora team would strongly recommend having the token on Ethereum too.
If your token was not originated on Ethereum and you still want to add your token to
Aurora token list ([aurora.dev/tokens](https://aurora.dev/tokens)),
please raise a pull request [on this repository](https://github.com/aurora-is-near/bridge-assets)
to have the Aurora team add your metadata.
