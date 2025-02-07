"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[3705],{9614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var s=n(4629),o=n(3274),r=n(7507);const a={title:"How to get USDC tokens on Aurora testnet",description:"While developing your smart contracts on Aurora, there are situations when you will need to get native Ethereum ERC-20 tokens on your testnet account \u2013 let\u2019s find out how to get these by using the USDC token as an example",date:"2023-07-28",authors:["olga"],tags:["tips_and_tricks"],image:"https://www.datocms-assets.com/95026/1690542624-usdc.png"},i=void 0,c={authorsImageUrls:[void 0]},h=[{value:"Plan for getting USDC tokens on Aurora testnet",id:"plan-for-getting-usdc-tokens-on-aurora-testnet",level:2},{value:"USDC tokens accounts",id:"usdc-tokens-accounts",level:2},{value:"Get USDC token on Ethereum",id:"get-usdc-token-on-ethereum",level:2},{value:"Transfer USDC tokens to Aurora",id:"transfer-usdc-tokens-to-aurora",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"When you develop a contract, quite often you need ERC-20 tokens for testing. If your contract is rather small and doesn't use cross-contract calls, most likely, you don't need official USDC tokens or any other specific tokens. In that case, the best solution is just to take the standard ERC-20 contract, deploy it, and mint as many test tokens as you wish."}),"\n",(0,o.jsx)(t.p,{children:"However, sometimes the easier solution for testing can be to get official testing tokens. For example, if your contract is use difficult cross-contract calls and dependencies contracts are already deployed on testnet and support only limited numbers of tokens. When I am testing RainbowBridge during development I use the USDC tokens on testnet."}),"\n",(0,o.jsx)(t.p,{children:"In this article, I will explain how to get official native Ethereum ERC-20 tokens on your Aurora testnet account in the example of USDC tokens. This method will work with other popular native Ethereum ERC-20 as well, and it will be clear how to get these tokens also in Goerli Ethereum and in Near testnet."}),"\n",(0,o.jsx)(t.h2,{id:"plan-for-getting-usdc-tokens-on-aurora-testnet",children:"Plan for getting USDC tokens on Aurora testnet"}),"\n",(0,o.jsx)(t.p,{children:"For getting USDC tokens, we're going to use the following plan:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Create an account in MetaMask for the Ethereum Goerli network and Aurora testnet"}),"\n",(0,o.jsx)(t.li,{children:"Mint Ether for your Ethereum account"}),"\n",(0,o.jsx)(t.li,{children:"Swap Ether to the USDC tokens in the Ethereum network"}),"\n",(0,o.jsx)(t.li,{children:"Transfer USDC tokens from Ethereum to Aurora by using Rainbow Bridge"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The instructions for steps 1 and 2 you can find in article ",(0,o.jsx)(t.a,{href:"/blog/getting-started-with-aurora",children:'"Getting started with Aurora"'}),', so I will not describe them here. For the 1 step see section "Creating an account on the Aurora testnet using MetaMask", for the 2 step see section "Obtaining AuroraEth on the testnet" -> "The second method: transfer from Ethereum".']}),"\n",(0,o.jsx)(t.p,{children:"I assume that you already have an account in MetaMask for both Goerli Ethereum network and Aurora testnet and also you have some Ether in Goerli Ethereum network."}),"\n",(0,o.jsx)(t.h2,{id:"usdc-tokens-accounts",children:"USDC tokens accounts"}),"\n",(0,o.jsx)(t.p,{children:"There can be a large number of accounts for USDC on the testnets. Moreover, you can take a USDC token contract and deploy it on your own. We are interested in the official deployment of USDC tokens on Goerli Ethereum and the official wrappers of this token on Aurora and Near."}),"\n",(0,o.jsxs)(t.p,{children:["Official USDC address on Goerli Ethereum: ",(0,o.jsx)(t.a,{href:"https://goerli.etherscan.io/token/0x07865c6e87b9f70255377e024ace6630c1eaa37f",children:"0x07865c6E87B9F70255377e024ace6630C1Eaa37F"})]}),"\n",(0,o.jsxs)(t.p,{children:["For search the addresses on the Near and Aurora testnet networks and check that address is supported by Rainbow Bridge you can go to ",(0,o.jsx)(t.a,{href:"https://testnet.rainbowbridge.app/deploy",children:"https://testnet.rainbowbridge.app/deploy"})," , write the address of the USDC token in the search and click the ",(0,o.jsx)(t.code,{children:"Find Token"})," button:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544553-screenshot-2023-07-28-at-12-40-45.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:"You will see the query result:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690545689-screenshot-2023-07-28-at-13-01-18.png",alt:""})}),"\n",(0,o.jsxs)(t.p,{children:["As we can see from the image above, the address on the NEAR is: ",(0,o.jsx)(t.code,{children:"07865c6e87b9f70255377e024ace6630c1eaa37f.factory.goerli.testnet"})]}),"\n",(0,o.jsxs)(t.p,{children:["And the address on the Aurora is: ",(0,o.jsx)(t.code,{children:"0x901fb725c106e182614105335ad0e230c91b67c8"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WARNING:"})," Some sites can mint USDC tokens, but with a different address, so you need to double-check the address of minted tokens."]}),"\n",(0,o.jsxs)(t.p,{children:["This ",(0,o.jsx)(t.a,{href:"https://github.com/aurora-is-near/bridge-assets/tree/master/tokens",children:"repo"})," also contains the list of tokens supported by the Rainbow Bridge, however this list is not full for the testnets, for example, the USDC tokens are not included."]}),"\n",(0,o.jsx)(t.h2,{id:"get-usdc-token-on-ethereum",children:"Get USDC token on Ethereum"}),"\n",(0,o.jsx)(t.p,{children:"We have the Goerli Ethereum account and some GoerliETH. Let\u2019s exchange some Ether for USDC tokens! For swapping, we're going to use Uniswap."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"1. Open Uniswap site:"})," ",(0,o.jsx)(t.a,{href:"https://app.uniswap.org/#/swap",children:"https://app.uniswap.org/#/swap"})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2. Connect to Goerli Network."})," It can look like it doesn\u2019t support testnet network, but it actually support it, just it is not clear from the web interface."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Click the ",(0,o.jsx)(t.code,{children:"Connect"})," button. Choose MetaMask and connect to your account."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1689675168-uniswapconnect.jpg",alt:""})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Switch on ",(0,o.jsx)(t.code,{children:"Show testnets"})," option on the Uniswap site:"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544253-screenshot-2023-07-28-at-12-35-32.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544262-screenshot-2023-07-28-at-12-35-41.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544274-screenshot-2023-07-28-at-12-35-54.png",alt:""})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Change the network to Goerli Testnet."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544545-screenshot-2023-07-28-at-12-39-49.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"3. Swap GoerliEth into USDC:"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Click ",(0,o.jsx)(t.code,{children:"Select token"}),". Yes, you doesn\u2019t see the USDC tokens in the list. It is Ok, don\u2019t worry:"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544771-screenshot-2023-07-28-at-12-45-29.png",alt:""})}),"\n",(0,o.jsxs)(t.p,{children:["In the search field write ",(0,o.jsx)(t.code,{children:"USDC"})," and select the ",(0,o.jsx)(t.code,{children:"USD Coin"})," from the list. For some tokens, even searching by the token's name doesn't help. In that case, try to use the ",(0,o.jsx)(t.strong,{children:"token's address"})," in the search."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544783-screenshot-2023-07-28-at-12-45-51.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544794-screenshot-2023-07-28-at-12-45-57.png",alt:""})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Put some small amount of ETH in first line. 0.01 G\xf6ETH will be enough."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544849-screenshot-2023-07-28-at-12-44-59.png",alt:""})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Click Swap"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544873-screenshot-2023-07-28-at-12-45-06.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:'Congratulations! Now you get a lot of test USDC in your Ethereum account. You can check, that you receive tokens in MetaMask and check the address of the received tokens. If you don\u2019t see the USDC tokens click "Import tokens" in MetaMask and put the address of USDC token.'}),"\n",(0,o.jsx)(t.h2,{id:"transfer-usdc-tokens-to-aurora",children:"Transfer USDC tokens to Aurora"}),"\n",(0,o.jsx)(t.p,{children:"Now the easy part: transfer USDC tokens from Ethereum to Aurora."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Open the Rainbow Bridge for testnet: ",(0,o.jsx)(t.a,{href:"https://testnet.rainbowbridge.app/",children:"https://testnet.rainbowbridge.app/"})]}),"\n",(0,o.jsx)(t.li,{children:"Click New Transfer:"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690544972-screenshot-2023-07-28-at-12-48-40.png",alt:""})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Connect to your accounts on Ethereum and on Aurora:"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690545004-screenshot-2023-07-28-at-12-48-57.png",alt:""})}),"\n",(0,o.jsxs)(t.p,{children:["And now, choose USDC.e tokens and amount for transferring, and click ",(0,o.jsx)(t.code,{children:"Continue"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1690545027-screenshot-2023-07-28-at-12-49-11.png",alt:""})}),"\n",(0,o.jsxs)(t.p,{children:["Done! Now you need to wait ",(0,o.jsx)(t.em,{children:"20 minutes"})," before you get your test USDC on Aurora."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Remark"}),": you also can transfer the USDC tokens or other tokens to your Near accounts in the same way."]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(t.p,{children:"In this short article, we learned how to get a lot of USDC tokens on Ethereum, Near and Aurora. This method is also applicable to other popular Ethereum ERC-20 tokens. Now you can use these tokens to test your contracts. Happy development and testing!"}),"\n",(0,o.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Article with instructions on how to install MetaMask and mint Ether: ",(0,o.jsx)(t.a,{href:"/blog/getting-started-with-aurora",children:"/blog/getting-started-with-aurora"})]}),"\n",(0,o.jsxs)(t.li,{children:["USDC tokens address on Ethereum Goerli: ",(0,o.jsx)(t.a,{href:"https://goerli.etherscan.io/address/0x07865c6e87b9f70255377e024ace6630c1eaa37f",children:"https://goerli.etherscan.io/address/0x07865c6e87b9f70255377e024ace6630c1eaa37f"})]}),"\n",(0,o.jsxs)(t.li,{children:["Uniswap: ",(0,o.jsx)(t.a,{href:"https://app.uniswap.org/#/swap",children:"https://app.uniswap.org/#/swap"})]}),"\n",(0,o.jsxs)(t.li,{children:["Rainbow Bridge For Testnet: ",(0,o.jsx)(t.a,{href:"https://testnet.rainbowbridge.app/",children:"https://testnet.rainbowbridge.app/"})]}),"\n",(0,o.jsxs)(t.li,{children:["Checking the supported tokens for Rainbow Bridge on Testnet: ",(0,o.jsx)(t.a,{href:"https://testnet.rainbowbridge.app/deploy",children:"https://testnet.rainbowbridge.app/deploy"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},7507:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(9474);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},4629:e=>{e.exports=JSON.parse('{"permalink":"/blog/how-to-get-usdc-tokens-on-aurora-testnet","editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/blog/how-to-get-usdc-tokens-on-aurora-testnet.md","source":"@site/blog/how-to-get-usdc-tokens-on-aurora-testnet.md","title":"How to get USDC tokens on Aurora testnet","description":"While developing your smart contracts on Aurora, there are situations when you will need to get native Ethereum ERC-20 tokens on your testnet account \u2013 let\u2019s find out how to get these by using the USDC token as an example","date":"2023-07-28T00:00:00.000Z","tags":[{"inline":false,"label":"Tips & Tricks","permalink":"/blog/tags/tips_and_tricks","description":"Short posts about tech for devs on Aurora"}],"readingTime":3.05,"hasTruncateMarker":true,"authors":[{"name":"Olga Kunyavskaya","title":"Bridge Engineer","imageURL":"https://www.datocms-assets.com/95026/1683043237-t025c6kc9px-u03dl8hkg1w-fe48e17d7ba2-512.png","key":"olga","page":null}],"frontMatter":{"title":"How to get USDC tokens on Aurora testnet","description":"While developing your smart contracts on Aurora, there are situations when you will need to get native Ethereum ERC-20 tokens on your testnet account \u2013 let\u2019s find out how to get these by using the USDC token as an example","date":"2023-07-28","authors":["olga"],"tags":["tips_and_tricks"],"image":"https://www.datocms-assets.com/95026/1690542624-usdc.png"},"unlisted":false,"prevItem":{"title":"Turning Smart Contracts into Indexers","permalink":"/blog/turning-smart-contracts-into-indexers"},"nextItem":{"title":"EVM gas vs. Near gas on Aurora","permalink":"/blog/evm-gas-near-gas-on-aurora"}}')}}]);