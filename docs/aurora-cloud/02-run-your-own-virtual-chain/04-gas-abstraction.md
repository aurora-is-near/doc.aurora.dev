# 🔓 Introduction: what is gas abstraction?

On traditional blockchains, every user must pay gas to interact with the network — typically in the network’s native token. This often creates friction for users, especially those unfamiliar with crypto, and makes onboarding more complex.

With **Aurora Virtual Chains**, **gas abstraction is built in**. This means you have complete control over how (or whether) users pay gas.

- You can **choose which token is used for gas** (defined by the base token).
- You can **subsidize gas for your users entirely**.
- You can **implement logic to selectively sponsor** gas based on user profile, app usage, or time-limited campaigns.

> 🧠 **Behind the scenes**: While your users may never see gas fees, the Aurora Engine still pays NEAR gas to settle all transactions on the NEAR protocol. This needs to be covered by the chain administrator who sponsors the transactions.

---

# ⚙️ How gas fees are handled: flexible options

When launching your Virtual Chain, you can define **how gas is charged to users**. Aurora offers three core billing models:

## 1. Usage-based gas fees (standard model)

This follows the conventional EVM approach:
- Gas is calculated per transaction based on computation and storage usage.
- The base token you define (e.g. $USDT, $AURORA) is used for payment.
- You can define the price per gas used in this calculation.

This gives users cost transparency and aligns with familiar blockchain behavior.

## 2. Fixed gas fees (simplified UX)

If you want to streamline the user experience:
- Set a flat gas fee for all transactions.
- Example: "Each transaction costs 0.01 $USDT, regardless of what it does."

This helps apps provide predictable costs and avoid user confusion over fluctuating fees.

## 3. Fully gasless for users

If you want a **Web2-like experience**, you can make your chain **completely gas-free for end users**:
- Users interact with your dApp without needing tokens to cover gas.
- The chain still pays NEAR gas under the hood, but this is fully abstracted away from users.

This model is ideal for onboarding new users, building consumer apps, or running seamless in-game experiences.

---

# 🎁 Advanced gas sponsorship: who gets free transactions, and when

Many blockchains offer binary gas sponsorship — either all users get free gas, or none do. Aurora takes it further by allowing **full flexibility** on **who** benefits and **under what conditions**.

This enables you to **strategically manage your gas budget** while optimizing for growth, retention, or monetization.

You don’t just turn free gas “on” — you design rules.

---

# 🧠 Rule engine: create smart gas subsidy campaigns

Aurora includes a built-in **rule engine** for managing gas-free transactions. You can define **plans** that determine when a user’s transaction should be sponsored.

Each plan can combine conditions such as:

- ✅ **Wallet whitelists** – Only approved addresses receive the benefit.
- ✅ **Contract filters** – Limit sponsorship to specific smart contracts.
- 🔢 **Transaction quotas** – Cap the number of free transactions per user or for the overall plan.
- 🗓️ **Timeframes** – Define when the plan is active and how long limits last.

---

# 🔌 Dynamic control via API

You don’t need to manage whitelists manually. Aurora’s infrastructure allows you to **programmatically populate and update whitelists via API**, making it easy to integrate gas sponsorship into:

- KYC flows or account tiers
- Subscriptions or payment systems
- User segmentation based on usage or roles

This means your backend can dynamically grant or revoke gas-free access in real time, based on your app’s logic or business model.

---

# 🧪 Real-world examples

## 🎯 Launch promo  
> “I want every user who interacts with Contract A to get 10 free transactions per month.”  
⏱ Ends after 2 months or 10,000 transactions — whichever comes first.

## 💎 Subscription tier  
> “Premium users (paying subscribers) can use 50 free transactions/month across 5 key contracts.”  
🔄 Access is maintained as long as their subscription is active.

## 🛍 Limited-time offer  
> “For Black Friday weekend, anyone interacting with our DEX gets free gas — up to 50,000 transactions total.”  
🎉 No per-user limit. Great for driving volume over a short period.
