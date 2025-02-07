"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[6973],{736:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"aurora-cloud/welcome/introduction","title":"\ud83d\udca1 Welcome to Aurora","description":"What is Aurora?","source":"@site/docs/aurora-cloud/01-welcome/01-introduction.md","sourceDirName":"aurora-cloud/01-welcome","slug":"/aurora-cloud/welcome/introduction","permalink":"/aurora-cloud/welcome/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/aurora-cloud/01-welcome/01-introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"auroraCloud","next":{"title":"\ud83d\udcc4 About Virtual Chains","permalink":"/aurora-cloud/welcome/about-virtual-chains"}}');var n=a(3274),t=a(7507);const i={},s="\ud83d\udca1 Welcome to Aurora",l={},h=[{value:"What is Aurora?",id:"what-is-aurora",level:2},{value:"How is Aurora different from other Ethereum layer 2s?",id:"how-is-aurora-different-from-other-ethereum-layer-2s",level:2},{value:"What are the TPS on Aurora?",id:"what-are-the-tps-on-aurora",level:2},{value:"What programming language do I need to know to deploy on Aurora?",id:"what-programming-language-do-i-need-to-know-to-deploy-on-aurora",level:2},{value:"I already have a dapp on Polygon, can I migrate to Aurora?",id:"i-already-have-a-dapp-on-polygon-can-i-migrate-to-aurora",level:2},{value:"What are Virtual Chains?",id:"what-are-virtual-chains",level:2}];function c(e){const r={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"-welcome-to-aurora",children:"\ud83d\udca1 Welcome to Aurora"})}),"\n",(0,n.jsx)(r.h2,{id:"what-is-aurora",children:"What is Aurora?"}),"\n",(0,n.jsxs)(r.p,{children:["Aurora is an ",(0,n.jsx)(r.strong,{children:"EVM"})," (Ethereum Virtual Machine) compatible blockchain layer 2 on top of ",(0,n.jsx)(r.strong,{children:"Near protocol"}),", combining the compatibility with the Ethereum ecosystem and the performance and scalability of Near."]}),"\n",(0,n.jsx)(r.h2,{id:"how-is-aurora-different-from-other-ethereum-layer-2s",children:"How is Aurora different from other Ethereum layer 2s?"}),"\n",(0,n.jsxs)(r.p,{children:["Aurora is not a rollup or a side chain. It is implemented as a ",(0,n.jsx)(r.strong,{children:"smart contract"})," on the NEAR Protocol. This means that Aurora inherits most of the features from Near protocol such as:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.strong,{children:"1s block time"})}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"220+"})," Near validators "]}),"\n",(0,n.jsxs)(r.li,{children:["Scalability through ",(0,n.jsx)(r.strong,{children:"sharding"})," technology"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"While providing ethereum compatibility:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"ETH is the base token of Aurora"}),"\n",(0,n.jsxs)(r.li,{children:["Transaction fees (gas fees) in Aurora are paid in ETH and are constant (",(0,n.jsx)(r.a,{href:"https://dev.aurora.dev/posts/evm-gas-near-gas-on-aurora",children:"gas price"})," is 0.07 GWei, which is around ",(0,n.jsx)(r.strong,{children:"$0.003 per transaction"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:["Aurora supports all the Ethereum ecosystem tools \u2014 ",(0,n.jsx)(r.a,{href:"https://metamask.io/",children:"MetaMask"}),", ",(0,n.jsx)(r.a,{href:"https://github.com/foundry-rs",children:"Foundry"}),", ",(0,n.jsx)(r.a,{href:"https://www.trufflesuite.com/truffle",children:"Truffle"}),", ",(0,n.jsx)(r.a,{href:"https://hardhat.org/",children:"Hardhat"}),", ",(0,n.jsx)(r.a,{href:"https://remix.ethereum.org/",children:"Remix"}),", etc..."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"what-are-the-tps-on-aurora",children:"What are the TPS on Aurora?"}),"\n",(0,n.jsxs)(r.p,{children:["Transactions Per Second is a common measure of performance for blockchains. Since Aurora inherits its characteristics from Near Protocol, the TPS are the same as on Near which are around ",(0,n.jsx)(r.strong,{children:"1k TPS."})]}),"\n",(0,n.jsx)(r.p,{children:"Note that the TPS number depends a lot on the size of transactions (a simple transfer will be smaller than a swap for instance) so numbers can vary greatly."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["During peaks, TPS on Aurora could be around ",(0,n.jsx)(r.strong,{children:"10k"})]}),"\n",(0,n.jsxs)(r.li,{children:["Thanks to the sharding technology of Near, TPS could go up to ",(0,n.jsx)(r.strong,{children:"100k"})," with the current shards"]}),"\n",(0,n.jsxs)(r.li,{children:["And theoretically it actually has ",(0,n.jsx)(r.strong,{children:"no limit"})," since sharding offers horizontal scaling"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"what-programming-language-do-i-need-to-know-to-deploy-on-aurora",children:"What programming language do I need to know to deploy on Aurora?"}),"\n",(0,n.jsx)(r.p,{children:"As an EVM compatible chain, smart contracts on Aurora are written in Solidity, exactly how it is done on Ethereum, Polygon, Arbitrum or any other EVM chain.  "}),"\n",(0,n.jsx)(r.h2,{id:"i-already-have-a-dapp-on-polygon-can-i-migrate-to-aurora",children:"I already have a dapp on Polygon, can I migrate to Aurora?"}),"\n",(0,n.jsxs)(r.p,{children:["Absolutely, since both chains are EVM compatible, you can simply redeploy your smart contracts on Aurora without additional development, and you will instantly benefit from the ",(0,n.jsx)(r.strong,{children:"high throughput"})," and ",(0,n.jsx)(r.strong,{children:"low transaction costs"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"what-are-virtual-chains",children:"What are Virtual Chains?"}),"\n",(0,n.jsx)(r.p,{children:"Virtual Chains are dedicated instances of the Aurora Engine, customised to a specific application. Read more about Virtual Chains in the next section."})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7507:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>s});var o=a(9474);const n={},t=o.createContext(n);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);