"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[1650],{3452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(3274),a=n(7507);const o={title:"Managing Aurora's Validator staking with 'near-cli-rs'",description:"Let's learn how to manage your staking with Near validators and claim your Aurora validator's rewards by using 'near-cli-rs'",date:"2024-05-10",authors:["slava"],tags:["tutorials"],image:"https://www.datocms-assets.com/95026/1715336122-ncrs.png"},r=void 0,i={permalink:"/blog/managing-aurora-s-validator-staking-with-near-cli-rs",editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/blog/managing-aurora-s-validator-staking-with-near-cli-rs.md",source:"@site/blog/managing-aurora-s-validator-staking-with-near-cli-rs.md",title:"Managing Aurora's Validator staking with 'near-cli-rs'",description:"Let's learn how to manage your staking with Near validators and claim your Aurora validator's rewards by using 'near-cli-rs'",date:"2024-05-10T00:00:00.000Z",tags:[{inline:!1,label:"Tutorials",permalink:"/blog/tags/tutorials",description:"Longer posts talking about the subject in detail"}],readingTime:4.93,hasTruncateMarker:!0,authors:[{name:"Slava Karkunov",title:"DevRel",socials:{x:"https://x.com/apocnab",github:"https://github.com/karkunow",linkedin:"https://www.linkedin.com/in/karkunov/"},imageURL:"https://www.datocms-assets.com/95026/1677167398-photo_2022-12-02-14-55-03.jpeg",key:"slava",page:null}],frontMatter:{title:"Managing Aurora's Validator staking with 'near-cli-rs'",description:"Let's learn how to manage your staking with Near validators and claim your Aurora validator's rewards by using 'near-cli-rs'",date:"2024-05-10",authors:["slava"],tags:["tutorials"],image:"https://www.datocms-assets.com/95026/1715336122-ncrs.png"},unlisted:!1,prevItem:{title:"How to get your tokens from Bastion contracts?",permalink:"/blog/hot-to-get-your-tokens-from-bastion-contract"},nextItem:{title:"Plugins for smart contract devs building on Near",permalink:"/blog/plugins-for-smart-contract-devs-building-on-near"}},c={authorsImageUrls:[void 0]},l=[{value:"Installing `near-cli-rs`",id:"installing-near-cli-rs",level:2},{value:"Connecting your account",id:"connecting-your-account",level:2},{value:"Staking tokens",id:"staking-tokens",level:2},{value:"Unstaking tokens",id:"unstaking-tokens",level:2},{value:"Withdrawing tokens",id:"withdrawing-tokens",level:2},{value:"Claiming on Aurora&#39;s validator",id:"claiming-on-auroras-validator",level:2},{value:"Final thoughts",id:"final-thoughts",level:2}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["In this article, we will discuss how to manage your staking on the Aurora Validator. To recap quickly, Aurora is an EVM-compatible blockchain running as an L2 on the Near Protocol. In the heart of it is an Aurora Engine smart contract. That is why every transaction on Aurora is relayed to the Near and has the corresponding Near transaction. You can read more about this ",(0,s.jsx)(t.a,{href:"/blog/convert-aurora-transaction-into-near-s-one",children:(0,s.jsx)(t.em,{children:"here"})}),". That is why Aurora doesn\u2019t have its own validators \u2013 we\u2019re just re-using the Near ones."]}),"\n",(0,s.jsxs)(t.p,{children:["In January 2023, we re-launched ",(0,s.jsx)(t.a,{href:"https://aurora.dev/blog/aurora-relaunches-its-validator",children:(0,s.jsx)(t.em,{children:"our validator"})})," with a new address, ",(0,s.jsx)(t.a,{href:"https://app.mynearwallet.com/staking/aurora.pool.near",children:(0,s.jsx)(t.em,{children:"aurora.pool.near"})}),". What is curious about it is that it gives you the rewards in AURORA tokens directly on the Near network."]}),"\n",(0,s.jsxs)(t.p,{children:["Recently, the ",(0,s.jsx)(t.a,{href:"https://near.org/blog/embracing-decentralization-whats-next-for-the-near-wallet",children:(0,s.jsx)(t.em,{children:"Near Wallet was deprecated"})})," on the 1st of January, 2024. And that has driven users to other wallets. Unfortunately, many of these don\u2019t support staking capabilities, especially with the non-standard validator as `aurora.pool.near` is."]}),"\n",(0,s.jsx)(t.p,{children:"So, based on the recent support experience, we have decided to publish a guide on how to use your terminal on your laptop or PC to manage your staking on the Aurora\u2019s Validator. Let\u2019s look into the details now!"}),"\n",(0,s.jsx)(t.h2,{id:"installing-near-cli-rs",children:"Installing `near-cli-rs`"}),"\n",(0,s.jsxs)(t.p,{children:["Near CLI is your human-friendly companion that helps to interact with Near Protocol from the terminal right away. There are multiple ways to install it, see ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-cli-rs?tab=readme-ov-file#install",children:(0,s.jsx)(t.em,{children:"here"})}),". I am using Mac, so I will choose the first option and execute in my Terminal:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"curl --proto '=https' --tlsv1.2 -LsSf https://github.com/near/near-cli-rs/releases/latest/download/near-cli-rs-installer.sh | sh \n"})}),"\n",(0,s.jsx)(t.p,{children:"You can also run it as an npm package:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-undefined",children:"npx near-cli-rs \n"})}),"\n",(0,s.jsxs)(t.p,{children:["After installation, if you execute ",(0,s.jsx)(t.code,{children:"near"})," command you should be able to see this screen:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714679129-screenshot-2024-05-02-at-20-45-17.png",alt:""})}),"\n",(0,s.jsx)(t.h2,{id:"connecting-your-account",children:"Connecting your account"}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's connect your account to the near-cli-rs. To do this, execute the near command and choose the account option, which you've seen in the previous screenshot above, using the ",(0,s.jsx)(t.code,{children:"Enter"})," key."]}),"\n",(0,s.jsxs)(t.p,{children:["You will see the next screen saying ",(0,s.jsx)(t.code,{children:"What do you want to do with an account?"}),". Choose the ",(0,s.jsx)(t.code,{children:"import-account"})," option there and press ",(0,s.jsx)(t.code,{children:"Enter"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714679473-screenshot-2024-04-26-at-12-12-20.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"You will see a screen with different import options:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714679597-screenshot-2024-05-02-at-20-52-57.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Choose one that fits you! I will try to use ",(0,s.jsx)(t.code,{children:"using-web-wallet"})," option. The browser window with ",(0,s.jsx)(t.a,{href:"https://app.mynearwallet.com/",children:"https://app.mynearwallet.com/"})," will be opened, and you will see a popup asking for your permission to connect:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714679775-screenshot-2024-04-26-at-12-13-22.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.code,{children:"Connect"})," button to approve. After that, you will need to confirm this choice by typing your full account name into the popup:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714680087-screenshot-2024-05-02-at-20-59-05.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"Then, you will get the next alert about successful authorization:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714680117-screenshot-2024-05-02-at-20-59-31.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"Now, you can go back to your terminal window, and you will see a message asking you to enter your account name again:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714680166-screenshot-2024-05-02-at-21-00-07.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Enter it there and press ",(0,s.jsx)(t.code,{children:"Enter"}),". After that, choose a keychain to store your keys. I am choosing the first option there:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714679837-screenshot-2024-04-26-at-12-14-36.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"You will get the final message that `... access key is saved in the keychain` and a console command that can replace this manual process of choosing different options in the future:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714680238-screenshot-2024-05-02-at-21-00-41.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"So, all of the things we did here could be achieved also with this command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"near account import-account using-web-wallet network-config mainnet\n"})}),"\n",(0,s.jsxs)(t.p,{children:["That is great! As you can see, ",(0,s.jsx)(t.code,{children:"near-cli-rs"})," is teaching you the terminal commands automatically while exploring it!",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.br,{}),"\n","You have added your Near account to ",(0,s.jsx)(t.code,{children:"near-cli-rs"}),", and it is now ready to be used.",(0,s.jsx)(t.br,{}),"\n","Let's try it to stake some tokens on the Aurora Validator!"]}),"\n",(0,s.jsx)(t.h2,{id:"staking-tokens",children:"Staking tokens"}),"\n",(0,s.jsx)(t.p,{children:"TLDR: to stake your tokens, you need to use the next command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"near staking delegation karkunow.near \\\n     deposit-and-stake '1 NEAR' \\\n     aurora.pool.near network-config mainnet \\\n     sign-with-keychain send\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Let's review the rest of the section to learn the details about how it works with ",(0,s.jsx)(t.code,{children:"near-cli"}),".",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.br,{}),"\n","First, make sure you know what validator you will use to stake. You can check the list of validators with this command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"near staking validator-list network-config mainnet\n"})}),"\n",(0,s.jsxs)(t.p,{children:["I, of course, will use ",(0,s.jsx)(t.code,{children:"aurora.pool.near"})," for this demo."]}),"\n",(0,s.jsxs)(t.p,{children:["To stake your tokens, start with executing the ",(0,s.jsx)(t.code,{children:"near"})," command and choosing the ",(0,s.jsx)(t.code,{children:"staking"})," option from the list:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714681089-screenshot-2024-05-02-at-21-14-10.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Now, choose ",(0,s.jsx)(t.code,{children:"delegation"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714681106-screenshot-2024-05-02-at-21-14-23.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"And type your Near account into the console and press Enter. In my case, I have it already listed, so I will just choose mine from the list:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714681129-screenshot-2024-05-02-at-21-14-38.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["After that, you need to choose ",(0,s.jsx)(t.code,{children:"deposit-and-stake"})," (not just ",(0,s.jsx)(t.code,{children:"stake"})," or ",(0,s.jsx)(t.code,{children:"stake-all"}),", these options won't work if your tokens were not deposited to the validator yet):"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715217828-screenshot-2024-05-09-at-02-19-05.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"Then, enter the amount of NEAR tokens to be staked, I am entering 1NEAR for the purpose of this demo:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715218002-screenshot-2024-05-09-at-02-15-57.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Now, type in your validator address or choose from the list (you can use the ",(0,s.jsx)(t.code,{children:"tab"})," key to autocomplete):"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715218061-screenshot-2024-05-09-at-02-16-28.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Choose the network now, I will opt for the ",(0,s.jsx)(t.code,{children:"mainnet"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715218288-screenshot-2024-05-09-at-02-16-56.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"After this, you will see your transaction formed and ready to be signed. By default, I am signing it with my keychain:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715218347-screenshot-2024-05-09-at-02-17-12.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Now, you can ",(0,s.jsx)(t.code,{children:"send"})," the transaction and execute it:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715218434-screenshot-2024-05-09-at-02-17-47.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"You will see the transaction ID and a link to the Explorer after the successful execution:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715218479-screenshot-2024-05-09-at-02-19-35.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"We can visit the Explorer link to see the details of the transaction:"}),"\n",(0,s.jsx)(t.h2,{id:"unstaking-tokens",children:"Unstaking tokens"}),"\n",(0,s.jsx)(t.p,{children:"TLDR: You just need to use the next command, which is really similar to the one used for staking:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-undefined",children:"near staking delegation karkunow.near \\\n     unstake-all \\\n     aurora.pool.near network-config mainnet \\\n     sign-with-keychain send\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you don't want to unstake all the funds, just use the ",(0,s.jsx)(t.code,{children:"unstake"})," option and enter the amount of NEAR tokens you want to get back."]}),"\n",(0,s.jsxs)(t.p,{children:["Now, let's go through a few screenshots to understand better how I got this command from the ",(0,s.jsx)(t.code,{children:"near-cli-rs"}),". As we have learned from the previous section, to manage our staking activities, we just execute:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"near staking delegation [your account here](your account here)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now, if you want to unstake your tokens \u2013 just choose the ",(0,s.jsx)(t.code,{children:"unstake-all"})," or ",(0,s.jsx)(t.code,{children:"unstake"})," option from the list:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715219903-screenshot-2024-05-09-at-02-53-21.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"After that, you will be guided through the same screens as for the staking to enter the amount, validator address, network config (mainnet or testnet), and then \u2013 sign and send it. After the execution, you will see:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715219915-screenshot-2024-05-09-at-02-52-57.png",alt:""})}),"\n",(0,s.jsxs)(t.p,{children:["Exactly the same command will be formed by ",(0,s.jsx)(t.code,{children:"near-cli-rs"})," after that process. So now, you can use this shortcut instead.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.br,{}),"\n","After unstaking, you will need to wait for the 4 epochs on Near blockchain to pass, which will take around 50-60 hours of time. And then, you will be ready to withdraw them and the associated rewards. The rewards will be automatically unlocked together with the unstaked tokens."]}),"\n",(0,s.jsx)(t.h2,{id:"withdrawing-tokens",children:"Withdrawing tokens"}),"\n",(0,s.jsx)(t.p,{children:"I won't go into details with the screenshots here. Now, we're ready just to use the commands."}),"\n",(0,s.jsx)(t.p,{children:"So, to withdraw your tokens and rewards, you need to execute this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-undefined",children:"near staking delegation karkunow.near \\\n     withdraw-all \\\n     aurora.pool.near network-config mainnet \\\n     sign-with-keychain send\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you don't want to withdraw all the funds, just use `withdraw` and enter the amount of NEAR tokens you want to withdraw."}),"\n",(0,s.jsx)(t.p,{children:"After the execution, you will see:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1714681248-screenshot-2024-05-02-at-21-17-51.png",alt:""})}),"\n",(0,s.jsx)(t.h2,{id:"claiming-on-auroras-validator",children:"Claiming on Aurora's validator"}),"\n",(0,s.jsxs)(t.p,{children:["Aurora's validator allows you to farm the AURORA tokens instead of NEAR by staking NEAR on it. It is based ",(0,s.jsx)(t.a,{href:"https://github.com/referencedev/staking-farm/",children:"on this smart contract"}),". That is the reason why you need to use another way to claim these rewards in AURORA tokens. Can we do it with ",(0,s.jsx)(t.code,{children:"near-cli-rs"}),"? Yes! Let's see how it is done.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.br,{}),"\n","I will use two variables to track the staking pool and account:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"export STAKINGCONTRACT=aurora.pool.near && \\\nexport MYACCOUNT=karkunow.near\n"})}),"\n",(0,s.jsx)(t.p,{children:"To track how much tokens you have right now in staking you should execute:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-undefined",children:"near contract call-function as-read-only aurora.pool.near \\\n     'get_unclaimed_reward' json-args \\\n     '{\"account_id\":\"'${MYACCOUNT}'\", \"farm_id\":0}' \\\n      network-config mainnet now\n"})}),"\n",(0,s.jsx)(t.p,{children:"You will see the something similar to the next screen:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715334843-screenshot-2024-05-10-at-10-25-15.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"The value will be in Wei, so you need to convert it to get the real value of 0.0032 AURORA by multiplying it with 10^-18."}),"\n",(0,s.jsxs)(t.p,{children:["To claim your rewards you need to call the ",(0,s.jsx)(t.code,{children:"claim"})," method on ",(0,s.jsx)(t.code,{children:"aurora.pool.near"})," contract:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-undefined",children:"near contract call-function as-transaction aurora.pool.near \\\n     'claim' json-args \\\n     '{\"account_id\": \"'${MYACCOUNT}'\", \\\n       \"token_id\": \"aaaaaa20d9e0e2461697782ef11675f668207961.factory.bridge.near\"}' \\\n     prepaid-gas '100.0 Tgas' attached-deposit '1 yoctoNEAR' \\\n     sign-as karkunow.near /\n     network-config mainnet /\n     sign-with-keychain / \n     send\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We're passing the account and NEP-141 AURORA token address to the contract's ",(0,s.jsx)(t.code,{children:"claim"})," method. Also we attach 100TGas of gas and deposit 1 yoctoNear to it."]}),"\n",(0,s.jsx)(t.p,{children:"After the execution, you will get the transaction hash, which you can now track in the explorer:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.datocms-assets.com/95026/1715335148-screenshot-2024-05-10-at-10-58-39.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"That is it! You claimed your rewards from the Aurora Validator."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to dive deeper, you can read more docs about the ",(0,s.jsx)(t.code,{children:"aurora.pool.near"})," methods ",(0,s.jsx)(t.a,{href:"https://github.com/referencedev/staking-farm/blob/master/HowTo.md",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"final-thoughts",children:"Final thoughts"}),"\n",(0,s.jsxs)(t.p,{children:["Thank you for reading the article! We have learned a lot today!",(0,s.jsx)(t.br,{}),"\n","We hope that ",(0,s.jsx)(t.code,{children:"near-cli-rs"})," will be an indispensable tool for you while working with the Near ecosystem and that it will make it easier for you to interact with the blockchain.",(0,s.jsx)(t.br,{}),"\n","See you in the next articles!"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7507:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(9474);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);