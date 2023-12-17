import { z } from "zod";
import { ColumnDef } from '@tanstack/react-table';
export declare const invoicetableSchema: z.ZodObject<{
    invoiceNumber: z.ZodString;
    name: z.ZodString;
    date: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    status: z.ZodEnum<["paid", "draft", "sent"]>;
    total: z.ZodNumber;
    notes: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    id: z.ZodString;
    actions: z.ZodOptional<z.ZodObject<{
        handleUpdate: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        handleDelete: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        handlePrint: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        handleDownload: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        handleSent: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        handleMarkAs: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handlePrint?: (...args: unknown[]) => unknown;
        handleDownload?: (...args: unknown[]) => unknown;
        handleSent?: (...args: unknown[]) => unknown;
        handleMarkAs?: (...args: unknown[]) => unknown;
    }, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handlePrint?: (...args: unknown[]) => unknown;
        handleDownload?: (...args: unknown[]) => unknown;
        handleSent?: (...args: unknown[]) => unknown;
        handleMarkAs?: (...args: unknown[]) => unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    invoiceNumber?: string;
    name?: string;
    date?: Date;
    status?: "paid" | "draft" | "sent";
    total?: number;
    notes?: string;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handlePrint?: (...args: unknown[]) => unknown;
        handleDownload?: (...args: unknown[]) => unknown;
        handleSent?: (...args: unknown[]) => unknown;
        handleMarkAs?: (...args: unknown[]) => unknown;
    };
}, {
    invoiceNumber?: string;
    name?: string;
    date?: string | Date;
    status?: "paid" | "draft" | "sent";
    total?: number;
    notes?: string;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handlePrint?: (...args: unknown[]) => unknown;
        handleDownload?: (...args: unknown[]) => unknown;
        handleSent?: (...args: unknown[]) => unknown;
        handleMarkAs?: (...args: unknown[]) => unknown;
    };
}>;
export type IInvoiceTable = z.infer<typeof invoicetableSchema>;
export declare const columns: ColumnDef<IInvoiceTable>[];
