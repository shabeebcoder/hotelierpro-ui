import React from 'react';
interface IDrawer {
    open: boolean;
    children: any;
    title?: String;
    description?: String;
    Form?: any;
    SubmitButton?: any;
}
declare function Drawer({ open, children, title, description, Form, SubmitButton }: IDrawer): React.JSX.Element;
export default Drawer;
