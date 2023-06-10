import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';

interface Props {
    items: any[]
}

const Breadcrumbs: React.FC = (props: Props) => (
    <AntBreadcrumb
        {...props}
    />
);

export default Breadcrumbs;