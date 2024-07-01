/*一般是从后台获取的*/
export interface RouterMenu {
    path: string,
    name: string,
    label: string,
    icon: string,
    url: string,
}

export const userSetting = [
    'Profile', 'Logout'
]

export const menus: RouterMenu[] = [
    {
        path: '/mall',
        name: 'mall',
        label: 'mall',
        icon: 'mall',
        url: 'mall',
    },
    {
        path: '/admin/user',
        name: 'user',
        label: 'user',
        icon: 'user',
        url: 'user',
    },
    {
        path: '/admin/customer',
        name: 'customer',
        label: 'customer',
        icon: 'customer',
        url: 'customer',
    },

]