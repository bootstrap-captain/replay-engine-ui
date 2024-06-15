import {UserEntity} from "../Admin/User/UserEntity";


/*验证用户信息成功后，后端返回一个token*/
export function validateUserRequest(user: UserEntity): boolean {
    if (user.password === '1') {
        return true;
    } else {
        return false;
    }
}