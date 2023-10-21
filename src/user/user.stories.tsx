import React from "react";
import Users from "./user";

export default {
    title: 'elements/User'
}


export const User = (args) => <Users {...args} />


User.args = {
    imageUrl: 'https://i.ibb.co/cwpx8Mh/Group-73.png',
    fullName: 'Shabeeb ck',
    email: 'shabeebcoder@gmmail.com',
    onLogout : () => alert()
}