import { z } from "zod";
import { ColumnDef } from '@tanstack/react-table';
export declare const invoicetableSchema: z.ZodObject<{
    invoiceNumber: z.ZodString;
    name: z.ZodString;
    date: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    status: z.ZodEnum<["paid", "draft", "sent"]>;
    total: z.ZodNumber;
    notes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    invoiceNumber?: string;
    name?: string;
    date?: Date;
    status?: "paid" | "draft" | "sent";
    total?: number;
    notes?: string;
}, {
    invoiceNumber?: string;
    name?: string;
    date?: string | Date;
    status?: "paid" | "draft" | "sent";
    total?: number;
    notes?: string;
}>;
export type IInvoiceTable = z.infer<typeof invoicetableSchema>;
export declare const columns: ColumnDef<IInvoiceTable>[];
