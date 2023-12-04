import React from 'react'
import Roomtable from "./room-table"
import DataTable from '../Data-table/data-table'
import { columns as historyColumn } from "./history-table-column"

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


export const HistorytableDemo = () => {


    return <DataTable data={[
        {
            user: "shabeeb",
            room: "Single bed",
            details: "updated the room price",
            date: "10/10/2023"
        },
        {
            user: "shabeeb",
            room: "Single bed",
            details: "updated the room price",
            date: "10/10/2023"
        }
        ,
        {
            user: "shabeeb",
            room: "Single bed",
            details: "updated the room price",
            date: "10/10/2023"
        }
    ]} columns={historyColumn} />
}


