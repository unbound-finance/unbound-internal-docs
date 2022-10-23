export default {
    title: 'Unbound Internal Docs',
    description: 'Unbound v1 Internal Documentation',
    themeConfig: {
        sidebar: [
            {
                text: 'General',
                items: [
                    { text: 'Introduction', link: '/intro' },
                    { text: 'Active Branches', link: '/active-branches' },
                    { text: 'Enable / Disable Pages', link: '/enable-disable-pages' },
                    { text: 'Wallet Connection', link: '/wallet-connection' },
                ]
            },
            {
                text: 'Add',
                items: [
                    { text: 'Add a new Network', link: '/add/network' },
                    { text: 'Add a new Pool Token', link: '/add/pooltoken' },
                    { text: 'Add a new Farm', link: '/add/farm' },
                    { text: 'Add a new Unbound Farm', link: '/add/unbound-farm' },
                    { text: 'Add a new Earn Page Farm', link: '/add/earn-page-farm' },
                    { text: 'Add a new Faucet', link: '/add/faucet' },
                    { text: 'Add a new Staking config', link: '/add/staking' },
                ]
            },
            {
                text: 'Pages',
                items: [
                    { text: 'Mint', link: '/core/amm' },
                    { text: 'Unlock', link: '/core/farm' },
                    { text: 'Stake', link: '/core/staking' },
                    { text: 'Farm', link: '/core/staking' },
                    { text: 'Earn', link: '/core/staking' },
                ]
            },
            {
                text: 'Core',
                items: [
                    { text: 'AMM Core', link: '/core/amm' },
                    { text: 'Farm Core', link: '/core/farm' },
                    { text: 'Staking Core', link: '/core/staking' }
                ]
            },
            {
                text: 'Exchanges',
                items: [
                    { text: 'PancakeSwap', link: '/exchanges/pancakeswap' },
                    { text: 'QuickSwap', link: '/exchanges/quickswap' },
                    { text: 'SpookySwap', link: '/exchanges/spookyswap' },
                    { text: 'TraderJoe', link: '/exchanges/traderjoe' },
                    { text: 'Dfyn', link: '/exchanges/dfyn' },
                ]
            },
            {
                text: 'Miscellaneous',
                items: [
                    { text: 'Known Issues', link: '/known-issues' },
                ]
            }
        ]
    }
}