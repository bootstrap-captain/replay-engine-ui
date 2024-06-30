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
        path: '/home',
        name: 'home',
        label: 'Home',
        icon: 'erick',
        url: 'home',
    },
    {
        path: '/UserPage',
        name: 'admin',
        label: 'User',
        icon: 'adf',
        url: 'admin',
    },
    {
        path: '/customer',
        name: 'customer',
        label: 'CustomerPage',
        icon: 'customer',
        url: 'customer',
    },
    {
        path: '/mall',
        name: 'mall',
        label: 'MallPage',
        icon: 'adf',
        url: 'mall',
    }
]