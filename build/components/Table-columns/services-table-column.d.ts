import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const serviceTableSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
    price?: number;
    category?: string;
}, {
    name?: string;
    id?: string;
    price?: number;
    category?: string;
}>;
type IColum = z.infer<typeof serviceTableSchema>;
export declare const columns: ColumnDef<IColum>[];
export {};
