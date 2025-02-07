"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[9944],{664:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var t=r(7205),o=r(3274),a=r(7507);const s={title:"Spinning up your own Aurora node",description:"Learn the details of starting your own Aurora node using the Standalone RPC repo",date:"2023-05-26",authors:["oleksii_krasynskyi"],tags:["tutorials"],image:"https://www.datocms-assets.com/95026/1685097397-node.png"},i=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Who needs it?",id:"who-needs-it",level:3},{value:"Relayer Components",id:"relayer-components",level:3},{value:"Standalone RPC",id:"standalone-rpc",level:3},{value:"Generate NEAR account and signing key",id:"generate-near-account-and-signing-key",level:3},{value:"Generating configuration files for relayer, refiner, and nginx",id:"generating-configuration-files-for-relayer-refiner-and-nginx",level:3},{value:"Nearcore Mode",id:"nearcore-mode",level:3},{value:"Nearlake Mode",id:"nearlake-mode",level:3},{value:"Starting relayer",id:"starting-relayer",level:3},{value:"Conclusions",id:"conclusions",level:3}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["At Aurora Labs, we encourage everyone to use ",(0,o.jsx)(n.a,{href:"https://mainnet.aurora.dev",children:"mainnet.aurora.dev"})," or ",(0,o.jsx)(n.a,{href:"https://testnet.aurora.dev",children:"testnet.aurora.dev"})," to build and deploy their apps. Those endpoints are scalable and reliable. When registering at ",(0,o.jsx)(n.a,{href:"https://aurora.plus/",children:"https://aurora.plus"})," you can even get a bunch of free transactions (soon through the Aurora Pass wallet)."]}),"\n",(0,o.jsxs)(n.p,{children:["That said, many dapps that are deployed on Aurora rely on running their own JSON-RPC Etherium-compatible server. Here we call this server \u2013 a relayer. You've probably already read the details about our new version of it in ",(0,o.jsx)(n.a,{href:"/blog/aurora-relayer-2-0",children:"How the Aurora Relayer 2.0 works?"})]}),"\n",(0,o.jsx)(n.h3,{id:"who-needs-it",children:"Who needs it?"}),"\n",(0,o.jsx)(n.p,{children:"Running your own relayer has benefits since you get full control over both hardware and software. Additionally, you will be the one paying for all the transactions in NEAR, thus you are free to charge your users with whatever gas price you desire. Or, maybe, if for some reason you feel like a good samaritan, do not charge for transactions at all."}),"\n",(0,o.jsx)(n.p,{children:"There is another category of users who might consider running their own setup, and those are developers or newcomers who want to understand a bit more, or even contribute. So, what does it take to run your own relayer? First, we need to understand what is the relayer, and to do that we will take a look at what it consists of."}),"\n",(0,o.jsx)(n.h3,{id:"relayer-components",children:"Relayer Components"}),"\n",(0,o.jsx)(n.p,{children:"The Relayer consists of three components:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"a JSON-RPC server"})})," compatible with Ethereum's ",(0,o.jsx)(n.a,{href:"https://eth.wiki/json-rpc/API",children:"Web3 API"})," for ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/aurora-engine",children:"Aurora Engine"})," instances deployed on the NEAR Protocol."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Aurora Refiner"})})," which allows users to download all NEAR Blocks and produce Ethereum-compatible blocks, transactions, and logs."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Indexer"})})," which continuously reads JSON files generated by ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/borealis-engine-lib",children:"Aurora Refiner"})," and populates a database, that is used by the JSON-RPC server to serve data."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://www.datocms-assets.com/95026/1680267260-relayer-20.png",alt:""})}),"\n",(0,o.jsxs)(n.p,{children:["This means that in order to deploy the relayer, we need to deploy these three components. JSON-RPC server and Indexer is a single project written in Go (you can check all the source code of the Relayer ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/relayer2-public",children:"here"}),"). While ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/borealis-engine-lib",children:"Aurora Refiner"})," is a separate one written in Rust."]}),"\n",(0,o.jsxs)(n.p,{children:["Although there is documentation on how to run and deploy them manually, for the ease of use we have developed an ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/standalone-rpc",children:"installation script"})," that greatly simplifies the whole process. Now let's take a closer look at it."]}),"\n",(0,o.jsx)(n.h3,{id:"standalone-rpc",children:"Standalone RPC"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.br,{}),"\n","This installation script is called ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/standalone-rpc",children:"standalone-rpc"}),". It has multiple steps and in this blog post, I would like to explain what it actually does and what options on running relayer do you have."]}),"\n",(0,o.jsx)(n.p,{children:"First, we can split the whole process into a set of steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Generate NEAR account and signing key."}),"\n",(0,o.jsx)(n.li,{children:"Generating configuration files for relayer, refiner, and nginx."}),"\n",(0,o.jsx)(n.li,{children:"Download the latest database snapshot for relayer (optional, but recommended)."}),"\n",(0,o.jsxs)(n.li,{children:["Download the latest NEAR Node Data Snapshot and configuration, that is required to correctly run the refiner in ",(0,o.jsx)(n.code,{children:"nearcore"})," mode."]}),"\n",(0,o.jsxs)(n.li,{children:["Set up AWS credentials if instead of ",(0,o.jsx)(n.code,{children:"nearcore"})," mode you decided to run the refiner in ",(0,o.jsx)(n.code,{children:"nearlake"})," mode."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Download and start four docker containers: ",(0,o.jsx)(n.code,{children:"relayer"}),", ",(0,o.jsx)(n.code,{children:"refiner"}),", ",(0,o.jsx)(n.code,{children:"watchtower"}),", and ",(0,o.jsx)(n.code,{children:"nginx"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If some or all of those steps are unclear \u2013 don't worry, we will dig into each of those steps in a moment."}),"\n",(0,o.jsx)(n.h3,{id:"generate-near-account-and-signing-key",children:"Generate NEAR account and signing key"}),"\n",(0,o.jsxs)(n.p,{children:["When running your own relayer, if you intend to send a transaction via ",(0,o.jsx)(n.code,{children:"eth_sendRawTransaction"})," this transaction will eventually be executed on NEAR. This means that some NEAR will have to be charged from your account for the execution. For the relayer to charge your account, this account needs to be generated first, which is exactly what happens during this step."]}),"\n",(0,o.jsxs)(n.p,{children:["Keep in mind that you have to send some NEAR to that account, so it can be properly charged for transactions. You can also use your own NEAR account and signing key and put them into ",(0,o.jsx)(n.strong,{children:"srpc2/config/relayer/relayer.json"})," instead of a pre-generated one. If you already have a NEAR account, the simplest way to generate a signing key would be to use ",(0,o.jsx)(n.a,{href:"https://docs.near.org/tools/near-cli",children:"near-cli"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"generating-configuration-files-for-relayer-refiner-and-nginx",children:"Generating configuration files for relayer, refiner, and nginx"}),"\n",(0,o.jsx)(n.p,{children:"Before diving into the configuration, let's discuss what are the different options to run the Relayer. It's pretty straightforward."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["You can run ",(0,o.jsx)(n.code,{children:"relayer"})," in mainnet or testnet mode."]}),"\n",(0,o.jsxs)(n.li,{children:["You can use ",(0,o.jsx)(n.code,{children:"nearlake"})," or ",(0,o.jsx)(n.code,{children:"nearcore"})," as a source of data for the ",(0,o.jsx)(n.code,{children:"refiner"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Choosing to run the mainnet or testnet is quite self-explanatory. But the second option is not."}),"\n",(0,o.jsx)(n.h3,{id:"nearcore-mode",children:"Nearcore Mode"}),"\n",(0,o.jsxs)(n.p,{children:["In this mode ",(0,o.jsx)(n.code,{children:"refiner"})," is running a ",(0,o.jsx)(n.code,{children:"nearcore"})," under the hood, that is constantly synced with the network. It will constantly extract NEAR blocks from the database, then refine them into Aurora blocks and feed them to the Indexer. If you would like to reindex the whole Aurora network starting from genesis, without using any data snapshots \u2013 this is the way to do that. Keep in mind that it will take many weeks, or even months to reindex the whole network, and it will use up to 6TB of storage."]}),"\n",(0,o.jsxs)(n.p,{children:["You have the option to download ",(0,o.jsx)(n.a,{href:"https://near-nodes.io/intro/node-data-snapshots",children:"near data snapshot"})," to fasten the process, though it will still take several weeks to refine all of the NEAR blocks into Aurora blocks."]}),"\n",(0,o.jsxs)(n.p,{children:["The recommended approach, that is being used in this ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/standalone-rpc",children:"installation script,"})," is to download the Relayer Database snapshot and NEAR RPC data snapshot. NEAR RPC data snapshot has data for the last two weeks and is made every 12 hours. This is more than enough to quickly sync with the network and catch up with the HEAD; storage wise it is somewhere around ~800 GB."]}),"\n",(0,o.jsx)(n.h3,{id:"nearlake-mode",children:"Nearlake Mode"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"refiner"})," can also be run in ",(0,o.jsx)(n.code,{children:"nearlake"})," mode. This mode does not require you to download any NEAR data snapshots, but instead relies on ",(0,o.jsx)(n.a,{href:"https://docs.near.org/concepts/advanced/near-lake-framework",children:"Near Lake Framework."})," Lake Framework relies on the data being dumped to AWS S3, the Refiner can download it and use it as a source."]}),"\n",(0,o.jsxs)(n.p,{children:["This approach will save most of the storage for you and is the fastest way to get started. It does require you to set up AWS credentials which is a requirement for using ",(0,o.jsx)(n.a,{href:"https://docs.near.org/concepts/advanced/near-lake-framework",children:"Near Lake Framework."})," There is a quick ",(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=GsF7I93K-EQ&t=277s",children:"guide"})," on how to do that and it shouldn't take a lot of time."]}),"\n",(0,o.jsx)(n.h3,{id:"starting-relayer",children:"Starting relayer"}),"\n",(0,o.jsx)(n.p,{children:"The final step of the whole process is to download docker containers and start them. It will be done for you. The containers that will be running are:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nearaurora/srpc2-relayer"})," \u2013 JSON RPC server and indexer."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nearaurora/srpc2-refiner"})," \u2013 ",(0,o.jsx)(n.a,{href:"https://github.com/aurora-is-near/borealis-engine-lib",children:"Aurora Refiner"})," ."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nearaurora/reverseproxy"})," \u2013 Nginx (used to isolate backend server from the outer world, redirects requests to the relayer container)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"containerrr/watchtower"})," \u2013 service that will check on any updates, and will update images accordingly."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"conclusions",children:"Conclusions"}),"\n",(0,o.jsxs)(n.p,{children:["We have presented a comprehensive overview of the key components of the Relayer and the specific user needs it fulfills. Furthermore, we have thoroughly explored the process of setting up your Aurora RPC Node, focusing on the configuration of the standalone-rpc script, and emphasized the significance of data snapshots in expediting this setup.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.br,{}),"\n","Thanks for reading! Stay tuned with the updates!"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7507:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(9474);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}},7205:e=>{e.exports=JSON.parse('{"permalink":"/blog/spinning-up-your-own-aurora-node","editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/blog/spinning-up-your-own-aurora-node.md","source":"@site/blog/spinning-up-your-own-aurora-node.md","title":"Spinning up your own Aurora node","description":"Learn the details of starting your own Aurora node using the Standalone RPC repo","date":"2023-05-26T00:00:00.000Z","tags":[{"inline":false,"label":"Tutorials","permalink":"/blog/tags/tutorials","description":"Longer posts talking about the subject in detail"}],"readingTime":3.8666666666666667,"hasTruncateMarker":true,"authors":[{"name":"Oleksii Krasynskyi","title":"Head of Infrastructure","imageURL":"https://www.datocms-assets.com/95026/1726603153-screenshot-2024-09-17-at-20-59-04.png","key":"oleksii_krasynskyi","page":null}],"frontMatter":{"title":"Spinning up your own Aurora node","description":"Learn the details of starting your own Aurora node using the Standalone RPC repo","date":"2023-05-26","authors":["oleksii_krasynskyi"],"tags":["tutorials"],"image":"https://www.datocms-assets.com/95026/1685097397-node.png"},"unlisted":false,"prevItem":{"title":"Getting started with Aurora","permalink":"/blog/getting-started-with-aurora"},"nextItem":{"title":"Aurora Chains: Code Overview","permalink":"/blog/aurora-chains-code-overview"}}')}}]);