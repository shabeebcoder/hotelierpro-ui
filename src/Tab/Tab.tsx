import React from 'react';
import { Tabs as Tab } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import "./styles.css";
import { Button } from '../Buttons/';

type tab = {
    value: string;
    label: string;
    icon?: React.ReactNode;
}
type panels = {
    panel: React.ReactNode;
    tabId: string;
}

interface Props extends ButtonProps {
    tabs: tab[];
    panels: panels[];
    defaultValue: string;
    handleOnClick?: any
    addRooms: string;
}
interface ButtonProps {
    buttonIcon?: any,
    btHandleOnClick: any
    buttonText: string
}

export default function Tabs(props: Props) {
    const { panels = [], tabs = [], defaultValue, handleOnClick, btHandleOnClick, buttonText, buttonIcon, addRooms } = props;



    return (
        <Tab color="green" defaultValue={defaultValue} className='hp-tab'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                <Tab.List>
                    {
                        tabs.map((row) => <Tab.Tab onClick={() => handleOnClick(row)} value={row.value} >{row.label}</Tab.Tab>)
                    }
                </Tab.List>
                <Button type='hPprimary' buttonIcon={buttonIcon || ''} onClick={btHandleOnClick}>{buttonText}</Button>
            </div>
            {
                panels.map(({ tabId, panel }) => <Tab.Panel value={tabId} pt="xs">
                    {panel}
                </Tab.Panel>)
            }
        </Tab >
    );
}