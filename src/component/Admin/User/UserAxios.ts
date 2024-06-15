/*create a new user*/
import axios from "axios";
import {UserEntity} from "./UserEntity";

export function createNewUserRequest(user: UserEntity) {
    axios({
        method: 'POST',
        url: 'http://localhost:8080/user/create',
        data: {
            username: user.username,
            password: user.password,
            type: user.type,
        }
    }).then(value => {
        console.log(value);
    }).catch(error => {
        console.log(error);
    })
}

/*delete a user*/
export function deleteUser(user: UserEntity): boolean {

    return false;
}

/*query user*/
export function queryUser(username: string, type:string): Array<UserEntity> {

    return [{username: 'erick', password: '123456', type: 'all'},
        {username: 'lucy', password: '12346', type: 'admin'},
        {username: 'nancy', password: '123456', type: 'maker'}];
}

/*edit  user*/
export function updateUser(user: UserEntity): UserEntity {

    return {username: 'erick', password: '', type: ''};
}


