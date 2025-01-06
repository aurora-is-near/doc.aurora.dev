# Customise your Chain

Virtual Chains are EVM chains deployed as smart contracts on Near Protocol and as such are fully customisable.

You can select:

* The unique **chainID**
* The **base token** used for paying gas: Any ERC-20 token can be used as base token. Select existing ones such as AURORA, USDC, USDT, ETH, .... or use your own token.
* **Permissions**: Chains can be defined as Public, Permissioned, or Private and permissions can be granted at the individual wallet address level.
* **Gas Mechanics**: Define how gas is collected. It can be usage based or a fixed fee.&#x20;
  * Alternatively gas can be removed for end users. The Virtual Chain owner will still need to settle transaction costs in NEAR but end users will not be required to pay gas fees.
  * [The Gas Abstraction](../enable-gas-abstraction) feature enables more advanced logic around free transactions, allowing you to define limits and whitelists.

Examples:

* I create a virtual chain with USDT as the base token, and decide that each transaction will cost 0.01 $USDT. This will be defined at the chain level and all users interacting with the chain will get this transaction cost.
* I create a virtual chain for gamin
