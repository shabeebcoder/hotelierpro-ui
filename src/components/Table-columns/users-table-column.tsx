
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

import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"
import {roomTypeTableSchema} from "./room-type-columns"
import classNames from 'classnames';
import { Badge } from '../../elements/Badge/badge';


export const usersTableSchema = z.object({
    fullName: z.string(),
    email: z.string(),
    role: z.number(),
    blocked: z.boolean() ,
    phoneNumber: z.number(),
    id: z.string(),
    actions: z.object({
        handleUpdate: z.function(),
        handleDelete: z.function(),
        handleBlock: z.function(),
        handleUnblock: z.function(),
        handleResetPassword: z.function()
    })
})

export type IUsersTable = z.infer<typeof usersTableSchema>


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
                <DropdownMenuItem onClick={()=>task.actions.handleUpdate(task)}>update</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>task.actions.handleDelete(task)}>Delete</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>task.actions.handleBlock(task)}>Block </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>task.actions.handleUnblock(task)}>Unblock </DropdownMenuItem>
                <DropdownMenuItem onClick={()=>task.actions.handleResetPassword(task)}>Generate Password Reset Link </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export const columns:ColumnDef<IUsersTable>[] = [
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
            <DataTableColumnHeader column={column} title="Full Name" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("fullName")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "email",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="E-mail" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("email")}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "phoneNumber",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Phone Number" />
        ),
        cell: ({ row }: any) => {
            return (
                <div className="flex  text-center">
                    {row.getValue("phoneNumber")}
                </div>

            )
        },
     
    },
    {
        accessorKey: "blocked",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }: any) => {
            return (
                <div className="flex  text-center">
                    <Badge className={classNames({
                        'bg-emerald-500 hover:bg-emerald-500': row.getValue("blocked") === false,
                        'bg-red-500 hover:bg-red-500': row.getValue("blocked") === true
                    })} variant="destructive">{row.getValue("blocked") === false ? "Active" : "Blocked"}</Badge>
                </div>
            )
        },
     
    },
    {
        accessorKey: "roles",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Role" />
        ),
        cell: ({ row }: any) => {
            return (
                <div className="flex items-center text-center">
                    <span>{row.getValue("roles")}</span>
                </div>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }: any) => <DataTableRowActions row={row} />,
    },
]