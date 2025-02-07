"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[9368],{6336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var a=n(7372),r=n(3274),o=n(7507);const s={title:"Building a game using Near, Aurora and BOS",description:"Find out how to build a fully decentralized UI and back-end of an on-chain application using NEAR and Aurora",date:"2023-05-05",authors:["michael"],tags:["tutorials"],image:"https://www.datocms-assets.com/95026/1683223806-bos-article.png"},i=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Architecture",id:"architecture",level:3},{value:"Near contract",id:"near-contract",level:3},{value:"Aurora contract",id:"aurora-contract",level:3},{value:"BOS front-end",id:"bos-front-end",level:3},{value:"Demo and Conclusion",id:"demo-and-conclusion",level:3}];function d(e){const t={a:"a",br:"br",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In this blog post, we explore building a simple Tic Tac Toe game using the Near ecosystem\u2019s tech stack. This includes using Aurora for a seamless onboarding experience (free transactions), Near for complex smart contract logic, and BOS for the front end. The final result is a free-to-use, fully decentralized application that anyone can pick up and play."}),"\n",(0,r.jsx)(t.p,{children:"Tic Tac Toe was chosen as an example because it is easy to understand and small enough for the code to be used in a blog post. But this same architecture and tech stack could also be applied to non-trivial projects! For example, the smart contract could be running a chess engine instead of a Tic Tac Toe engine. Or it could have nothing to do with games, and the smart contract runs a zero-knowledge proof verifier for some application. The possibilities are endless!"}),"\n",(0,r.jsxs)(t.p,{children:["This post shows some code snippets to be self-contained pieces; however, not all the code is shown. The complete code for the smart contracts used in this example is ",(0,r.jsx)(t.a,{href:"https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/examples/tic-tac-toe",children:(0,r.jsx)(t.em,{children:"available on GitHub"})}),". The complete front-end code is ",(0,r.jsx)(t.a,{href:"https://bos.gg/#/mob.near/widget/WidgetSource?src=nearcon.birchmd.near/widget/Aurora-Tic-Tac-Toe",children:(0,r.jsx)(t.em,{children:"available on BOS"})}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(t.p,{children:"This project consists of three components:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"A stateless smart contract written in Rust and deployed to Near, which takes a Tic Tac Toe board state and input and returns an updated state as output."}),"\n",(0,r.jsx)(t.li,{children:"A Solidity contract deployed to Aurora, which users interact with to start Tic Tac Toe games and make their moves. This contract uses the Near one to make a computer opponent, and it persists the users\u2019 games in storage."}),"\n",(0,r.jsxs)(t.li,{children:["A front-end written in JavaScript that is powered by ",(0,r.jsx)(t.a,{href:"https://near.org/blog/near-announces-the-blockchain-operating-system/",children:(0,r.jsx)(t.em,{children:"BOS"})}),". This is what the user interacts with directly, and it sends the transactions to the Solidity smart contract on Aurora."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"All of these components run on top of a blockchain platform; I did not need to acquire any hardware resources to deploy this dApp, and yet anyone can interact with it."}),"\n",(0,r.jsx)(t.p,{children:"One way to think of this architecture is as being analogous to a Web2 app which uses both JavaScript (JS) and WebAssembly (Wasm). The JS code handles the state (cookies, DOM, etc.), while the Wasm handles the heavier computation that would be inefficient to do in JS directly. In our case, the Solidity code handles the state while the Rust code on Near handles the heavier computation (and it ultimately runs as Wasm, too, making the analogy even stronger)."}),"\n",(0,r.jsx)(t.p,{children:"In the next sections, we will discuss each of these components in some detail."}),"\n",(0,r.jsx)(t.h3,{id:"near-contract",children:"Near contract"}),"\n",(0,r.jsx)(t.p,{children:"As described above, the Near contract is stateless and handles the more complex logic of our application, in this case, the Tic Tac Toe computer player. It is very clean and easy to write such code in Rust. We have a module where a few basic types are defined:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[repr(i8)]\n#[derive(Debug, Clone, Copy, PartialEq, Eq)]\npub enum CellState {\n    Empty = 0,\n    X = 1,\n    O = -1,\n}\n\n#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]\npub struct GameState {\n    /// Row-major representation of the board\n    pub board: [CellState; BOARD_SIZE],\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"And another module which uses those types to analyze a Tic Tac Toe position, then make a good move:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"pub enum MoveResult {\n    Move { updated_state: GameState },\n    GameOver { winner: CellState },\n}\n\npub fn get_move(state: GameState) -> MoveResult {\n    // ... elided for brevity\n}\n\nenum Evaluation {\n    Sums {\n        sums: [i8; ROW_SIZE + ROW_SIZE + 2],\n        total: i8,\n    },\n    GameOver {\n        winner: CellState,\n    },\n}\n\nfn evaluate_position(state: GameState) -> Evaluation {\n    // ... elided for brevity\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Finally, there is contract entry-point written using Near SDK:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct TicTacToe;\n\n#[near_bindgen]\nimpl TicTacToe {\n    pub fn get_move(&self, state: String) -> GetMoveResponse {\n        let parsed_state: types::GameState = state\n            .parse()\n            .unwrap_or_else(|_| env::panic_str("Invalid state string"));\n        match logic::get_move(parsed_state) {\n            logic::MoveResult::Move { updated_state } => {\n                let serialized_state = updated_state.to_string();\n                let winner = match logic::get_move(updated_state) {\n                    logic::MoveResult::GameOver { winner } => Some(format!("{winner:?}")),\n                    logic::MoveResult::Move { .. } => None,\n                };\n                GetMoveResponse {\n                    updated_state: serialized_state,\n                    winner,\n                }\n            }\n            logic::MoveResult::GameOver { winner } => GetMoveResponse {\n                updated_state: state,\n                winner: Some(format!("{winner:?}")),\n            },\n        }\n    }\n}\n\n#[derive(serde::Serialize, serde::Deserialize)]\npub struct GetMoveResponse {\n    updated_state: String,\n    #[serde(skip_serializing_if = "Option::is_none")]\n    winner: Option<String>,\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"The nice thing about this being a stateless contract is that you can interact with it entirely using view calls (essentially using Near as a serverless computation platform)."}),"\n",(0,r.jsxs)(t.p,{children:["I wrote a ",(0,r.jsx)(t.a,{href:"https://alpha.near.org/birchmd.near/widget/tic-tac-toe",children:(0,r.jsx)(t.em,{children:"front-end powered by BOS"})})," to directly interact with this Near contract to illustrate this point. Since no transactions are actually sent to the chain, it\u2019s much more responsive than the final product we\u2019re building toward in this post. But stateless computing has limited applications, so committing transactions on-chain to access the state is still important in real-world use cases. For this, we are making use of Aurora."]}),"\n",(0,r.jsx)(t.h3,{id:"aurora-contract",children:"Aurora contract"}),"\n",(0,r.jsx)(t.p,{children:"The Solidity contract deployed on Aurora handles the state management and is the contract users make transactions to. This contract uses Aurora\u2019s XCC to call the Near contract directly when it needs to get the computer opponent\u2019s next move. Here is essentially what the code looks like (some details omitted for brevity):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:'contract TicTacToe is AccessControl {\n    using AuroraSdk for NEAR;\n    using AuroraSdk for PromiseCreateArgs;\n    using AuroraSdk for PromiseWithCallback;\n    using AuroraSdk for PromiseResult;\n    using Codec for bytes;\n\n    constructor(string memory _ticTacToeAccountId, IERC20 _wNEAR) {\n        ticTacToeAccountId = _ticTacToeAccountId;\n        near = AuroraSdk.initNear(_wNEAR);\n        wNEAR = _wNEAR;\n        _grantRole(OWNER_ROLE, msg.sender);\n        _grantRole(CALLBACK_ROLE, AuroraSdk.nearRepresentitiveImplicitAddress(address(this)));\n\n    }\n\n    // Start a new game where `player_preference = 0` means player goes second (plays O) and\n    // `player_preference > 0` means the plater goes first (plays X).\n    function newGame(uint256 player_preference) public {\n        address player = msg.sender;\n        games[player] = 0;\n        if (player_preference == 0) {\n            takeComputerTurn(player, 0);\n        }\n    }\n\n    function takePlayerTurn(uint256 move) public {\n        address player = msg.sender;\n        uint256 currentState = games[player];\n        require(currentState < 0x1000000000000000000, "Game Over");\n        require(legalMoves[move] > 0, "Invalid move");\n        require(move & currentState == 0, "Move at filled cell");\n        currentState ^= move;\n        games[player] = currentState;\n        takeComputerTurn(player, currentState);\n    }\n\n    function getGameState(address player) public view returns (uint256) {\n        return games[player];\n    }\n\n    // Call the tic tac toe contract on NEAR to make a move.\n    function takeComputerTurn(address player, uint256 initialState) private {\n        bytes memory data = abi.encodePacked("{\\"state\\":\\"", encodeStateForNear(initialState), "\\"}");\n\n        PromiseCreateArgs memory callGetMove = near.call(ticTacToeAccountId, "get_move", data, 0, GET_MOVE_NEAR_GAS);\n        PromiseCreateArgs memory callback = near.auroraCall(\n            address(this),\n            abi.encodeWithSelector(this.computerTurnCallback.selector, player),\n            0,\n            COMPUTER_TURN_CALLBACK_NEAR_GAS\n        );\n\n        callGetMove.then(callback).transact();\n    }\n\n    // Get the result of calling the NEAR contract. Update the internal state of this contract.\n    function computerTurnCallback(address player) public onlyRole(CALLBACK_ROLE) {\n        PromiseResult memory result = AuroraSdk.promiseResult(0);\n\n        if (result.status != PromiseResultStatus.Successful) {\n            revert("Tic tac toe Near call failed");\n        }\n\n        // output is of the form `{"updated_state":"<NINE_STATE_BYTES>","winner":"CellState::<X|O|Empty>"}`\n        // where the `winner` field is optional.\n        uint256 updatedState = decodeNearState(result.output);\n\n        if (result.output.length > 37) {\n            // Indicate the game is over by setting some higher bytes\n            updatedState ^= 0x1100000000000000000000;\n        }\n\n        games[player] = updatedState;\n\n        emit Turn(player, string(result.output));\n    }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"The nice thing about using Aurora for the on-chain transactions is that we can easily onboard users with the 50 free transactions Aurora provides to any user (the onboarding is simpler because they do not need to purchase crypto to cover gas fees; they can just start playing our game right away)."}),"\n",(0,r.jsx)(t.p,{children:"The final piece of the puzzle is for there to be a front-end the user interacts with and makes transactions to this contract on their behalf."}),"\n",(0,r.jsx)(t.h3,{id:"bos-front-end",children:"BOS front-end"}),"\n",(0,r.jsxs)(t.p,{children:["The Blockchain Operating System (BOS) allows the creation of decentralized front-ends where the code is hosted on the Near blockchain. BOS gateways (which anyone can run) then serve the code to end-users. This is convenient for me as the developer because I do not need to host any servers for my front end; I know that BOS gateways will take care of it for me.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.br,{}),"\n","If you are familiar with using the React JavaScript framework, you will have no problem writing front-ends in BOS. I\u2019m not much of a JS developer myself, and even I found it reasonably easy to use BOS to make a simple front-end (keep this in mind when you look at the front-end; I am not a professional front-end developer). The complete source code can be ",(0,r.jsx)(t.a,{href:"https://bos.gg/#/mob.near/widget/WidgetSource?src=nearcon.birchmd.near/widget/Aurora-Tic-Tac-Toe",children:(0,r.jsx)(t.em,{children:"viewed on BOS itself"})}),", but here are some highlights of the code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",children:'const sender = Ethers.send("eth_requestAccounts", [])[0];\n\nif (!sender) return <Web3Connect connectLabel="Connect with Web3" />;\n\nconst contractAbi = fetch(\n  "https://gist.githubusercontent.com/birchmd/3db801d6115ceaaafb3d7e8fd94e0dc2/raw/5aa660a746d8f137df2c77142bfba36057dab6ef/TicTacToe.abi.json"\n);\n\nconst iface = new ethers.utils.Interface(contractAbi.body);\n\nconst contract = new ethers.Contract(\n  contract_address,\n  contractAbi.body,\n  Ethers.provider().getSigner()\n);\n\ninitState({\n  board: {\n    isGameOver: false,\n    board: [".", ".", ".", ".", ".", ".", ".", ".", "."],\n  },\n  pendingPlayer: "X",\n  player: "X",\n  playerNumber: 1,\n  expectNewState: true,\n  firstQuery: true,\n  startingNewGame: false,\n});\n\nconst newGame = () => {\n  // Don\'t allow sending new transactions while waiting\n  // for the state to update.\n  if (state.expectNewState) {\n    return;\n  }\n\n  let player_prefernece;\n\n  if (state.pendingPlayer == "X") {\n    State.update({ player: "X", playerNumber: 1 });\n    player_prefernece = 1;\n  } else {\n    State.update({ player: "O", playerNumber: 17 });\n    player_prefernece = 0;\n  }\n\n  contract.newGame(player_prefernece).then((tx) => {\n    State.update({ expectNewState: true, startingNewGame: true });\n    tx.wait().then((rx) => {\n      console.log(rx);\n      getGameState();\n    });\n  });\n};\n\nconst playerMove = (index) => {\n  if (\n    !state.expectNewState &&\n    !state.board.isGameOver &&\n    state.board.board[index] == "."\n  ) {\n    const move =\n      "0x" +\n      (\n        new BN(state.playerNumber) * new BN(256).pow(new BN(8 - index))\n      ).toString(16);\n    contract.takePlayerTurn(move).then((tx) => {\n      State.update({ expectNewState: true, startingNewGame: false });\n      tx.wait().then((rx) => {\n        console.log(rx);\n        getGameState();\n      });\n    });\n  }\n};\n\nconst getGameState = () => {\n  // shot curcuit to avoid constantly hitting the RPC\n  if (!state.expectNewState) {\n    return;\n  }\n\n  const encodedData = iface.encodeFunctionData("getGameState", [sender]);\n\n  Ethers.provider()\n    .call({\n      to: contract_address,\n      data: encodedData,\n    })\n    .then((boardHex) => {\n      const result = parseBoardHex(boardHex);\n      const expectNewState =\n        state.expectNewState &&\n        !state.firstQuery &&\n        result.isGameOver == state.board.isGameOver &&\n        JSON.stringify(result.board) === JSON.stringify(state.board.board);\n\n      State.update({\n        board: result,\n        player,\n        playerNumber,\n        winner,\n        expectNewState,\n        firstQuery: false,\n      });\n    });\n};\n\nreturn (\n  <>\n    {getGameState()}\n    <table>\n      <tr>\n        <TopLeftCell onClick={() => playerMove(0)}>\n          {state.board.board[0]}\n        </TopLeftCell>\n        <TopCenterCell onClick={() => playerMove(1)}>\n          {state.board.board[1]}\n        </TopCenterCell>\n        <TopRightCell onClick={() => playerMove(2)}>\n          {state.board.board[2]}\n        </TopRightCell>\n      </tr>\n      <tr>\n        <MiddleLeftCell onClick={() => playerMove(3)}>\n          {state.board.board[3]}\n        </MiddleLeftCell>\n        <MiddleCenterCell onClick={() => playerMove(4)}>\n          {state.board.board[4]}\n        </MiddleCenterCell>\n        <MiddleRightCell onClick={() => playerMove(5)}>\n          {state.board.board[5]}\n        </MiddleRightCell>\n      </tr>\n      <tr>\n        <BottomLeftCell onClick={() => playerMove(6)}>\n          {state.board.board[6]}\n        </BottomLeftCell>\n        <BottomCenterCell onClick={() => playerMove(7)}>\n          {state.board.board[7]}\n        </BottomCenterCell>\n        <BottomRightCell onClick={() => playerMove(8)}>\n          {state.board.board[8]}\n        </BottomRightCell>\n      </tr>\n    </table>\n    <br></br>\n    {state.board.isGameOver && <div>{state.winner}</div>}\n    {state.expectNewState ? (\n      <div>\n        <p>Waiting for new data from RPC...</p>\n      </div>\n    ) : (\n      <div />\n    )}\n    <br></br>\n    <label for="selectPlayer">Play as:</label>\n    <select\n      id="selectPlayer"\n      onChange={(e) => State.update({ pendingPlayer: e.target.value })}\n    >\n      <option value="X">X</option>\n      <option value="O">O</option>\n    </select>\n    <div class="mb-3">\n      <button onClick={newGame}>New Game</button>\n    </div>\n  </>\n);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"demo-and-conclusion",children:"Demo and Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["This app is live on BOS now! You can play with it yourself ",(0,r.jsx)(t.a,{href:"https://bos.gg/#/nearcon.birchmd.near/widget/Aurora-Tic-Tac-Toe",children:(0,r.jsx)(t.em,{children:"here"})})," or view a pre-recorded demo ",(0,r.jsx)(t.a,{href:"https://youtu.be/_tSuGRN9Lok",children:(0,r.jsx)(t.em,{children:"here"})}),". To use the demo app, ensure your MetaMask is connected to the Aurora Testnet (the BOS interface might say the network is unrecognized, but it should still work for sending the transactions)."]}),"\n",(0,r.jsx)(t.p,{children:"This post explored the Near tech stack for building fully decentralized applications. This entire application is hosted on-chain from the front to the back end. The Near blockchain provides the base computation layer with its WebAssembly-powered runtime, Aurora provides the persistence layer while maintaining easy onboarding in free transactions, and BOS provides a serverless front-end built on the Near blockchain."}),"\n",(0,r.jsx)(t.p,{children:"I hope you enjoyed this blog post and are feeling inspired to go build some yourself using Aurora, Near, and BOS!"})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7507:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(9474);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}},7372:e=>{e.exports=JSON.parse('{"permalink":"/blog/building-a-game-using-near-aurora-and-bos","editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/blog/building-a-game-using-near-aurora-and-bos.md","source":"@site/blog/building-a-game-using-near-aurora-and-bos.md","title":"Building a game using Near, Aurora and BOS","description":"Find out how to build a fully decentralized UI and back-end of an on-chain application using NEAR and Aurora","date":"2023-05-05T00:00:00.000Z","tags":[{"inline":false,"label":"Tutorials","permalink":"/blog/tags/tutorials","description":"Longer posts talking about the subject in detail"}],"readingTime":6.2,"hasTruncateMarker":true,"authors":[{"name":"Michael Birch","title":"Senior Research Engineer","imageURL":"https://www.datocms-assets.com/95026/1683043123-t025c6kc9px-u025f7t5npl-c56792be0091-512.jpeg","key":"michael","page":null}],"frontMatter":{"title":"Building a game using Near, Aurora and BOS","description":"Find out how to build a fully decentralized UI and back-end of an on-chain application using NEAR and Aurora","date":"2023-05-05","authors":["michael"],"tags":["tutorials"],"image":"https://www.datocms-assets.com/95026/1683223806-bos-article.png"},"unlisted":false,"prevItem":{"title":"Aurora Chains: Code Overview","permalink":"/blog/aurora-chains-code-overview"},"nextItem":{"title":"Aurora Chains: Walkthrough","permalink":"/blog/aurora-chains-demo"}}')}}]);