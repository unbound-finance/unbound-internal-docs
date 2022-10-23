---
title: Enable / Disable Pages
---

# Enable / Disable Pages
There was a need to enable / disable pages on a per-network basis, like disable the farm page on BSC Mainnet but enable it on Ethereum and Polygon.  
For this reason, all the primary pages can be dynamically toggled on and off for a certain network.

## Enable / Disable a Page
Go to `constants/index.js`  
Look for the variable `enabledPages`, it should look something like:  
```js
/**
 * Pages enabled per chain
 * Format: [Mint, Unlock, Earn, Farm, Stake, UNB Staking, Swap]
 */
export const enabledPages = {
  1: [1, 1, 0, 1, 1, 0, 1], // Ethereum Mainnet
  4: [1, 1, 0, 0, 1, 0, 0], // Rinkeby Testnet
  56: [1, 1, 1, 1, 1, 0, 1], // BSC Mainnet
  97: [1, 1, 0, 1, 1, 0, 0], // BSC Testnet
  137: [1, 1, 1, 1, 1, 0, 1], // Polygon Mainnet
  250: [1, 1, 1, 1, 0, 0, 1], // Fantom Mainnet
  4002: [1, 1, 0, 1, 1, 0, 0], // Fantom Testnet
  43113: [1, 1, 0, 1, 1, 0, 0], // Avalanche Testnet
  43114: [1, 1, 1, 1, 0, 0, 1], // Avalanche Mainnet
  80001: [1, 1, 0, 1, 1, 0, 0], // Polygon Testnet
  1666700000: [1, 1, 0, 1, 1, 0, 0], // Harmony Testnet
}
```
It is a mapping of chain IDs to an array of boolean values, either 0 (false) or 1 (true).

::: info
The **UNB Staking** type of page has been removed, but is in the array for compatibility reasons. If you wish to remove it, make the appropriate change of index number in the pages after it
:::

## How to add a dynamic page
1. Add a new array element for **all** of the chain IDs.
2. Add a new array element in the default array for the getter `getEnabledPages` in `store/index.js`
3. In the page itself, check if the chainId is there, and add this check in `init()` or just on mounted:
   ``` js
    if (!this.$store.state.chainId) return

    // Check if the Mint page (index 0) is enabled
    if (!this.$store.getters.getEnabledPages[0]) {
        await this.$router.push('/')
    }
   ```
   Refer other pages as an example.

## Default enabled pages
The default enabled pages are Mint and Unlock, defined in the getter `getEnabledPages` in `store/index.js`.

```js
getEnabledPages: (state) => {
    if (!state.chainId || !CHAIN_IDS.includes(state.chainId))
      return [1, 1, 0, 0, 0, 0, 0]
    return enabledPages[state.chainId]
}
```
