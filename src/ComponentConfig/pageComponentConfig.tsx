import React from 'react';
import { Card } from 'antd';
import { Tabs, Select, Form, Collapse } from 'antd';
import type { TabsProps, CollapseProps } from 'antd';
import Collapsable from "./collapse"

const Collapses: React.FC = () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    const items: any = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
    ];
    return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

const App: React.FC = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Component`,
            children: <SelectComponent />,
        },
        {
            key: '2',
            label: `Page`,
            children: `Content of Tab Pane 2`,
        },

    ];
    return (<>
        <Card bodyStyle={{ borderRadius: '0px', boxShadow: 'none', padding: '0px' }} style={{ borderRadius: 0, width: '100%' }}>

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        das
        <Collapsable />
    </>

    );
}


const SelectComponent: React.FC = () => {
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return (
        <div style={{ padding: 10 }}>
            <Form layout='vertical' >
                <Form.Item label="Required Mark" name="requiredMarkValue">
                    <Select
                        showSearch
                        placeholder="Select a component"
                        optionFilterProp="children"

                        onChange={onChange}
                        style={{ width: '100%' }}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: 'jack',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'tom',
                                label: 'Tom',
                            },
                        ]}
                    />
                </Form.Item>
            </Form>
            <Collapses />

        </div>
    )
}



export default App;