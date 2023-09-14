import React from "react";
import Register from "./Signup";



export default {
    title: "components/signup"
}


const onFinish = (values: any) => {
    console.log('Success:', values);
};
export const Signup = (args) => <Register {...args} />



Signup.args = {
    title: 'Create an account',
    subTitle: 'Lets get Started with 14 days free trial!',
    loginUrl: '',
    termsAndConditionUrl: '',
    onFinish
}