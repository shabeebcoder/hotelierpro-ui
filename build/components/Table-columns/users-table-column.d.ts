import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const usersTableSchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodString;
    role: z.ZodNumber;
    blocked: z.ZodBoolean;
    phoneNumber: z.ZodNumber;
    id: z.ZodString;
    actions: z.ZodObject<{
        handleUpdate: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
        handleDelete: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
        handleBlock: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
        handleUnblock: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
        handleResetPassword: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleBlock?: (...args: unknown[]) => unknown;
        handleUnblock?: (...args: unknown[]) => unknown;
        handleResetPassword?: (...args: unknown[]) => unknown;
    }, {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleBlock?: (...args: unknown[]) => unknown;
        handleUnblock?: (...args: unknown[]) => unknown;
        handleResetPassword?: (...args: unknown[]) => unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    fullName?: string;
    email?: string;
    role?: number;
    blocked?: boolean;
    phoneNumber?: number;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleBlock?: (...args: unknown[]) => unknown;
        handleUnblock?: (...args: unknown[]) => unknown;
        handleResetPassword?: (...args: unknown[]) => unknown;
    };
}, {
    fullName?: string;
    email?: string;
    role?: number;
    blocked?: boolean;
    phoneNumber?: number;
    id?: string;
    actions?: {
        handleUpdate?: (...args: unknown[]) => unknown;
        handleDelete?: (...args: unknown[]) => unknown;
        handleBlock?: (...args: unknown[]) => unknown;
        handleUnblock?: (...args: unknown[]) => unknown;
        handleResetPassword?: (...args: unknown[]) => unknown;
    };
}>;
export type IUsersTable = z.infer<typeof usersTableSchema>;
export declare const columns: ColumnDef<IUsersTable>[];
