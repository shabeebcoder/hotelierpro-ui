import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const roomTableSchema: z.ZodObject<{
    name: z.ZodString;
    roomType: z.ZodString;
    maxPerson: z.ZodNumber;
    singleUsePrice: z.ZodNumber;
    regularUsePrice: z.ZodNumber;
    id: z.ZodOptional<z.ZodString>;
    actions: z.ZodObject<{
        handleUpdate: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
        handleDelete: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
        handleMainance: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleMainance?: (...args: unknown[]) => unknown;
    }, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleMainance?: (...args: unknown[]) => unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    roomType?: string;
    maxPerson?: number;
    singleUsePrice?: number;
    regularUsePrice?: number;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleMainance?: (...args: unknown[]) => unknown;
    };
}, {
    name?: string;
    roomType?: string;
    maxPerson?: number;
    singleUsePrice?: number;
    regularUsePrice?: number;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleMainance?: (...args: unknown[]) => unknown;
    };
}>;
export type IRoomColum = z.infer<typeof roomTableSchema>;
export declare const columns: ColumnDef<IRoomColum>[];
