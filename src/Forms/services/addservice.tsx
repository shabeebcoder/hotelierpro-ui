import React, { useState } from 'react';
import { Card, Space } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import AddPersonForm from "./addservice"
import { Textarea } from '@mantine/core';
// import "./styles.css"

type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = (props) => {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

    const buttonItemLayout =
        formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
    return (
        <div >
            <Card title={props.title}>

                {props.type === "addService" && (<Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{ layout: formLayout }}
                    onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
                >

                    <Form.Item label="Service Name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Price">
                        <Input placeholder="input placeholder" />
                    </Form.Item>

                    <Form.Item label="Select Service">
                        <Select
                            defaultValue=""
                            style={{ width: 120 }}
                            allowClear
                            options={[{ value: 'lucy', label: 'Lucy' }]}
                        />
                    </Form.Item>


                </Form>)}

                {props.type === "addPerson" && (<Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{ layout: formLayout }}
                    onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
                >

                    <Form.Item label="Full Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Company ID">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Bank">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Account Number">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Contact Person">
                        <Input placeholder="" />
                    </Form.Item>

                    <Form.Item label="Notes">
                        <Textarea />
                    </Form.Item>


                </Form>)}

                {props.type === "addCategory" && (<Form
                    {...formItemLayout}
                    layout={formLayout}
                    form={form}
                    initialValues={{ layout: formLayout }}
                    onValuesChange={onFormLayoutChange}
                // style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
                >

                    <Form.Item label="Category Name">
                        <Input />
                    </Form.Item>


                </Form>)}


                {/* <AddPersonForm /> */}
            </Card>
            <br />
            <div style={{ display: "flex" }}>
                <Button type="primary">Add</Button>&nbsp;
                <Button>Cancel</Button>
            </div>

        </div >)

};



export default App;