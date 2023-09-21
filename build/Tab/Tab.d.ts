import React from 'react';
import "./styles.css";
declare type tab = {
    value: string;
    label: string;
    icon?: React.ReactNode;
};
declare type panels = {
    panel: React.ReactNode;
    tabId: string;
};
interface Props extends ButtonProps {
    tabs: tab[];
    panels: panels[];
    defaultValue: string;
    handleOnClick?: any;
    addRooms: string;
}
interface ButtonProps {
    buttonIcon?: any;
    btHandleOnClick: any;
    buttonText: string;
}
export default function Tabs(props: Props): React.JSX.Element;
export {};
