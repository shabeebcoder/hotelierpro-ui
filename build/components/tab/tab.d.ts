import React from 'react';
interface Tab {
    label: string;
    Icon: any;
    onClick: () => void;
    active?: boolean;
}
interface TabProps {
    items: Tab[];
}
declare function Tab({ items }: TabProps): React.JSX.Element;
export default Tab;
