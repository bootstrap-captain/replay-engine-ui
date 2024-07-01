import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginResponse} from "../../component/Login/Login";
import {PASSWORD, TOKEN, USERNAME} from "../../component/constant/Constants";

type LoginState = {
    username: string,
    password: string,
    token: string,
}

/*初始化时，先从localstorage中拿,避免页面刷新时，redux中数据丢失问题*/
const initialState: LoginState = {
    username: localStorage.getItem(USERNAME) || '',
    password: localStorage.getItem(PASSWORD) || '',
    token: localStorage.getItem(TOKEN) || '',
}


export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        saveLoginUser: (state: LoginState, action: PayloadAction<LoginResponse>) => {
            const {username, password, token} = action.payload;
            state.username = username;
            state.password = password;
            state.token = token;

            /*保存时候，localStorage也存一份*/
            localStorage.setItem(USERNAME, username);
            localStorage.setItem(PASSWORD, password);
            localStorage.setItem(TOKEN, token);
        }
    }
})

export const {saveLoginUser} = loginSlice.actions;

export let loginReducer = loginSlice.reducer;