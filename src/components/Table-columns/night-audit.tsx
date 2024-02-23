
import React from 'react'
import { DataTableColumnHeader } from "../Data-table/data-table-column-header";
import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table"



export const nightAuditTableSchema = z.object({
    checkouts: z.string(),
    checkin: z.string(),
    invoice: z.string(),
    paidInvoice: z.string(),
    reservations: z.number(),
    occupancy: z.number().optional(),
    totalRooms: z.number().optional(),
    id: z.string(),

})

export type INightAudit = z.infer<typeof nightAuditTableSchema>




export const columns:ColumnDef<INightAudit>[] = [
    {
        accessorKey: "checkouts",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Checkout Today" />
        ),
        cell: ({ row }: any) => <div className="w-[150px]">{row.getValue("checkouts")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "checkin",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Checkin Today" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("checkin")}</div>
            )
        },
    },
    {
        accessorKey: "reservations",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Reservations Today" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("reservations")}</div>

            )
        },
        filterFn: (row: any, id: any, value: any) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "invoices",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Invoices Today" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("invoices")}</div>
            )
        },
    },
    {
        accessorKey: "paidInvoice",
        header: ({ column }: any) => (
            <DataTableColumnHeader column={column} title="Paid Invoice Today" />
        ),
        cell: ({ row }: any) => {

            return (
                <div className="w-[150px]">{row.getValue("paidInvoice")}</div>
            )
        },
    }
]