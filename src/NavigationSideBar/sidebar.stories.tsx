import React from "react";

import SindBarCompoenent from "./sidebar";


export default {
    title: 'components/Navigation'
}



const handleOnClick = (value) => {
    alert(JSON.stringify(value))
}

export const SideBar = (args) => <SindBarCompoenent {...args} />

let index = 0

SideBar.args = {
    handleOnClick,
    index
}

