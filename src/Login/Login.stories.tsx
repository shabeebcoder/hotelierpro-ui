import React from "react";
import LoginComponent from "./Login";



export default {
    title: "components/login"
}

const onFinish = (values: any) => console.log(values)

export const Login = (args: any) => <LoginComponent {...args} />



Login.args = {
    title: 'Welcome back, Olivia',
    forgotPasswordUrl: '/forgot-password',
    signUpUrl: '/register',
    onFinish
}