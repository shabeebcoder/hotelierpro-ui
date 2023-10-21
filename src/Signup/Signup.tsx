import React from "react";
import { Card, Space, Select } from 'antd';
import { Typography } from 'antd';
const { Title, Text, Link } = Typography;
import { Button, Checkbox, Form, Input } from 'antd';
const { Option } = Select;
import "./styles.css";



export default function Register(props: any) {
    const { title, subTitle, loginUrl, termsAndConditionUrl, onFinish } = props;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select defaultValue={"86"} style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return <Card className="register_container" bordered={false} >
        <div className="title-container">
            <Title level={5} className="title">{title}</Title>
            <span className="sub-title">{subTitle}</span>
        </div>
        <div className="form-container">

            <Form className="form" name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    className="form-item"
                    name="firstName"
                    rules={[{ required: true, message: 'First Name required' }]}
                >
                    <Input size="large" placeholder="First Name" />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="lastName"
                    rules={[{ required: true, message: 'Last Name required' }]}

                >
                    <Input size="large" placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="email"
                    rules={[{ required: true, message: 'email required' }]}
                >
                    <Input size="large" placeholder="email" />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="phoneNumber"
                    rules={[{ required: true, message: 'Phone number required' }]}
                >
                    <Input
                        style={{ width: '100%' }}
                        addonAfter={prefixSelector}
                        size="large"

                        placeholder="Phone No"
                    />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="hotelName"
                    rules={[{ required: true, message: 'Hotel Name required' }]}
                >
                    <Input size="large" placeholder="Hotel Name" />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="website"

                >
                    <Input size="large"

                        placeholder="Hotel Website"
                    />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="password"
                    rules={[{ required: true, message: 'Password required' }]}
                >
                    <Input.Password size="large" placeholder="Password" />
                </Form.Item>
                <Form.Item
                    className="form-item"
                    name="reTypePassword"
                    rules={[{ required: true, message: 'Confirm password required' }]}

                >
                    <Input.Password size="large" placeholder="Confirm Passowrd" />
                </Form.Item>


                <Space direction="vertical" className="footer-container " >
                    <Checkbox style={{ fontSize: 12 }}>

                        I Accept <Link href={termsAndConditionUrl} style={{ fontSize: 12, color: '#3A7C7C' }}>Terms and Condition</Link>
                    </Checkbox>
                    <Button type="primary" style={{ backgroundColor: '#3A7C7C', marginTop: -2 }} htmlType="submit" block>
                        Submit
                    </Button>
                    <div style={{ marginTop: -4 }} >

                        <Text style={{ fontSize: 12 }}>Already have an accout?</Text> <Link href={loginUrl} className="link-1">Login</Link>
                    </div>
                </Space>



            </Form>

        </div>

    </Card >
}