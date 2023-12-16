
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
import Confirmation from '../Confirmation/alert';


import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"


export const roomTypeTableSchema = z.object({
    name: z.string(),
    maxPerson: z.number(),
    singleUsePrice: z.number(),
    regularUsePrice: z.number(),
    id: z.string().optional(),
    actions: z.object({
        handleUpdate: z.function(),
        handleDelete: z.function(),
        handleMainance: z.function()
    })
});

export type IRoomTypeColum = z.infer<typeof roomTypeTableSchema>



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
                <DropdownMenuItem onClick={() => task.actions.handleMainance(task)}>Maintainance</DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export const columns: ColumnDef<IRoomTypeColum>[] = [
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
        accessorKey: "name",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Type Name" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("name")}</div>,
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "maxPerson",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Max Person (Per Room)" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="flex  text-center">
                    {row.getValue("maxPerson")}
                </div>

            )
        },

    },

    {
        accessorKey: "regularUsePrice",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Pice (Regular)" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("regularUsePrice")}</span>
                </div>
            )
        },

    },
    {
        accessorKey: "singleUsePrice",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Price (Single use)" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("singleUsePrice")}</span>
                </div>
            )
        },

    },


    {
        id: "actions",
        cell: ({ row }: any) => <DataTableRowActions row={row} />,
    },
]