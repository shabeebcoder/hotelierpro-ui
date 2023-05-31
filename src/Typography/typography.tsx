import React, { ReactNode } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface Props {
    level: 1 | 2 | 3 | 4 | 5,
    children: ReactNode
}

const Headline: React.FC = ({ children, ...props }: Props) => (
    <>
        <Title {...props}>{children}</Title>

    </>
);

export default Headline;