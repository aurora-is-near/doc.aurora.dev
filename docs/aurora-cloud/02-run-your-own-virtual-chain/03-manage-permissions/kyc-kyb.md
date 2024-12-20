# KYC/KYB

Permissionned chains can be combined with any KYC/KYB provider to ensure that any user interacting with the chain has verified their identity.

This is particularly useful for businesses operating in a compliant environment.

**How to set up KYC for your virtual chain?**

1. Create a permissioned Virtual Chain
2. Retrieve the API endpoint for the chain interaction whitelist (Only whitelisted wallet addresses will be able to interact with the chain)
3. Set up your KYC provider as per your preferences.
4. During the KYC process, collect the wallet address of the user
5. After the user passes KYC, call the whitelist API endpoint and pass the wallet address
6. This user will now be able to interact with your Virtual Chain
