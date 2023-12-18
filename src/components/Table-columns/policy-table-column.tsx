"use client"
import React from 'react'
import { Checkbox } from "../../elements/Checkbox/checkbox"
import { DataTableColumnHeader } from "../Data-table/data-table-column-header";
import { Button } from "../../elements/Buttons/buttons"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"



import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../elements/Dropdown-menu/dropdownmenu";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"
const stringToDate = z.string().transform((str) => new Date(str));
const dateSchema = z.union([stringToDate, z.date()]);

export const policyTableSchema = z.object({
    name: z.string(),
    createdAt: z.string(),
    id: z.string(),
    actions: z.object({
        handleUpdate: z.function(),
        handleDelete: z.function()
    })
});

export type IPolicyTable = z.infer<typeof policyTableSchema>

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
                <DropdownMenuItem onClick={() => task.actions.handleUpdate(task)}>Update
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => task.actions.handleDelete(task)}>Delete</DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export const columns: ColumnDef<IPolicyTable>[] = [
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
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Policy" />
        ),
        cell: ({ row }) => <div >{row.getValue("name")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => <div className="w-[150px]">{row.getValue("createdAt")}</div>,
        enableSorting: false,
        enableHiding: false,
    },

    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]