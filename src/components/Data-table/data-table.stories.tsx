import React from 'react'
import DataTable from "./data-table";
import { columns } from "./sample-column"
export default {
    title: "hotelierpro/data-table"
}


export const DataTableDemo = (args) => <DataTable {...args} />

DataTableDemo.args = {
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
    columns: columns,
}