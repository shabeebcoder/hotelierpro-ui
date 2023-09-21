import React, { HTMLAttributes, ReactNode } from 'react';
import { Button, Space } from 'antd';
import classNames from 'classnames';
import "./styles.css"
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';


interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'hPprimary'
    disabled: boolean
}



export default function ({ children, ...props }: any) {
    const { type } = props;
    return (
        <Space wrap>
            <Button className={classNames('hotelierButton', {
                'hPprimary': type === "hPprimary"
            })}  {...props} icon={<PlusOutlined />} >{children}</Button>
        </Space>
    )
}