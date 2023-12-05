import React from 'react';
interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string;
        title: string;
    }[];
}
export declare function SidebarNav({ className, items, ...props }: SidebarNavProps): React.JSX.Element;
export {};
