---
title: "Building a game using Near, Aurora and BOS"
description: "Find out how to build a fully decentralized UI and back-end of an on-chain application using NEAR and Aurora"
date: "2023-05-05"
authors: [michael]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1683223806-bos-article.png
---

In this blog post, we explore building a simple Tic Tac Toe game using the Near ecosystem’s tech stack. This includes using Aurora for a seamless onboarding experience (free transactions), Near for complex smart contract logic, and BOS for the front end. The final result is a free-to-use, fully decentralized application that anyone can pick up and play.

<!-- truncate -->

Tic Tac Toe was chosen as an example because it is easy to understand and small enough for the code to be used in a blog post. But this same architecture and tech stack could also be applied to non-trivial projects! For example, the smart contract could be running a chess engine instead of a Tic Tac Toe engine. Or it could have nothing to do with games, and the smart contract runs a zero-knowledge proof verifier for some application. The possibilities are endless!

This post shows some code snippets to be self-contained pieces; however, not all the code is shown. The complete code for the smart contracts used in this example is [*available on GitHub*](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/main/examples/tic-tac-toe). The complete front-end code is [*available on BOS*](https://bos.gg/#/mob.near/widget/WidgetSource?src=nearcon.birchmd.near/widget/Aurora-Tic-Tac-Toe).

### Architecture

This project consists of three components:

1. A stateless smart contract written in Rust and deployed to Near, which takes a Tic Tac Toe board state and input and returns an updated state as output.
2. A Solidity contract deployed to Aurora, which users interact with to start Tic Tac Toe games and make their moves. This contract uses the Near one to make a computer opponent, and it persists the users’ games in storage.
3. A front-end written in JavaScript that is powered by [*BOS*](https://near.org/blog/near-announces-the-blockchain-operating-system/). This is what the user interacts with directly, and it sends the transactions to the Solidity smart contract on Aurora.

All of these components run on top of a blockchain platform; I did not need to acquire any hardware resources to deploy this dApp, and yet anyone can interact with it.

One way to think of this architecture is as being analogous to a Web2 app which uses both JavaScript (JS) and WebAssembly (Wasm). The JS code handles the state (cookies, DOM, etc.), while the Wasm handles the heavier computation that would be inefficient to do in JS directly. In our case, the Solidity code handles the state while the Rust code on Near handles the heavier computation (and it ultimately runs as Wasm, too, making the analogy even stronger).

In the next sections, we will discuss each of these components in some detail.

### Near contract

As described above, the Near contract is stateless and handles the more complex logic of our application, in this case, the Tic Tac Toe computer player. It is very clean and easy to write such code in Rust. We have a module where a few basic types are defined:

```rust
#[repr(i8)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CellState {
    Empty = 0,
    X = 1,
    O = -1,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Default)]
pub struct GameState {
    /// Row-major representation of the board
    pub board: [CellState; BOARD_SIZE],
}
```

And another module which uses those types to analyze a Tic Tac Toe position, then make a good move:

```rust
pub enum MoveResult {
    Move { updated_state: GameState },
    GameOver { winner: CellState },
}

pub fn get_move(state: GameState) -> MoveResult {
    // ... elided for brevity
}

enum Evaluation {
    Sums {
        sums: [i8; ROW_SIZE + ROW_SIZE + 2],
        total: i8,
    },
    GameOver {
        winner: CellState,
    },
}

fn evaluate_position(state: GameState) -> Evaluation {
    // ... elided for brevity
}
```

Finally, there is contract entry-point written using Near SDK:

```rust
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Default)]
pub struct TicTacToe;

#[near_bindgen]
impl TicTacToe {
    pub fn get_move(&self, state: String) -> GetMoveResponse {
        let parsed_state: types::GameState = state
            .parse()
            .unwrap_or_else(|_| env::panic_str("Invalid state string"));
        match logic::get_move(parsed_state) {
            logic::MoveResult::Move { updated_state } => {
                let serialized_state = updated_state.to_string();
                let winner = match logic::get_move(updated_state) {
                    logic::MoveResult::GameOver { winner } => Some(format!("{winner:?}")),
                    logic::MoveResult::Move { .. } => None,
                };
                GetMoveResponse {
                    updated_state: serialized_state,
                    winner,
                }
            }
            logic::MoveResult::GameOver { winner } => GetMoveResponse {
                updated_state: state,
                winner: Some(format!("{winner:?}")),
            },
        }
    }
}

#[derive(serde::Serialize, serde::Deserialize)]
pub struct GetMoveResponse {
    updated_state: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    winner: Option<String>,
}
```

The nice thing about this being a stateless contract is that you can interact with it entirely using view calls (essentially using Near as a serverless computation platform).

I wrote a [*front-end powered by BOS*](https://alpha.near.org/birchmd.near/widget/tic-tac-toe) to directly interact with this Near contract to illustrate this point. Since no transactions are actually sent to the chain, it’s much more responsive than the final product we’re building toward in this post. But stateless computing has limited applications, so committing transactions on-chain to access the state is still important in real-world use cases. For this, we are making use of Aurora.

### Aurora contract

The Solidity contract deployed on Aurora handles the state management and is the contract users make transactions to. This contract uses Aurora’s XCC to call the Near contract directly when it needs to get the computer opponent’s next move. Here is essentially what the code looks like (some details omitted for brevity):

```solidity
contract TicTacToe is AccessControl {
    using AuroraSdk for NEAR;
    using AuroraSdk for PromiseCreateArgs;
    using AuroraSdk for PromiseWithCallback;
    using AuroraSdk for PromiseResult;
    using Codec for bytes;

    constructor(string memory _ticTacToeAccountId, IERC20 _wNEAR) {
        ticTacToeAccountId = _ticTacToeAccountId;
        near = AuroraSdk.initNear(_wNEAR);
        wNEAR = _wNEAR;
        _grantRole(OWNER_ROLE, msg.sender);
        _grantRole(CALLBACK_ROLE, AuroraSdk.nearRepresentitiveImplicitAddress(address(this)));

    }

    // Start a new game where `player_preference = 0` means player goes second (plays O) and
    // `player_preference > 0` means the plater goes first (plays X).
    function newGame(uint256 player_preference) public {
        address player = msg.sender;
        games[player] = 0;
        if (player_preference == 0) {
            takeComputerTurn(player, 0);
        }
    }

    function takePlayerTurn(uint256 move) public {
        address player = msg.sender;
        uint256 currentState = games[player];
        require(currentState < 0x1000000000000000000, "Game Over");
        require(legalMoves[move] > 0, "Invalid move");
        require(move & currentState == 0, "Move at filled cell");
        currentState ^= move;
        games[player] = currentState;
        takeComputerTurn(player, currentState);
    }

    function getGameState(address player) public view returns (uint256) {
        return games[player];
    }

    // Call the tic tac toe contract on NEAR to make a move.
    function takeComputerTurn(address player, uint256 initialState) private {
        bytes memory data = abi.encodePacked("{\"state\":\"", encodeStateForNear(initialState), "\"}");

        PromiseCreateArgs memory callGetMove = near.call(ticTacToeAccountId, "get_move", data, 0, GET_MOVE_NEAR_GAS);
        PromiseCreateArgs memory callback = near.auroraCall(
            address(this),
            abi.encodeWithSelector(this.computerTurnCallback.selector, player),
            0,
            COMPUTER_TURN_CALLBACK_NEAR_GAS
        );

        callGetMove.then(callback).transact();
    }

    // Get the result of calling the NEAR contract. Update the internal state of this contract.
    function computerTurnCallback(address player) public onlyRole(CALLBACK_ROLE) {
        PromiseResult memory result = AuroraSdk.promiseResult(0);

        if (result.status != PromiseResultStatus.Successful) {
            revert("Tic tac toe Near call failed");
        }

        // output is of the form `{"updated_state":"<NINE_STATE_BYTES>","winner":"CellState::<X|O|Empty>"}`
        // where the `winner` field is optional.
        uint256 updatedState = decodeNearState(result.output);

        if (result.output.length > 37) {
            // Indicate the game is over by setting some higher bytes
            updatedState ^= 0x1100000000000000000000;
        }

        games[player] = updatedState;

        emit Turn(player, string(result.output));
    }
}
```

The nice thing about using Aurora for the on-chain transactions is that we can easily onboard users with the 50 free transactions Aurora provides to any user (the onboarding is simpler because they do not need to purchase crypto to cover gas fees; they can just start playing our game right away).

The final piece of the puzzle is for there to be a front-end the user interacts with and makes transactions to this contract on their behalf.

### BOS front-end

The Blockchain Operating System (BOS) allows the creation of decentralized front-ends where the code is hosted on the Near blockchain. BOS gateways (which anyone can run) then serve the code to end-users. This is convenient for me as the developer because I do not need to host any servers for my front end; I know that BOS gateways will take care of it for me.\
\
If you are familiar with using the React JavaScript framework, you will have no problem writing front-ends in BOS. I’m not much of a JS developer myself, and even I found it reasonably easy to use BOS to make a simple front-end (keep this in mind when you look at the front-end; I am not a professional front-end developer). The complete source code can be [*viewed on BOS itself*](https://bos.gg/#/mob.near/widget/WidgetSource?src=nearcon.birchmd.near/widget/Aurora-Tic-Tac-Toe), but here are some highlights of the code:

```jsx
const sender = Ethers.send("eth_requestAccounts", [])[0];

if (!sender) return <Web3Connect connectLabel="Connect with Web3" />;

const contractAbi = fetch(
  "https://gist.githubusercontent.com/birchmd/3db801d6115ceaaafb3d7e8fd94e0dc2/raw/5aa660a746d8f137df2c77142bfba36057dab6ef/TicTacToe.abi.json"
);

const iface = new ethers.utils.Interface(contractAbi.body);

const contract = new ethers.Contract(
  contract_address,
  contractAbi.body,
  Ethers.provider().getSigner()
);

initState({
  board: {
    isGameOver: false,
    board: [".", ".", ".", ".", ".", ".", ".", ".", "."],
  },
  pendingPlayer: "X",
  player: "X",
  playerNumber: 1,
  expectNewState: true,
  firstQuery: true,
  startingNewGame: false,
});

const newGame = () => {
  // Don't allow sending new transactions while waiting
  // for the state to update.
  if (state.expectNewState) {
    return;
  }

  let player_prefernece;

  if (state.pendingPlayer == "X") {
    State.update({ player: "X", playerNumber: 1 });
    player_prefernece = 1;
  } else {
    State.update({ player: "O", playerNumber: 17 });
    player_prefernece = 0;
  }

  contract.newGame(player_prefernece).then((tx) => {
    State.update({ expectNewState: true, startingNewGame: true });
    tx.wait().then((rx) => {
      console.log(rx);
      getGameState();
    });
  });
};

const playerMove = (index) => {
  if (
    !state.expectNewState &&
    !state.board.isGameOver &&
    state.board.board[index] == "."
  ) {
    const move =
      "0x" +
      (
        new BN(state.playerNumber) * new BN(256).pow(new BN(8 - index))
      ).toString(16);
    contract.takePlayerTurn(move).then((tx) => {
      State.update({ expectNewState: true, startingNewGame: false });
      tx.wait().then((rx) => {
        console.log(rx);
        getGameState();
      });
    });
  }
};

const getGameState = () => {
  // shot curcuit to avoid constantly hitting the RPC
  if (!state.expectNewState) {
    return;
  }

  const encodedData = iface.encodeFunctionData("getGameState", [sender]);

  Ethers.provider()
    .call({
      to: contract_address,
      data: encodedData,
    })
    .then((boardHex) => {
      const result = parseBoardHex(boardHex);
      const expectNewState =
        state.expectNewState &&
        !state.firstQuery &&
        result.isGameOver == state.board.isGameOver &&
        JSON.stringify(result.board) === JSON.stringify(state.board.board);

      State.update({
        board: result,
        player,
        playerNumber,
        winner,
        expectNewState,
        firstQuery: false,
      });
    });
};

return (
  <>
    {getGameState()}
    <table>
      <tr>
        <TopLeftCell onClick={() => playerMove(0)}>
          {state.board.board[0]}
        </TopLeftCell>
        <TopCenterCell onClick={() => playerMove(1)}>
          {state.board.board[1]}
        </TopCenterCell>
        <TopRightCell onClick={() => playerMove(2)}>
          {state.board.board[2]}
        </TopRightCell>
      </tr>
      <tr>
        <MiddleLeftCell onClick={() => playerMove(3)}>
          {state.board.board[3]}
        </MiddleLeftCell>
        <MiddleCenterCell onClick={() => playerMove(4)}>
          {state.board.board[4]}
        </MiddleCenterCell>
        <MiddleRightCell onClick={() => playerMove(5)}>
          {state.board.board[5]}
        </MiddleRightCell>
      </tr>
      <tr>
        <BottomLeftCell onClick={() => playerMove(6)}>
          {state.board.board[6]}
        </BottomLeftCell>
        <BottomCenterCell onClick={() => playerMove(7)}>
          {state.board.board[7]}
        </BottomCenterCell>
        <BottomRightCell onClick={() => playerMove(8)}>
          {state.board.board[8]}
        </BottomRightCell>
      </tr>
    </table>
    <br></br>
    {state.board.isGameOver && <div>{state.winner}</div>}
    {state.expectNewState ? (
      <div>
        <p>Waiting for new data from RPC...</p>
      </div>
    ) : (
      <div />
    )}
    <br></br>
    <label for="selectPlayer">Play as:</label>
    <select
      id="selectPlayer"
      onChange={(e) => State.update({ pendingPlayer: e.target.value })}
    >
      <option value="X">X</option>
      <option value="O">O</option>
    </select>
    <div class="mb-3">
      <button onClick={newGame}>New Game</button>
    </div>
  </>
);
```

### Demo and Conclusion

This app is live on BOS now! You can play with it yourself [*here*](https://bos.gg/#/nearcon.birchmd.near/widget/Aurora-Tic-Tac-Toe) or view a pre-recorded demo [*here*](https://youtu.be/\_tSuGRN9Lok). To use the demo app, ensure your MetaMask is connected to the Aurora Testnet (the BOS interface might say the network is unrecognized, but it should still work for sending the transactions).

This post explored the Near tech stack for building fully decentralized applications. This entire application is hosted on-chain from the front to the back end. The Near blockchain provides the base computation layer with its WebAssembly-powered runtime, Aurora provides the persistence layer while maintaining easy onboarding in free transactions, and BOS provides a serverless front-end built on the Near blockchain.

I hope you enjoyed this blog post and are feeling inspired to go build some yourself using Aurora, Near, and BOS!
