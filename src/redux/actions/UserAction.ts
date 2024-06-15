import {SAVE_USER} from "../constants";
import {UserEntity} from "../../component/Admin/User/UserEntity";

export function saveUserAction(data: UserEntity) {
    return {type: SAVE_USER, data: data};
}