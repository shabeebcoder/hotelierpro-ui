import React from 'react';
import { Tabs as Tab } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';


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
        <Tab color="green" defaultValue={defaultValue}>
            <Tab.List>
                {
                    tabs.map((row) => <Tab.Tab onClick={() => handleOnClick(row)} value={row.value} icon={<IconPhoto size="0.8rem" />}>{row.label}</Tab.Tab>)
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