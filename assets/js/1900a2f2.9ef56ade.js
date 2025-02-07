"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[688],{6144:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"getting-started/overview","title":"What is Aurora?","description":"Aurora is an EVM (Ethereum Virtual Machine) compatible blockchain and ecosystem, running as a decentralised layer 2 on the NEAR Protocol. It powers innovations such as Aurora Cloud, the infrastructure solution to onboard web2 businesses onto web3.","source":"@site/docs/getting-started/overview.mdx","sourceDirName":"getting-started","slug":"/","permalink":"/","draft":false,"unlisted":false,"editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/getting-started/overview.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"What is Aurora?","id":"overview","slug":"/"},"sidebar":"tutorialSidebar","next":{"title":"Tokenomics","permalink":"/getting-started/tokenomics"}}');var s=t(3274),o=t(7507),n=t(1528),i=t(7669);const c={sidebar_position:1,sidebar_label:"What is Aurora?",id:"overview",slug:"/"},l="What is Aurora?",h={},u=[{value:"How it works?",id:"how-it-works",level:2},{value:"Interoperability",id:"interoperability",level:2},{value:"Audits",id:"audits",level:2}];function d(e){const r={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"what-is-aurora",children:"What is Aurora?"})}),"\n",(0,s.jsx)(r.p,{children:"Aurora is an EVM (Ethereum Virtual Machine) compatible blockchain and ecosystem, running as a decentralised layer 2 on the NEAR Protocol. It powers innovations such as Aurora Cloud, the infrastructure solution to onboard web2 businesses onto web3."}),"\n",(0,s.jsx)(r.p,{children:"Aurora is an EVM implemented as a smart contract on NEAR Protocol which provides several advantages:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Aurora is fully compatible with Ethereum. Applications can be seamlessly deployed on Aurora without the need to re-write smart contracts.\nAll you need is to ",(0,s.jsx)(r.a,{href:"https://aurora.dev/start",children:"change the RPC endpoint"})," you interact with."]}),"\n",(0,s.jsx)(r.li,{children:"Aurora runs on the NEAR Protocol, one of the highest-performance third-generation L1 protocols."}),"\n",(0,s.jsxs)(r.li,{children:["Transaction fees in Aurora are paid in the base currency, ETH, and are constant (",(0,s.jsx)(r.a,{href:"/blog/evm-gas-near-gas-on-aurora",children:"gas price"})," is 0.07 GWei)."]}),"\n",(0,s.jsxs)(r.li,{children:["Aurora supports all the Ethereum ecosystem tools  \u2014 ",(0,s.jsx)(r.a,{href:"https://metamask.io",children:"MetaMask"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/foundry-rs",children:"Foundry"}),", ",(0,s.jsx)(r.a,{href:"https://www.trufflesuite.com/truffle",children:"Truffle"}),", ",(0,s.jsx)(r.a,{href:"https://hardhat.org",children:"Hardhat"}),", ",(0,s.jsx)(r.a,{href:"https://remix.ethereum.org",children:"Remix"}),", etc."]}),"\n",(0,s.jsx)(r.li,{children:"Aurora has protocol level meta transactions, which enables features such as gasless transactions for end users"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"how-it-works",children:"How it works?"}),"\n",(0,s.jsx)(r.p,{children:"Aurora architecture is a relayer-based one, therefore natively supporting meta-transactions. It could be demonstrated by the picture below:"}),"\n",(0,s.jsx)(n.A,{alt:"Docusaurus themed image",sources:{light:(0,i.Ay)("/img/scheme.svg"),dark:(0,i.Ay)("/img/scheme_white.svg")}}),"\n",(0,s.jsxs)(r.p,{children:["Notice, user pays gas fees in ETH, but RPC node pays them in NEAR tokens and executes a corresponding Near transaction corresponding to the user's EVM transaction. Which just equals to calling the ",(0,s.jsx)(r.a,{href:"https://github.com/aurora-is-near/aurora-engine",children:"Aurora Engine"})," contract."]}),"\n",(0,s.jsx)(r.h2,{id:"interoperability",children:"Interoperability"}),"\n",(0,s.jsxs)(r.p,{children:["Aurora\u2019s interoperability is completed by its integration of the Rainbow Bridge, enabling the seamless transfer of assets between Ethereum, NEAR, and Aurora blockchains. Aurora is integrated with ",(0,s.jsx)(r.a,{href:"https://layerzero.network/",children:"LayerZero"})," protocol, which allows communication between 40+ more EVM networks."]}),"\n",(0,s.jsx)(r.p,{children:"Besides, Aurora supports the deployment of multiple instances of EVMs on NEAR (Aurora Chains), forming Aurora Cloud, a network of interconnected blockchains that communicate through XCC (cross contract calls) at the base layer. Each individual instance called Aurora Chain can have its own ACLs (access control lists) to manage which EOAs (Externally Owned Accounts) are allowed to transact, to deploy contracts or to perform XCC within this instance."}),"\n",(0,s.jsxs)(r.p,{children:["By using ",(0,s.jsx)(r.a,{href:"https://github.com/aurora-is-near/aurora-contracts-sdk/",children:"XCC library"})," you can also connect your Aurora contracts with the native Near Blockchain contracts, and also other way around. Here you can find more ",(0,s.jsx)(r.a,{href:"https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/examples",children:"examples"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"audits",children:"Audits"}),"\n",(0,s.jsxs)(r.p,{children:["Aurora thrives to provide robust and quality products, and engage with third party audits for all its core components.\nSee ",(0,s.jsx)(r.a,{href:"https://aurora.dev/audits",children:"https://aurora.dev/audits"})]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7507:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>i});var a=t(9474);const s={},o=a.createContext(s);function n(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);