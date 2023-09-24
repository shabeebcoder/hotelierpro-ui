import React from 'react';
import "./styles.css";
type tab = {
    value: string;
    label: string;
    icon?: React.ReactNode;
    handleOnClick: any;
};
type panels = {
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
