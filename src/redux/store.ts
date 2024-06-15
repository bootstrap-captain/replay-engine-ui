import {combineReducers, createStore} from "redux";

import UserReducer from "./reducers/UserReducer";

const allProducer = combineReducers({
    user: UserReducer,
})

export default createStore(allProducer)