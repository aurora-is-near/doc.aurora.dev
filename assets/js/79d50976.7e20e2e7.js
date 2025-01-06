"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[9664],{7251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(3274),r=a(7507);const s={title:"How to bridge liquidity to Aurora?",description:"We will focus on stablecoins, explain their types on Aurora, and take a look at how to bridge them in different ways from other ecosystems",date:"2024-05-22",authors:["slava"],tags:["tutorials"],image:"https://www.datocms-assets.com/95026/1716383835-liqaur.png"},n=void 0,i={permalink:"/blog/how-to-bridge-liquidity-to-aurora",editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/blog/how-to-bridge-liquidity-to-aurora.md",source:"@site/blog/how-to-bridge-liquidity-to-aurora.md",title:"How to bridge liquidity to Aurora?",description:"We will focus on stablecoins, explain their types on Aurora, and take a look at how to bridge them in different ways from other ecosystems",date:"2024-05-22T00:00:00.000Z",tags:[{inline:!1,label:"Tutorials",permalink:"/blog/tags/tutorials",description:"Longer posts talking about the subject in detail"}],readingTime:1.3366666666666667,hasTruncateMarker:!0,authors:[{name:"Slava Karkunov",title:"DevRel",socials:{x:"https://x.com/apocnab",github:"https://github.com/karkunow",linkedin:"https://www.linkedin.com/in/karkunov/"},imageURL:"https://www.datocms-assets.com/95026/1677167398-photo_2022-12-02-14-55-03.jpeg",key:"slava",page:null}],frontMatter:{title:"How to bridge liquidity to Aurora?",description:"We will focus on stablecoins, explain their types on Aurora, and take a look at how to bridge them in different ways from other ecosystems",date:"2024-05-22",authors:["slava"],tags:["tutorials"],image:"https://www.datocms-assets.com/95026/1716383835-liqaur.png"},unlisted:!1,nextItem:{title:"How to get your tokens from Bastion contracts?",permalink:"/blog/hot-to-get-your-tokens-from-bastion-contract"}},h={authorsImageUrls:[void 0]},l=[{value:"The global picture \u2013 What stables do we have?",id:"the-global-picture--what-stables-do-we-have",level:2},{value:"How to transfer liquidity to Aurora?",id:"how-to-transfer-liquidity-to-aurora",level:2}];function d(e){const t={a:"a",br:"br",em:"em",h2:"h2",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In this article, we will discuss how to bridge liquidity to Aurora in the most convenient way. We will focus on stablecoins, explain why we have four types of these on Aurora, and take a look at how to bridge them in different ways. Note that this whole bridging process also applies to the ERC-20 tokens."}),"\n",(0,o.jsx)(t.h2,{id:"the-global-picture--what-stables-do-we-have",children:"The global picture \u2013 What stables do we have?"}),"\n",(0,o.jsxs)(t.p,{children:["First, let\u2019s mention three main actors here: Ethereum, Near, and Aurora blockchains. Second, we will consider the two most popular stables, USDC and USDT. To connect the ecosystem, we will use the Rainbow Bridge.",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.br,{}),"\n","Let\u2019s take a look at how USDC and USDT tokens are bridged via Rainbow Bridge from Ethereum to Near:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1716383440-screenshot-2024-05-21-at-11-51-56.png",alt:""})}),"\n",(0,o.jsxs)(t.p,{children:["As you can see, Near has the corresponding bridged versions of Ethereum\u2019s tokens: USDC.e and USDT.e (in green), as well as the Near native ",(0,o.jsx)(t.a,{href:"https://nearblocks.io/address/17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",children:(0,o.jsx)(t.em,{children:"USDC"})})," and ",(0,o.jsx)(t.a,{href:"https://nearblocks.io/address/usdt.tether-token.near",children:(0,o.jsx)(t.em,{children:"USDT"})})," (in blue)."]}),"\n",(0,o.jsxs)(t.p,{children:["This is needed to separate the bridged liquidity from the native one on the Near blockchain. You may also have heard about such tokens being wrapped. All these versions are interchangeable using ",(0,o.jsx)(t.a,{href:"https://app.ref.finance/#a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near%7C17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",children:(0,o.jsx)(t.em,{children:"ref.finance,"})})," on Near Protocol, as depicted by a green arrow in the image."]}),"\n",(0,o.jsx)(t.p,{children:"A similar story repeats with Aurora by bridging tokens from Ethereum and Near via Rainbow Bridge. So we\u2019re getting the next picture:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1716383465-screenshot-2024-05-21-at-11-53-42.png",alt:""})}),"\n",(0,o.jsxs)(t.p,{children:["That is why, on Aurora, we have 4 different tokens representing stables. USDC and USDT tokens are the wrapped analog for the Near native tokens. And USDC.e and USDT.e \u2013 for the Ethereum tokens. All these versions are interchangeable by using ",(0,o.jsx)(t.a,{href:"https://aurora.plus/swap",children:(0,o.jsx)(t.em,{children:"Aurora+ Swap"})})," feature supported by 1inch."]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-transfer-liquidity-to-aurora",children:"How to transfer liquidity to Aurora?"}),"\n",(0,o.jsxs)(t.p,{children:["As you have seen in the picture above, the most natural way to transfer tokens from Ethereum or Near is to use the ",(0,o.jsx)(t.a,{href:"https://rainbowbridge.app/",children:(0,o.jsx)(t.em,{children:"Rainbow Bridge"})}),". But we will talk about other variants too. Here is a picture summarizing the most popular ones:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1716383517-screenshot-2024-05-21-at-11-16-27.png",alt:""})}),"\n",(0,o.jsxs)(t.p,{children:["If you have tokens on CEX that support Near, you can use ",(0,o.jsx)(t.a,{href:"https://doc.aurora.dev/launch-chain/forwarder/introduction",children:"Forwarder"}),", which allows you to transfer them from CEX to your Aurora address. See Binance instructions ",(0,o.jsx)(t.a,{href:"https://doc.aurora.dev/launch-chain/forwarder/how-to-use/binance",children:"here"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["For any other EVMs, you can use the ",(0,o.jsx)(t.a,{href:"https://stargate.finance/",children:"Stargate"})," (coming soon) or ",(0,o.jsx)(t.a,{href:"https://meson.fi/",children:"Meson"})," bridges. Stargate supports the Near Native USDC pool on Aurora. You can always ",(0,o.jsx)(t.a,{href:"https://aurora.plus/swap",children:(0,o.jsx)(t.em,{children:"swap you tokens on Aurora+"})}),", after bridging.",(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.br,{}),"\n","That is it! Thank you for reading us!",(0,o.jsx)(t.br,{}),"\n","If you have any questions or suggestions, please visit our ",(0,o.jsx)(t.a,{href:"https://discord.com/invite/WXfbGsSUbT",children:"Discord Community"}),"!"]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7507:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>i});var o=a(9474);const r={},s=o.createContext(r);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);