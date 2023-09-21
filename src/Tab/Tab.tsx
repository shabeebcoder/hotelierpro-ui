import React from 'react';
import { Tabs as Tab } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import "./styles.css";

type tab = {
    value: string;
    label: string;
    icon?: React.ReactNode;
}
type panels = {
    panel: React.ReactNode;
    tabId: string;
}

interface Props {
    tabs: tab[];
    panels: panels[];
    defaultValue: string;
    handleOnClick?: any
}

export default function Tabs(props: Props) {
    const { panels = [], tabs = [], defaultValue, handleOnClick } = props;
    return (
        <Tab color="green" defaultValue={defaultValue} className='hp-tab'>
            <Tab.List>
                {
                    tabs.map((row) => <Tab.Tab onClick={() => handleOnClick(row)} value={row.value} >{row.label}</Tab.Tab>)
                }
            </Tab.List>
            {
                panels.map(({ tabId, panel }) => <Tab.Panel value={tabId} pt="xs">
                    {panel}
                </Tab.Panel>)
            }
        </Tab >
    );
}