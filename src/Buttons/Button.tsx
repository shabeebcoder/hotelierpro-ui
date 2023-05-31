import React, { HTMLAttributes, ReactNode } from 'react';
import { Button, Space } from 'antd';


interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link'
}

export default function ({ children, ...props }: Props) {
    return (
        <Space wrap>
            <Button {...props} >{children}</Button>
        </Space>
    )
}