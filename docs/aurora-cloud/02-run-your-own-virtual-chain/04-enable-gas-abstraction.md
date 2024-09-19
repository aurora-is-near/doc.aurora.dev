# Enable gas abstraction

Aurora Virtual Chains have gas abstraction enabled by default. This allows you to control how gas fees are charged to users on the network, and to remove them completely if wanted.

:::info
The Aurora Engine is paying gas in NEAR on the Near protocol, but inside the Virtual Chain, any token can be defined as the base token and hence be used as gas fee
:::

<figure><img src="/img/.gitbook/assets/Frame 827 (3).png" alt="" width="375"></img><figcaption></figcaption></figure>

**Defining the gas mechanics**

Gas can be collected in different ways on a Virtual Chain:

* Usage based: This is the most common method. Gas is calculated based on the transaction size and charged in the base token of the network
* Fixed fee: To simplify user interactions, gas could be charged as a fixed fee on the Virtual Chain. For instance, the base token could be $USDT and each transaction could cost 0.01 $USDT

**Advanced logic around free transactions**

Free transactions are a great way to simplify onboarding of new users or to incentivise certain behaviours. But this should not be a on or off setting, and Aurora Cloud lets you define advanced ways of attributing free transactions, so that you can use it at your advantage.

Aurora's infrastructure includes a rule engine that lets you define **campaigns with rules** to determine whether a transaction gets free gas or not. You are able to use and combine the following parameters:

* The whitelist of wallet addresses
* The whitelist of target contract addresses
* A maximum number of free transactions one wallet can have
* The timeframe for this maximum number allowed
* An overall timeframe for this specific campaign

Examples:

1. **Promotional Offer**: I want that all users who interact with contract A will get 10 free transactions per month and per user. This will last until 10,000 transactions were subsidised or after 2 months after the beginning of the campaign.
2. **User tiers**: I want that all my premium users (who are paying a subscription fee for instance) will get 50 free transactions per month when they interact with my set of 5 contracts as long as they are subscribed.
3. **Black Friday offer**: I want that during the black friday weekend, users interacting with my DEX contracts will get 50,000 free transactions. There are no limits per user but the offer ends once the 50,000 limit is reached.

&#x20;
