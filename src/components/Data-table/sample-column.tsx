
import React from 'react'
import { Checkbox } from "./../../elements/Checkbox/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header";
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
        accessorKey: "roomName",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Name" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("roomName")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "roomType",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Type" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("roomType")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "maxPerson",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Max Person (Per Room)" />
        ),
        cell: ({ row }: any) => {


            // if (!status) {
            //     return null
            // }

            return (
                <div className="flex  text-center">
                    {row.getValue("maxPerson")}
                </div>

            )
        },
        // filterFn: (row:any, id:any, value:any) => {
        //     return value.includes(row.getValue(id))
        // },
    },

    {
        accessorKey: "regularPrice",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Pice (Regular)" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="flex items-center text-center">
                    <span>$ {row.getValue("regularPrice")}</span>
                </div>
            )
        },
        // filterFn: (row:any, id:any, value:any) => {
        //     return value.includes(row.getValue(id))
        // },
    },
    {
        accessorKey: "singlePrice",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Room Price (Single use)" />
        ),
        cell: ({ row }: any) => {


            return (
                <div className="flex items-center text-center">
                    <span>$ {row.getValue("singlePrice")}</span>
                </div>
            )
        },
        // filterFn: (row:any, id:any, value:any) => {
        //     return value.includes(row.getValue(id))
        // },
    },


    {
        id: "actions",
        cell: ({ row }: any) => <DataTableRowActions row={row} />,
    },
]