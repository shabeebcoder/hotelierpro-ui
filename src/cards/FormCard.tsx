import React, { useState } from 'react';
import { Card, Space, Form, Input } from 'antd';
import { Button } from "./../Buttons"
import './styles.css';


type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = (props: any) => {

    const { onFinish, formName, title, children, handleCancel } = props;

    return (
        <div className='form_card_container' >

            <Card title={title}>
                <Form className="form"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"

                    id={'formName'} name={'formName'} onFinish={onFinish}>
                    {children}
                </Form>
            </Card>
            <br />
            <div style={{ display: "flex" }}>
                <Button type="primary" htmlType="submit" form={'formName'}>Add</Button>&nbsp;
                <Button type="default" onClick={handleCancel}>Cancel</Button>
            </div>
        </div >)

};



export default App;