import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginResponse} from "../../component/Login/Login";

type LoginState = {
    username: string,
    password: string,
    token: string,
}

const initialState: LoginState = {
    username: '',
    password: '',
    token: '',
}


export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        saveLoginUser: (state: LoginState, action: PayloadAction<LoginResponse>) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.token = action.payload.token;
        }
    }
})

export const {saveLoginUser} = loginSlice.actions;

export let loginReducer = loginSlice.reducer;