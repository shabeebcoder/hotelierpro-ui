import React, { ReactNode } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface Props {
    level: 'one' | 'two' | 'three' | 'four' | 'five' | 1 | 2 | 3 | 4 | 5,
    children: ReactNode
}

const Headline: React.FC = ({ children, level, ...props }: Props) => {

    if (level === 'one') {
        level = 1
    }
    if (level === 'two') {
        level = 2
    }
    if (level === 'three') {
        level = 3
    }
    if (level === 'four') {
        level = 4
    }
    if (level === 'five') {
        level = 5
    }


    return (
        <>
            <Title level={level}  {...props} >{children}</Title>

        </>
    );

}

export default Headline;