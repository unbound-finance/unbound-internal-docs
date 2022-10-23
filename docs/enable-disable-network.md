---
title: Enable / Disable a Network
---

# Enable / Disable a Network
In `constants/index.js`, edit the variable `CHAIN_ID_MAPPINGS`.  
Every network here will be enabled for use. If you comment out a network, it will not be allowed and will also be removed from the network select menu.

```js {14}
/**
 * Chain IDs Allowed
 */
export const CHAIN_ID_MAPPINGS = {
  1: 'Ethereum Mainnet',
  56: 'BSC Mainnet',
  137: 'Polygon Mainnet',
  4: 'Rinkeby',
  97: 'BSC Testnet',
  250: 'Fantom Mainnet',
  4002: 'Fantom Testnet',
  43113: 'Avalanche Testnet',
  43114: 'Avalanche Mainnet',
//   80001: 'Polygon Testnet',
  1666700000: 'Harmony Testnet',
}
```
