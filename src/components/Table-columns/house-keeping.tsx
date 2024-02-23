
import React from 'react'
import { DataTableColumnHeader } from "../Data-table/data-table-column-header";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"



export const houseKeepingTableSchema = z.object({
    occupiedRooms: z.string(),
    checkin: z.string(),
    checkouts: z.number(),
    id: z.string(),
})

export type IHouseKeepingTableSchema = z.infer<typeof houseKeepingTableSchema>




export const columns:ColumnDef<IHouseKeepingTableSchema>[] = [
    {
        accessorKey: "checkouts",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title=" Checkouts today" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("checkouts")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "checkin",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Checkin Today" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("checkin")}</div>
            )
        },
    },
    {
        accessorKey: "occupiedRooms",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Occupied Rooms" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("occupiedRooms")}</div>

            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },
]