---
title: "Aurora CLI"
---
# Aurora CLI
Aurora CLI is a command line interface to bootstrap Aurora Engine with rapid speed built with rust.

##  Usage

### Requirements
- Rust 1.68.0 or newer
- Python3

### Install
```shell
git clone https://github.com/aurora-engine/aurora-cli-rs
cd aurora-cli-rs && cargo install --path . 
```

### Setup

1. Start a NEAR node locally:
```shell
nearup run localnet --home /tmp/localnet
```
2. Prepare an account and create a private key file for Aurora EVM:
```shell
aurora-cli --near-key-path /tmp/localnet/node0/validator_key.json create-account \
  --account aurora.node0 --balance 100 > /tmp/localnet/aurora_key.json
```
3. Check if the account has been created successfully:
```shell
aurora-cli view-account aurora.node0
```

### Download and Deploy Aurora EVM
1. Download the latest version of Aurora EVM:
```shell
curl -sL https://github.com/aurora-is-near/aurora-engine/releases/download/latest/aurora-mainnet.wasm -o /tmp/aurora-mainnet.wasm
```
2. Deploy Aurora EVM:
```shell
aurora-cli --near-key-path /tmp/localnet/aurora_key.json deploy-aurora /tmp/aurora-mainnet.wasm
```
3. Initialize Aurora EVM:
```shell
aurora-cli --engine aurora.node0 --near-key-path /tmp/localnet/aurora_key.json init --chain-id 1313161556 --owner-id aurora.node0
```

### Deploy and Interact with the EVM Contract

1. Generate a private key for signing transactions:
```shell
aurora-cli key-pair --random
```
2. Deploy the EVM smart contract:
```shell
aurora-cli --engine aurora.node0 --near-key-path /tmp/localnet/aurora_key.json deploy \
  --code $(cat docs/res/Counter.hex) \
  --abi-path docs/res/Counter.abi \
  --args '{"init_value":"5"}' \
  --aurora-secret-key 3fac6dca1c6fc056b971a4e9090afbbfbdf3bc443e9cda595facb653cb1c01e1

```
3. Interact with the smart contract:
  - View the current value of the contract:
  ```shell
  aurora-cli --engine aurora.node0 view-call -a 0x53a9fed853e02a39bf8d298f751374de8b5a6ddf -f value \
  --abi-path docs/res/Counter.abi
  ```
  - Increment the value of the contract:
  ```shell
  aurora-cli --engine aurora.node0 --near-key-path /tmp/localnet/aurora_key.json call \
  --address 0x53a9fed853e02a39bf8d298f751374de8b5a6ddf \
  -f increment \
  --abi-path docs/res/Counter.abi \
  --aurora-secret-key 3fac6dca1c6fc056b971a4e9090afbbfbdf3bc443e9cda595facb653cb1c01e1
  ```
  - Verify the new value of the contract:
  ```shell
  aurora-cli --engine aurora.node0 view-call -a 0x53a9fed853e02a39bf8d298f751374de8b5a6ddf -f value \
  --abi-path docs/res/Counter.abi
  ```

## Reference
- [`aurora-cli help`](#aurora-cli-help)
- [`aurora-cli create-account`](#aurora-cli-create-account)
- [`aurora-cli view-account`](#aurora-cli-view-account)
- [`aurora-cli deploy-aurora`](#aurora-cli-deploy-aurora)
- [`aurora-cli init`](#aurora-cli-init)
- [`aurora-cli get-chain-id`](#aurora-cli-get-chain-id)
- [`aurora-cli get-nonce`](#aurora-cli-get-nonce)
- [`aurora-cli get-block-hash`](#aurora-cli-get-block-hash)
- [`aurora-cli get-code`](#aurora-cli-get-code)
- [`aurora-cli get-balance`](#aurora-cli-get-balance)
- [`aurora-cli get-upgrade-index`](#aurora-cli-get-upgrade-index)
- [`aurora-cli get-version`](#aurora-cli-get-version)
- [`aurora-cli get-owner`](#aurora-cli-get-owner)
- [`aurora-cli set-owner`](#aurora-cli-set-owner)
- [`aurora-cli get-bridge-prover`](#aurora-cli-get-bridge-prover)
- [`aurora-cli get-storage-at`](#aurora-cli-get-storage-at)
- [`aurora-cli register-relayer`](#aurora-cli-register-relayer)
- [`aurora-cli pause-precompiles`](#aurora-cli-pause-precompiles)
- [`aurora-cli resume-precompiles`](#aurora-cli-resume-precompiles)
- [`aurora-cli paused-precompiles`](#aurora-cli-paused-precompiles)
- [`aurora-cli factory-update`](#aurora-cli-factory-update)
- [`aurora-cli factory-set-wnear-address`](#aurora-cli-factory-set-wnear-address)
- [`aurora-cli fund-xcc-sub-account`](#aurora-cli-fund-xcc-sub-account)
- [`aurora-cli stage-upgrade`](#aurora-cli-stage-upgrade)
- [`aurora-cli deploy-upgrade`](#aurora-cli-deploy-upgrade)
- [`aurora-cli deploy`](#aurora-cli-deploy)
- [`aurora-cli view-call`](#aurora-cli-view-call)
- [`aurora-cli call`](#aurora-cli-call)
- [`aurora-cli encode-address`](#aurora-cli-encode-address)
- [`aurora-cli key-pair`](#aurora-cli-key-pair)
- [`aurora-cli get-whitelist-status`](#aurora-cli-get-whitelist-status)
- [`aurora-cli set-whitelist-status`](#aurora-cli-set-whitelist-status)
- [`aurora-cli add-entry-to-whitelist`](#aurora-cli-add-entry-to-whitelist)
- [`aurora-cli add-entry-to-whitelist-batch`](#aurora-cli-add-entry-to-whitelist-batch)
- [`aurora-cli remove-entry-from-whitelist`](#aurora-cli-remove-entry-from-whitelist)

### `aurora-cli help`

```console
$ aurora-cli help
Simple command line interface for communication with Aurora Engine

Usage: aurora-cli [OPTIONS] <COMMAND>

Commands:
  create-account                Create new NEAR account
  view-account                  View NEAR account
  deploy-aurora                 Deploy Aurora EVM smart contract
  init                          Initialize Aurora EVM and ETH connector
  get-chain-id                  Return chain id of the network
  get-nonce                     Return next nonce for address
  get-block-hash                Return block hash of the specified height
  get-code                      Return smart contract's code for contract address
  get-balance                   Return balance for address
  get-upgrade-index             Return a height for a staged upgrade
  get-version                   Return Aurora EVM version
  get-owner                     Return Aurora EVM owner
  set-owner                     Set a new owner of Aurora EVM
  get-bridge-prover             Return bridge prover
  get-storage-at                Return a value from storage at address with key
  register-relayer              Register relayer address
  pause-precompiles             Pause precompiles
  resume-precompiles            Resume precompiles
  paused-precompiles            Return paused precompiles
  factory-update                Updates the bytecode for user's router contracts
  factory-set-wnear-address     Sets the address for the `wNEAR` ERC-20 contract
  fund-xcc-sub-account          Create and/or fund an XCC sub-account directly
  stage-upgrade                 Stage a new code for upgrade
  deploy-upgrade                Deploy staged upgrade
  deploy                        Deploy EVM smart contract's code in hex
  view-call                     Call a view method of the smart contract
  call                          Call a modified method of the smart contract
  encode-address                Encode address
  key-pair                      Return Public and Secret ED25519 keys
  get-fixed-gas-cost            Return fixed gas cost
  set-fixed-gas-cost            Set fixed gas cost
  get-whitelist-status          Return a status of the whitelist
  set-whitelist-status          Set a status for the whitelist
  add-entry-to-whitelist        Add entry into the whitelist
  add-entry-to-whitelist-batch  Add entries into the whitelist
  remove-entry-from-whitelist   Remove the entry from the whitelist
  help                          Print this message or the help of the given subcommand(s)

Options:
      --network <NETWORK>              NEAR network ID [default: localnet]
      --engine <ACCOUNT_ID>            Aurora EVM account [default: aurora]
      --near-key-path <NEAR_KEY_PATH>  Path to file with NEAR account id and secret key in JSON format
  -h, --help                           Print help
  -V, --version                        Print version
```

### `aurora-cli view-account`

```console
$ aurora-cli help create-account
Create new NEAR account

Usage: aurora-cli create-account --account <ACCOUNT> --balance <BALANCE>

Options:
  -a, --account <ACCOUNT>  AccountId
  -b, --balance <BALANCE>  Initial account balance in NEAR
  -h, --help               Print help
```

### `aurora-cli create-account`

```console
$ aurora-cli help view-account
View NEAR account

Usage: aurora-cli view-account <ACCOUNT>

Arguments:
  <ACCOUNT>  AccountId

Options:
  -h, --help  Print help
```

### `aurora-cli deploy-aurora`

```console
$ aurora-cli help deploy-aurora
Deploy Aurora EVM smart contract

Usage: aurora-cli deploy-aurora <PATH>

Arguments:
  <PATH>  Path to the WASM file

Options:
  -h, --help  Print help
```

### `aurora-cli init`

```console
$ aurora-cli help init
Initialize Aurora EVM and ETH connector

Usage: aurora-cli init [OPTIONS]

Options:
      --chain-id <CHAIN_ID>
          Chain ID [default: 1313161556]
      --owner-id <OWNER_ID>
          Owner of the Aurora EVM
      --bridge-prover-id <BRIDGE_PROVER_ID>
          Account of the bridge prover
      --upgrade-delay-blocks <UPGRADE_DELAY_BLOCKS>
          How many blocks after staging upgrade can deploy it
      --custodian-address <CUSTODIAN_ADDRESS>
          Custodian ETH address
      --ft-metadata-path <FT_METADATA_PATH>
          Path to the file with the metadata of the fungible token
  -h, --help
          Print help
```

### `aurora-cli get-chain-id`

```console
$ aurora-cli help get-chain-id
Return chain id of the network

Usage: aurora-cli get-chain-id

Options:
  -h, --help  Print help
```

### `aurora-cli get-nonce`

```console
$ aurora-cli help get-nonce
Return next nonce for address

Usage: aurora-cli get-nonce <ADDRESS>

Arguments:
  <ADDRESS>  

Options:
  -h, --help  Print help

```

### `aurora-cli get-block-hash`

```console
$ aurora-cli help get-block-hash
Return block hash of the specified height

Usage: aurora-cli get-block-hash <HEIGHT>

Arguments:
  <HEIGHT>  

Options:
  -h, --help  Print help
```

### `aurora-cli get-code`

```console
$ aurora-cli help get-code
Return smart contract's code for contract address

Usage: aurora-cli get-code <ADDRESS>

Arguments:
  <ADDRESS>  

Options:
  -h, --help  Print help

```

### `aurora-cli get-balance`

```console
$ aurora-cli help get-balance
Return balance for address

Usage: aurora-cli get-balance <ADDRESS>

Arguments:
  <ADDRESS>  

Options:
  -h, --help  Print help
```

### `aurora-cli get-upgrade-index`

```console
$ aurora-cli help get-upgrade-index
Return a height for a staged upgrade

Usage: aurora-cli get-upgrade-index

Options:
  -h, --help  Print help
```

### `aurora-cli get-version`

```console
$ aurora-cli help get-version
Return Aurora EVM version

Usage: aurora-cli get-version

Options:
  -h, --help  Print help
```

### `aurora-cli get-owner`

```console
$ aurora-cli help get-owner
Return Aurora EVM owner

Usage: aurora-cli get-owner

Options:
  -h, --help  Print help
```

### `aurora-cli set-owner`

```console
$ aurora-cli help set-owner
Set a new owner of Aurora EVM

Usage: aurora-cli set-owner <ACCOUNT_ID>

Arguments:
  <ACCOUNT_ID>  

Options:
  -h, --help  Print help
```

### `aurora-cli get-bridge-prover`

```console
$ aurora-cli help get-bridge-prover
Return bridge prover

Usage: aurora-cli get-bridge-prover

Options:
  -h, --help  Print help
```

### `aurora-cli get-storage-at`

```console
$ aurora-cli help get-storage-at
Return a value from storage at address with key

Usage: aurora-cli get-storage-at --address <ADDRESS> --key <KEY>

Options:
  -a, --address <ADDRESS>  
  -k, --key <KEY>          
  -h, --help  Print help
```

### `aurora-cli register-relayer`

```console
$ aurora-cli help register-relayer
Register relayer address

Usage: aurora-cli register-relayer <ADDRESS>

Arguments:
  <ADDRESS>  

Options:
  -h, --help  Print help
```

### `aurora-cli pause-precompiles`

```console
$ aurora-cli help pause-precompiles
Pause precompiles

Usage: aurora-cli pause-precompiles <MASK>

Arguments:
  <MASK>  

Options:
  -h, --help  Print help
```

### `aurora-cli resume-precompiles`

```console
$ aurora-cli help resume-precompiles
Resume precompiles

Usage: aurora-cli resume-precompiles <MASK>

Arguments:
  <MASK>  

Options:
  -h, --help  Print help
```

### `aurora-cli paused-precompiles`

```console
$ aurora-cli help paused-precompiles
Return paused precompiles

Usage: aurora-cli paused-precompiles

Options:
  -h, --help  Print help
```

### `aurora-cli factory-update`

```console
$ aurora-cli help factory-update
Updates the bytecode for user's router contracts

Usage: aurora-cli factory-update <PATH>

Arguments:
  <PATH>  

Options:
  -h, --help  Print help
```

### `aurora-cli factory-set-wnear-address`

```console
$ aurora-cli help factory-set-wnear-address
Sets the address for the `wNEAR` ERC-20 contract

Usage: aurora-cli factory-set-wnear-address <ADDRESS>

Arguments:
  <ADDRESS>  

Options:
  -h, --help  Print help
```

### `aurora-cli fund-xcc-sub-account`

```console
$ aurora-cli help fund-xcc-sub-account
Create and/or fund an XCC sub-account directly

Usage: aurora-cli fund-xcc-sub-account <TARGET> [WNEAR_ACCOUNT_ID] <DEPOSIT>

Arguments:
  <TARGET>            Address of the target
  [WNEAR_ACCOUNT_ID]  Wnear Account Id
  <DEPOSIT>           Attached deposit in NEAR

Options:
  -h, --help  Print help
```

### `aurora-cli stage-upgrade`

```console
$ aurora-cli help stage-upgrade
Stage a new code for upgrade

Usage: aurora-cli stage-upgrade <PATH>

Arguments:
  <PATH>  

Options:
  -h, --help  Print help
```

### `aurora-cli deploy-upgrade`

```console
$ aurora-cli help deploy-upgrade
Deploy staged upgrade

Usage: aurora-cli deploy-upgrade

Options:
  -h, --help  Print help
```

### `aurora-cli deploy`

```console
$ aurora-cli help deploy
Deploy EVM smart contract's code in hex

Usage: aurora-cli deploy [OPTIONS] --code <CODE>

Options:
      --code <CODE>                            Code in HEX to deploy
      --args <ARGS>                            Constructor arguments with values in JSON
      --abi-path <ABI_PATH>                    Path to ABI of the contract
      --aurora-secret-key <AURORA_SECRET_KEY>  Aurora EVM secret key
  -h, --help                                   Print help
```

### `aurora-cli view-call`

```console
$ aurora-cli help view-call
Call a view method of the smart contract

Usage: aurora-cli view-call [OPTIONS] --address <ADDRESS> --function <FUNCTION> --abi-path <ABI_PATH>

Options:
  -a, --address <ADDRESS>    Address of the smart contract
  -f, --function <FUNCTION>  Name of the function to call
      --args <ARGS>          Arguments with values in JSON
      --abi-path <ABI_PATH>  Path to ABI of the contract
  -h, --help                 Print help
```

### `aurora-cli call`

```console
aurora-cli help call
Call a modified method of the smart contract

Usage: aurora-cli call [OPTIONS] --address <ADDRESS> --function <FUNCTION> --abi-path <ABI_PATH>

Options:
  -a, --address <ADDRESS>                      Address of the smart contract
  -f, --function <FUNCTION>                    Name of the function to call
      --args <ARGS>                            Arguments with values in JSON
      --abi-path <ABI_PATH>                    Path to ABI of the contract
      --value <VALUE>                          Value sending in EVM transaction
      --aurora-secret-key <AURORA_SECRET_KEY>  Aurora EVM secret key
  -h, --help                                   Print help
```

### `aurora-cli encode-address`

```console
$ aurora-cli help encode-address
Encode address

Usage: aurora-cli encode-address <ACCOUNT>

Arguments:
  <ACCOUNT>  

Options:
  -h, --help  Print help
```

### `aurora-cli key-pair`

```console
$ aurora-cli help key-pair
Return Public and Secret ED25519 keys

Usage: aurora-cli key-pair [OPTIONS]

Options:
      --random       Random
      --seed <SEED>  From seed
  -h, --help         Print help
```

### `aurora-cli get-whitelist-status`

```console
$ aurora-cli help get-whitelist-status
Return a status of the whitelist

Usage: aurora-cli get-whitelist-status <KIND>

Arguments:
  <KIND>  Kind of the whitelist

Options:
  -h, --help  Print help
```

### `aurora-cli set-whitelist-status`

```console
$ aurora-cli help set-whitelist-status
Set a status for the whitelist

Usage: aurora-cli set-whitelist-status --kind <KIND> --status <STATUS>

Options:
      --kind <KIND>      Kind of the whitelist
      --status <STATUS>  Status of the whitelist, 0/1
  -h, --help             Print help
```

### `aurora-cli add-entry-to-whitelist`

```console
aurora-cli help add-entry-to-whitelist
Add entry into the whitelist

Usage: aurora-cli add-entry-to-whitelist --kind <KIND> --entry <ENTRY>

Options:
      --kind <KIND>    Kind of the whitelist
      --entry <ENTRY>  Entry for adding to the whitelist
  -h, --help           Print help
```

### `aurora-cli add-entry-to-whitelist-batch`

```console
$ aurora-cli help add-entry-to-whitelist-batch
Add entries into the whitelist

Usage: aurora-cli add-entry-to-whitelist-batch <PATH>

Arguments:
  <PATH>  Path to JSON file with array of entries

Options:
  -h, --help  Print help
```

### `aurora-cli remove-entry-from-whitelist`

```console
$ aurora-cli help remove-entry-from-whitelist
Remove the entry from the whitelist

Usage: aurora-cli remove-entry-from-whitelist --kind <KIND> --entry <ENTRY>

Options:
      --kind <KIND>    Kind of the whitelist
      --entry <ENTRY>  Entry for removing from the whitelist
  -h, --help           Print help
```