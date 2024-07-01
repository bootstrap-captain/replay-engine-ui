import {configureStore} from "@reduxjs/toolkit";
import {loginReducer} from "./reducers/loginSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;