
import React from 'react'
import { Checkbox } from "../../elements/Checkbox/checkbox"

import { DataTableColumnHeader } from "../Data-table/data-table-column-header";

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Button } from "../../elements/Buttons/buttons"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../elements/Dropdown-menu/dropdownmenu";


function DataTableRowActions({
    row,
}: any) {
    const task: any = row.original

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem>Update</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
            
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export const columns: any = [
    {
        id: "select",
        header: ({ table }: any) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }: any) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "fullName",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Name" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("fullName")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "passportId",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Passport ID" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("passportId")}</div>
            )
        },
    },
    {
        accessorKey: "country",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Country" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("country")}</div>

            )
        },
        filterFn: (row:any, id:any, value:any) => {
            return value.includes(row.getValue(id))
        },
    },

    {
        accessorKey: "address",
        header: ({ column }:any) => (
            <DataTableColumnHeader column={column} title="Address" />
        ),
        cell: ({ row }:any) => {


            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("address")}</span>
                </div>
            )
        },
        filterFn: (row:any, id:any, value:any) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "email",
        header: ({ column }:any) => (
            <DataTableColumnHeader column={column} title="E-mail" />
        ),
        cell: ({ row }:any) => {

            return (
                <div className="flex items-center text-center">
                    <span>${row.getValue("email")}</span>

                </div>
            )
        },
        filterFn: (row:any, id:any, value:any) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "phone",
        header: ({ column }:any) => (
            <DataTableColumnHeader column={column} title="Phone Number" />
        ),
        cell: ({ row }:any) => {

            return (
                <div className="flex items-center text-center">
                    <span>${row.getValue("phone")}</span>

                </div>
            )
        },
        filterFn: (row:any, id:any, value:any) => {
            return value.includes(row.getValue(id))
        },
    },


    {
        id: "actions",
        cell: ({ row }:any) => <DataTableRowActions row={row} />,
    },
]






