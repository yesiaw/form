import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { login, quit } from '../../redux/login-reducer';






const RegisterForm = (props) => {

    const { register, handleSubmit, control } = useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };



    const onSubmit = (formData) => {
        props.login(formData.email, formData.password)
    }


    return (<form onSubmit={handleSubmit(onSubmit)}
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
    >
        <Form.Item
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >

            <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => {
                    return <Input placeholder={'email'} value={value} onChange={onChange} />
                }}
            />

        </Form.Item>

        <Form.Item
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >

            <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => {
                    return <Input placeholder={'password'} value={value} onChange={onChange} />
                }}
            />
        </Form.Item>


        <Form.Item {...tailLayout}>

            <Button type="primary" htmlType="button" onClick={handleSubmit(onSubmit)}>
                LOGIN
              </Button>

              {props.auth === true && <Button type="primary" htmlType="button" onClick={props.quit}>
                QUIT
              </Button> }

        </Form.Item>
        {props.auth === true && <h1>You are LOGIN</h1>}
    </form>

    )
}
const mapStateToProps = (state) => ({
    auth: state.loginPage.auth,
    token: state.loginPage.token
})

export default connect(mapStateToProps, { login, quit })(RegisterForm);




















