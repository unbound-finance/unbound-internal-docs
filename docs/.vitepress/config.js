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
                    { text: 'Wallet Connection', link: '/wallet-connection' },
                    { text: 'Enable / Disable Pages', link: '/enable-disable-pages' },
                    { text: 'Enable / Disable a Network', link: '/enable-disable-network' },
                ]
            },
            {
                text: 'Add',
                items: [
                    { text: 'Add a new Network', link: '/add/network' },
                    { text: 'Add a new Pool Token', link: '/add/pooltoken' },
                    { text: 'Add a new Farm', link: '/add/farm' },
                ]
            },
        ]
    }
}