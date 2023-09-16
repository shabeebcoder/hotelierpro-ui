import React from "react";
import { FormCard } from "../../cards"
import { Card, Space, Form, Input, Select } from 'antd';


export default function Rooms(props) {

    const { handleCancel, handleOnFinish, title, formName, roomTypes = [] } = props;

    return <FormCard title={title} formName={formName} onFinish={handleOnFinish} handleCancel={handleCancel} >

        <Form.Item label="Room Types" name="roomTypes">
            <Select>
                {roomTypes.map(({ value, label }) => <Select.Option value={value}>{label}</Select.Option>)}
            </Select>
        </Form.Item>
        <Form.Item label="No of Rooms" name="noOfRooms">
            <Input />
        </Form.Item>
    </FormCard>
}