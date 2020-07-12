import {applyMiddleware, combineReducers, createStore} from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
});
