import React from 'react'
import AddRooms from "./addrooms";

export default {
    title: "hotelierPro/Form/AddRooms"
}



export const AddRoomFormExample = (args) => <AddRooms {...args} />
const sampleUpdateData = {
    Username: "shabeeb",
    companyId: "shabeeb"
}

AddRoomFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    defaultValue: sampleUpdateData,
    type: "create",
    id: "1",
    roomTypes: [
        {
            value: 'single',
            label: 'Single'
        }
    ]
}