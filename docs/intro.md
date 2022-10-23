---
title: Introduction
---

# Introduction

Unbound v1 has the following primary operations:
1. **Mint** - Deposit Liquidity Pool Tokens (LPTs) as collateral to receive UND, minus a fee
2. **Unlock** - Deposit UND to get back your LP tokens
3. **Stake, Farm and Earn** - Multiple farms and staking methods to utilize your minted UND and increase returns (yield)

---

#### Technical Background
The project was created in NuxtJS with Vue 2 without TypeScript. It used static values and configs for the most part, since it was usually dealing with ETH, DAI and similar tokens which have 18 decimals.  

A lot has changed since then. TypeScript and Dynamic code and configurations have been progressively added to the project to make the development and deployment process easier, faster and bug-free.  

However, with the base being static-focused, you may encounter instances where TypeScript causes issues or the code is a bit bloated. This has been reduced significantly but is a point to note.