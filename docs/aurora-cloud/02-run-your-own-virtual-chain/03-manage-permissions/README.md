# Manage permissions

Aurora Chains have three different profiles of permissions:

* **Public Chain**: Anyone can freely interact and deploy contracts on this chain.
* **Public Permissioned Chain:** The chain owner decides who can interact and deploy contracts on the chain. The transactions are still public and available on the Chain Explorer.
* **Private Chain**: A permissioned chain with fully private data. No one can see the transaction details on this chain. A private chain can be exported as a public one if requested.

Permissioned Chains use whitelists of wallet addresses or user IDs to determine who can interact with it and who’s authorised to deploy contracts. These lists are fully configurable via APIs and can be linked to any third party application. A common use case is to couple them with KYC/KYB to ensure only verified users interact with the chain.

The advantage of chain-level permission over contract-level permission is that once users are verified, they can freely interact with any services deployed on this chain, enabling the creation of fully compliant ecosystems.
