---
title: Wallet Connection
---

# Wallet Connection
The library [Web3Model v1](https://github.com/WalletConnect/web3modal/tree/V1) is used for wallet connection.

## Usage & Issues
There is a general issue. When the page first loads, even if the wallet is connected it won't connect immediately. So the `mounted` lifecycle hook won't detect it since it runs only once.  
For this reason, there is a global event emitted in Nuxt called `login_complete` when the wallet has actually connected. You can see examples of this in almost all pages.  

To handle changes in the network (chain), a `network_changed` event is emitted which should also be listened to.

In the pages, an `init()` function is there for the main function which is invoked when the wallet is connected or network has changed for the logic to run again.

Example:
```js
mounted() {
    this.init()
    this.$root.$on('login_complete', this.init)
    this.$root.$on('network_changed', this.init)
},
beforeDestroy() {
    this.$root.$off('login_complete')
    this.$root.$off('network_changed')
},
```

```js
methods: {
    async init() {
        if (!this.$store.state.chainId) return
        // ...
    }
}  
```
