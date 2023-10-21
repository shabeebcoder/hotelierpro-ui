import React from "react";
import Breadcrumb from "./breadcrumb";


export default {
    title: "elements/Breadcrumbs"
}



export const Breadcrumbs = (args) => <Breadcrumb {...args} />
Breadcrumbs.args = {
    items: [
        {
            title: 'Home',
        },
        {
            title: <a href="">Application Center</a>,
        },
        {
            title: <a href="">Application List</a>,
        },
        {
            title: 'An Application',
        },
    ]
}