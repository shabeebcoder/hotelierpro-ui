import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import classNames from 'classnames';
import "./styles.css";
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'hPprimary';
    disabled: boolean;
    className?: string;
}

export default function HotelierButton({ children, ...props }: Props) {
    const { type, className, disabled, ...rest } = props;

    // Use a state variable to control rendering on the client side.
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set isClient to true when the component is mounted on the client side.
        setIsClient(true);
    }, []);

    // Render the button only on the client side.
    return isClient ? (
        <Space wrap>
            <Button
                className={classNames('hotelierButton', className, {
                    'hPprimary': type === "hPprimary"
                })}
                {...rest}
                icon={<PlusOutlined />}
                disabled={disabled}
            >
                {children}
            </Button>
        </Space>
    ) : null;
}