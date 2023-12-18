import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const userLogSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    details: z.ZodString;
    createdAt: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    type?: string;
    details?: string;
    createdAt?: string;
    id?: string;
}, {
    name?: string;
    type?: string;
    details?: string;
    createdAt?: string;
    id?: string;
}>;
export type IUserLogs = z.infer<typeof userLogSchema>;
export declare const columns: ColumnDef<IUserLogs>[];
