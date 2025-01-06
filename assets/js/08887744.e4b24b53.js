"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[6145],{4613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(3274),o=t(7507);const i={title:"Send transactions"},s=void 0,r={id:"build-a-dapp/frontend/transactions",title:"Send transactions",description:"In this article, we will teach you how to send transactions in Wagmi. We will re-use the project from the Connect Wallet guide",source:"@site/docs/build-a-dapp/frontend/transactions.md",sourceDirName:"build-a-dapp/frontend",slug:"/build-a-dapp/frontend/transactions",permalink:"/build-a-dapp/frontend/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/build-a-dapp/frontend/transactions.md",tags:[],version:"current",frontMatter:{title:"Send transactions"},sidebar:"developers",previous:{title:"Get account data",permalink:"/build-a-dapp/frontend/account"},next:{title:"Read contract",permalink:"/build-a-dapp/frontend/read-contract"}},c={},d=[{value:"Code Example",id:"code-example",level:2},{value:"useSendTransaction hook",id:"usesendtransaction-hook",level:2},{value:"useWaitForTransactionReceipt hook",id:"usewaitfortransactionreceipt-hook",level:2},{value:"Your transaction in Explorer",id:"your-transaction-in-explorer",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In this article, we will teach you how to send transactions in Wagmi. We will re-use the project from the ",(0,a.jsx)(n.a,{href:"/build-a-dapp/frontend/connect-wallet",children:"Connect Wallet guide"}),"\nand use the ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useSendTransaction",children:"useSendTransaction"})," and ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useWaitForTransactionReceipt",children:"useWaitForTransactionReceipt"})," hooks."]}),"\n",(0,a.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,a.jsxs)(n.p,{children:["We will focus our attention on the ",(0,a.jsx)(n.code,{children:"SendTransaction"})," component, which is essentially just an HTML Form allowing us to send some ETH to other accounts:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"dapp_eth_form",src:t(3443).A+"",width:"1198",height:"280"})}),"\n",(0,a.jsxs)(n.p,{children:['After you enter the values into it and click the "Send" button \u2013 you will get a transaction to sign in your wallet and a link to the ',(0,a.jsx)(n.a,{href:"https://explorer.testnet.aurora.dev/",children:"Explorer"}),"\nwith the transaction hash will appear below that form."]}),"\n",(0,a.jsx)(n.p,{children:"Let's take a look at the code sandbox here:"}),"\n",(0,a.jsx)("iframe",{width:"700",height:"500",src:"https://stackblitz.com/edit/vitejs-vite-muf79v?embed=1&file=src%2FApp.tsx,src%2Fcomponents%2FSendTransaction.tsx&view=editor",style:{display:"block",margin:"auto"},title:"Connect wallet",frameborder:"auto",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;\nweb-share",allowfullscreen:!0}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"usesendtransaction-hook",children:"useSendTransaction hook"}),"\n",(0,a.jsxs)(n.p,{children:["To send a transaction you will need to use ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useSendTransaction",children:"useSendTransaction"})," hook like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"[components/SendTransaction.tsx]",children:'import { useSendTransaction } from \'wagmi\';\n\nexport function YourComponent() {\n  const {\n    data: hash, // transaction hash\n    error, // used to catch some errors\n    isPending, // check if the transaction is in Pending state\n    sendTransaction, // function to call to send a transaction\n  } = useSendTransaction();\n\n  ...\n  async function submit(e: FormEvent<HTMLFormElement>) {\n    ...\n    sendTransaction({ to, value: parseEther(value) });\n  }\n\n  ...\n  return\n      //calling sendTransaction function onSubmit\n    <form className="set" onSubmit={submit}>\n      <input name="address" placeholder="Address" required />\n      <input name="value" ... required/>\n    </form>\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The main actor here is ",(0,a.jsx)(n.code,{children:"sendTransaction"})," function. You can read more about its parameters ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/core/api/actions/sendTransaction",children:"here"}),".\nYou can also pass ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/core/api/actions/sendTransaction#data",children:"data"})," argument to it to call a contract write method.\nPlease read more about how to encode that field ",(0,a.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/transactions/#the-data-field",children:"in the official Ethereum docs"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can read more about catching errors and using transaction statuses in the ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/react/guides/send-transaction",children:"official Wagmi guide"}),".\nOr just read the code example in StackBlitz widget above."]})}),"\n",(0,a.jsx)(n.h2,{id:"usewaitfortransactionreceipt-hook",children:"useWaitForTransactionReceipt hook"}),"\n",(0,a.jsxs)(n.p,{children:["After sending a transaction - we need to wait to it to be finalized or, in other words, wait for the receipt.\nThat is the moment we will want to use ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useWaitForTransactionReceipt",children:"useWaitForTransactionReceipt"})," hook."]}),"\n",(0,a.jsx)(n.p,{children:"The usage example could look like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"[components/SendTransaction.tsx]",children:"import { useWaitForTransactionReceipt } from 'wagmi';\n\nexport function YourComponent() {\n  const {\n    data: hash, // transaction hash\n    ...\n  } = useSendTransaction();\n\n  const { data: receiptData, isLoading: isConfirming, isSuccess: isConfirmed } =\n    useWaitForTransactionReceipt({\n      hash, // the hash from SendTransaction hook is used here\n    });\n\n  ...\n  return\n      //using isConfirming and isConfirmed statuses in UI to track progress\n      <>\n      {isConfirming && <div>Waiting for confirmation...</div>}\n        {isConfirmed && <div>Transaction confirmed.</div>}\n      </>\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When a transaction is accepted and included in a block you can find the receipt information in the ",(0,a.jsx)(n.a,{href:"https://wagmi.sh/react/api/hooks/useWaitForTransactionReceipt#data",children:"data"})," field."]}),"\n",(0,a.jsx)(n.h2,{id:"your-transaction-in-explorer",children:"Your transaction in Explorer"}),"\n",(0,a.jsx)(n.p,{children:"After the transaction will be processed, you will get a link to the Explorer page with all information about it:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"dapp_tx_sent",src:t(9528).A+"",width:"1676",height:"368"})}),"\n",(0,a.jsxs)(n.p,{children:["If you ",(0,a.jsx)(n.a,{href:"https://explorer.testnet.aurora.dev/tx/0x0b94a546ffc3754015e01980519763ef43428d876e4c423c2ba9c2d1ba6b2249",children:"click on it"}),", you will get an Explorer window opened in a new tab:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"dapp_explorer_sendtx",src:t(5095).A+"",width:"2444",height:"1114"})}),"\n",(0,a.jsx)(n.p,{children:"You will see all the info about the transaction there and can also track your activity there."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},3443:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dapp_eth_form-cfeb0c83dcceea285c02ce445dc87249.png"},5095:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dapp_explorer_sendtx-47c90b0c3e2dcd0de68fe2ce53809202.png"},9528:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/dapp_tx_sent-d6d1541ee0d301462e4ab57c0c5f0923.png"},7507:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(9474);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);