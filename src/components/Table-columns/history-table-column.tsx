
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

import { z } from "zod"
import moment from "moment"
import { ColumnDef } from '@tanstack/react-table';

const stringToDate = z.string().transform((str) => new Date(str));
const dateSchema = z.union([stringToDate, z.date()]);

export const bookingHistoryTableSchema = z.object({
    user: z.string(),
    room: z.string().default("-"),
    details: z.string(),
    date: dateSchema
});

export type IBookingHistoryTable = z.infer<typeof bookingHistoryTableSchema>



export const columns: ColumnDef<IBookingHistoryTable>[] = [

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






