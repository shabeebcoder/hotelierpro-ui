import React from 'react';
import { Tabs } from '@mantine/core';
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
    defaultValue: string
}

export default function Tab(props: Props) {
    const { panels = [], tabs = [], defaultValue } = props;
    return (
        <Tabs color="green" defaultValue={defaultValue}>
            <Tabs.List>
                {
                    tabs.map((row) => <Tabs.Tab value={row.value} icon={<IconPhoto size="0.8rem" />}>{row.label}</Tabs.Tab>)
                }
            </Tabs.List>
            {
                panels.map(({ tabId, panel }) => <Tabs.Panel value={tabId} pt="xs">
                    {panel}
                </Tabs.Panel>)
            }
        </Tabs>
    );
}