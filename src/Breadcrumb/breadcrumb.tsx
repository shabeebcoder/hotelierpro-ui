import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';

interface Props {
    items: any[]
}

export default function (props: any): any {
    return <AntBreadcrumb
        {...props}
    />
}


