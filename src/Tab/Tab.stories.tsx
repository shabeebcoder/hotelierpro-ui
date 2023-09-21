import React from "react";
import Tab from "./Tab";


export default {
    title: 'components/Tab'
}


export const Primary = (args) => <Tab {...args} />
const state = "addRooms"

Primary.args = {

    tabs: [
        {
            value: 'gallery',
            label: 'Gallery'
        },
        {
            value: 'messages',
            label: 'Messages'
        },
        {
            value: 'settings',
            label: 'Settings'
        },
    ],
    panels: [
        { tabId: 'gallery', panel: <h1>Gallery</h1> },
        { tabId: 'settings', panel: 'settings' },
        { tabId: 'messages', panel: 'messages' }
    ],
    defaultValue: 'gallery',
    handleOnClick: (row) => alert(JSON.stringify(row)),
    buttonText: 'Add Rooms',
    btHandleOnClick: () => alert('hey + ==' + state),
    tanleName: state
}