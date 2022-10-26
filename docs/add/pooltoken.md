---
title: Add a new Pool Token
---

# Add a new Pool Token

The [PoolToken interface](https://github.com/unbound-finance/unbound-interface/blob/2dd40072d629dbfa5c3311a8fd9c02cfea2b9d34/types/interfaces.ts#L3) is given as:

```ts
export interface PoolToken {
  name: string
  token0: string
  token1: string
  exchange: Exchange
  domainName?: string
  category: string
  address: string
  vaultAddress: string
  oracleAddress: string
  decimals: [number, number]
  feeds: string[]
  isBase: [boolean, boolean]
  stablecoin: string
  uToken: {
    displayName: string
    address: string
    decimals: number
    symbol: string
    icon: string
  }
}
```

**Note:** The `stablecoin` and `uToken` options are redundant and no longer in active use. There used to be an Add/Remove liquidity page which used this, but it was removed from use long ago.

## Add
Go to `./configs/supportedPoolTokens`. There you will find multiple pool token configs with a different file for each network.  
You can add a new network's pool token config by creating an appropriately named file and adding it to the mapping in `index.ts` of the `supportedPoolTokens` folder.

To add a new pool token, visit the respective network's config file and append the new LPT with the PoolToken interface to the array.
