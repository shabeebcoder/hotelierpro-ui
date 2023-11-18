import React from 'react'
import AddRooms from "./addrooms";

export default {
    title: "hotelierPro/Form/AddRooms"
}



export const AddRoomFormExample = (args) => <AddRooms {...args} />
const sampleUpdateData = {
    fullName: "shabeeb",
    companyId: "shabeeb"
}

AddRoomFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    defaultValue: sampleUpdateData,
    type: "create"
}