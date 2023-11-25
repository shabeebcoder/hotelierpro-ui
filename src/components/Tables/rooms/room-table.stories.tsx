import React from 'react'
import Roomtable from "./room-table"

export default {
    title: "hotelierpro/tables/room-table"

}

export const RoomTableDemo = (args) => <Roomtable {...args} />

RoomTableDemo.args = {
    data: [
        {
            roomName: "delux",
            roomType: "single",
            maxPerson: 2,
            regularPrice: 20,
            singlePrice: 20,
            actions: {
                handleUpdate: (data: any) => alert(JSON.stringify(data)),
                handleDelete: (data: any) => alert(JSON.stringify(data)),
                handleMainance: (data: any) => alert(JSON.stringify(data))
            }
        }
    ],
}

