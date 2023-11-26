"use client"
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../elements/Checkbox/checkbox"
import { DataTableColumnHeader } from "../Data-table/data-table-column-header";
import { Button } from "../../elements/Buttons/buttons"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../elements/Select/select";
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
                <DropdownMenuItem onClick={()=>task.actions.handleUpdate(task)}>Update
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>task.actions.handleDelete(task)}>Delete</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>task.actions.handleMainance(task)}>Maintainance</DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export const columns: any = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
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
        accessorKey: "serviceName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Service Name" />
        ),
        cell: ({ row }) => <div className="w-[150px]">{row.getValue("serviceName")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "price",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Price" />
        ),
        cell: ({ row }) => {
            // const label = labels.find((label: any) => label.value === row.original.label)

            return (
                <div className="flex items-center text-center">
                    <span>$ {row.getValue("price")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "serviceCategory",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Service Category" />
        ),
        cell: ({ row }) => {
            // const status = statuses.find(
            //     (status: any) => status.value === row.getValue("status")
            // )

            // if (!status) {
            //     return null
            // }

            return (
                <div className="flex items-center">
                    <span>{row.getValue("serviceCategory")}</span>
                </div>
            )
        },
        // filterFn: (row, id, value) => {
        //     return value.includes(row.getValue(id))
        // },
    },



    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]