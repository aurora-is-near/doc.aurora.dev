---
title: "Contract Callbacks in XCC"
description: "In this post we focus on the need to refund tokens to a user in the event of an error. This will reveal a bit of a “gotcha” which developers new to the XCC may come across, and we’ll discuss how to overcome it"
date: "2023-11-17"
authors: [michael]
tags: [tutorials]
image: https://www.datocms-assets.com/95026/1700215626-xcc-cc.png
---
In previous posts, we have written about the cross-contract calls (XCC) feature on Aurora. These include [*an overview*](/blog/cross-ecosystem-communication), [*an application*](/blog/building-a-game-using-near-aurora-and-bos), and a [*deep dive into writing tests*](/blog/communication-from-aurora-to-near-local-testing).

In this post, we continue with the XCC technical deep dive by discussing in more detail handling XCC results using callbacks. In particular, we focus on the concrete example of needing to refund tokens to a user in the event of an error. Along the way, this example will reveal a bit of a “gotcha” which developers new to the XCC feature may come across, and we’ll discuss how to overcome it.

<!-- truncate -->

## The Scenario

This scenario comes from [*an example*](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/76cb2f4f5932b5b9dd887834e1f7528cdeb1837c/examples/ft-refund) present in the Aurora Contracts SDK. In the example, we suppose there is a contract for some Near app, A, which works with a [*NEP-141*](https://nomicon.io/Standards/Tokens/FungibleToken/Core) token, T, that has also been bridged to Aurora.

Our goal is to use XCC to allow Aurora users to interact with A using the ERC-20 version of T tokens they have on Aurora. We specifically want to handle the case where if there is an error in A, then the tokens are automatically returned to the user’s address on Aurora.

## The Contracts

### The NEP-141 Token T

This is a totally standard [*NEP-141*](https://nomicon.io/Standards/Tokens/FungibleToken/Core) token done with the [*reference implementation*](https://docs.rs/near-contract-standards/latest/near_contract_standards/fungible_token/index.html). The only thing to say about this is that the mint function is public for the sake of the example.

```rust
#[near_bindgen]
#[derive(BorshSerialize, BorshDeserialize, PanicOnDefault)]
pub struct Contract {
    name: String,
    symbol: String,
    decimals: u8,
    token: FungibleToken,
}

#[near_bindgen]
impl Contract {
    #[init]
    pub fn new(name: String, symbol: String, decimals: u8) -> Self {
        Self {
            name,
            symbol,
            decimals,
            token: FungibleToken::new(b"t".to_vec()),
        }
    }

    #[payable]
    pub fn mint(&mut self, account_id: AccountId, amount: U128) {
        self.token.internal_deposit(&account_id, amount.into());
    }

    pub fn burn(&mut self, account_id: AccountId, amount: U128) {
        self.token.internal_withdraw(&account_id, amount.into());
    }
}

near_contract_standards::impl_fungible_token_core!(Contract, token);
near_contract_standards::impl_fungible_token_storage!(Contract, token);
```

### The Near App Contract A

This is a very simple contract which only implements the ft_on_transfer function from the NEP-141 spec, thus allowing it to receive T tokens. The implementation of that function is also simple. It either accepts all the tokens or if the attached message is `refund` then it sends back all the tokens minus a small fee. This “refund” case is what we will focus on since it is in that situation that the returned tokens need to be given back to the user’s address on Aurora.

```rust
// A fee that is taken from amounts that are requested to be refunded.
const FEE: u128 = 77;

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, Default)]
pub struct FtRefund;

#[near_bindgen]
impl FungibleTokenReceiver for FtRefund {
    fn ft_on_transfer(
        &mut self,
        sender_id: AccountId,
        amount: U128,
        msg: String,
    ) -> PromiseOrValue<U128> {
        if &msg == "refund" {
            let return_amount = amount.0.saturating_sub(FEE);
            PromiseOrValue::Value(U128(return_amount))
        } else {
            PromiseOrValue::Value(0.into())
        }
    }
}
```

### The Solidity Contract

This contract uses the XCC feature to allow Aurora users to interact with the Near App Contract. The main entry point is ftTransferCall which takes as input the address of an ERC-20 token bridged from a NEP-141 token, the Near account name of that NEP-141 token, and an amount of tokens. The contract takes the user’s ERC-20 token on Aurora, bridges them back as NEP-141 tokens on its XCC account on Near, and then uses that account to send the NEP-141 tokens to the Near App Contract via `ft_transfer_call`.

```solidity
function ftTransferCall(
    IEvmErc20 token,
    string memory tokenId,
    uint128 amount
) public {
    token.transferFrom(msg.sender, address(this), amount);
    token.withdrawToNear(
        abi.encodePacked(AuroraSdk.nearRepresentative(address(this))),
        uint(amount)
    );

    bytes memory data = abi.encodePacked(
        "{",
        '"receiver_id": "',
        nearAccountId,
        '",',
        '"amount": "',
        Strings.toString(amount),
        '",',
        '"msg": "refund"',
        "}"
    );
    PromiseCreateArgs memory callFtTransfer = near.call(
        tokenId,
        "ft_transfer_call",
        data,
        1,
        FT_TRANSFER_CALL_NEAR_GAS
    );
    PromiseCreateArgs memory callback = near.auroraCall(
        address(this),
        abi.encodeWithSelector(
            this.ftTransferCallCallback.selector,
            msg.sender,
            tokenId,
            amount
        ),
        0,
        CALLBACK_NEAR_GAS
    );

    callFtTransfer.then(callback).transact();
}
```

There is also a callback for this function which handles the result of that XCC call. The callback is defined in the function ftTransferCallCallback. The logic of this function is to check if there are any tokens that need to be returned to the user on Aurora, and if there are, bridge them back to the user’s address using another ft_transfer_call from the NEP-141 token to Aurora.

```solidity
function ftTransferCallCallback(
    address sender,
    string memory tokenIdOnNear,
    uint128 amount
) public onlyRole(CALLBACK_ROLE) {
    PromiseResult memory promiseResult = AuroraSdk.promiseResult(0);
    uint128 refundAmount = 0;

    if (promiseResult.status != PromiseResultStatus.Successful) {
        // if Promise failed we need to do whole refund
        refundAmount = amount;
    } else {
        // else `ft_resolve_transfer` will return used amount of FT,
        // which we need to extract from original amount
        uint128 usedAmount = _stringToUint(string(promiseResult.output));
        refundAmount = amount - usedAmount;
    }

    if (refundAmount > 0) {
        bytes memory data = abi.encodePacked(
            "{",
            '"receiver_id": "',
            AuroraSdk.currentAccountId(),
            '",',
            '"amount": "',
            Strings.toString(refundAmount),
            '",',
            '"msg": "',
            _toHexString(uint160(sender), 20),
            '"}'
        );
        PromiseCreateArgs memory callFtTransfer = near.call(
            tokenIdOnNear,
            "ft_transfer_call",
            data,
            1,
            REFUND_NEAR_GAS
        );
        callFtTransfer.transact();
    }
}
```

## The Trap

So far so good, everything looks straightforward. But this is where we hit a small “gotcha”. The NEP-141 token standard requires attaching 1 yoctoNEAR to ft_transfer_call. This means not only is ftTransferCall spending 1 yoctoNEAR, but so is ftTransferCallCallback in the case that a refund is needed. Someone needs to pay for this cost, and the Aurora Contact SDK [*passes that cost on to the caller of the function*](https://github.com/aurora-is-near/aurora-contracts-sdk/blob/76cb2f4f5932b5b9dd887834e1f7528cdeb1837c/aurora-solidity-sdk/src/AuroraSdk.sol#L142).

In the case of ftTransferCall, that caller is the user, no problem. But who is the caller in the case of ftTransferCallCallback? One hint comes from the permissions on ftTransferCallCallback. It can only be called by the `CALLBACK_ROLE`, which is only assigned to the address computed from `AuroraSdk.nearRepresentitiveImplicitAddress(address(this))`. Therefore this address must approve the Solidity contract to spend its wNEAR in order for it to cover the 1 yoctoNEAR cost in the callback.

This is the reason for the approveWNEAR function, which is also present in the Solidity contract. It does this approval so that wNEAR can be spent in the callback.

```solidity
function approveWNEAR() public {
    uint256 amount = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF;
    PromiseCreateArgs memory approveCall = near.auroraCall(
        address(this.wNEAR()),
        abi.encodeWithSelector(
            0x095ea7b3, // approve method selector
            address(this),
            amount
        ),
        0,
        APPROVE_NEAR_GAS
    );
    approveCall.transact();
}
```

The need for this function is rather quirky. Logically `nearRepresentitiveImplicitAddress` should be the identity function because it is returning the address on Aurora that corresponds to the XCC account of an Aurora address; meaning that the only way transactions can come from the `nearRepresentitiveImplicitAddress(address)` is if they were originally sent from the address itself.

Unfortunately, it is not the identity function because the notion of an implicit Aurora address for any named account on Near was defined long before the XCC feature was invented. The implementation of this is the most natural one: derive the address from the named account the same way addresses are derived from a public key; take the hash and use the last 20 bytes. Composing this implementation with the way XCC accounts are named results in returning a different address than we started with.

```rust
// The XCC account for an Aurora address is a subaccount of Aurora.
fn near_representative(address: Address) -> AccountId {
    format!("{}.aurora", hex::encode(address))
}

// The implicit address on Aurora of a Near account is derived
// in the "obvious" way.
fn aurora_implicit_address(account: AccountId) -> Address {
    hash(account)[12..32]
}

// Composing these functions logically should be the identity function,
// but these implementations do not do that unfortunately.
fn near_representative_implicit_address(address: Address) -> Address {
    let result = aurora_implicit_address(near_representative(address));
    debug_assert!(result != address);
    result
}
```

## Conclusion

In conclusion, it is important to remember when working with XCC that there are two addresses which logically correspond to the contract you are working with. One is, of course, the address where the contract is deployed, `address(this)`. The other is the address which becomes the caller in XCC callbacks, `AuroraSdk.nearRepresentitiveImplicitAddress(address(this))`. Sometimes it will be important to have a contract “approve itself” when it comes to spending tokens because these two addresses are different.

To check your understanding of this post, take a look at the full code for this token refund [*example on GitHub*](https://github.com/aurora-is-near/aurora-contracts-sdk/tree/76cb2f4f5932b5b9dd887834e1f7528cdeb1837c/examples/ft-refund) and play with it yourself! What happens when you remove [*the call to approveWNEAR from the integration test*](https://github.com/aurora-is-near/aurora-contracts-sdk/blob/76cb2f4f5932b5b9dd887834e1f7528cdeb1837c/examples/ft-refund/integration-tests/src/lib.rs#L203C1-L223C47)? What error do you see and why?
