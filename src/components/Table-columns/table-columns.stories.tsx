import React from 'react'
import { columns as roomColumns } from "./room-type-columns"
import { columns as roomTypes } from "./room-type-columns";
import { columns as serviceCategory } from "./service-category-table-column"
import { columns as services } from "./services-table-column"
import Table from "../Data-table/data-table";

export default {
    title: "hotelierpro/tables/columns"

}

export const RoomTableDemo = (args) => <Table {...args} />

RoomTableDemo.args = {
    columns: roomColumns,
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

}
export const RoomTypeTableDemo = (args) => <Table columns={roomTypes} data={
    [{
        roomName: "delux",
        maxPerson: 2,
        regularPrice: 20,
        singlePrice: 20,
        actions: {
            handleUpdate: (data: any) => alert(JSON.stringify(data)),
            handleDelete: (data: any) => alert(JSON.stringify(data)),
            handleMainance: (data: any) => alert(JSON.stringify(data))
        }
    }]
} />
export const serviceTableDemo = (args) => <Table columns={services} data={[]} />
export const serviceCategoryDemo = (args) => <Table columns={serviceCategory} data={[]} />

