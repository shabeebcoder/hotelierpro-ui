import React from "react";
import { Card, Space, Select } from 'antd';
import { Typography } from 'antd';
const { Title, Text, Link } = Typography;
import { Button, Checkbox, Form, Input } from 'antd';
const { Option } = Select;


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

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select defaultValue={"86"} style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return <Card bordered={false} style={{ width: 678, display: 'flex', justifyContent: 'center', boxShadow: '0px 1.0612244606018066px 5.306122303009033px 0px rgba(0, 0, 0, 0.10)' }}>
        <div style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
            <Title level={5} style={{ fontSize: 24, flexGrow: 1, marginBottom: '0px' }}>Create an account</Title>
            <span style={{ fontSize: 16, fontWeight: 200, }}>Lets get Started with 14 days free trial!</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Form style={{ display: 'flex', marginTop: 72, justifyContent: 'center', }} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="username"
                >
                    <Input size="large" placeholder="First Name" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="password"

                >
                    <Input size="large"
                        type="password"
                        placeholder="Last Name"
                    />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="username"
                >
                    <Input size="large" placeholder="email" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="password"

                >
                    <Input
                        style={{ width: '100%' }}
                        addonAfter={prefixSelector}
                        size="large"
                        type="password"
                        placeholder="Phone No"
                    />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="username"
                >
                    <Input size="large" placeholder="Hotel Name" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="password"

                >
                    <Input size="large"
                        type="password"
                        placeholder="Hotel Website"
                    />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="username"
                >
                    <Input.Password size="large" placeholder="Password" />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: 32, minWidth: 280 }}
                    name="password"
                    hasFeedback

                >
                    <Input.Password size="large" placeholder="Confirm Passowrd" />
                </Form.Item>


                <Space direction="vertical" style={{ width: '50%', paddingTop: 70, textAlign: 'center' }}>
                    <Checkbox style={{ fontSize: 12 }}>
                        I Accept <Link style={{ fontSize: 12, color: '#3A7C7C' }}>Terms and Condition</Link>
                    </Checkbox>
                    <Button type="primary" style={{ backgroundColor: '#3A7C7C', marginTop: -2 }} htmlType="submit" block>
                        Submit
                    </Button>
                    <div style={{ marginTop: -4 }} >

                        <Text style={{ fontSize: 12 }}>Already have an accout?</Text> <Link style={{ fontSize: 12, textDecoration: 'underline', color: '#3A7C7C' }}>Login</Link>
                    </div>
                </Space>



            </Form>

        </div>

    </Card >
}