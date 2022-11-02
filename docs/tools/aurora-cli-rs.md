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
| ----------------------------- | ---------------------------------------------------- |
| engine-call                   | Dry-run EVM call transaction                         |
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
| get-block-hash                | Get block hash from a block number                   |
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
| storage-balance-of            | Get NEAR storage balance of an NEAR account id       |

**Write methods**

| Command            | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| begin-block        | Begin genesis block at Engine EVM state                                 |
| begin-chain        | Initialize EVM state in Engine                                          |
| call               | Execute raw ethereum transaction with 'call' method in Aurora EVM state |
| deploy-code        | Deploy a code at Aurora EVM state with raw transaction                  |
| deploy-erc20-token | Deploy bridged ERC20 token from NEP-141                                 |
| engine-call        | Call a smart contract at an Ethereum address with inputs                |
| engine-erc20       | Transfer from to an ERC20 at an Ethereum address                        |
| engine-xcc         | Execute cross contract call precompiles between NEAR and EVM            |
| factory-update     | Update to Factory setting of Aurora EVM state                           |
| ft-on-transfer     | Callback function to execute on fungible token transfer on bridge       |
| ft-transfer        | Transfer fungible token to receiver NEAR account id                     |
| ft-transfer-call   | Transfer fungible token to receiver NEAR account id                     |
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
| ---------- | ------------------------------------------------ |
| get-result | Get eth transaction result from transaction hash |

**Write methods**

| Command  | Description                    |
| -------- | ------------------------------ |
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
Key paths are required to be filled to execute each write commands.

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

### engine-xcc-dry-run {#engine-xcc-dry-run}

> Dry-run cross compile contract between NEAR and Aurora

- arguments: `none`
- options: `--sender-address-hex <SENDER_ADDRESS_HEX>`, `--sender-address-hex <SENDER_ADDRESS_HEX>`, `--target-near-account <TARGET_NEAR_ACCOUNT>`, `--method-name <METHOD_NAME>`

**Example**

```bash
USAGE:
    aurora-cli-rs near read engine-xcc-dry-run [OPTIONS] --sender-address-hex <SENDER_ADDRESS_HEX> --target-near-account <TARGET_NEAR_ACCOUNT> --method-name <METHOD_NAME>
```

### ft-balance-of {#ft-balance-of}

> Get balance of an fungible token(NEP-141)

- arguments: `ACCOUNT_ID`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read ft-balance-of <ACCOUNT_ID>
```

### ft-balance-of-eth {#ft-balance-of-eth}

> Get balance ETH fungible token(NEP-141)

- arguments: `ACCOUNT_ID`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read ft-balance-of-eth <ACCOUNT_ID>
```

### ft-metadata {#ft-metadata}

> Get metadata for a fungible token

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read ft-metadata
```

### ft-total-eth-supply-on-aurora {#ft-total-eth-supply-on-aurora}

> Get total ETH supply on Aurora (ETH in Aurora EVM)

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read ft-total-eth-supply-on-aurora
```

### ft-total-supply {#ft-total-supply}

> Get total ETH supply on Aurora (ETH in Aurora EVM)

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read ft-total-supply
```

### ft-total-supply-on-near {#ft-total-supply-on-near}

> Get total ETH supply on NEAR (nETH as NEP-141 token)

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read ft-total-supply-on-near
```

### get-accounts-counter {#get-accounts-counter}

> Get total number of accounts for statistics

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-accounts-counter
```

### get-aurora-erc20 {#get-aurora-erc20}

> Get connected Aurora ERC20 token address from NEP-141 account id

- arguments: `NEP_141_ACCOUNT`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-aurora-erc20 <NEP_141_ACCOUNT>
```

### get-balance {#get-balance}

> Get NEP-141 balance from ERC20 address

- arguments: `ADDRESS_HEX`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-balance <ADDRESS_HEX>
```

#### borsh input problem

### get-block-hash {#get-block-hash}

> Get block hash from a block number

- arguments: `BLOCK_NUMBER`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-block-hash <BLOCK_NUMBER>
```

### get-bridged-nep141 {#get-bridged-nep141}

> Get bridged NEP141 from ERC20 token address

- arguments: `ERC_20_ADDRESS_HEX`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-bridged-nep141 <ERC_20_ADDRESS_HEX>
```

### get-chain-id {#get-chain-id}

> Get chain id

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-chain-id
```

### get-code {#get-code}

> Get code

- arguments: `ADDRESS_HEX`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-code <ADDRESS_HEX>
```

### get-engine-bridge-prover {#get-engine-bridge-prover}

> Get engine bridge prover account id

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-engine-bridge-prover
```

### get-nonce {#get-nonce}

> Get nonce of an account from an ethereum address

- arguments: `ADDRESS_HEX`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-nonce <ADDRESS_HEX>
```

### get-paused-flags {#get-paused-flags}

> Get paused flag to see if the state is paused

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-paused-flags <ADDRESS_HEX>
```

### get-receipt-result {#get-receipt-result}

> Get NEAR receipt result from receipt id with base58 encoding

- arguments: `RECIPT_ID_B58`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-receipt-result <RECEIPT_ID_B58>
```

### get-storage-at {#get-storage-at}

> Get storage data at an Ethereum address and a key

- arguments: `ADDRESS_HEX`, `KEY_HEX`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-storage-at <ADDRESS_HEX> <KEY_HEX>
```

#### deprecated

### get-upgrade-index {#get-upgrade-index}

> Get upgrade index

- arguments: `none`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read get-upgrade-index
```

### solidity {#solidity}

> Send ABI encoded query input in a solidity contract

- arguments: `call-args-by-name`, `unary-call`
- options: `--amount <AMOUNT>`, `--sender-addr-hex <SENDER_ADDR_HEX>`, `--target-addr-hex <TARGET_ADDR_HEX>`

**Example**

```bash
USAGE:
    aurora-cli-rs near read solidity [OPTIONS] --target-addr-hex <TARGET_ADDR_HEX> <SUBCOMMAND>

OPTIONS:
    -a, --amount <AMOUNT>
    -h, --help                                 Print help information
    -s, --sender-addr-hex <SENDER_ADDR_HEX>
    -t, --target-addr-hex <TARGET_ADDR_HEX>

SUBCOMMANDS:
    call-args-by-name    Allows invoking a solidity functions by passing in a JSON object. The
                             names of the fields are the argument names of the function, and the
                             values are strings that can be parsed into the correct types
    help                 Print this message or the help of the given subcommand(s)
    unary-call
```

### storage-balance-of {#storage-balance-of}

> Get NEAR storage balance of an NEAR account id

- arguments: `account_id`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near read storage-balance-of <ACCOUNT_ID>
```

## Near write {#near-write}

### begin-block {#begin-block}

> Begin block at Engine EVM state

- arguments: `<HASH>`, `<COINBASE>`, `<TIMESTAMP>`, `<NUMBER>`, `<DIFFICULTY>`, `<GASLIMIT>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write begin-block <HASH> <COINBASE> <TIMESTAMP> <NUMBER> <DIFFICULTY> <GASLIMIT>
```

### begin-chain {#begin-chain}

> Begin Aurora EVM state

- arguments: `<CHAIN_ID>`, `<GENESIS_ALLOC>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write begin-chain <CHAIN_ID> <GENESIS_ALLOC>
```

### call {#call}

> Execute raw ethereum transaction with 'call' method in Aurora EVM state

- arguments: `<CALL_BYTE_HEX>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write call <CALL_BYTE_HEX>
```

### deploy-code {#deploy-code}

> Deploy a code at Aurora EVM state with raw transaction

- arguments: `<CODE_BYTE_HEX>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write deploy-code <CODE_BYTE_HEX>
```

### deploy-erc20-token {#deploy-erc20-token}

> Deploy bridged ERC20 token from NEP-141

- arguments: `<NEP141>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write deploy-erc20-token <NEP141>
```

### engine-call {#engine-call}

> Call a smart contract at an Ethereum address with inputs

- arguments: `none`
- options: `--target-addr-hex <TARGET_ADDR_HEX>`, `--input-data-hex <INPUT_DATA_HEX>`

**Example**

```bash
USAGE:
    aurora-cli-rs near write engine-call [OPTIONS] --target-addr-hex <TARGET_ADDR_HEX> --input-data-hex <INPUT_DATA_HEX>
```

### engine-erc20 {#engine-erc20}

> Transfer from to an ERC20 at an Ethereum address

- arguments: `allowance`, `approve`, `balance-of`, `total-supply`, `transfer`, `transfer-from`
- options: `--amount <AMOUNT>`, `--target-addr-hex <TARGET_ADDR_HEX>`

**Example**

```bash
USAGE:
    aurora-cli-rs near write engine-erc20 [OPTIONS] --target-addr-hex <TARGET_ADDR_HEX> <SUBCOMMAND>

OPTIONS:
    -a, --amount <AMOUNT>
    -h, --help                                 Print help information
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

### engine-xcc {#engine-xcc}

> Execute cross contract call precompiles between NEAR and EVM

- arguments: `none`
- options: `--target-near-account <TARGET_NEAR_ACCOUNT>`, `--method-name <METHOD_NAME>`

**Example**

```bash
USAGE:
    aurora-cli-rs near write engine-xcc [OPTIONS] --target-near-account <TARGET_NEAR_ACCOUNT> --method-name <METHOD_NAME>
```

### factory-update {#factory-update}

> Update to Factory setting of Aurora EVM state

- arguments: `<WASM_BYTES_PATH>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write factory-update <WASM_BYTES_PATH>
```

### ft-on-transfer {#ft-on-transfer}

> Callback function to execute on fungible token transfer on bridge

- arguments: `<SENDER_NEAR_ID>`, `<AMOUNT>`, `<MSG>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write ft-on-transfer <SENDER_NEAR_ID> <AMOUNT> <MSG>
```

### ft-transfer {#ft-transfer}

> Transfer fungible token to receiver NEAR account id

- arguments: `<RECEIVER_ID>`, `<AMOUNT>`, `<MEMO>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write ft-transfer <RECEIVER_ID> <AMOUNT> <MEMO>
```

### ft-transfer-call {#ft-transfer-call}
 
> Transfer fungible token to receiver NEAR account id

- arguments: `<RECEIVER_ID>`, `<AMOUNT>`, `<MEMO>`, `<MSG>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write ft-transfer-call <RECEIVER_ID> <AMOUNT> <MEMO> <MSG>
```

### register-relayer {#register-relayer}

> Register relayer with an Ethereum address

- arguments: `<RELAYER_ETH_ADDRESS_HEX>`
- options: `default`

**Example**

```bash
USAGE:
    aurora-cli-rs near write register-relayer <RELAYER_ETH_ADDRESS_HEX>
```

### set-paused-flags {#set-paused-flags}

> Set EVM state in Aurora as paused or not

- arguments: `<PAUSED_MASK>`
- options: `default`

**Example**
```bash
USAGE:
    aurora-cli-rs near write set-paused-flags <PAUSED_MASK>
```

### solidity {#solidity}

> Send ABI encoded call input in a solidity contract

- arguments: `call-args-by-name`, `unary-call`
- options: `--amount <AMOUNT>`, `--sender-addr-hex <SENDER_ADDR_HEX>`, `--target-addr-hex <TARGET_ADDR_HEX>`

**Example**

```bash
USAGE:
    aurora-cli-rs near write solidity [OPTIONS] --target-addr-hex <TARGET_ADDR_HEX> <SUBCOMMAND>

OPTIONS:
    -a, --amount <AMOUNT>
    -h, --help                                 Print help information
    -s, --sender-addr-hex <SENDER_ADDR_HEX>
    -t, --target-addr-hex <TARGET_ADDR_HEX>

SUBCOMMANDS:
    call-args-by-name    Allows invoking a solidity functions by passing in a JSON object. The
                             names of the fields are the argument names of the function, and the
                             values are strings that can be parsed into the correct types
    help                 Print this message or the help of the given subcommand(s)
    unary-call
```

### storage-deposit {#storage-deposit}

> Deposit NEAR on engine for storage balance 

- arguments: `<ACCOUNT_ID>`
- options: `default`

**Example**
```bash
USAGE:
    aurora-cli-rs near write storage-deposit <ACCOUNT_ID> [REGISTRATION_ONLY]
```

### storage-unregister {#storage-unregister}

> Unregister storage for Aurora Engine     

- arguments: `<FORCE>`
- options: `default`

**Example**
```bash
USAGE:
    aurora-cli-rs near write storage-deposit <FORCE> [REGISTRATION_ONLY]
```

### storage-withdraw {#storage-withdraw}

> Withdraw NEAR from storage balance of Aurora Engine contract

- arguments: `<AMOUNT>`
- options: `default`

**Example**
```bash
USAGE:
    aurora-cli-rs near write storage-withdraw <AMOUNT>
```

### withdraw {#withdraw}

> Withdraw wrapped NEAR to  

- arguments: `<RECIPIENT_ADDRESS>`, `<AMOUNT>`
- options: `default`

**Example**
```bash
USAGE:
    aurora-cli-rs near write withdraw <RECIPIENT_ADDRESS> <AMOUNT>
```

## Aurora read {#aurora-read}

### get-result {#get-result}

> Get eth transaction result from transaction hash 

- arguments: `<TX_HASH_HEX>`
- options: `default`

**Example**
```bash
USAGE:
    aurora-cli-rs aurora read get-result <TX_HASH_HEX>
```

## Aurora write {#aurora-write}

### call {#call}

> Call Ethereum smart contract  

- arguments: `none`
- options: `--target-addr-hex <TARGET_ADDR_HEX>`, `--input-data-hex <INPUT_DATA_HEX>`

```bash
USAGE:
    aurora-cli-rs aurora write call [OPTIONS] --target-addr-hex <TARGET_ADDR_HEX> --input-data-hex <INPUT_DATA_HEX>
```

### deploy {#deploy}

> Deploy Ethereum smart contract

- arguments: `<INPUT_DATA_HEX>`
- options: `default`

**Example**
```bash
USAGE:
    aurora-cli-rs aurora write deploy <INPUT_DATA_HEX>
```

### transfer {#transfer}

> Transfer ETH from coinbase to 

- arguments: `none`
- options: `--target-addr-hex <TARGET_ADDR_HEX>`, `--amount <AMOUNT>`

**Example**
```bash
USAGE:
    aurora-cli-rs aurora write transfer --target-addr-hex <TARGET_ADDR_HEX> --amount <AMOUNT>
```
