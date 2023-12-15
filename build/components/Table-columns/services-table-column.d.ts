import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const serviceTableSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodString;
    actions: z.ZodObject<{
        handleUpdate: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
        handleDelete: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
    }, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
    price?: number;
    category?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
    };
}, {
    name?: string;
    id?: string;
    price?: number;
    category?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
    };
}>;
export type IServiceTable = z.infer<typeof serviceTableSchema>;
export declare const columns: ColumnDef<IServiceTable>[];
