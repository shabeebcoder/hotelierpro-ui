
import React from 'react'
import { Checkbox } from "../../elements/Checkbox/checkbox"

import { DataTableColumnHeader } from "../Data-table/data-table-column-header";
import { Badge } from "../../elements/Badge/badge"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Button } from "../../elements/Buttons/buttons"
import classNames from 'classnames';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSubTrigger,
    DropdownMenuSub,
    DropdownMenuRadioGroup,
    DropdownMenuSubContent,
    DropdownMenuRadioItem
} from "../../elements/Dropdown-menu/dropdownmenu";


function DataTableRowActions({
    row = {},
}: any) {
  

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
                <DropdownMenuItem onClick={() => row.actions.handleExportPdf()}>Export PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => row.actions.handleExportXlx()}>Export XLX</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


function statusBadge(status) {
    if (status === "paid") {
        return "destructive"
    }
    if (status === "paid") {
        return "destructive"
    }
    if (status === "draft") {
        return "destructive"
    }
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
        accessorKey: "bookingId",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Booking ID" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("bookingId")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "client",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Client Name" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("client")}</div>
            )
        },
    },
    {
        accessorKey: "from",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="From" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("from")}</div>

            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },

    {
        accessorKey: "to",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="TO" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="w-[150px]">{row.getValue("to")}</div>
            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "room",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("room")}</span>

                </div>
            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "totalPrice",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Total Price" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("totalPrice")}</span>

                </div>
            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },


    {
        id: "actions",
        cell: ({ row }: any) => <DataTableRowActions row={row} />,
    },
]






