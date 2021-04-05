import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { authAPI } from '../api/api'
import './form.css'
const RegisterForm = (props) => {
    return (<div >
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'email'} placeholder={'email'} />
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'password'} />
            </div>
            <div>
                <button>REGISTER</button>
            </div>
        </form>

    </div>

    )
}

const RegisterReduxForm = reduxForm({
    form: 'register'
})(RegisterForm)

const Register = () => {

    let [isAuth, setAuth] = useState(false);

    const onSubmit = (formData) => {
        authAPI.register(formData.email, formData.password).then(responce => {
            if (!responce.error) {
                setAuth(true)
            }
        })
    }


    return (<div className = 'register'>
        <RegisterReduxForm onSubmit={onSubmit} />

        {isAuth === true && <h1>You are register</h1>}
    </div>
    )
}

export default Register;











