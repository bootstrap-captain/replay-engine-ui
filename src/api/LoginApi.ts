import {postHttpCall} from "../utils/axiosRequest";
import {LoginRequest, LoginResponse} from "../component/Login/Login";

export async function getLoginToken(login: LoginRequest) {
    try {
        const data = await postHttpCall<LoginRequest>('/login/check', login);
        return data;
    } catch (error) {
        console.log(error);
    }
}