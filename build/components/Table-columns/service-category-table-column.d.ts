import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const serviceCategoryTableSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
}, {
    name?: string;
    id?: string;
}>;
type IColum = z.infer<typeof serviceCategoryTableSchema>;
export declare const columns: ColumnDef<IColum>[];
export {};
