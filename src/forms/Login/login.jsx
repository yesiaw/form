
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './login.css'
const LoginForm = (props) => {
    return (<div>
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


const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)


// const LoginReduxForm = reduxForm({
//     form: 'login'
// })(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        alert('s')

    }
    return (
        <LoginReduxForm onSubmit={onSubmit} />
    )
}

export default Login;













