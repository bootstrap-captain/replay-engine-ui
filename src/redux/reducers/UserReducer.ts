import {UserEntity} from "../../component/Admin/User/UserEntity";
import {SAVE_USER} from "../constants";


/*先从localstorage中取出*/
const initalState: UserEntity = {
    username: '',
    password: ''
}

export default function UserReducer(previousState: UserEntity, action: any) {
    if (previousState === undefined) {
        previousState = initalState;
    }
    const {type, data} = action;
    switch (type) {
        case SAVE_USER:
            return previousState + data;
        default:
            return previousState;
    }
}