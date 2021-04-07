import { authAPI } from "../api/api";


const SET_TOKEN = 'SET_TOKEN';

const QUIT_LOGIN = 'QUIT_LOGIN'


let initialState = {
    auth: false,
    token: ''
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_TOKEN:
            return {
                ...state,
                ...action.data,
                auth: true,
                token: action.data.token
            }
        case QUIT_LOGIN:
            return {
                ...state,
                ...action.data,
                auth: false,
                token: ''
            }

        default: return state;
    }

}

export const setState = (auth, token) => ({ type: SET_TOKEN, data: {auth, token}})

export const QuitLogin = (auth, token) => ({type:QUIT_LOGIN, data: {auth, token}})


export const login = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password).then(response => {
            if (!response.error) {
                dispatch(setState(null, response.data.token))
            }
        })
    }
}

export const quit = () => {
    return (dispatch) => {
        dispatch(QuitLogin())
    }
}





export default LoginReducer;

