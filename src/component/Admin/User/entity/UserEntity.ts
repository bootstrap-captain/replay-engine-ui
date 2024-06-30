export interface UserEntity {
    userId?: string,
    username?: string,
    type?: string,
}


/*Type的类型*/
export const user_type: string[] = [
    'all',
    'UserEntity',
    'maker',
    'checker',
    'maker_checker',
]

