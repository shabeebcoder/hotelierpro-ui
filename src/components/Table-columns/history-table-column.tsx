
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
        accessorKey: "user",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="User" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("user")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "room",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("room")}</div>
            )
        },
    },
    {
        accessorKey: "details",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Details" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("details")}</div>

            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },

    {
        accessorKey: "date",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Date" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="w-[150px]">{row.getValue("date")}</div>
            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },

]






