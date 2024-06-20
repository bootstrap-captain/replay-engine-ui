/*一般是从后台获取的*/
export interface RouterMenu {
    path: string,
    name: string,
    label: string,
    icon: string,
    url: string,
}

export const menus: RouterMenu[] = [
    {
        path: '/home',
        name: 'home',
        label: 'Home',
        icon: 'erick',
        url: 'home',
    },
    {
        path: '/admin',
        name: 'admin',
        label: 'Admin',
        icon: 'adf',
        url: 'admin',
    },
    {
        path: '/mall',
        name: 'mall',
        label: 'Mall',
        icon: 'adf',
        url: 'mall',
    }
]