import React, { HTMLAttributes, ReactNode } from 'react';
import { Button, Space } from 'antd';
import classNames from 'classnames';
import "./styles.css"


interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'hPprimary'
    disabled: boolean
}



export default function ({ children, ...props }: any) {
    const { types } = props;
    return (
        <Space wrap>
            <Button className={classNames('hotelierButton', {
                'hPprimary': types === "hPprimary"
            })}  {...props} >{children}sss</Button>
        </Space>
    )
}