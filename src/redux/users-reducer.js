import { authAPI } from "../api/api";


const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT = 'CHANGE_CURRENT';


let initialState = {
    users: [],
    currentPage: 1
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
                
            }
        case CHANGE_CURRENT:
            return {
                ...state,
                currentPage: action.current
                
            }

        default: return state;
    }

}

export const setUsers = (users) => ({ type: SET_USERS, users})
export const cnahgeCurrent = (current) => ({type: CHANGE_CURRENT, current})


export const getUsers = (current) => {
    
    return (dispatch) => {   
        authAPI.getUsersPage(current).then((response) =>{
            dispatch(setUsers(response))
            dispatch(cnahgeCurrent(current))
        })     
        
        
    }
}

export default UserReducer;

