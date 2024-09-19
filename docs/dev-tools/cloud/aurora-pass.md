---
title: Aurora Pass
---
Aurora Pass is the new mobile cryptocurrency wallet that makes it easier than ever to manage your Aurora and Silo assets. 

With Aurora Pass, you can send and receive assets on the Aurora Mainnet and Silo networks, connect to dApps via WalletConnect version 2, and view your portfolio balances and recent transactions.

### Key Features

*   Send and receive assets on Aurora Mainnet and Silo networks
*   Connect to dApps via WalletConnect
*   View your portfolio balances and recent transactions
*   Simple and user-friendly interface
*   Secure and non-custodial wallet

### Security

Aurora Pass is a non-custodial crypto wallet which means that the user will be given a 12-word recovery seed phrase that grants them access to their assets.

Users won’t have to save that seed phrase on signup as it is securely saved on the device, but can choose to export it at any time. This provides better onboarding while providing them with the ownership of their assets in a non-custodial way. 

Using the wallet requires biometric authentication (e.g., faceID...). The seed phrase is stored using [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/): on Android, values are stored in SharedPreferences, encrypted with Android’s Keystore system, and on iOS, values are stored using the keychain services.

The seed phrase is the only way to recover access to the wallet in case of loss or when installing the wallet on a new device.

### Signing transactions

When signing a transaction, which calls a contract verified on [Aurora Explorer](https://explorer.aurora.dev/), the wallet will display the decoded function call and arguments. In case of an ERC-20 approval request, the user can edit the approved amount.

Aurora Pass does not currently support other Ethereum chains and L2s. Assets sent to the Aurora Pass address on those networks can be recovered by importing the seed phrase into a compatible wallet like MetaMask.

### Free transactions

Aurora Pass requires a login with an email or Apple/Google auth which will provide them with free transactions on Aurora Mainnet. 

The basic plan for Aurora Pass users is **50 free transactions per month**.

In parallel dApps can also pay for their user’s EOA transaction fees with our Borealis product. Borealis deals are set up by dApps and allow them to remove transaction costs based on their business logic. It uses a wallet address whitelisting system to do so.

More information about Borealis is here: [*https://auroracloud.dev/web3*](https://auroracloud.dev/web3)

If the monthly free transaction limit is reached or the transaction is not sponsored by dApp, a transaction pack can be purchased from within the Aurora Pass app.

At launch, there will be only one transaction pack available: **500 free transactions for $4.99**. This can be purchased through the in-app purchase system (Google and iOS).

### Integration

Aurora Pass implements WalletConnect version 2. The WalletConnect protocol is the industry standard to create an encrypted bridge between a dApp and Aurora Pass. It is initialized by scanning a QR code, or via [deeplink](https://docs.walletconnect.com/2.0/android/guides/mobile-linking) for mobile apps and browsers.

Connecting Aurora Pass to a dApp is done the same way as every other Ethereum wallet implementing the WalletConnect protocol.

The Ethereum ecosystem provides various libraries to make connecting to a wallet and interacting with smart contracts as easy as possible for dApp developers. Since Aurora and Silos are EVM compatible, all the Ethereum tooling is also compatible.

For example, [*Web3Modal*](https://web3modal.com/) developed by the WalletConnect team provides a modal with all the functionality needed to connect mobile wallets (QR code scan or deeplink) and injected browser extension wallets like MetaMask. In a React application, it can be used with the popular hooks library [*Wagmi*](https://wagmi.sh/). Another popular modal in the Ethereum ecosystem is [*RainbowKit*](https://www.rainbowkit.com/).

The Ethereum tooling is constantly evolving and improving so it is recommended to refer to the official documentation of your chosen library.

### **A simple Web3Modal example to get started.**

1.  Add packages:

```shell
yarn add @web3modal/ethereum @web3modal/react wagmi ethers@^5
```

2\. Signup at [WalletConnect Cloud](https://cloud.walletconnect.com/sign-in) to get a WalletConnect project id.

3\. Use `wagmi` and web3Modal hooks, like this:

```jsx
import { useWeb3Modal } from "@web3modal/react"
import { useAccount, useContract, useSigner } from 'wagmi'
```

4\. Here is a React code snippet to demonstrate how the Web3Modal component can be used:

```jsx
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"

const auroraChain = {
  id: 1313161554,
  name: "Aurora Mainnet",
  network: "Aurora Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: { http: ["https://mainnet.aurora.dev"] },
    public: { http: ["https://mainnet.aurora.dev"] },
  },
  blockExplorers: {
    default: { name: "Aurora Explorer", url: "https://explorer.aurora.dev" },
  }
}
const projectId = "YOUR_PROJECT_ID"
const chains = [auroraChain]

const { provider } = configureChains(
  chains,
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== 1313161554) return null
        return {
          http: "https://mainnet.aurora.dev",
        }
      },
    }),
  ]
)
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}
```

## Sending transactions

NEAR Protocol which executes Aurora transactions provides fast block times and finality, this means that the wallet will know immediately if the transaction succeeded during the eth_sendRawTransaction RPC call without needing to wait for the transaction receipt to be indexed.

While the user is redirected to the dApp, the transaction receipt will be indexed in Aurora RPC and become available shortly after to be used by the dApp.\
Following Ethereum standard practice, dApps can check the AP transaction status from the receipt.
