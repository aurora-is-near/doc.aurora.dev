---
title: "Speedrun Ethereum & Virtual Chains: NFT Challenge"
description: "In the previous article we have deployed our first virtual chain with a custom token. Let's now deploy some NFTs to it!"
date: "2025-08-21"
authors: [slava]
tags: [tutorials, aurora_cloud]
---

In the previous article we have deployed our first virtual chain with a custom token. Let's now deploy some NFTs to it!

To do this we will use [SpeedrunEthereum](https://speedrunethereum.com) first challenge.

We won't cover it here fully, as instructions are great in the SpeedrunEthereum's [NFT tutorial](https://speedrunethereum.com/challenge/simple-nft-example).

Instead, we will talk in detail about specifics of going through that challenge in the context of your own virtual chain.

<!-- truncate -->

## Quick plan

In the previous article we have  [Launched your virtual chain in minutes](/blog/create-virtual-chain).

Now, we want to:

1. Deploy some NFT smart contract to it.
2. Deploy frontend application to operate that smart contract (mint, transfer NFTs).
3. Mint and transfer some NFTs to other accounts.
4. Verify your smart contract on Explorer.

Let's go and do this!

## Requirements

You should be a bit familiar with the basics of smart-contract development. If you're not, please read learning materials at [Build A Dapp page](/build-a-dapp/introduction).

E.g., try [CryptoZombies game](https://cryptozombies.io/) or read [Ethereum's Intro to Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/).

SpeedrunEthereum challenges are still highly top-level, so they could be done just with a pure UI interaction and CLI commands. But it is always good to understand what is going inside there.

Also, we're expecting you to have your [MetaMask installed](https://metamask.io/faqs) and your wallet already created there. You can use any other EVM wallet too. E.g., Rabby, Brave or Coinbase Wallet.

Register on [Vercel](https://vercel.com/) to deploy your frontend there.

You will also need:
- [Node](https://nodejs.org/en/download/) (>= v20.18.3)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/#mac-stable) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

Please contact us on [Discord](https://discord.gg/auroralabs) if you will need any help with getting funds for gas fees.

## Creating a project

We will deploy [NFT contract](https://speedrunethereum.com/challenge/simple-nft-example) from SpeedrunEthereum challenge.

Go [there](https://speedrunethereum.com/challenge/simple-nft-example) and follow instructions to start up your own project.

You will need 3 terminal tabs or 3 terminal windows to run everything:
- first - will be used to run your local chain with `yarn chain`.
- second - to deploy contracts to it with `yarn deploy`.
- third - to run the UI at `localhost:3000` with `yarn start`.

The chain which runs locally is just your Hardhat Testnet, basically. So don't worry, the ETH is not real there and you don't even need the MetaMask yet.

After that, grab some funds from the local faucet and play around with creating NFTs and transferring them from your local account to another local account in the incognito window.

You can also debug your deployed contract by going to `http://localhost:3000/debug`.

## Adding virtual chain to config

This NFT example actually runs on top of [HardHat](https://hardhat.org/) - familiar framework to deploy and develop smart contacts on EVM.

Let's add your virtual chain to the configuration file there, so you will be able to deploy your first NFT contract there (and all othere SpeedrunEthereum challenges!).

You can use your favorite code editor to edit HardHat config, we recommend using [VSCode](https://code.visualstudio.com/download).

Now, open your VSCode, and open your project folder (`challenge-simple-nft-example`) in it. Open file `packages/hardhat/hardhat.config.ts` (find it in a sidebar).

Then, add your chain information, as a new entry to `networks` there:

```ts
...
networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    vgas_chain: {
      url: `https://0x4e454265.rpc.aurora-cloud.dev`,
      chainId: 1313161829,
      gasPrice: 1000000000,
      accounts: [deployerPrivateKey],
      verify: {
        etherscan: {
          apiUrl: "https://0x4e454265.explorer.aurora-cloud.dev/api/",
          apiKey: 'ANY_STRING_HERE',
        },
      },
    },
    ...
```

You will need to get [your RPC URL](/blog/create-virtual-chain#chain-information), Explorer URL, [`gasPrice` value](/blog/create-virtual-chain#setting-the-gas-price). The `apiKey` for Explorer could be any non-empty string.

Now, just set the `defaultNetwork` field above:

```ts
  defaultNetwork: "vgas_chain",
```

That is it, your virtual chain is set now to be used with SpeedrunEthereum challenges.
We also recommend to remove all irrelevant chains from the config, so `yarn account` command checking your balance will work faster.

## Creating and funding your deployer account

Now, you can continue with your tutorial (`Deploy your contract!` chapter [there](https://speedrunethereum.com/challenge/simple-nft-example)), and generate some deployer address which you will need to fund.

You will use `yarn generate` to create a deployer and `yarn account` to see its balances. It is done in this way for security reasons not to compromise your private key anywhere.

:::note
You will need to provide a password to encrypt your private key, don't lose it. It will be required to use this address during the project development.
:::

After generating your new account, you will see smth like that:

```bash
➜  challenge-simple-nft-example git:(main) ✗ yarn generate
👛 Generating new Wallet

✔ Enter a password to encrypt your private key:
✔ Confirm password:

📄 Encrypted Private Key saved to packages/hardhat/.env file
🪄 Generated wallet address: 0x76a6B4211235Bf9c6e604ACd65cf8877Fb6076Fa

⚠️ Make sure to remember your password! You'll need it to decrypt the private key.
```

If you check your balance with `yarn account` you will see 0 there, so you need to fund it.

To do this you have two variants, considering that your chain is using a custom token:

1. Repeat the process to [fund it from NEAR](https://doc.aurora.dev/blog/create-virtual-chain#fund-your-evm-account).
2. If you already have your gas tokens on some other account - use your EVM wallet, like MetaMask to transfer these ([example of transaction](https://0x4e454265.explorer.aurora-cloud.dev/tx/0x9aca5e1edeeb09f1e5dd8546380b9610a54112e0a4906060c1cb12f8ad5c5ac2)).

After succesful funding, `yarn account` will return you non-zero balance on your virtual chain:

```bash
➜  challenge-simple-nft-example git:(main) ✗ yarn account
✔ Enter your password to decrypt the private key:

Public address: 0x76a6B4211235Bf9c6e604ACd65cf8877Fb6076Fa
-- localhost -- 📡
   balance: 0
   nonce: 0
-- vgas_chain -- 📡
// highlight-next-line
   balance: 1
   nonce: 0
-- base -- 📡
   balance: 0
   nonce: 0
```

## Contract deployment

Now, you are ready to deploy your smart contract! Just follow [SpeedrunEthereum article](https://speedrunethereum.com/challenge/simple-nft-example) further.

You will use `yarn deploy` to do this:

```bash
➜  challenge-simple-nft-example git:(main) ✗ yarn deploy
✔ Enter password to decrypt private key:
Nothing to compile
No need to generate any newer typings.
deploying "YourCollectible" (tx:0xb01e76e722149dc6ed38c6dc63d60dfd0102b1a2557bec4e1e3f3fec156f2498)...: deployed at 0x3Db13fBC5F634EfDE0aFEd5372FbE38dfC92B0eA with 1481545 gas
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedContracts.ts
```

:::note
Make sure [your `gasPrice`](/blog/create-virtual-chain#setting-the-gas-price) is not too high or that your account has enough tokens to pay for the contract deployment, otherwise you will get `OutOfFund` error.
:::

As you can see, [this transaction](https://0x4e454265.explorer.aurora-cloud.dev/tx/0xb01e76e722149dc6ed38c6dc63d60dfd0102b1a2557bec4e1e3f3fec156f2498) has successfully deployed the contract!

## Running the frontend

### Setting up Scaffold config

To add your virtual chain to the `packages/nextjs/scaffold.config.ts` will be a bit tedious, because you need to define it in a raw form before using:

```ts
import { defineChain } from 'viem'
 
export const virtualChain = defineChain({
  id: 1313161829,
  name: 'VGas Chain',
  nativeCurrency: {
    decimals: 18,
    name: 'Virtual Chain Gas',
    symbol: 'VGAS',
  },
  rpcUrls: {
    default: {
      http: ['https://0x4e454265.rpc.aurora-cloud.dev'],
      webSocket: ['wss://0x4e454265.rpc.aurora-cloud.dev'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Explorer',
      url: 'https://0x4e454265.explorer.aurora-cloud.dev'
    },
  },
})
```

Then, set the `targetNetworks` field:

```ts
...
  targetNetworks: [virtualChain],
...
```

You should see the correct network in the frontend (`http://localhost:3000`) after doing this.

Also, you will be able to connect your MetaMask and Mint some NFTs from your account (if it has the gas tokens). Try it out!

Here is example of such [minting transaction](https://0x4e454265.explorer.aurora-cloud.dev/tx/0x0a7d820e972ddd352a36cd4a2641333e1a2c265cd0d112982f9a4d47610a8cd4) on my chain.

### Deploying Vercel frontend

Now, you will need to [create a Vercel account](https://vercel.com/) and login into it with:

```bash
yarn vercel:login
Vercel CLI 39.1.3
? Log in to Vercel Continue with Email
? Enter your email address: iaroslav.karkunov@aurora.dev
We sent an email to iaroslav.karkunov@aurora.dev. Please follow the steps provided inside it and make sure the security code matches Magnificent Ocelot.
> Success! Email authentication complete for iaroslav.karkunov@aurora.dev
Congratulations! You are now logged in. In order to deploy something, run `vercel`.
```

Just follow the steps provided in the email from Vercel.

After that execute `yarn vercel` and answer some questions:

```bash
yarn vercel
Vercel CLI 39.1.3
? Set up and deploy “~/Projects/challenge-simple-nft-example/packages/nextjs”?
yes
? Which scope should contain your project? iaroslavkarkunovauroradev's projects
? Link to existing project? no
? What’s your project’s name? vgas_chain
? In which directory is your code located? ./
Local settings detected in vercel.json:
- Install Command: yarn install
Auto-detected Project Settings (Next.js):
- Build Command: next build
- Development Command: next dev --port $PORT
- Output Directory: Next.js default
? Want to modify these settings? no
🔗  Linked to iaroslavkarkunovauroradevs-projects/vgas_chain (created .vercel)
🔍  Inspect: https://vercel.com/iaroslavkarkunovauroradevs-projects/vgas_chain/Gn1oReJznZ7p9uJkYiUNUtxc6UgR [3s]
✅  Production: https://vgaschain-6s4to65f3-iaroslavkarkunovauroradevs-projects.vercel.app [3s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/iaroslavkarkunovauroradevs-projects/vgas_chain/settings
```

You will get [a link to your UI](https://vgaschain-6s4to65f3-iaroslavkarkunovauroradevs-projects.vercel.app/myNFTs) on Vercel.

## Verifying your contract

To verify your contract execute:

```bash
yarn verify --network vgas_chain
```

You will get:

```bash
verifying YourCollectible (0x3Db13fBC5F634EfDE0aFEd5372FbE38dfC92B0eA) ...
waiting for result...
 => contract YourCollectible is now verified
```

Now, you will be able to see contract code and call contract methods of [your contract](https://0x4e454265.explorer.aurora-cloud.dev/token/0x3Db13fBC5F634EfDE0aFEd5372FbE38dfC92B0eA?tab=contract_code) via Explorer.

## Conclusions

In this article we have successfully:

- Deployed an NFT contract to your virtual chain ([explorer link](https://0x4e454265.explorer.aurora-cloud.dev/token/0x3Db13fBC5F634EfDE0aFEd5372FbE38dfC92B0eA)).
- Deployed a frontend (Dapp) to operate your smart contract on Vercel ([example](https://vgaschain-6s4to65f3-iaroslavkarkunovauroradevs-projects.vercel.app/))
- Minted and transferred an NFT between your wallets ([mint transaction](https://0x4e454265.explorer.aurora-cloud.dev/tx/0x0a7d820e972ddd352a36cd4a2641333e1a2c265cd0d112982f9a4d47610a8cd4), [transfer transaction](https://0x4e454265.explorer.aurora-cloud.dev/tx/0x9a70601810772ae9170d72972bf86142fcd3b0629141f3ef5660d34f569154a3))
- Verified your contract, makind its code and methods public and usable via Explorer.

That is it for today! Hope you have enjoyed it!

If you have encountered any errors, problems or just have any questions or suggestions, please contact us on [Discord](https://discord.gg/auroralabs).
