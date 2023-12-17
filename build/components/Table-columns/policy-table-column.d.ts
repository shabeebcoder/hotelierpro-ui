import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const policyTableSchema: z.ZodObject<{
    name: z.ZodString;
    createdAt: z.ZodString;
    id: z.ZodString;
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
    createdAt?: string;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
    };
}, {
    name?: string;
    createdAt?: string;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
    };
}>;
export type IPolicyTable = z.infer<typeof policyTableSchema>;
export declare const columns: ColumnDef<IPolicyTable>[];
