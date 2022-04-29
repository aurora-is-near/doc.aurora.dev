"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[379],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(2848),r=n(9213),o=(n(9496),n(9613)),i=["components"],l={title:"Truffle",sidebar_position:5},s="Deploying a Contract Using Truffle",c={unversionedId:"interact/truffle",id:"interact/truffle",title:"Truffle",description:"Introduction",source:"@site/docs/interact/truffle.md",sourceDirName:"interact",slug:"/interact/truffle",permalink:"/interact/truffle",editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/interact/truffle.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Truffle",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Aurorascan",permalink:"/interact/aurorascan"},next:{title:"Hardhat",permalink:"/interact/hardhat"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"NFT Example",id:"nft-example",level:2},{value:"Installing Prerequisites",id:"installing-prerequisites",level:2},{value:"Install Truffle",id:"install-truffle",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Connecting Truffle to Aurora",id:"connecting-truffle-to-aurora",level:2},{value:"Deploying the Contract",id:"deploying-the-contract",level:2},{value:"Playing with the Truffle Console",id:"playing-with-the-truffle-console",level:2},{value:"Mint tokens",id:"mint-tokens",level:3},{value:"Transfer tokens",id:"transfer-tokens",level:3},{value:"Burn tokens",id:"burn-tokens",level:3},{value:"Redistribute tokens",id:"redistribute-tokens",level:3},{value:"Summary",id:"summary",level:2}],f={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-a-contract-using-truffle"},"Deploying a Contract Using Truffle"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/"},"Truffle")," is a widely used development\nenvironment and testing framework for Ethereum smart contracts. In this\ntutorial, we will show by example how to use Truffle with the Aurora Testnet."),(0,o.kt)("p",null,"This tutorial assumes that you are familiar with Truffle and the non-fungible\ntokens (NFT) concept. For more details about the non-fungible token standard,\nplease refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"},"ERC-721 Non-Fungible Token\nStandard"),"\nspecification."),(0,o.kt)("h2",{id:"nft-example"},"NFT Example"),(0,o.kt)("p",null,"This example is originally forked from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/erc721"},"OpenZeppelin\nexamples"),". However, the code\nhas been changed to fit the use case of this tutorial. The use case is about how\nto deploy and manage the life cycle of a simple COVID-19 vaccine NFT token \ud83d\udc8a\ud83d\udc8a\nusing Truffle on the Aurora Testnet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Truffle NFT example",src:n(85).Z,width:"615",height:"331"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The minter address (which is managed by the vaccination program manager) can\ndistribute (mint) the vaccine tickets (NFT tokens \ud83d\udc8a\ud83d\udc8a\ud83d\udc8a) to the people who are\npart of the vaccination program.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When participants receive the tokens \ud83d\udc8a, they can get access to the vaccine\nby spending the NFT token.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"This means either burning the NFT token or sending it back to the minter\naddress.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the participant chooses to send it back then the minter can redistribute\nthat token \ud83c\udfab to another participant in the line.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then the new participant will have access to the same vaccine token that has\nbeen used by the previous participant."))),(0,o.kt)("h2",{id:"installing-prerequisites"},"Installing Prerequisites"),(0,o.kt)("p",null,"This tutorial assumes that you have Node.js 12+ and Yarn. Please refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install"},"Yarn installation how-to")," if you\ndon't yet have the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," command installed locally."),(0,o.kt)("p",null,"To install the prerequisite packages, clone the examples repository and then run\n",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,o.kt)("h3",{id:"install-truffle"},"Install Truffle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g truffle \n")),(0,o.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/aurora-is-near/aurora-examples.git\n\ncd aurora-examples/truffle/erc721-example/\n\nyarn \n")),(0,o.kt)("h2",{id:"connecting-truffle-to-aurora"},"Connecting Truffle to Aurora"),(0,o.kt)("p",null,"Export your ",(0,o.kt)("inlineCode",{parentName:"p"},"MNEMONIC")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export MNEMONIC='YOUR MNEMONIC HERE'\n")),(0,o.kt)("p",null,"Now in ",(0,o.kt)("inlineCode",{parentName:"p"},"truffle-config.js"),", you will need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," address as shown\nbelow in the ",(0,o.kt)("inlineCode",{parentName:"p"},"aurora")," network section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"...\naurora: {\n  provider: () => setupWallet('https://testnet.aurora.dev'),\n  network_id: 0x4e454153,\n  gas: 10000000,\n  from: '0x6A33382de9f73B846878a57500d055B981229ac4' // CHANGE THIS ADDRESS\n},\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," configuration will pick up your ",(0,o.kt)("inlineCode",{parentName:"p"},"MNEMONIC")," environment\nvariable and recover the address that will be used for sending and signing\ntransactions on the Aurora network."),(0,o.kt)("h2",{id:"deploying-the-contract"},"Deploying the Contract"),(0,o.kt)("p",null,"To deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"CovidVaccineToken")," contract, you can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," command as\nfollows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn deploy:aurora\n....\n_deploy_contracts.js\n=====================\n\n   Deploying 'CovidVaccineToken'\n   -----------------------------\n   > transaction hash:    0x282012c791d65d0ce2fd1fd9fcc41179dba5bd06c3b02e31e53dbe9cc8af62c1\n   > Blocks: 7            Seconds: 5\n   > contract address:    0x3635D999d8CdA2fAf304b390fb26a9c2f364dFbd\n   > block number:        49151611\n   > block timestamp:     1622034185\n   > account:             0x6A33382de9f73B846878a57500d055B981229ac4\n   > balance:             0\n   > gas used:            2576274 (0x274f92)\n   > gas price:           20 gwei\n   > value sent:          0 ETH\n   > total cost:          0.05152548 ETH\n....\n")),(0,o.kt)("h2",{id:"playing-with-the-truffle-console"},"Playing with the Truffle Console"),(0,o.kt)("p",null,"Now you can test the flow as mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"#nft-example"},"NFT Example"),"\nsection:"),(0,o.kt)("h3",{id:"mint-tokens"},"Mint tokens"),(0,o.kt)("p",null,"The minter mints and transfers NFT tokens for the vaccine program participant.\nIn this example, the new participant address is\n",(0,o.kt)("inlineCode",{parentName:"p"},"accounts[1]")," and the minter address is ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts[0]"),"."),(0,o.kt)("p",null,"Please make sure that you are using the same deployer address as a minter\naddress, otherwise the ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," transaction will revert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"% truffle console --network aurora\ntruffle(aurora)> const cvt = await CovidVaccineToken.deployed()\ntruffle(aurora)> const minter = accounts[0]\ntruffle(aurora)> const participant = accounts[1]\ntruffle(aurora)> await cvt.minter() == minter\ntrue\ntruffle(aurora)> await cvt.mint(participant, {from: minter})\n")),(0,o.kt)("p",null,"You should notice that none of the participants are allowed to transfer their\nNFT tokens to anyone except back to the minter."),(0,o.kt)("p",null,"So let's try to use any participant address to validate this. To do that, change\nthe value of ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts[1]"),", so that the sender will be the first\nparticipant (e.g., the participant address\n",(0,o.kt)("inlineCode",{parentName:"p"},"0x2531a4D108619a20ACeE88C4354a50e9aC48ecfe"),")."),(0,o.kt)("p",null,"In the Truffle console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle(aurora)> await cvt.safeTransferFrom(participant, accounts[2], 1, {from: participant})\nUncaught Error: execution reverted:\n...\nreason: 'Invalid Transfer',\n  hijackedStack: 'Error: execution reverted:\\n'\n")),(0,o.kt)("p",null,"This is exactly the same error message we have in our NFT contract in\n",(0,o.kt)("inlineCode",{parentName:"p"},"safeTransferFrom"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function safeTransferFrom(\n    address from, \n    address to, \n    uint256 tokenId\n) \n    public \n    virtual \n    override \n    {\n        require(\n            minter == msg.sender || to == minter,\n            'Invalid Transfer'\n        );\n        safeTransferFrom(from, to, tokenId, \"\");\n    }\n")),(0,o.kt)("h3",{id:"transfer-tokens"},"Transfer tokens"),(0,o.kt)("p",null,"Participants can transfer the token to the minter after receiving the vaccine.\nAs shown below, a participant can only send the NFT token if the receiver for\nthis token is the minter (",(0,o.kt)("inlineCode",{parentName:"p"},"accounts[0]"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle(aurora)> const tokenID = 1\ntruffle(aurora)> await cvt.ownerOf(tokenID) == participant\ntrue\ntruffle(aurora)> await cvt.safeTransferFrom(participant, minter, tokenID, {from: participant})\ntruffle(aurora)> await cvt.ownerOf(tokenID) == minter\ntrue\n")),(0,o.kt)("h3",{id:"burn-tokens"},"Burn tokens"),(0,o.kt)("p",null,"This is an alternative scenario for the NFT token lifecycle. Instead of\ntransferring the token back to the minter, the participant can decide to burn the\nNFT token by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"burn")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle(aurora)> await cvt.burn(1, {from: participant}) // 1 is the tokenID\n")),(0,o.kt)("h3",{id:"redistribute-tokens"},"Redistribute tokens"),(0,o.kt)("p",null,"Finally, the minter can send the same token (if not burnt) to a new participant\nin the line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle(aurora)> await cvt.safeTransferFrom(minter, accounts[2], 1, {from: minter})\ntruffle(aurora)> await cvt.ownerOf(1) == accounts[2]\ntrue\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this simple tutorial, we deployed an NFT contract to the Aurora Testnet using\nTruffle and interacted with the contract's functions."))}d.isMDXComponent=!0},85:function(e,t,n){t.Z=n.p+"assets/images/truffle_nft_example-a9d17b3f4f30477f3f6d67c4336f20e5.png"}}]);