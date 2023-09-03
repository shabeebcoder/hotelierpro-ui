import React, { useState } from 'react';
import { Card, Space } from 'antd';
import { Button, Form, Input, Radio } from 'antd';
import "./styles.css"

type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = () => {

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

    const buttonItemLayout =
        formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
    return (<Space direction="vertical" size={16}>
        <Card title="Add Service" style={{ width: 353 }}>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >

                <Form.Item label="Field A">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B">
                    <Input placeholder="input placeholder" />
                </Form.Item>

            </Form>
        </Card>
        <div style={{ display: "flex" }}>

            <Button type="primary">Add</Button>&nbsp;
            <Button>Cancel</Button>
        </div>

    </Space >)

};



export default App;