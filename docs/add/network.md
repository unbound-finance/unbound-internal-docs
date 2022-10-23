---
title: Add a new Network
---

# Add a new Network

Let's say we are adding a new hypothetical chain called `Leaf Mainnet` with chain ID `42096` and assuming any other values required.  

The two files we will need to change are:
- constants/index.js
- tailwind.config.js

## Steps to add a new network:
1. In `constants/index.js`, add to the following variables.
   - CHAIN_ID_MAPPINGS
   - CHAIN_ICONS
   - enabledPages
   - UND
   - domainName
   - explorerUrls
   - (Optional) CHAIN_CURRENCY_SYMBOL
   - (Optional) FAUCETS & CHAIN_FAUCETS
   - (Optional) AVERAGE_BLOCK_TIME_IN_SECS
2. In `tailwind.config.js`, add the chain icon color to the `safeList`. If you used a URL for the chain icon, you can skip this step.

## CHAIN_ID_MAPPINGS
```js {12}
/**
 * Chain IDs Allowed
 *  */
export const CHAIN_ID_MAPPINGS = {
  1: 'Ethereum Mainnet',
  4: 'Rinkeby',
  56: 'BSC Mainnet',
  97: 'BSC Testnet',
  137: 'Polygon Mainnet',
  250: 'Fantom Mainnet',
  4002: 'Fantom Testnet',
  42096: 'Leaf Mainnet',
  43113: 'Avalanche Testnet',
  43114: 'Avalanche Mainnet',
  80001: 'Polygon Testnet',
  1666700000: 'Harmony Testnet',
}
```

::: info
The name put in `CHAIN_ID_MAPPINGS` will also be shown in the Network Select Menu.
:::

## CHAIN_ICONS
```js {9}
export const CHAIN_ICONS = {
  1: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/icon/eth.svg',
  4: 'bg-yellow-500',
  56: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/icon/bnb.svg',
  97: 'bg-green-400',
  137: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/icon/matic.svg',
  250: 'https://chainlist.org/_next/image?url=https%3A%2F%2Fdefillama.com%2Fchain-icons%2Frsz_fantom.jpg&w=64&q=75',
  4002: 'bg-blue-500',
  42096: 'bg-cyan-500,
  43113: 'bg-red-300',
  43114:
    'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818',
  80001: 'bg-purple-500',
  1666700000: 'bg-gray-500',
}
```
::: tip
The chain icon can either be a tailwind background color class starting with `bg-` or a URL for an image.
:::

## enabledPages
```js {13}
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
  42069: [1, 1, 0, 0, 0, 0, 0], // Leaf Mainnet
  43113: [1, 1, 0, 1, 1, 0, 0], // Avalanche Testnet
  43114: [1, 1, 1, 1, 0, 0, 1], // Avalanche Mainnet
  80001: [1, 1, 0, 1, 1, 0, 0], // Polygon Testnet
  1666700000: [1, 1, 0, 1, 1, 0, 0], // Harmony Testnet
}
```

## UND
```js {10}
export const UND = {
  1: '0x0C0F2b41F758d66bB8e694693B0f9e6FaE726499', // Ethereum Mainnet
  4: '0xCddE3e5f796417aF4f323158760f1EAb7163EF47', // Rinkeby Testnet
  42: '0x17297e6f90D625646D3f5B207B74cEFD66a40732', // Kovan Testnet
  56: '0xE7C04392A3a426D532f83cA968Bcc0341E99583D', // Binance Smart Chain Mainnet
  97: '0xE057d5eaa55DE0467A592b48a4EeaA47427eE69d', // Binance Smart Chain Testnet
  137: '0x1eBA4B44C4F8cc2695347C6a78F0B7a002d26413', // Polygon Mainnet
  250: '0x89e35A53b47aEBc1411C4a11Fd7894C27Fe77A51', // Fantom Mainnet
  4002: '0xC9c3674AB0Dd9a94C10a9a26A2fe43e05948Ffa4', // Fantom Testnet
  42096: '0x4986AD1f95092e67cd6a8be31b16298555EB4024', // Leaf Mainnet
  43113: '0x8946AD1f95092e67cd6a8be31b16298555EB4024', // Avalanche Fuji Testnet
  43114: '0x6B56Ec4a92765203508FB40feC9fa23E549B705a', // Avalanche Mainnet (C-Chain)
  80001: '0x0B2e0FB1d14a793727653FF3C2f59a65acD23445', // Polygon Testnet
  1666700000: '0xde5DD67017D3F761D6d7CFdAB9f560B13C1c8529', // Harmony Testnet
}
```

## domainName
This is the default / fallback domain name for LP tokens. If the `domainName` field is not provided in the LP token's config (see the [PoolToken](https://github.com/unbound-finance/unbound-interface/blob/2dd40072d629dbfa5c3311a8fd9c02cfea2b9d34/types/interfaces.ts#L8) interface) then this value is used. Ideally the PoolToken should provide a value since most new exchanges have their own name for their LP token.
```js {9}
export const domainName = {
  1: 'Uniswap V2',
  4: 'Uniswap V2',
  42: 'Uniswap V2',
  97: 'Uniswap V2',
  137: 'Dfyn LP Token',
  250: 'SoulSwap LP',
  4002: 'Uniswap V2',
  42096: 'Leaf LP Token',
  43113: 'Uniswap V2',
  43114: 'Joe LP Token',
  80001: 'Uniswap V2',
  1666700000: 'Uniswap V2',
}
```

## explorerUrls
Used in the transaction model and the toast notification when a transaction is submitted.
```js {9}
export const explorerUrls = {
  1: 'https://etherscan.io',
  4: 'https://rinkeby.etherscan.io',
  56: 'https://bscscan.com/',
  97: 'https://testnet.bscscan.com',
  137: 'https://polygonscan.com',
  250: 'https://ftmscan.com',
  4002: 'https://testnet.ftmscan.com',
  42096: 'https://leafscan.example.com',
  43113: 'https://cchain.explorer.avax-test.network',
  43114: 'https://snowtrace.io',
  80001: 'https://mumbai.polygonscan.com',
  1666700000: 'https://explorer.pops.one',
}
```

## (Optional) CHAIN_CURRENCY_SYMBOL
Used in the Faucet page.
```js {9}
export const CHAIN_CURRENCY_SYMBOL = {
  1: 'ETH',
  4: 'RETH',
  56: 'BNB',
  97: 'TBNB',
  137: 'MATIC',
  250: 'FTM',
  4002: 'FTM',
  42069: 'LEAF',
  43113: 'AVAX',
  43114: 'AVAX',
  80001: 'MATIC',
  1666700000: 'ONE',
}
```


## (Optional) FAUCETS & CHAIN_FAUCETS
Optional, only if facuet is available. Usually for testnets.
```js {5,15}
const FAUCETS = {
  4: '0xD24d967b20C03c9cbFe3AeC12C3466F3f3dAA174',
  97: '0x853FFb531AA84114D5724a08323D638DA4Df99dC',
  4002: '0x907FB4FfE2995B4aB5fE553C76cAebC781c5EA0c',
  42069: '0x709FB4FfE2995B4aB5fE553C76cAebC781c5EA0c',
  43113: '0xd9877095f8e2cfdbC3890352E645fF8DdE29E355',
  80001: '0x0724912B6Aef40E4558AC253DCCC6Bd33d0c7909',
  1666700000: '0x7c01AaE5898e1921F9FB51aAc3d0eA8eC3fDA402',
}

export const CHAIN_FAUCETS = {
  4: 'https://faucet.rinkeby.io/',
  97: 'https://testnet.binance.org/faucet-smart',
  4002: 'https://faucet.fantom.network/',
  42069: 'https://faucet.leaf.example.com/',
  43113: 'https://faucet.avax-test.network/',
  80001: 'https://faucet.polygon.technology/',
  1666700000: 'https://faucet.pops.one/',
}
```

## (Optional) AVERAGE_BLOCK_TIME_IN_SECS
Used for calculating time remaining in certain farms like Dfyn.  
The actual average block time in seconds should be taken from the respective explorer like etherscan, ftmscan, polygonscan, etc.
