"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[9425],{70:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(3274),a=n(7507);const r={title:"RedStone"},o=void 0,i={id:"dev-tools/oracles/redstone",title:"RedStone",description:"RedStone is an Oracle that delivers frequently updated, reliable, and diverse data feeds for your dApp and smart contracts on multiple L1s & L2s.",source:"@site/docs/dev-tools/oracles/redstone.md",sourceDirName:"dev-tools/oracles",slug:"/dev-tools/oracles/redstone",permalink:"/dev-tools/oracles/redstone",draft:!1,unlisted:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/dev-tools/oracles/redstone.md",tags:[],version:"current",frontMatter:{title:"RedStone"},sidebar:"devToolsSidebar",previous:{title:"Pyth",permalink:"/dev-tools/oracles/pyth"},next:{title:"DIA",permalink:"/dev-tools/oracles/dia"}},d={},c=[{value:"Why we build another Oracle system\u200b",id:"why-we-build-another-oracle-system",level:3},{value:"Solution\u200b",id:"solution",level:3},{value:"Key facts\u200b",id:"key-facts",level:3},{value:"EVM-compatible chains\u200b integration",id:"evm-compatible-chains-integration",level:3}];function l(e){const t={a:"a",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1685655574-redstone-banner-7257fdf47d9e295449b82eb474c10b2c.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"RedStone is an Oracle that delivers frequently updated, reliable, and diverse data feeds for your dApp and smart contracts on multiple L1s & L2s."}),"\n",(0,s.jsxs)(t.h3,{id:"why-we-build-another-oracle-system",children:["Why we build another Oracle system",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/introduction#why-we-build-another-oracle-system",title:"Direct link to Why we build another Oracle system",children:"\u200b"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Pushing data on-chain regardless of whether it is used or not is a huge waste of resources"}),"\n",(0,s.jsx)(t.li,{children:"Obsolete and monolithic architecture limits scalability (it's hard to list new assets or reduce latency)"}),"\n",(0,s.jsx)(t.li,{children:"Protocols cannot fully decide on trusted sources and data update conditions"}),"\n",(0,s.jsx)(t.li,{children:"End-users are fully dependent on relayers and could be cut off from the service"}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"solution",children:["Solution",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/introduction#solution",title:"Direct link to Solution",children:"\u200b"})]}),"\n",(0,s.jsx)(t.p,{children:"RedStone offers a radically different design of Oracles catering to the needs of modern DeFi protocols."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Data providers can avoid the requirement of continuous on-chain data delivery"}),"\n",(0,s.jsx)(t.li,{children:"Allow end users to self-deliver signed Oracle data on-chain"}),"\n",(0,s.jsx)(t.li,{children:"Use the decentralized Streamr network to deliver signed oracle data to the end users"}),"\n",(0,s.jsx)(t.li,{children:"Use token incentives to motivate data providers to maintain data integrity and uninterrupted service"}),"\n",(0,s.jsx)(t.li,{children:"Leverage the Arweave blockchain as cheap and permanent storage for archiving Oracle data and maintaining data providers' accountability"}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"key-facts",children:["Key facts",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/introduction#key-facts",title:"Direct link to Key facts",children:"\u200b"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/smart-contract-devs/how-it-works#data-flow",children:"modular architecture"})," maintains ",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/smart-contract-devs/how-it-works#data-format",children:"data integrity"})," from source to smart contracts"]}),"\n",(0,s.jsxs)(t.li,{children:["There are ",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/smart-contract-devs/how-it-works#3-ways-to-integrate",children:"3 different ways"})," to integrate our service tailored to your needs"]}),"\n",(0,s.jsxs)(t.li,{children:["We provide feeds for more than ",(0,s.jsx)(t.a,{href:"https://app.redstone.finance/#/app/tokens",children:"1000 assets"})," integrating ",(0,s.jsx)(t.a,{href:"https://app.redstone.finance/#/app/sources",children:"~50 data sources"})]}),"\n",(0,s.jsxs)(t.li,{children:["We are present on ",(0,s.jsx)(t.a,{href:"https://showroom.redstone.finance/",children:"20+ chains"})]}),"\n",(0,s.jsx)(t.li,{children:"RedStone has been live on mainnets since March 2022 with no downtime. Code was audited by ABDK, Packshield and L2Beat Co-Founder."}),"\n",(0,s.jsxs)(t.li,{children:["RedStone was a launch partner for ",(0,s.jsx)(t.a,{href:"https://deltaprime.io/",children:"DeltaPrime"})," on Avalanche and delivered data feeds not available anywhere else. Thanks to that DeltaPrime became the top 3 fastest growing dApps according to DefiLama."]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"evm-compatible-chains-integration",children:["EVM-compatible chains",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/smart-contract-devs/chain-integration#evm-compatible-chains",title:"Direct link to EVM-compatible chains",children:"\u200b"})," integration"]}),"\n",(0,s.jsxs)(t.p,{children:["RedStone Oracles can be integrated with EVM-compatible chains out of the box thanks to the ",(0,s.jsx)(t.a,{href:"https://docs.redstone.finance/docs/smart-contract-devs/getting-started#usage",children:"evm-connector"}),". Examples of the chains tested by our team can be found ",(0,s.jsx)(t.a,{href:"https://showroom.redstone.finance/",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to test your chain there is an example contract and script ",(0,s.jsx)(t.a,{href:"https://github.com/redstone-finance/redstone-showroom/tree/main/example",children:"here"}),". You need to follow two steps:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Deploy integration example contract to your chain"}),"\n",(0,s.jsx)(t.li,{children:"Fill in missing parameters and run an example Typescript script that does the following things:"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"fetches data from the decentralized cache layer,"}),"\n",(0,s.jsx)(t.li,{children:"adds signed price data to transaction data,"}),"\n",(0,s.jsx)(t.li,{children:"interacts with the contract and receives price data."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You should be able to see price data logged to the console."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7507:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(9474);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);