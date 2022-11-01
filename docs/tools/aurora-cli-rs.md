---
title: Aurora CLI
---

The Aurora Command Line Interface (CLI) is a tool that enables to interact with the Aurora engine directly from the shell. Among other things, the Aurora CLI enables you to:

- Deploy Aurora blockspace on NEAR networks
- Send EVM transactions 
- Interact and test Aurora engine

:::tip 
Under the hood, Aurora CLI utilizes the [`Aurora Engine Rust API`](https://github.com/aurora-is-near/aurora-engine)
:::

## Overview {#overview}

Aurora cli has two subcommands in the context of interacting with Aurora engine as an EVM or a Near smart contract. Each subcommand support methods that reads/write from the Aurora engine state.

_Click on a command for more information and examples._

**Near**

**Read methods**

| Command                       | Description                                          |
|-------------------------------|------------------------------------------------------|
| engine-call                   | Dry-run EVM call transaction                            |
| engine-erc20                  | Look up an ERC20 token in Aurora engine              |
| engine-xcc-dry-run            | Dry run precompiled contract results                 |
| ft-balance-of                 | Get balance of an fungible token                     |
| ft-balance-of-eth             | Get balance of ETH of an Aurora EVM                  |
| ft-metadata                   | Get metadata of Fungible token contract              |
| ft-total-eth-supply-on-aurora | Get total ETH supply on Aurora (ETH in Aurora EVM)   |
| ft-total-supply               | Get total ETH supply on Aurora (ETH in Aurora EVM)   |
| ft-total-supply-on-near       | Get total ETH supply on NEAR (nETH as NEP-141 token) |
| get-accounts-counter          | Get accounts counter for statistics                  |
| get-aurora-erc20              | Get ERC20 balance of from NEP-141 account id         |
| get-balance                   | Get NEP-141 balance from ERC20 address               |
| get-block-hash                | Get current block hash                               |
| get-bridged-nep141            | Get bridged NEP-141 account id from ERC20 address    |
| get-chain-id                  | Get chain id                                         |
| get-code                      | Get code of account storage from an Ethereum address |
| get-engine-bridge-prover      | Get bridge prover address                            |
| get-nonce                     | Get nonce of an account from an Ethereum address     |
| get-paused-flags              | Get paused flag to see if the state is paused        |
| get-receipt-result            | Get NEAR receipt result from receipt id              |
| get-storage-at                | Get storage data at an Ethereum address and a key    |
| get-upgrade-index             | Get upgrade index                                    |
| solidity                      | Send ABI encoded query input in a solidity contract  |
| storage-balance-of            | Get NEAR storage balance of Aurora engine contract   |

**Write methods**

| Command            | Description                                                             |
|--------------------|-------------------------------------------------------------------------|
| begin-block        | Begin block at Engine EVM state                                         |
| begin-chain        | Initialize EVM state in Engine                                          |
| call               | Execute raw ethereum transaction with 'call' method in Aurora EVM state |
| deploy-code        | Deploy a code at Aurora EVM state with raw transaction                  |
| deploy-erc20-token | Deploy bridged ERC20 token from NEP-141                                 |
| engine-call        | Call a smart contract at an Ethereum address with inputs                |
| engine-erc20       | Transfer from to an ERC20 at an Ethereum address                        |
| engine-xcc         | Execute cross contract call precompiles between NEAR and EVM            |
| factory-update     | Update to Factory setting of Aurora EVM state                           |
| ft-on-transfer     | Callback function to execute on fungible token transfer on bridge       |
| ft-transfer        | Bridge transfer                                                         |
| ft-transfer-call   | Get NEP-141 balance from ERC20 address                                  |
| register-relayer   | Register relayer with an Ethereum address                               |
| set-paused-flags   | Set EVM state in Aurora as paused or not                                |
| solidity           | Send ABI encoded call input in a solidity contract                      |
| storage-deposit    | Deposit NEAR on engine for storage balance                              |
| storage-unregister | Unregister storage for Aurora Engine                                    |
| storage-withdraw   | Withdraw storage balance of Aurora engine                               |
| withdraw           | Withdraw wrapped NEAR to                                                |


**Aurora**

**Read methods**

| Command    | Description                                      |
|------------|--------------------------------------------------|
| get-result | Get eth transaction result from transaction hash |

**Write methods**

| Command  | Description                    |
|----------|--------------------------------|
| call     | Call Ethereum smart contract   |
| deploy   | Deploy Ethereum smart contract |
| transfer | Transfer ETH from coinbase to  |

---

## Setup {#setup}

### Installation {#installation}

> Make sure you have a current version of `Cargo` and `Rust` installed.

#### Mac and Linux {#mac-and-linux}

1. Install `cargo` and `rustup` using a command `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
2. Ensure you have installed latest version
3. Install `aurora-cli-rs` globally by running:

```bash
cargo install aurora-cli-rs
```

#### Windows {#windows}

> For Windows users, we recommend using Windows Subsystem for Linux (`WSL`).

1. Install `WSL` [[click here]](https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distros)
2. Install `rustup` [ [ click here ]](https://www.rust-lang.org/tools/install)

```bash
cargo install -g aurora-cli-rs
```

<blockquote class="info">
<strong>heads up</strong><br /><br />

Copy/pasting can be a bit odd using `WSL`.

- "Quick Edit Mode" will allow right-click pasting.
- Depending on your version there may be another checkbox allowing `Ctrl` + `V` pasting as well.


</blockquote>

---

### Update `aurora-cli-rs` {#update-near-cli-rs}

> If a `aurora-cli-rs` update is available, you will be notified in the terminal after running any command. _(see example below)_


- Follow the instructions to update by running:

```bash
cargo install --force aurora-cli-rs
```

- You can always check your current version by running:

```bash
aurora-cli-rs --version  # version info appears on the last line of output
```

**Troubleshooting:**

> If you have any issues upgrading NEAR CLI, the fastest way to resolve the issue is to uninstall then reinstall.

```bash
cargo uninstall aurora-cli-rs
```

```bash
cargo install aurora-cli-rs
```

---

### Network selection {#network-selection}

> The default network for `aurora-cli-rs` is `testnet`.

- You can change the network by prepending an environment variable to your command in a JSON config file.

```bash
{
    "network": "mainnet",
    "engine_account_id": "aurora",
    "aurora_api_key": null,
    "near_key_path": null,
    "evm_secret_key": null
}
```

Save the modified JSON file as `default-config.json` then run `aurora-cli-rs` in the same directory of the file.

---

## Near Read {#near-read}

### engine-call {#engine-call}

> Dry-run EVM call transaction

- arguments: `target_addr_hex`, `input_data_hex`
- options: `default`

**Example:**

```bash
USAGE:
    aurora-cli-rs near read engine-call [OPTIONS] --target-addr-hex <TARGET_ADDR_HEX> --input-data-hex <INPUT_DATA_HEX>
```

### engine-erc20 {#engine-erc20}

> Operate ERC20 on Aurora EVM state

- arguments(subcommands): `allowance`, `approve`, `balance-of`, `total-supply`, `transfer`, `transfer-from`
- options: `--amount <AMOUNT>`, `--sender-addr-hex <SENDER_ADDR_HEX>`, `--target-addr-hex <TARGET_ADDR_HEX>`

**Example**

```bash
USAGE:
    aurora-cli-rs near read engine-erc20 [OPTIONS] --target-addr-hex <TARGET_ADDR_HEX> <SUBCOMMAND>

OPTIONS:
    -a, --amount <AMOUNT>                      
    -h, --help                                 Print help information
    -s, --sender-addr-hex <SENDER_ADDR_HEX>    
    -t, --target-addr-hex <TARGET_ADDR_HEX>    

SUBCOMMANDS:
    allowance        
    approve          
    balance-of       
    help             Print this message or the help of the given subcommand(s)
    total-supply     
    transfer         
    transfer-from    
```

### engine-xcc-dry-run

### ft-balance-of
### ft-balance-of-eth
### ft-metadata
### ft-total-eth-supply-on-aurora
### ft-total-supply
### ft-total-supply-on-near
### get-accounts-counter
### get-aurora-erc20
### get-balance
### get-block-hash
### get-bridged-nep141
### get-chain-id
### get-code
### get-engine-bridge-prover
### get-nonce
### get-paused-flags
### get-receipt-result
### get-storage-at
### get-upgrade-index
### solidity
### storage-balance-of

## Near write {#near-write}

### begin-block
### begin-chain
### call
### deploy-code
### deploy-erc20-token
### engine-call
### engine-erc20
### engine-xcc
### factory-update
### ft-on-transfer
### ft-transfer
### ft-transfer-call
### register-relayer
### set-paused-flags
### solidity
### storage-deposit
### storage-unregister
### storage-withdraw
### withdraw

## Aurora read

### get-result

## Aurora write

### call
### deploy
### transfer
