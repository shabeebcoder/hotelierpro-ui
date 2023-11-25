import React from 'react'
import ForgotPasswordPage from "./forgotPasswordPage";

export default {
    title: "hotelierpro/forgot-password"
}

export const ForgotPasswordPageDemo = (args) => <ForgotPasswordPage {...args} />

ForgotPasswordPageDemo.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    title: "Forgot password"
}