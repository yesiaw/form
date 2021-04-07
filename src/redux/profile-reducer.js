import { authAPI } from "../api/api";


const GET_USER = 'GET_USER';


let initialState = {
    profile: []
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER:
            return {
                ...state,
                profile: action.profile
            }

        default: return state;
    }

}

export const setUser = (profile) => ({ type: GET_USER, profile})



export const getUser = (userID) => {
    return (dispatch) => {
        authAPI.getProfile(userID).then(response => {
            dispatch(setUser(response.data))
            
        })
    }
}







export default ProfileReducer;

