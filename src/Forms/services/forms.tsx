import React, { useState } from 'react';
import { Card, Space } from 'antd';
import { Button, Form, Input, Select } from 'antd';
// import "./styles.css"

type LayoutType = Parameters<typeof Form>[0]['layout'];

const AddPersonForm: React.FC = (props) => {

    return (<Form


    >

        <Form.Item label="Service Name">
            <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Price">
            <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item label="Select Services">
            <Select
                defaultValue=""
                style={{ width: 120 }}
                allowClear
                options={[{ value: 'lucy', label: 'Lucy' }]}
            />
        </Form.Item>


    </Form>

    )
};



export default AddPersonForm;
