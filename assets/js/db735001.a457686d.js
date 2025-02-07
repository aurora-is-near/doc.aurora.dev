"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[2449],{3594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"build-a-dapp/contracts/counter","title":"Simple Counter","description":"In this guide you will write one of the simplest smart contracts possible and learn how to deploy and interact with it.","source":"@site/docs/build-a-dapp/contracts/counter.md","sourceDirName":"build-a-dapp/contracts","slug":"/build-a-dapp/contracts/counter","permalink":"/build-a-dapp/contracts/counter","draft":false,"unlisted":false,"editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/build-a-dapp/contracts/counter.md","tags":[],"version":"current","frontMatter":{"title":"Simple Counter"},"sidebar":"developers","previous":{"title":"Get ETH for gas","permalink":"/build-a-dapp/getting-eth"},"next":{"title":"ERC-20 Token","permalink":"/build-a-dapp/contracts/erc-20"}}');var o=t(3274),a=t(7507);const i={title:"Simple Counter"},c=void 0,s={},l=[{value:"Create project",id:"create-project",level:2},{value:"Configure project",id:"configure-project",level:2},{value:"Interact with contract",id:"interact-with-contract",level:2},{value:"Switch a network",id:"switch-a-network",level:2},{value:"More materials",id:"more-materials",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In this guide you will write one of the simplest smart contracts possible and learn how to deploy and interact with it.\nWe will store just one integer value inside of it and increment it:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-solidity",metastring:'title="contracts/Incrementer.sol"',children:"// SPDX-License-Identifier: MIT\npragma solidity 0.8;\n\ncontract Incrementer {\n    uint counter;\n\n    constructor(uint startValue) {\n        counter = startValue;\n    }\n\n    function increment() public {\n        counter = counter + 1;\n    }\n\n    function getCounter() public view returns (uint) {\n        return counter;\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"To deploy it to the Aurora Testnet you need to follow the steps below."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You can find the code of the whole project in ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/aurora-examples/blob/main/hardhat/incrementer-example/",children:"GitHub repository"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"create-project",children:"Create project"}),"\n",(0,o.jsx)(n.p,{children:"Open your favorite terminal application and clone the repo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:aurora-is-near/aurora-examples.git\ncd hardhat/incrementer-example\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configure-project",children:"Configure project"}),"\n",(0,o.jsxs)(n.p,{children:["Add your Aurora Private key (from MetaMask or other Web3 wallet) to ",(0,o.jsx)(n.code,{children:"__.env__"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ echo "AURORA_PRIVATE_KEY=YOUR_AURORA_PRIVATE_KEY_HERE" >> .env\n'})}),"\n",(0,o.jsx)(n.h2,{id:"interact-with-contract",children:"Interact with contract"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["To use the commands below you will need Node.js and ",(0,o.jsx)(n.code,{children:"yarn"})," to be installed. Please follow the ",(0,o.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"instructions here"})," to install Node.js.\nThen, install ",(0,o.jsx)(n.code,{children:"yarn"})," with ",(0,o.jsx)(n.code,{children:"npm install --global yarn"})," or read more ",(0,o.jsx)(n.a,{href:"https://classic.yarnpkg.com/lang/en/docs/install/",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"To deploy the contract to Testnet run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ make deploy\n"})}),"\n",(0,o.jsx)(n.p,{children:"Take the address of the deployed Incrementer from the output to use it in the next steps."}),"\n",(0,o.jsx)(n.p,{children:"To get the current counter value run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ make get-counter INCREMENTER_ADDRESS=YOUR_INCREMENTER_ADDRESS_HERE\n"})}),"\n",(0,o.jsx)(n.p,{children:"To increment the current counter value run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ make increment-counter INCREMENTER_ADDRESS=YOUR_INCREMENTER_ADDRESS_HERE\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can observe your transactions by using ",(0,o.jsx)(n.a,{href:"https://dev.aurora.dev/ecosystem/block-explorer",children:"Aurora Block Explorer"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"switch-a-network",children:"Switch a network"}),"\n",(0,o.jsxs)(n.p,{children:["Optionally you can specify any of the following networks for any command: ",(0,o.jsx)(n.strong,{children:"testnet_aurora"}),", ",(0,o.jsx)(n.strong,{children:"mainnet_aurora"}),", ",(0,o.jsx)(n.strong,{children:"ropsten"})," like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ make deploy NETWORK=mainnet_aurora\n"})}),"\n",(0,o.jsx)(n.h2,{id:"more-materials",children:"More materials"}),"\n",(0,o.jsxs)(n.p,{children:["You can find a more detailed tutorial with a similar Incrementer example in the ",(0,o.jsx)(n.a,{href:"/blog/getting-started-with-aurora",children:"Getting Started with Aurora article"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7507:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(9474);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);