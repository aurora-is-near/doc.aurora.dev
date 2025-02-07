"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[3399],{9862:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"dev-reference/aurora-engine","title":"Aurora Engine","description":"In the heart of Aurora is Aurora Engine \u2013 an Ethereum Virtual Machine (EVM) built on the Near Protocol.","source":"@site/docs/dev-reference/aurora-engine.md","sourceDirName":"dev-reference","slug":"/dev-reference/aurora-engine","permalink":"/dev-reference/aurora-engine","draft":false,"unlisted":false,"editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/dev-reference/aurora-engine.md","tags":[],"version":"current","frontMatter":{"title":"Aurora Engine"},"sidebar":"developers","previous":{"title":"Troubleshooting","permalink":"/onboard/troubleshooting"},"next":{"title":"Networks Endpoints","permalink":"/dev-reference/network-endpoints"}}');var r=o(3274),a=o(7507);const i={title:"Aurora Engine"},s=void 0,c={},h=[{value:"Powered by SputnikVM",id:"powered-by-sputnikvm",level:2},{value:"Additional Features",id:"additional-features",level:2},{value:"Changes to the output of some Opcodes",id:"changes-to-the-output-of-some-opcodes",level:3},{value:"Additional precompiles",id:"additional-precompiles",level:3},{value:"Default NEP-141 mapped ERC-20 contract",id:"default-nep-141-mapped-erc-20-contract",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In the heart of ",(0,r.jsx)(t.a,{href:"https://aurora.dev",children:"Aurora"})," is ",(0,r.jsx)(t.a,{href:"https://github.com/aurora-is-near/aurora-engine",children:"Aurora Engine"})," \u2013 an Ethereum Virtual Machine (EVM) built on the Near Protocol.\nIt provides a solution for developers to deploy their apps on an Ethereum-compatible, high-throughput and scalable platform, with low transaction costs for their users."]}),"\n",(0,r.jsx)(t.p,{children:"Developers may enjoy familiar Ethereum tooling when working with their Solidity smart contracts on Aurora.\nThe base fee of Aurora is ETH, which provides a smooth experience for DApps\u2019 users."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["We recommend you to interact with the EVM through Aurora Pass/MetaMask and Hardhat/Foundry as we provide\nan identical experience through our ",(0,r.jsx)(t.a,{href:"https://aurora.dev/start",children:"RPC"}),".\nHowever, you may also interact with it through ",(0,r.jsx)(t.a,{href:"https://github.com/aurora-is-near/aurora-workspace",children:"Aurora workspaces"}),", the ",(0,r.jsx)(t.a,{href:"https://github.com/aurora-is-near/aurora-cli-rs",children:"Aurora CLI"}),", or the ",(0,r.jsx)(t.a,{href:"https://github.com/near/near-cli-rs",children:"Near CLI"}),"."]})}),"\n",(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.p,{children:["Since the underlying measure of computational work is ",(0,r.jsx)(t.em,{children:"Near gas"}),", an edge case could arise when\na transaction runs out of Near gas before running out of ",(0,r.jsx)(t.em,{children:"EVM gas"}),"."]}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"In this case the transaction will be considered as failed on Aurora"}),", but this may or may not be\ncompatible with what the outcome on Ethereum would have been (if the gas limit was actually high\nenough for the transaction to complete had Near gas not been the limiting factor)."]}),(0,r.jsxs)(t.p,{children:["This case will not come up for the vast majority of transactions, and indeed will become\nless likely as we improve the efficiency of our EVM contract (thus allowing Near gas to go further\nin terms of EVM computation). Eventually, we hope to eliminate this entirely by setting\nthe ",(0,r.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/blocks/#block-size",children:"ETH block gas limit"})," on Aurora to be lower than the amount of Near which we could spend in one\ntransaction."]}),(0,r.jsxs)(t.p,{children:["You can read more about this ",(0,r.jsx)(t.a,{href:"/blog/evm-gas-near-gas-on-aurora",children:"here"}),"."]})]}),"\n",(0,r.jsx)(t.h2,{id:"powered-by-sputnikvm",children:"Powered by SputnikVM"}),"\n",(0,r.jsxs)(t.p,{children:["The Aurora Engine utilises the power of the ",(0,r.jsx)(t.a,{href:"https://github.com/rust-blockchain/evm",children:"SputnikVM"})," in its current implementation. Additionally,\npart of the Aurora Labs team have been made contributors to the project due to the significant\ncontributions that they have made. However, we intend to explore other implementations and possibly\ndevelop our own backend depending on performance considerations."]}),"\n",(0,r.jsx)(t.h2,{id:"additional-features",children:"Additional Features"}),"\n",(0,r.jsx)(t.h3,{id:"changes-to-the-output-of-some-opcodes",children:"Changes to the output of some Opcodes"}),"\n",(0,r.jsxs)(t.p,{children:["Some of the Opcodes provided by Ethereum we are not able to entirely support. Though we do not\nbelieve that this will impact EVM contracts that use these Opcodes, it is important to note these\nchanges which can be found in the ",(0,r.jsx)(t.a,{href:"/dev-reference/opcodes",children:"Aurora EVM opcode documentation"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"additional-precompiles",children:"Additional precompiles"}),"\n",(0,r.jsxs)(t.p,{children:["In order to provide additional support to the NEAR ecosystem, some additional precompiles are\navailable. However, the ",(0,r.jsx)(t.code,{children:"exitToNear"})," and ",(0,r.jsx)(t.code,{children:"exitToEthereum"})," precompiles are only accessible through\nthe NEP-141 to ERC-20 contract which only can be deployed via the ",(0,r.jsx)(t.code,{children:"deploy_erc20_token"})," function in\nthe Aurora EVM."]}),"\n",(0,r.jsxs)(t.p,{children:["More information about these precompiles can be found in the ",(0,r.jsx)(t.a,{href:"/dev-reference/precompiles",children:"Aurora EVM precompile documentation"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"default-nep-141-mapped-erc-20-contract",children:"Default NEP-141 mapped ERC-20 contract"}),"\n",(0,r.jsxs)(t.p,{children:["Under the hood, all bridged ERC-20 contracts are NEAR NEP-141 fungible tokens through the process\ndescribed in the ",(0,r.jsx)(t.a,{href:"/bridge/introduction",children:"Rainbow Bridge overview"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In order to grant the ability to access to NEP-141 fungible tokens as an ERC-20 contract, we use the\nNEP-141 mapped ERC-20 contract which is automatically deployed by the Aurora EVM when invoking the\n",(0,r.jsx)(t.code,{children:"deploy_erc20_token"})," function. This allows users to deposit ERC-20 fungible tokens through the\nRainbow Bridge which will generate a proof for the Engine to confirm the transfers' existence. Thus\nenabling the user to access their NEP-141 or Ethereum ERC-20 tokens on Aurora."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7507:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var n=o(9474);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);