import React from "react";
import { Card, Space } from 'antd';
import { Typography } from 'antd';
const { Title, Text, Link } = Typography;
import { Button, Checkbox, Form, Input } from 'antd';


const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export default function Login() {
    return <Card bordered={false} style={{ width: 478, display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
            <Title level={5} style={{ fontSize: 24, flexGrow: 1, marginBottom: '0px' }}>Welcome back, Olivia</Title>
            <span style={{ fontSize: 16, fontWeight: 200, }}>Please enter your details</span>
        </div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ width: 300, paddingTop: 70, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            <Form.Item

                style={{ width: 450, }}
                rules={[{ required: true, message: 'username' }]}
            >
                <Input size="large" placeholder="input placeholder" />
            </Form.Item>

            <Form.Item
                style={{ width: 450, marginBottom: 5 }}

                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password placeholder="password" size="large" />
            </Form.Item>

            <div
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Checkbox style={{ fontSize: 12 }} >Remember me</Checkbox>
                <Link style={{ fontSize: 12 }}  >Forgot password</Link>
            </div>


            <Space direction="vertical" style={{ width: '100%', paddingTop: 70 }}>

                <Button type="primary" style={{ backgroundColor: '#3A7C7C' }} htmlType="submit" block>
                    Submit
                </Button>
            </Space>


            <div style={{ textAlign: 'center', }}>

                <Text style={{ fontSize: 12 }}>Don't have an account ?</Text>   <Link style={{ fontSize: 12 }}>Login</Link>

            </div>

        </Form>
    </Card >
}