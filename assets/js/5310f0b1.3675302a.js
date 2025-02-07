"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[3053],{468:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var a=i(1454),t=i(3274),s=i(7507),r=i(7669),o=i(1528);const c={title:"Safe Wallet and Aurora: multisigs for Bitcoin",description:"By using NEAR Chain Signatures and Aurora we demonstrate how Safe Wallet could control Bitcoin account operations",date:"2025-02-07",authors:["slava"],tags:["tutorials"]},d=void 0,l={authorsImageUrls:[void 0]},h=[{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"TL;DR",id:"tldr",level:2},{value:"What problem is being solved?",id:"what-problem-is-being-solved",level:2},{value:"The demo explained",id:"the-demo-explained",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Chain Signatures Signer",id:"chain-signatures-signer",level:3},{value:"Sign function",id:"sign-function",level:4},{value:"Sign callback",id:"sign-callback",level:4},{value:"Chain Signatures JS Lib",id:"chain-signatures-js-lib",level:3},{value:"Deriving your addresses on Bitcoin",id:"deriving-your-addresses-on-bitcoin",level:4},{value:"Sending the transaction",id:"sending-the-transaction",level:4},{value:"Outro",id:"outro",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In this article, we will discuss how, by using ",(0,t.jsx)(n.a,{href:"/crosschain/chain-signatures",children:"Chain Signatures"})," on Aurora, a Safe Wallet could control Bitcoin accounts and their assets."]}),"\n",(0,t.jsxs)(n.p,{children:["This is an example of how a virtual chain could be a runtime environment for another blockchain lacking native smart contracts. ",(0,t.jsx)(n.a,{href:"/crosschain/chain-signatures",children:"The idea"})," could generally be applied to any virtual chain and any accounts or contracts on it."]}),"\n",(0,t.jsx)(n.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,t.jsx)(n.p,{children:'I want to say a big "Thank You" to the people helping me out while creating this demo:'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Michael Birch, for ",(0,t.jsx)(n.a,{href:"/crosschain/xcc/aurora-to-near/introduction",children:"XCC"})," and Chain Signatures consultations."]}),"\n",(0,t.jsxs)(n.li,{children:["Oleksandr Anyshchenko, for writing the main part of the ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-signer",children:"Chain Signatures Signer"})," contract and support with the demo."]}),"\n",(0,t.jsx)(n.li,{children:"Diego Figueroa, for debugging a smart contract with me."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,t.jsx)(n.p,{children:"If you don't like to read, you can just watch the video below."}),"\n",(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZC2dE9x-9sE?si=8S8oLxb6lqJo71gm",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Jump to 3:35 if you want to see only the demo of how it works."})}),"\n",(0,t.jsx)(n.h2,{id:"what-problem-is-being-solved",children:"What problem is being solved?"}),"\n",(0,t.jsx)(n.p,{children:"Some blockchains lack smart contracts, such as Bitcoin, Ripple, etc.\nOr have non-EVM architectures and no Solidity contracts available.\nBut you are an EVM dev who wants to build there. Also, you want to have a scalability of the NEAR Protocol at the tips of your hands."}),"\n",(0,t.jsxs)(n.p,{children:["Then ",(0,t.jsx)(n.a,{href:"https://docs.near.org/concepts/abstraction/chain-signatures",children:"NEAR Chain Signatures"})," + a virtual chain, like Aurora, can resolve this problem for you!"]}),"\n",(0,t.jsx)(n.p,{children:"I will demonstrate how it could be done by creating a Safe wallet on Aurora and controlling its derived Bitcoin address."}),"\n",(0,t.jsx)(n.h2,{id:"the-demo-explained",children:"The demo explained"}),"\n",(0,t.jsx)(n.p,{children:"I wanted a Safe Wallet on Aurora to control the Bitcoin assets on the associated derived account."}),"\n",(0,t.jsx)(n.p,{children:"To achieve this, we need two main steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Sign a Bitcoin transaction with MPC service"}),"\n",(0,t.jsx)(n.li,{children:"Relay this transaction to Bitcoin Network"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To do this, two pieces of technology are combined:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/crosschain/xcc/aurora-to-near/introduction",children:"XCC"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.near.org/concepts/abstraction/chain-signatures",children:"NEAR Chain Signatures"})," (",(0,t.jsx)(n.a,{href:"https://docs.near.org/concepts/abstraction/chain-signatures",children:"https://docs.near.org/concepts/abstraction/chain-signatures"}),") (MPC + utils to derive accounts, form transactions)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This gives us an implementation of Chain Signatures on Aurora via a Solidity contract called ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-signer",children:"Chain Signatures Signer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about it in the documentation about ",(0,t.jsx)(n.a,{href:"/crosschain/chain-signatures",children:"Chain Signatures on Virtual Chains"})," and the repo's ",(0,t.jsx)(n.code,{children:"README.md"})," itself."]}),"\n",(0,t.jsx)(n.p,{children:"I believe that picture can convey the whole process in the best possible way, so here is it:"}),"\n","\n",(0,t.jsx)(o.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("/img/safe-btc/scheme-light.png"),dark:(0,r.Ay)("/img/safe-btc/scheme-dark.png")}}),"\n",(0,t.jsx)(n.p,{children:"So, we have our Safe Wallet with two signers \u2013 Safe User 1 and Safe User 2 assigned to it. We assume Safe User 1 is doing most of the actions, and Safe User 2 just needs to confirm the transaction."}),"\n",(0,t.jsx)(n.p,{children:"Let me repeat the steps from the image above in the text format here.\nThe first step is creating and signing the Bitcoin transaction:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["User 1 derives Safe account on Bitcoin with ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-js?tab=readme-ov-file#deriving-your-addresses-on-bitcoin",children:"derive_accounts.js"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Tops it up with some Bitcoin (could be done via ",(0,t.jsx)(n.a,{href:"https://app.near-intents.org/",children:"Near Intents"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Prepares unsigned transaction with ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-js?tab=readme-ov-file#sending-transactions-to-bitcoin",children:"send_tx.js"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Submits it to Safe via Transaction Builder as a call to the ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-signer",children:"Chain Signatures Signer"})," contract and signs the proposal to execute it."]}),"\n",(0,t.jsx)(n.li,{children:"User 2 also signs the proposal."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sign"})," method is called on CS Signer."]}),"\n",(0,t.jsx)(n.li,{children:"XCC subbaccount of CS Signer calls the MPC contract on NEAR."}),"\n",(0,t.jsxs)(n.li,{children:["MPC contract propels ",(0,t.jsx)(n.a,{href:"https://explorer.mainnet.aurora.dev/tx/0xf5de2f24cd6d9f7d93e40df638c47bc07c25d014190da4f033a676ed96186b8e?tab=logs",children:"the callback"})," back to EVM with signed data."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["We already have ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-signer",children:"Chain Signatures Signer"})," contracts deployed to both Aurora Mainnet and Testnet: ",(0,t.jsx)(n.a,{href:"https://explorer.mainnet.aurora.dev/address/0xF7607CD922804DaA9D54d21349Dd6F9467098dDE",children:"Mainnet Signer"}),", ",(0,t.jsx)(n.a,{href:"https://explorer.testnet.aurora.dev/address/0x7e4F22F1eE20e01719ff1D986D116B04aBB2EE3f",children:"Testnet Signer"})]})}),"\n",(0,t.jsx)(n.p,{children:"And then second step - Relaying the transaction - is done:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"User 1 takes signed data"}),"\n",(0,t.jsxs)(n.li,{children:["Puts ",(0,t.jsx)(n.code,{children:"big_affine"})," and ",(0,t.jsx)(n.code,{children:"scalar"})," value back into ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-js?tab=readme-ov-file#sending-transactions-to-bitcoin",children:"send_tx.js"}),", whcih constructs a signed transaction with it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-js?tab=readme-ov-file#sending-transactions-to-bitcoin",children:"send_tx.js"})," relays the transaction to Bitcoin network."]}),"\n",(0,t.jsx)(n.li,{children:"RPC executes it."}),"\n",(0,t.jsx)(n.li,{children:"Token transfer happens on Bitcoin network."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(n.p,{children:"It is a pretty challenging task to explain everything in detail here.\nHere is a list of docs and resources that explain all parts needed to understand the demo perfectly:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/crosschain/xcc/aurora-to-near/introduction",children:"XCC"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/crosschain/chain-signatures",children:"Chain Signatures on Virtual Chains"})," - fresh docs about how signing works on EVM side, it has integration instructions also."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.near.org/concepts/abstraction/chain-signatures",children:"NEAR Chain Signatures"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain/",children:"NEAR Multichain Examples"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"I have created the next two repos here to make this demo happen:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-signer",children:"Chain Signatures Signer"})," - Solidity contract to ",(0,t.jsx)(n.code,{children:"sign"})," your payload on NEAR MPC from EVM."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-js",children:"Chain Signatures JS Lib"})," - some tools to derive accounts and relay the transaction taken from ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain/",children:"NEAR Multichain Examples"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Feel free to reach me out on ",(0,t.jsx)(n.a,{href:"https://discord.com/invite/WXfbGsSUbT",children:"Discord"}),"; just mention @slava there, if you will have any questions."]}),"\n",(0,t.jsx)(n.h3,{id:"chain-signatures-signer",children:"Chain Signatures Signer"}),"\n",(0,t.jsx)(n.p,{children:"What is the main thing this contract does?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It calls the MPC service on NEAR and ",(0,t.jsx)(n.a,{href:"https://explorer.mainnet.aurora.dev/tx/0x019fbf6ee6aad1edf9c68ab6cc04b8eba16479a724a1d6a9c741c5d04849c3cd",children:"signs your payload"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Then it propagates ",(0,t.jsx)(n.a,{href:"https://explorer.mainnet.aurora.dev/tx/0xf5de2f24cd6d9f7d93e40df638c47bc07c25d014190da4f033a676ed96186b8e?tab=logs",children:"the response"})," back to the EVM."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It is done via the ",(0,t.jsx)(n.code,{children:"sign"})," function call and receiving the response in the ",(0,t.jsx)(n.code,{children:"signCallback"})," transaction."]}),"\n",(0,t.jsx)(n.h4,{id:"sign-function",children:"Sign function"}),"\n",(0,t.jsxs)(n.p,{children:["To call ",(0,t.jsx)(n.code,{children:"sign"})," you will need to provide:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payload"})," - the data to be signed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"version"})," - ",(0,t.jsx)(n.code,{children:"key_version"})," from chain signatures, check NEAR docs. At the moment, it is just 0."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"attachedNear"})," - the amount of wNEAR to attach to the NEAR call. Usually, 1yoctoNEAR is enough, so you should just enter 1."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The code for the ",(0,t.jsx)(n.code,{children:"sign"})," method looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:'    function sign(string memory payload, uint256 version, uint128 attachedNear) public {\n        bytes memory _data = hexStringToBytes(payload);\n        require(_data.length == 32, "Payload must be 32 bytes");\n\n        // path is fixed here to make sure only msg.sender can use the derived \n        // address via chain signature\'s of the xcc sub-account\n        string memory path = addressToString(msg.sender);\n        bytes memory data = createData(_data, path, version);\n\n        PromiseCreateArgs memory callSign = near.call(signer, "sign", data, attachedNear,  SIGN_NEAR_GAS);\n        PromiseCreateArgs memory callback = near.auroraCall(address(this), abi.encodeWithSelector(this.signCallback.selector), 0, SIGN_CALLBACK_NEAR_GAS);\n\n        callSign.then(callback).transact();\n    }\n'})}),"\n",(0,t.jsx)(n.p,{children:"The main moments to focus on are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ownership Preservation"}),": The derivation path is equal to ",(0,t.jsx)(n.code,{children:"addressToString(msg.sender);"})," which ensures that only the EOA or contract who is ",(0,t.jsx)(n.code,{children:"msg.sender"})," can operate the derived account on other networks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Callback is optional"}),": you can remove it and index the NEAR blockchain instead for the MPC response. It will save you some gas if you don't need the signed message back into your Solidity contracts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gas for signature"}),": ",(0,t.jsx)(n.code,{children:"SIGN_NEAR_GAS"})," value can change in the future and be optimized. Right now, it is 50TGas."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Here is ",(0,t.jsxs)(n.a,{href:"https://explorer.mainnet.aurora.dev/tx/0x019fbf6ee6aad1edf9c68ab6cc04b8eba16479a724a1d6a9c741c5d04849c3cd",children:["the transaction with ",(0,t.jsx)(n.code,{children:"sign"})," call"]})," in it."]}),"\n",(0,t.jsx)(n.h4,{id:"sign-callback",children:"Sign callback"}),"\n",(0,t.jsxs)(n.p,{children:["Function ",(0,t.jsx)(n.code,{children:"signCallback"})," just propagates the MPC response back inside EVM and emits ",(0,t.jsx)(n.code,{children:"SignedEvent"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-solidity",children:'    function signCallback() public onlyRole(CALLBACK_ROLE) {\n        PromiseResult memory result = AuroraSdk.promiseResult(0);\n\n        if (result.status != PromiseResultStatus.Successful) {\n            revert("SignCallback failed");\n        }\n\n        string memory output = string(result.output);\n        emit SignedEvent(output);\n    }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The output will contain the ",(0,t.jsx)(n.code,{children:"affine_point"})," and ",(0,t.jsx)(n.code,{children:"scalar"})," to reconstruct the signature. You can take a look at the ",(0,t.jsx)(n.a,{href:"https://explorer.mainnet.aurora.dev/tx/0xf5de2f24cd6d9f7d93e40df638c47bc07c25d014190da4f033a676ed96186b8e?tab=logs",children:"example of such transaction"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"chain-signatures-js-lib",children:"Chain Signatures JS Lib"}),"\n",(0,t.jsx)(n.p,{children:"This lib is just a bunch of Node JS scripts to help you with NEAR Chain Signatures:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Allows to derive BTC addresses on Mainnet and Testnet"}),"\n",(0,t.jsx)(n.li,{children:"Create transactions for BTC transfers"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"deriving-your-addresses-on-bitcoin",children:"Deriving your addresses on Bitcoin"}),"\n",(0,t.jsxs)(n.p,{children:["Just go to ",(0,t.jsx)(n.code,{children:"src/derive_account.js"})," and enter if you want to use mainnet or testnet, your NEAR address, and derivation path:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//Example\nconst BTC = new Bitcoin('mainnet'); // <- mainnet\n\nconst account = 'f7607cd922804daa9d54d21349dd6f9467098dde.aurora'; // <- XCC subaccount address, but you can use yours .near account instead\n\nlet path = '0x70ebe9fbc4e9920b07a1f043b2bede8fc2e09504'; // <-- derivation path, could be any seed, like 'bitcoin-1', 'bitcoin-2', etc. But in Safe BTC Demo we need it to correspond to the address on Aurora.\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now you can execute it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node src/derive_account.js\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will get your account primary data, balance and UTXOs.\nRead more about ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-js?tab=readme-ov-file#deriving-your-addresses-on-bitcoin",children:"account derivation"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"sending-the-transaction",children:"Sending the transaction"}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can take the derived account data and use it inside ",(0,t.jsx)(n.code,{children:"src/send_tx.js"})," script."]}),"\n",(0,t.jsx)(n.p,{children:"It was designed to execute a BTC transfer between two accounts."}),"\n",(0,t.jsx)(n.p,{children:"Enter your data into some struct like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const safe_account = {\n    address: 'bc1qunau3q49dqewseky6nl9dqmq5fjsjfxmlkht8k',\n    publicKey: '02ac2ac40a97879c728d0f9830996793b130aa5be0cf41f796ac7afcf739a72649',\n    nearAccount: 'f7607cd922804daa9d54d21349dd6f9467098dde.aurora',\n    path: '0x70ebe9fbc4e9920b07a1f043b2bede8fc2e09504'\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should also prepare the data for BTC transfer in these variables (around line 40):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const sats = 10000; // <-- amount of Satoshis to transfer\nconst path = safe_account.path; // <-- derivation path of source account\nconst pkey = safe_account.publicKey; // <-- pubkey of source account\nconst toAddress = '14secnpokXzrjRa3fEwcJ1RQKusCp3kTUA'; // <-- destination address\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, you're ready to send the transaction:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node src/send_tx.js \n"})}),"\n",(0,t.jsx)(n.p,{children:"After that, you will need:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["To sign it via a call to ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-signer",children:"Chain Signatures Signer"})," contract."]}),"\n",(0,t.jsx)(n.li,{children:"To put the signed data back into your terminal."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Then, a transaction will be relayed and executed on the Bitcoin network."}),"\n",(0,t.jsxs)(n.p,{children:["Read more about ",(0,t.jsx)(n.a,{href:"https://github.com/aurora-is-near/chain-signatures-js?tab=readme-ov-file#sending-transactions-to-bitcoin",children:"relaying transactions"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"outro",children:"Outro"}),"\n",(0,t.jsx)(n.p,{children:"That is it! Thank you for reading the article! I hope you liked it and learned a lot today!"}),"\n",(0,t.jsx)(n.p,{children:"Happy developing on virtual chains!"}),"\n",(0,t.jsxs)(n.p,{children:["If you have any questions or suggestions, please visit our ",(0,t.jsx)(n.a,{href:"https://discord.com/invite/WXfbGsSUbT",children:"Discord Community"}),"!"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},7507:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(9474);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}},1454:e=>{e.exports=JSON.parse('{"permalink":"/blog/safe-bitcoin-demo","editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/blog/safe-bitcoin-demo.mdx","source":"@site/blog/safe-bitcoin-demo.mdx","title":"Safe Wallet and Aurora: multisigs for Bitcoin","description":"By using NEAR Chain Signatures and Aurora we demonstrate how Safe Wallet could control Bitcoin account operations","date":"2025-02-07T00:00:00.000Z","tags":[{"inline":false,"label":"Tutorials","permalink":"/blog/tags/tutorials","description":"Longer posts talking about the subject in detail"}],"readingTime":5.013333333333334,"hasTruncateMarker":true,"authors":[{"name":"Slava Karkunov","title":"DevRel","socials":{"x":"https://x.com/apocnab","github":"https://github.com/karkunow","linkedin":"https://www.linkedin.com/in/karkunov/"},"imageURL":"https://www.datocms-assets.com/95026/1677167398-photo_2022-12-02-14-55-03.jpeg","key":"slava","page":null}],"frontMatter":{"title":"Safe Wallet and Aurora: multisigs for Bitcoin","description":"By using NEAR Chain Signatures and Aurora we demonstrate how Safe Wallet could control Bitcoin account operations","date":"2025-02-07","authors":["slava"],"tags":["tutorials"]},"unlisted":false,"nextItem":{"title":"How to bridge liquidity to Aurora?","permalink":"/blog/how-to-bridge-liquidity-to-aurora"}}')}}]);