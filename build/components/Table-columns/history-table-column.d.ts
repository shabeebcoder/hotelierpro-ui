import { z } from "zod";
import { ColumnDef } from '@tanstack/react-table';
export declare const bookingHistoryTableSchema: z.ZodObject<{
    user: z.ZodString;
    room: z.ZodDefault<z.ZodString>;
    details: z.ZodString;
    date: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
}, "strip", z.ZodTypeAny, {
    user?: string;
    room?: string;
    details?: string;
    date?: Date;
}, {
    user?: string;
    room?: string;
    details?: string;
    date?: string | Date;
}>;
export type IBookingHistoryTable = z.infer<typeof bookingHistoryTableSchema>;
export declare const columns: ColumnDef<IBookingHistoryTable>[];
