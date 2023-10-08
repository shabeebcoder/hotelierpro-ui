import React from 'react';
import { Button, Select, Space } from 'antd';
import { LeftOutlined, RightOutlined, TableOutlined } from '@ant-design/icons';

const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const WeeklyMonthly = ({ handleWeeklyMonthly }) => <Select

    placeholder="Week"

    onChange={handleWeeklyMonthly}

    options={[
        {
            value: 'month',
            label: 'Month',
        },
        {
            value: 'week',
            label: 'Week',
        },

    ]}
/>
const Header = (props: any) => {



    const { handleNewBookingButton, handleWeeklyMonthly } = props;
    return (<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <div className="left">
            Booking
            <div>

                <TableOutlined /> &nbsp; 22 Dec, 2022 <LeftOutlined /><RightOutlined />
            </div>
        </div>
        <div className="right">
            <WeeklyMonthly handleWeeklyMonthly={handleWeeklyMonthly} />&nbsp;
            <Space>

                <Button type="primary" onClick={handleNewBookingButton} >New Booking</Button>
            </Space>
        </div>
    </div>)
}


export default Header;