"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[6883],{488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(3274),o=t(7507);const s={title:"Introduction"},a="Aurora Pass",i={id:"onboard/introduction",title:"Introduction",description:"Aurora Pass is a mobile cryptocurrency wallet that makes your interactions with Aurora or any of the Aurora Chains easier than ever, whether transferring your assets or using a DApp.",source:"@site/docs/onboard/introduction.md",sourceDirName:"onboard",slug:"/onboard/introduction",permalink:"/onboard/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/onboard/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"developers",previous:{title:"Usage examples",permalink:"/xcc/near-to-aurora/usage-examples"},next:{title:"Integrate Wallet Connect",permalink:"/onboard/wallet-connect"}},l={},c=[{value:"Key Features",id:"key-features",level:2},{value:"Integration",id:"integration",level:2},{value:"Promo Widget",id:"promo-widget",level:2},{value:"Free transactions",id:"free-transactions",level:2},{value:"Security",id:"security",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"aurora-pass",children:"Aurora Pass"})}),"\n",(0,r.jsx)(n.p,{children:"Aurora Pass is a mobile cryptocurrency wallet that makes your interactions with Aurora or any of the Aurora Chains easier than ever, whether transferring your assets or using a DApp.\nIt also helps onboard your users, even ones unfamiliar with the Web3 ecosystem."}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Simple and user-friendly interface."}),"\n",(0,r.jsx)(n.li,{children:"50 free transactions for each user per month."}),"\n",(0,r.jsx)(n.li,{children:"Secure and non-custodial wallet."}),"\n",(0,r.jsx)(n.li,{children:"Send and receive assets on Aurora Mainnet and Aurora Chains."}),"\n",(0,r.jsx)(n.li,{children:"View your portfolio balances and recent transactions."}),"\n",(0,r.jsx)(n.li,{children:"Connect to DApps via WalletConnect v2."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,r.jsxs)(n.p,{children:["Connecting Aurora Pass to a DApp is done like every other EVM wallet implementing a ",(0,r.jsx)(n.a,{href:"https://docs.walletconnect.com/",children:"WalletConnect v2"}),".\nSee more info on configuring or adding WalletConnect ",(0,r.jsx)(n.a,{href:"/onboard/wallet-connect",children:"here"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We propose two options for displaying the wallets for your users: Web3Modal or Rainbow Kit. You can follow the step-by-step integration examples here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/onboard/wallets/web3modal#integrate-web3modal",children:"Web3Modal Example"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/onboard/wallets/rainbowkit#integrate-rainbowkit",children:"RainbowKit Example"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"That will help you to understand better how the different components work together. E.g., wallet modals, promo widgets and UI frameworks."}),"\n",(0,r.jsx)(n.h2,{id:"promo-widget",children:"Promo Widget"}),"\n",(0,r.jsxs)(n.p,{children:["Add a ",(0,r.jsx)(n.a,{href:"/onboard/promo-widget",children:"Promo Widget"})," to your DApp to allow new users to install Aurora Pass quickly.\nIt will direct a user to download the Aurora Pass application on a mobile phone in the most convenient way."]}),"\n",(0,r.jsx)(n.p,{children:"It is optional to add it to your DApp. Otherwise, you will need to implement some other way to lead users to the installation of the wallet.\nWe advise everyone to use it as an onboarding entry point in their DApps."}),"\n",(0,r.jsx)(n.h2,{id:"free-transactions",children:"Free transactions"}),"\n",(0,r.jsx)(n.p,{children:"Aurora Pass requires a login with an email or Apple/Google auth, which will provide them with free transactions on Aurora Mainnet.\nThe basic plan for Aurora Pass users is 50 free transactions per month. This feature is achieved by using the Gasless Management feature of Aurora Chains.\nAt the same time, DApps can also pay for their users\u2019 EOA transaction fees by getting their own gasless deal using our Gasless Management product."}),"\n",(0,r.jsx)(n.p,{children:"If the monthly free transaction limit is reached or the transaction is not sponsored by a DApp, a pack of transactions can be purchased from within the Aurora Pass app.\nCurrently, only one transaction pack is available: 500 free transactions for around $4.99 (the price can depend on the country)."}),"\n",(0,r.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,r.jsx)(n.p,{children:"Aurora Pass is a non-custodial crypto wallet, meaning the user will be given a 12-word recovery seed phrase that grants them access to their assets."}),"\n",(0,r.jsx)(n.p,{children:"Users won\u2019t have to save that seed phrase on signup as it is securely saved on the device but can choose to export it anytime.\nExcluding such details provides better onboarding while also giving users the ownership of their assets in a non-custodial way."}),"\n",(0,r.jsx)(n.p,{children:"The seed phrase is the only way to recover access to the wallet in case of loss or when installing the wallet on a new device."}),"\n",(0,r.jsxs)(n.p,{children:["Using the wallet requires biometric authentication (e.g., faceID or touchID). In case it is absent, the PIN code for a device will be used.\nThe seed phrase is stored using ",(0,r.jsx)(n.a,{href:"https://docs.expo.dev/versions/latest/sdk/securestore/",children:"expo-secure-store"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"on Android, values are stored in SharedPreferences, encrypted with Android\u2019s Keystore system;"}),"\n",(0,r.jsx)(n.li,{children:"on iOS, values are stored using the keychain services."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(n.p,{children:["If you encounter any issues, please visit our ",(0,r.jsx)(n.a,{href:"/onboard/troubleshooting",children:"Troubleshooting Page"})," to find a solution.\nIn case you still have questions, please get in touch with our ",(0,r.jsx)(n.a,{href:"https://discord.gg/auroralabs",children:"Support Team"}),"\non Discord and open a support ticket there."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7507:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(9474);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);