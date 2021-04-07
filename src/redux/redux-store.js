import { applyMiddleware, combineReducers, createStore } from "redux";
import LoginReducer from "./login-reducer";
import thunkMiddleware from "redux-thunk";
import UserReducer from "./users-reducer";
import ProfileReducer from "./profile-reducer";

let reducers = combineReducers({
    loginPage: LoginReducer,
    usersPage: UserReducer,
    profilePage: ProfileReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;