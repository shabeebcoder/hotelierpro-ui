import React from "react";
import { Card, Space } from 'antd';
import { Typography } from 'antd';
const { Title, Text, Link } = Typography;
import { Button, Checkbox, Form, Input } from 'antd';
import "./styles.css";



export default function Login(props: any) {
    const { title, signUpUrl, forgotPasswordUrl, onFinish } = props

    return <Card className="login-card" bordered={false} >
        <div className="header">
            <Title level={5} className="title" >{title}</Title>
            <span className="sub-title" >Please enter your details</span>
        </div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            className="form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            <Form.Item

                style={{ width: 450, }}
                rules={[{ required: true, message: 'username required' }]}
                name="username"
            >
                <Input size="large" placeholder="Username" />
            </Form.Item>

            <Form.Item
                style={{ width: 450, marginBottom: 5 }}
                name="password"
                rules={[{ required: true, message: 'Password required' }]}
            >
                <Input.Password placeholder="password" size="large" />
            </Form.Item>


            <Form.Item name="remember" style={{ display: 'flex', justifyContent: 'space-between', }} >

                <Checkbox checked={true} style={{ fontSize: 12 }} >Remember me</Checkbox>
                <Link href={forgotPasswordUrl} style={{ fontSize: 12, color: '#3A7C7C' }}  >Forgot password</Link>
            </Form.Item>



            <Space direction="vertical" style={{ width: '100%', paddingTop: 70 }}>

                <Button type="primary" className="primary" htmlType="submit" block>
                    Submit
                </Button>
            </Space>


            <div style={{ textAlign: 'center', }}>

                <Text style={{ fontSize: 12 }}>Don't have an account ?</Text>
                <Link href={signUpUrl} style={{ fontSize: 12, color: '#3A7C7C' }}>Register</Link>

            </div>

        </Form>
    </Card >
}