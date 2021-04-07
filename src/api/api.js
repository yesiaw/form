import axios from "axios"

const instance  = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const authAPI = {
    register(email, password){
        return instance.post('register', {email, password})
    },
    login(email, password){
        return instance.post('login', {email, password})
    },
    getUsersPage(current){
        return instance.get('users?page=' + current).then(responce => responce.data.data)
    },
    getProfile(id){
        return instance.get('users/' + id).then(responce => responce.data)
    }
}