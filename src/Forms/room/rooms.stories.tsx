import React from "react"
import RoomType from "./room"

export default {
    title: 'components/forms'
}

export const Rooms = (args) => <RoomType {...args} />

Rooms.args = {
    handleCancel: () => alert("Handle cancel"),
    handleOnFinish: (value) => alert(JSON.stringify(value)),
    title: 'Add Rooms',
    formName: 'formName',
    roomTypes: [
        {
            value: 'single',
            label: 'Single'
        }
    ]
}