"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[5957],{2413:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"dev-tools/indexers/the-graph","title":"The Graph","description":"\u200bThe Graph is an indexing service which collects Ethereum events and exports them through GraphQL endpoints. It is widely used in the Ethereum ecosystem which supports fast and cheap queries for DApps.","source":"@site/docs/dev-tools/indexers/the-graph.md","sourceDirName":"dev-tools/indexers","slug":"/dev-tools/indexers/the-graph","permalink":"/dev-tools/indexers/the-graph","draft":false,"unlisted":false,"editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/dev-tools/indexers/the-graph.md","tags":[],"version":"current","frontMatter":{"title":"The Graph"},"sidebar":"devToolsSidebar","previous":{"title":"Flair","permalink":"/dev-tools/indexers/flair"},"next":{"title":"Pyth","permalink":"/dev-tools/oracles/pyth"}}');var t=n(3274),s=n(7507);const i={title:"The Graph"},o=void 0,h={},l=[{value:"Prerequisites\u200b",id:"prerequisites",level:2},{value:"Running Graph Node\u200b",id:"running-graph-node",level:2},{value:"Clone\u200b",id:"clone",level:3},{value:"Configure\u200b",id:"configure",level:3},{value:"Start\u200b",id:"start",level:3},{value:"Create a subgraph\u200b",id:"create-a-subgraph",level:2},{value:"Clone subgraph\u200b",id:"clone-subgraph",level:3},{value:"Install\u200b",id:"install",level:3},{value:"Configure the Subgraph\u200b",id:"configure-the-subgraph",level:3},{value:"Generating types\u200b",id:"generating-types",level:3},{value:"Mappings\u200b",id:"mappings",level:3},{value:"Deploy the Subgraph\u200b",id:"deploy-the-subgraph",level:2},{value:"Publish Events (optional)\u200b",id:"publish-events-optional",level:2},{value:"Query Events\u200b",id:"query-events",level:2},{value:"Summary\u200b",id:"summary",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#introduction",title:"Direct link to heading",children:"\u200b"}),(0,t.jsx)(r.a,{href:"https://thegraph.com/",children:"The Graph"})," is an indexing service which collects Ethereum events and exports them through GraphQL endpoints. It is widely used in the Ethereum ecosystem which supports fast and cheap queries for DApps."]}),"\n",(0,t.jsx)(r.p,{children:"This tutorial covers the following topics:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Running a Graph node on Aurora."}),"\n",(0,t.jsx)(r.li,{children:"Creating and deploying a subgraph."}),"\n",(0,t.jsx)(r.li,{children:"Querying events from the subgraph."}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"prerequisites",children:["Prerequisites",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#prerequisites",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.p,{children:"Before delving into the tutorial, you need to make sure that you have setup the following tools on you machine:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://git-scm.com/downloads",children:"git"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.docker.com/compose/install/",children:"Docker-Compose"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://nodejs.org/en/download/",children:"Node 12+"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://stedolan.github.io/jq/download/",children:"jq"})}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"running-graph-node",children:["Running Graph Node",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#running-graph-node",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsxs)(r.h3,{id:"clone",children:["Clone",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#clone",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.p,{children:"Clone the graph node source code"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"git clone https://github.com/graphprotocol/graph-node.git\ncd graph-node\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"configure",children:["Configure",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#configure",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsxs)(r.p,{children:["In order wire your local graph node with Aurora Testnet RPC, you should change the value of ",(0,t.jsx)(r.code,{children:"ethereum"})," section in ",(0,t.jsx)(r.code,{children:"docker/docker-compose.yaml"})," file from ",(0,t.jsx)(r.code,{children:"mainnet:http://host.docker.internal:8545"})," to ",(0,t.jsx)(r.code,{children:"'aurora:https://testnet.aurora.dev'"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"....\n    environment:\n      postgres_host: postgres\n      postgres_user: graph-node\n      postgres_pass: let-me-in\n      postgres_db: graph-node\n      ipfs: 'ipfs:5001'\n      ethereum: 'aurora:https://testnet.aurora.dev'\n      GRAPH_LOG: info\n...\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"start",children:["Start",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#start",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.p,{children:"The following commands will setup the environment and start the graph indexer. The indexing process might take long time to have 100% sync with the chain. This has nothing to do with our tutorial but keep this process running in a separate terminal."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"cd graph-node/docker\n./setup.sh\ndocker-compose up\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"create-a-subgraph",children:["Create a subgraph",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#create-a-subgraph",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.p,{children:"Now we are done with starting our graph node, the next step is to create and deploy a subgraph. The subgraph defines how the data on Ethereum will be indexed and stored on the graph node."}),"\n",(0,t.jsxs)(r.p,{children:["In this tutorial, we are going to use the subgraph example called ",(0,t.jsx)(r.a,{href:"https://github.com/aurora-is-near/example-subgraph",children:"GravatarRegistry"})," (a simple on-chain Gravatar). The GravatarRegistry contract has two events:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-solidity",children:"event NewGravatar(uint id, address owner, string displayName, string imageUrl);\nevent UpdatedGravatar(uint id, address owner, string displayName, string imageUrl);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The contract was already deployed on Aurora Testnet. The deployed ",(0,t.jsx)(r.code,{children:"GravatarRegistry"})," contract address is ",(0,t.jsx)(r.code,{children:"0x8773e6832f44b2C17AC78592ffCe407C62d8c36E"})," and the start block number is ",(0,t.jsx)(r.code,{children:"74885768"}),"."]}),"\n",(0,t.jsxs)(r.h3,{id:"clone-subgraph",children:["Clone subgraph",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#clone-subgraph",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.p,{children:"Clone subgraph example repo."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"git clone https://github.com/aurora-is-near/example-subgraph.git\ncd example-subgraph\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"install",children:["Install",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#install",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"yarn install\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"configure-the-subgraph",children:["Configure the Subgraph",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#configure-the-subgraph",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsxs)(r.p,{children:["Update the ",(0,t.jsx)(r.code,{children:"address"})," and (the ",(0,t.jsx)(r.code,{children:"startBlock"})," optional) in ",(0,t.jsx)(r.code,{children:"subgraph.yaml"})," as follows:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"    ...\n    network: aurora\n    source:\n      address: '0x8773e6832f44b2C17AC78592ffCe407C62d8c36E'\n      abi: Gravity\n      startBlock: 74885768\n    ...\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Also make sure you are pointing into ",(0,t.jsx)(r.code,{children:"aurora"})," as a network."]}),"\n",(0,t.jsxs)(r.h3,{id:"generating-types",children:["Generating types",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#generating-types",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"yarn codegen\n  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2\n  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3\n  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4\n  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5\n  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2\n\u2714 Apply migrations\n\u26a0 Warnings while loading subgraph from subgraph.yaml: Warnings in subgraph.yaml:\n\n    Path: repository\n    The repository is still set to https://github.com/graphprotocol/example-subgraph.\n    Please replace it with a link to your subgraph source code.\n\n    Path: description\n    The description is still the one from the example subgraph.\n    Please update it to tell users more about your subgraph.\n\n\u2714 Load subgraph from subgraph.yaml\n  Load contract ABI from abis/Gravity.json\n\u2714 Load contract ABIs\n  Generate types for contract ABI: Gravity (abis/Gravity.json)\n  Write types to generated/Gravity/Gravity.ts\n\u2714 Generate types for contract ABIs\n\u2714 Generate types for data source templates\n\u2714 Load data source template ABIs\n\u2714 Generate types for data source template ABIs\n\u2714 Load GraphQL schema from schema.graphql\n  Write types to generated/schema.ts\n\u2714 Generate types for GraphQL schema\n\nTypes generated successfully\n\n\u2728  Done in 3.38s.\n"})}),"\n",(0,t.jsxs)(r.h3,{id:"mappings",children:["Mappings",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#mappings",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsxs)(r.p,{children:["Maps Ethereum event data to the data that has been defined in the ",(0,t.jsx)(r.code,{children:"schema.graphql"}),". For example ",(0,t.jsx)(r.code,{children:"handleNewGravatar"})," parses the new event parameters, and save them in ",(0,t.jsx)(r.code,{children:"gravatar"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export function handleNewGravatar(event: NewGravatar): void {\n  let gravatar = new Gravatar(event.params.id.toHex())\n  gravatar.owner = event.params.owner\n  gravatar.displayName = event.params.displayName\n  gravatar.imageUrl = event.params.imageUrl\n  gravatar.save()\n}\n"})}),"\n",(0,t.jsxs)(r.h2,{id:"deploy-the-subgraph",children:["Deploy the Subgraph",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#deploy-the-subgraph",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsxs)(r.p,{children:["First, we need to register the subgraph name on the graph node. To do that run ",(0,t.jsx)(r.code,{children:"yarn create-local"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"$ yarn create-local\nCreated subgraph: example\n\u2728  Done in 2.12s.\n"})}),"\n",(0,t.jsx)(r.p,{children:"Once the subgraph is registered, now you can deploy it by executing the following command:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"$ yarn deploy-local\n\u2714 Version Label (e.g. v0.0.1) \xb7\n  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2\n  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3\n  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4\n  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5\n  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2\n\u2714 Apply migrations\n\u26a0 Warnings loading subgraph from subgraph.yaml: Warnings in subgraph.yaml:\n\n    Path: repository\n    The repository is still set to https://github.com/graphprotocol/example-subgraph.\n    Please replace it with a link to your subgraph source code.\n\n    Path: description\n    The description is still the one from the example subgraph.\n    Please update it to tell users more about your subgraph.\n\n\u2714 Load subgraph from subgraph.yaml\n  Compile data source: Gravity => build/Gravity/Gravity.wasm\n\u2714 Compile subgraph\n  Copy schema file build/schema.graphql\n  Write subgraph file build/Gravity/abis/Gravity.json\n  Write subgraph manifest build/subgraph.yaml\n\u2714 Write compiled subgraph to build/\n  Add file to IPFS build/schema.graphql\n                .. QmbSFRGGvHM7Cn8YSjDL41diDMxN4LQUDEMqaa5VVc5sC4\n  Add file to IPFS build/Gravity/abis/Gravity.json\n                .. QmajZTadknSpgsCWRz9fG6bXFHdpVXPMWpx9yMipz3VtMQ\n  Add file to IPFS build/Gravity/Gravity.wasm\n                .. QmbK8QL1GWmsdTsgFYawvxFCjLEFwBsPjMGWpeRh6yaXEk\n\u2714 Upload subgraph to IPFS\n\nBuild completed: `Qmu7NRW7Lc89rxfacqUViaFLYwftrGUn54segMFgWggu`\n\nDeployed to http://127.0.0.1:8000/subgraphs/name/example/graphql\n\nSubgraph endpoints:\nQueries (HTTP):     http://127.0.0.1:8000/subgraphs/name/example\nSubscriptions (WS): http://127.0.0.1:8001/subgraphs/name/example\n\n\u2728  Done in 10.23s.\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Now, you should be able to access your subgraph endpoint through ",(0,t.jsx)(r.code,{children:"http://127.0.0.1:8000/subgraphs/name/example"}),"."]}),"\n",(0,t.jsxs)(r.h2,{id:"publish-events-optional",children:["Publish Events (optional)",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#publish-events-optional",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsxs)(r.p,{children:["There were already published events starting from block number ",(0,t.jsx)(r.code,{children:"74885768"}),", So you can skip this step."]}),"\n",(0,t.jsxs)(r.h2,{id:"query-events",children:["Query Events",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#query-events",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsxs)(r.p,{children:["To query events, TheGraph protocol provides a ",(0,t.jsx)(r.a,{href:"http://127.0.0.1:8000/subgraphs/name/example",children:"GraphQL endpoint"})," for your local graph node. Go to ",(0,t.jsx)(r.code,{children:"http://127.0.0.1:8000/subgraphs/name/example"}),", it automatically will show up a predefined GraphQL query. Run this query to get the results as shown below:"]}),"\n",(0,t.jsxs)(r.h2,{id:"summary",children:["Summary",(0,t.jsx)(r.a,{href:"https://doc.aurora.dev/integrate/indexers/the-graph#summary",title:"Direct link to heading",children:"\u200b"})]}),"\n",(0,t.jsx)(r.p,{children:"In this tutorial, we started a Graph node locally, then we wired our node to Aurora Testnet RPC. We also configured a subgraph example and deployed that subgraph on our local graph node. Finally the graph node was able to collect and index the subgraph example (GravatarRegistry) events from Aurora Testnet."})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7507:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var a=n(9474);const t={},s=a.createContext(t);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);