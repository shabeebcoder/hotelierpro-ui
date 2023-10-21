import React, { ReactNode } from 'react';
import { Divider as LineDivider } from 'antd';


interface Props {
    dashed?: boolean;
    children?: ReactNode,
    orientation?: 'left' | 'right' | 'center'
}

const Divider: React.FC = ({ children, ...props }: Props) => <LineDivider {...props} >{children}</LineDivider>

export default Divider