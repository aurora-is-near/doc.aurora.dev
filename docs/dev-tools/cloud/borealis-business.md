---
title: Borealis Business
---
Since its inception, the Aurora Protocol has continued to break boundaries in the blockchain world. Its latest innovation is a service known as Borealis Business, aimed at solving one of the most significant challenges for users of Web3 products – the concept of transaction fees.\
\
Borealis Business is a transaction processing and accounting service that allows Aurora Cloud customers to hide the fees complexities from their users while implementing nearly any conceivable business model to manage costs. This article aims to shed light on Borealis Business, its operations, benefits, and integration details with the comprehensive suite of [*Aurora Cloud*](https://auroracloud.dev/) offerings.

## How does it work?

Aurora has a relaying architecture mapping Aurora to NEAR transactions, separating the origination and payment. At the core of the Borealis Business is the Rule Engine (BBRE), which oversees this transaction relaying to fulfill its cost management goals. It allows the transfer of transaction costs to a third party–typically a decentralized app (dApp)–that seeks to cover its users' fees. This way, businesses can make their users' experience friction-free by shouldering transaction fees.

Companies can establish Customer Deals through the Rule Engine by setting specific rules determining who should pay for a transaction and under what conditions. E.g., incoming transactions to the Aurora+ staking contract are now made free in this way. The strategies which Rule Engine allows are particularly advantageous for companies seeking to offer region-specific or time-bound promotions. For instance, businesses can provide free transactions exclusively to their European customers around the clock while extending this offer to customers from other regions only on weekends. This level of customization empowers companies to accommodate diverse business models and opens up possibilities for novel concepts, including cross-business interactions.

## Setting Up a Deal

The setup process for a Customer Deal begins with the company formulating specific terms and conditions and the AuroraLabs team translating those into rules for use within the Rule Engine.\
\
For instance, a rule might be as follows: "All users interacting with contract A will receive 50 free transactions per month." If a transaction meets the specified criteria outlined in these rules, the associated cost is billed directly to the business that owns the deal. The rule engine diligently executes this checking and matching process, ensuring accurate transaction cost allocation.

While Borealis Business does not have a user interface, efforts are underway to incorporate this shortly. Storing all matched transactions within a Borealis Business database can offer immense value by providing comprehensive analytics about the deals. We plan to support an analytics dashboard using a [*Metabase*](https://www.metabase.com/), providing the companies with critical insights into that data.

Let’s see this setup process in more detail.

### How is a Deal Set?

As previously discussed, Deals consist of rules. Therefore, when a business engages with Aurora's engineering team, two key aspects need to be established:

* Which smart contracts will be part of a deal?
* What is the business logic around free transactions for users?\


Typically, setting up a deal would initiate with specific parameters. These, however, are not strict boundaries but flexible starting points. Our adaptability allows us to fine-tune the operational rules by leveraging a wide range of resources. These could range from IP addresses and authentication tokens to the internal data embedded within each transaction. Nevertheless, right now, we propose using the following set of parameters:

* **FROM:** This parameter specifies the originator of the transaction, and it can take values such as ***All***, meaning that the rule engine will not filter any transactions based on their origin address (i.e., all origin addresses are valid for this deal) or ***EOA*** in which case the rule engine will only pick up transactions coming from a specific list of addresses (EOAs). We refer to this list as the whitelist, which must be populated by the businesses.
* **TO:** This parameter specifies the transaction's target, and it can take values such as an ***address*** so that the rule engine will pick up transactions directed to this specific contract address. If a transaction goes to another contract, it cannot be associated with this deal.
* **DEAL**: This parameter specifies the number of transactions that the beneficiaries of this deal can get. It can be set to UNLIMITED or a specific number.

Here are a few simple examples of Borealis Business deals: 

![](https://www.datocms-assets.com/95026/1687255307-untitled-2023-06-12-1504.png)

### Aurora Pass as a Deal

A notable example of a deal within Borealis Business is Aurora Pass (AP), which stands out due to its unique approach. Unlike other deals, Aurora Pass does not utilize the address as the FROM parameter. Instead, it employs an authorization (AUTH) token system that is automatically generated when a new user sets up an account on Aurora Pass.

The Rule Engine plays a crucial role when transactions occur by validating each associated AUTH token. Upon identifying a token that corresponds to an Aurora Pass account, the engine applies the specified deal, ensuring that transaction costs are allocated according to the conditions outlined in the Aurora Pass deal. Moreover, AUTH tokens allow future support of multiple addresses within Aurora Pass while keeping the possibility of applying the benefits of free transactions to a whole account and not to a specific address.\
\
Here is an image describing how the AuroraPass (AP) Deal works:

![](https://www.datocms-assets.com/95026/1687255382-pasted-image-0-1.png)

## Whitelisting

Businesses must define a list of approved addresses that can benefit from their deal. The whitelisted addresses are managed via a dedicated API to enable companies to: 

* Add an address. 
* Remove an address. 
* Check if an address is on the whitelist. 

The Aurora team will provide businesses with the credentials for this API as part of the Borealis deal setup process.

However, it's important to note that the scope of this API will extend far beyond this whitelisting function. Future enhancements will see the addition of variables like gas price thresholds, among other rule-based parameters, and our partners will also be granted the ability to modify these parameters.

## User Experience and User Journey 

Borealis Business’ user journey is seamless. Once a user signs into a dApp with a Borealis deal, the dApp checks the whitelist status of the user's address. If approved, the user can make transactions within the app without bearing the transaction cost. This process is managed by the Borealis rule engine, which matches the transaction with the relevant deal.

### User Journey

1. A user signs into a Decentralized App (dApp).
2. This dApp has a Borealis deal.
3. The dApp checks whether this address was added to the whitelist.
4. If not, the dApp decides whether to send the address for whitelisting. This depends entirely on the business logic. For example, when requesting a transaction’s signature from a whitelisted wallet, the dApp must set gasPrice to 0 because regular wallets will use the default gas price.
5. The user makes a transaction within the app.
6. The user signs the transaction.
7. The transaction goes through Aurora’s infrastructure, and the Borealis rule engine checks for deal matches.
8. It finds a match with the business deal here, so it will report the gas fees to the business, leaving the transaction gas free for the user, and will let the transaction go through and be submitted to Aurora’s internal mempool.

Here is a scheme describing the User Journey above:

![](https://www.datocms-assets.com/95026/1687256296-untitled-2023-06-20-1009.png)

## Anti-abuse Rules

In addition, Aurora has established anti-abuse rules to prevent potential abuse of the business goals, which can be adjusted according to the client's request. For example, businesses can limit the number of transactions per minute or day. So, a user can have 50 free transactions per month but can do up to 10 per minute and 25 per day.

## Multiple Deals

A transaction can be part of multiple deals. Aurora has created a hierarchy of deals and a randomization process to manage this. If a user connects with Aurora Pass on a dApp, the transaction is attributed to the dApp deal, not the Aurora Pass deal. This hierarchy ensures that dApps take precedence over Aurora's own deals.

The randomization process comes into play when some transaction matches multiple deals. In such cases, the transaction will be randomly added to one of the deals. This balanced system ensures fair distribution and usage of the Borealis Business service across various deals.

## Developers Considerations

While the Aurora engineering team is responsible for crafting Customer Deals and the rules that regulate them, there are a few essential aspects that developers need to keep in mind, particularly when these deals are directed at smart contracts. For instance, a modular architecture might be required if the aim is to set up multiple contracts based on the varying benefits allocated to different users. Moreover, if the business model requires the dynamic deployment of contracts through contract factories, it might be necessary to whitelist users for all the contracts that require it.

In conclusion, the  Borealis Business provides an innovative solution to a significant issue within the blockchain ecosystem: the cost of transactions. As a result, Aurora is paving the way for more user-friendly blockchain applications and potentially transformative business models, which developers should consider while creating new applications and products.

## What’s next?

Borealis Business represents a transformative approach to managing transaction costs in the realm of blockchain. Its strategic alignment with the needs of businesses and users sets it apart, reflecting the evolving demands of the digital landscape. Its innovative mechanisms allow businesses to absorb transaction costs, providing a seamless user experience. Its ability to distinguish between the initiator of a transaction and the payer of transaction costs has proven to be a game-changer.

A significant advantage of Borealis Business is its inherent ability to adapt and expand based on market demands and technological advancements. The planned release of public APIs will add another dimension to the offering. It will give businesses more control over the customization and management of their deals and whitelist. The autonomy our APIs will provide is a significant leap forward, allowing businesses to adapt swiftly and efficiently to changing market conditions and user demands.

Future advancements will reinforce Borealis Business' role as a cutting-edge solution and strengthen Aurora's standing as an innovative leader in the blockchain industry. As we enter an increasingly digital future, the agility and adaptability of systems like this will undoubtedly become more crucial. Aurora is already paving the way, redefining the status quo, and pushing the boundaries of what's possible in transaction cost management.
