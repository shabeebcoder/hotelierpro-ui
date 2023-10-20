import React from "react";

import SindBarCompoenent from "./sidebar";


export default {
    title: 'components/Navigation'
}



const handleOnClick = (e, value) => {
    alert(JSON.stringify(value))
}

export const SideBar = (args) => <SindBarCompoenent {...args} />

let index = 0

SideBar.args = {
    handleOnClick: handleOnClick,
    index,
    onLogout: () => alert("logging out"),
    fullName: "shabeeb ck",
    imageUrl: "https://i.ibb.co/cwpx8Mh/Group-73.png",
    email: 'shabeebcoder@gmail.com'
    
}

