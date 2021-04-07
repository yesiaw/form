import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { authAPI } from '../api/api'
import './register.css'


const RegisterForm = () => {

    const { register, handleSubmit } = useForm();

    let [isAuth, setAuth] = useState(false);

    const onSubmit = (formData) => {
        authAPI.register(formData.email, formData.password).then(response => {
            if (!response.error) {
                setAuth(true)
            }
        })

    }
    return (<div className = 'register' >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={'email'} {...register('email')} />
            </div>
            <div>
                <input placeholder={'password'} {...register('password')} />
            </div>
            <div>
                <button>REGISTER</button>
            </div>
        </form>
        {isAuth === true && <h1>You are register</h1>}

    </div>

    )
}
export default RegisterForm;




















