import React from "react";
import { FormCard } from "./../../cards"
import { Card, Space, Form, Input } from 'antd';


export default function RoomTypeForm(props) {

    const { handleCancel, handleOnFinish, title, formName } = props;

    return <FormCard title={title} formName={formName} onFinish={handleOnFinish} handleCancel={handleCancel} >

        <Form.Item label="Name" name="name">
            <Input />
        </Form.Item>
        <Form.Item label="Max. Persons" name="maxPerson">
            <Input />
        </Form.Item>
        <Form.Item label="Price (Regular use)" name="regularPrice">
            <Input />
        </Form.Item>
        <Form.Item label="Price (Single use)" name="singlePrice">
            <Input />
        </Form.Item>
    </FormCard>
}