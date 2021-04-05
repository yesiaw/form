import axios from "axios"

const instance  = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const authAPI = {
    register(email, password){
        return instance.post('register', {email, password})
    }
}