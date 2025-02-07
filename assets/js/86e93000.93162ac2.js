"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[7590],{6726:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"dev-tools/indexers/flair","title":"Flair","description":"Real-time and historical custom data indexing for any EVM chain.","source":"@site/docs/dev-tools/indexers/flair.md","sourceDirName":"dev-tools/indexers","slug":"/dev-tools/indexers/flair","permalink":"/dev-tools/indexers/flair","draft":false,"unlisted":false,"editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/dev-tools/indexers/flair.md","tags":[],"version":"current","frontMatter":{"title":"Flair"},"sidebar":"devToolsSidebar","previous":{"title":"Covalent","permalink":"/dev-tools/indexers/covalent"},"next":{"title":"The Graph","permalink":"/dev-tools/indexers/the-graph"}}');var i=r(3274),s=r(7507);const t={title:"Flair"},l=void 0,o={},d=[{value:"Why Flair?\u200b",id:"why-flair",level:2},{value:"Features\u200b",id:"features",level:3},{value:"Getting Started\u200b",id:"getting-started",level:2},{value:"Examples\u200b",id:"examples",level:2},{value:"DeFi\u200b",id:"defi",level:3},{value:"NFT\u200b",id:"nft",level:3},{value:"Need help?\u200b",id:"need-help",level:2}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Real-time and historical custom data indexing for any EVM chain."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://flair.dev/",children:"Flair"})," offers reusable ",(0,i.jsx)(n.strong,{children:"indexing primitives"})," (such as fault-tolerant RPC ingestors, custom processors, and re-org-aware database integrations) to make it easy to receive, transform, store, and access your on-chain data."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://www.datocms-assets.com/95026/1695246362-c170f96b-c9c8-4e7c-8a4a-cc265b5a3722_3921x2148.webp",alt:""})}),"\n",(0,i.jsxs)(n.h2,{id:"why-flair",children:["Why Flair?",(0,i.jsx)(n.a,{href:"https://doc-zk-evm-git-fork-0xflair-main-infura-web.vercel.app/build-on-linea/tooling/data-indexers/flair#why-flair",children:"\u200b"})]}),"\n",(0,i.jsx)(n.p,{children:"Compared to other alternatives the main reasons are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\ud83d\ude80 Adopting ",(0,i.jsx)(n.strong,{children:"parallel and distributed processing"})," paradigm means high scalability and resiliency for your indexing stack. Instead of constrained sequential processing (e.g. Subgraph)."]}),"\n",(0,i.jsxs)(n.li,{children:["\ud83e\udde9 Focused on ",(0,i.jsx)(n.strong,{children:"primitives"}),", which means on the left you plug-in an RPC, and on the right you output the data to any destination database."]}),"\n",(0,i.jsxs)(n.li,{children:["\ud83d\ude84 Native ",(0,i.jsx)(n.strong,{children:"real-time stream processing"})," for certain data workload (such as aggregations, rollups) for things like total volume per pool, or total portfolio per user wallet."]}),"\n",(0,i.jsxs)(n.li,{children:["\u2601\ufe0f ",(0,i.jsx)(n.strong,{children:"Managed"})," cloud services avoid DevOps and irrelevant engineering costs for dApp developers."]}),"\n",(0,i.jsxs)(n.li,{children:["\ud83e\uddd1\u200d\ud83d\udcbb Avoid decentralization ",(0,i.jsx)(n.strong,{children:"overhead"})," (consensus, network hops, etc) since we believe to enable best UX for dApps reading data must be as close to the developers as possible."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"features",children:["Features",(0,i.jsx)(n.a,{href:"https://doc-zk-evm-git-fork-0xflair-main-infura-web.vercel.app/build-on-linea/tooling/data-indexers/flair#features",children:"\u200b"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2705 Listen to ",(0,i.jsx)(n.strong,{children:"any EVM chain"})," with just an RPC URL."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Free managed RPC URLs for +8 popular chains already included."}),"\n",(0,i.jsx)(n.li,{children:"Works with both websocket and https-only RPCs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2705 Track and ingest ",(0,i.jsx)(n.strong,{children:"any contract"})," for ",(0,i.jsx)(n.strong,{children:"any event topic."})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Auto-track new contracts deployed from factory contracts."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Custom processor scripts"})," with JavaScript runtime (with ",(0,i.jsx)(n.strong,{children:"Typescript"})," support)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make external API or Webhook calls to third-party or your backend."}),"\n",(0,i.jsx)(n.li,{children:"Get current or historical USD value of any ERC20 token amount of any contract address on any chain."}),"\n",(0,i.jsx)(n.li,{children:"Use any external NPM library."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2705 ",(0,i.jsx)(n.strong,{children:"Stream"})," any stored data to your destination database (Postgres, MongoDB, MySQL, Kafka, Elasticsearch, Timescale, etc)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"getting-started",children:["Getting Started",(0,i.jsx)(n.a,{href:"https://doc-zk-evm-git-fork-0xflair-main-infura-web.vercel.app/build-on-linea/tooling/data-indexers/flair#getting-started",children:"\u200b"})]}),"\n",(0,i.jsxs)(n.p,{children:["1\ufe0f\u20e3 Clone the ",(0,i.jsx)(n.a,{href:"https://github.com/flair-sdk/starter-boilerplate",children:"starter boilerplate"})," template and follow the instructions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-undefined",children:"git clone https://github.com/flair-sdk/starter-boilerplate.git\n# ... follow instructions in README.md\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Boilerplate instructions will create ",(0,i.jsx)(n.code,{children:"a new cluster"}),", generate ",(0,i.jsx)(n.code,{children:"an API Key"}),", and set up a ",(0,i.jsx)(n.code,{children:"manifest.yml"})," to index your first contract with sample custom processor scripts."]}),"\n",(0,i.jsxs)(n.p,{children:["Learn more about the ",(0,i.jsx)(n.a,{href:"https://docs.flair.dev/reference/manifest.yml",children:(0,i.jsx)(n.em,{children:"structure of manifest.yml"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"2\ufe0f\u20e3 Configure Aurora RPC nodes"}),"\n",(0,i.jsxs)(n.p,{children:["Set a unique namespace, Aurora chainId and RPC endpoint in your ",(0,i.jsx)(n.code,{children:"config"}),". Remember that you can add up to 10 RPC endpoints for resiliency."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "cluster": "dev",\n  "namespace": "my-awesome-aurora-indexing-dev",\n  "indexers": [\n    {\n      "chainId": 1313161554,\n      "enabled": true,\n      "ingestionFilterGroup": "default",\n      "processingFilterGroup": "default",\n      "sources": [\n        # Highly-recommended to have at least 1 websocket endpoint\n        "wss://mainnet.aurora.dev",\n        # You can put multiple endpoints for failover\n        "https://mainnet.aurora.dev"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["3\ufe0f\u20e3 Sync some historical data using ",(0,i.jsx)(n.a,{href:"https://docs.flair.dev/reference/backfilling",children:"backfill command"}),".",(0,i.jsx)(n.br,{}),"\n","Remember that ",(0,i.jsx)(n.code,{children:"enabled: true"})," flag in your ",(0,i.jsx)(n.code,{children:"config"})," enabled your indexer to capture data in real-time already."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'# backfill certain contracts or block ranges\npnpm flair backfill --chain 1313161554 --address \n0xb3072378821cdaFAc340bF18a0Fbf15c72FEb83B -d backward --max-blocks 10000\n# backfill for a specific block number, if you have certain events you wanna test with\npnpm flair backfill --chain 1313161554 -b 101563485\n# backfill for the recent data in the last X minute\npnpm flair backfill --chain 1313161554 --min-timestamp="30 mins ago" -d backward\n'})}),"\n",(0,i.jsxs)(n.p,{children:["4\ufe0f\u20e3 ",(0,i.jsx)(n.a,{href:"https://docs.flair.dev/#getting-started",children:"Query"})," your custom indexed data."]}),"\n",(0,i.jsxs)(n.p,{children:["5\ufe0f\u20e3 Stream the data to your ",(0,i.jsx)(n.a,{href:"https://docs.flair.dev/reference/database#your-own-database",children:"own database"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"examples",children:["Examples",(0,i.jsx)(n.a,{href:"https://doc-zk-evm-git-fork-0xflair-main-infura-web.vercel.app/build-on-linea/tooling/data-indexers/flair#examples",children:"\u200b"})]}),"\n",(0,i.jsx)(n.p,{children:"Explore real-world usage of Flair indexing primitives for various use-cases."}),"\n",(0,i.jsxs)(n.h3,{id:"defi",children:["DeFi",(0,i.jsx)(n.a,{href:"https://doc-zk-evm-git-fork-0xflair-main-infura-web.vercel.app/build-on-linea/tooling/data-indexers/flair#defi",children:"\u200b"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/aggregate-protocol-fees-in-usd",children:"Aggregate protocol fees in USD across multiple chains"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/health-factor-with-factory-tracking",children:'Calculate "Health Factor" of positions with contract factory tracking'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/uniswap-v2-events-from-all-contracts-with-usd-price",children:"Index Uniswap v2 swaps with USD price for all addresses"})}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"nft",children:["NFT",(0,i.jsx)(n.a,{href:"https://doc-zk-evm-git-fork-0xflair-main-infura-web.vercel.app/build-on-linea/tooling/data-indexers/flair#nft",children:"\u200b"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/flair-sdk/examples/tree/main/erc721-and-erc1155-nft-indexing",children:"Index ERC721 and ERC1155 NFTs on any EVM chain with an RPC URL"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"need-help",children:["Need help?",(0,i.jsx)(n.a,{href:"https://doc-zk-evm-git-fork-0xflair-main-infura-web.vercel.app/build-on-linea/tooling/data-indexers/flair#need-help",children:"\u200b"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://docs.flair.dev/talk-to-an-engineer",children:"Our engineers"})," are available to help you at any stage."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7507:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var a=r(9474);const i={},s=a.createContext(i);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);