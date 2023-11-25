import React from 'react'
import {columns} from "./room-type-columns"
import Table from "./../../Data-table/data-table";

export default {
    title: "hotelierpro/tables/room-type"

}

export const RoomTableDemo = (args) => <Table {...args} />

RoomTableDemo.args = {
    data: [
        {
            roomName: "delux",
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
    columns: columns
}

