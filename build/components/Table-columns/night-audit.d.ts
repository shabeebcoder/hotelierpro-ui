import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const nightAuditTableSchema: z.ZodObject<{
    checkouts: z.ZodString;
    checkin: z.ZodString;
    invoice: z.ZodString;
    paidInvoice: z.ZodString;
    reservations: z.ZodNumber;
    occupancy: z.ZodOptional<z.ZodNumber>;
    totalRooms: z.ZodOptional<z.ZodNumber>;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    checkouts?: string;
    checkin?: string;
    invoice?: string;
    paidInvoice?: string;
    reservations?: number;
    occupancy?: number;
    totalRooms?: number;
    id?: string;
}, {
    checkouts?: string;
    checkin?: string;
    invoice?: string;
    paidInvoice?: string;
    reservations?: number;
    occupancy?: number;
    totalRooms?: number;
    id?: string;
}>;
export type INightAudit = z.infer<typeof nightAuditTableSchema>;
export declare const columns: ColumnDef<INightAudit>[];
