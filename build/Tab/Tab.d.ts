import React from 'react';
declare type tab = {
    value: string;
    label: string;
    icon?: React.ReactNode;
};
declare type panels = {
    panel: React.ReactNode;
    tabId: string;
};
interface Props {
    tabs: tab[];
    panels: panels[];
    defaultValue: string;
    handleOnClick?: any;
}
export default function Tabs(props: Props): React.JSX.Element;
export {};
