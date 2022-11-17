---
title: Add a new Yield Farm
---

# Add a new Yield Farm

The [YieldFarm interface](https://github.com/unbound-finance/unbound-interface/blob/2dd40072d629dbfa5c3311a8fd9c02cfea2b9d34/types/interfaces.ts#L40) is given as:

```ts
export interface YieldFarm {
  name: string
  token0: {
    address: string
    symbol: string
    decimals: number
  }
  token1: {
    address: string
    symbol: string
    decimals: number
  }
  exchange: Exchange
  rewardTokens: [
    {
      symbol: string
      address: string
      decimals: number
    }
  ]
  vaultAddress: string
  farmAddress: string // Yield wallet factory
  ammFarm?: string // Used for fetching totalSupply of farm. Optional, not used much.
  stakingRewardsAddress?: string // Used for DFYN mainly
  lptAddress?: string
  archived?: boolean
  pid?: number // Required for PancakeSwap and similar SushiSwap-based farms
}
```


## Add
Go to `./configs/yieldFarms`. There you will find multiple yield farm configs with a different file for each network.  
You can add a new network's farm config by creating an appropriately named file and adding it to the mapping in `index.ts` of the `yieldFarms` folder.

To add a new yield farm, visit the respective network's config file and append the new farm with the YieldFarm interface to the array.

## New Exchange
Add the new exchange to the [Exchange](https://github.com/unbound-finance/unbound-interface/blob/2dd40072d629dbfa5c3311a8fd9c02cfea2b9d34/types/index.ts#L17) type in `./types/index.ts`.  

You need to write custom code for this new exchange for farming, which is detailed in the `farm-core` section. New exchange's code will be in the farming pages as well as the farm-core.
