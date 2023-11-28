
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
    row,
}: any) {
    const invoice: any = row.original

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
                <DropdownMenuItem onClick={() => invoice.actions.handleUpdate(invoice)}>Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => invoice.actions.handleDelete(invoice)}>Delete</DropdownMenuItem>
                <DropdownMenuItem onClick={() => invoice.actions.handlePrint(invoice)}>Print</DropdownMenuItem>
                <DropdownMenuItem onClick={() => invoice.actions.handleDownload(invoice)}>Download</DropdownMenuItem>
                <DropdownMenuItem onClick={() => invoice.actions.handleSent(invoice)}>Sent</DropdownMenuItem>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Mark as</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup value={'markAs'}>
                            <DropdownMenuRadioItem onClick={() => invoice.actions.handleMarkAs({invoice, status: "draft"})} key={'draft'} value={'draft'}>
                                Draft
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => invoice.actions.handleMarkAs({invoice, status: "paid"})} key={'paid'} value={'paid'}>
                                Paid
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => invoice.actions.handleMarkAs({invoice, status: "sent"})} key={'sent'} value={'sent'}>
                                Sent
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
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
        accessorKey: "invoiceNumber",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Invoice Number" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("invoiceNumber")}</div>,
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
        accessorKey: "createdAt",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Date" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("createdAt")}</div>

            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },

    {
        accessorKey: "status",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="flex items-center text-center">
                    <Badge className={classNames({
                        'bg-sky-400 hover:bg-sky-400' : row.getValue("status").toLowerCase() === "draft",
                        'bg-emerald-500 hover:bg-emerald-500' : row.getValue("status").toLowerCase() === "paid",
                        'bg-red-500 hover:bg-red-500' : row.getValue("status").toLowerCase() === "sent"
                    })} variant="destructive">{row.getValue("status")}</Badge>
                </div>
            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "subTotal",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Total" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("subTotal")}</span>

                </div>
            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "notes",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Notes" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("notes")}</span>

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






