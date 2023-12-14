import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const serviceTableSchema: z.ZodObject<{
    name: z.ZodString;
    price: z.ZodNumber;
    roomType: z.ZodString;
    image: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    maxPerson: z.ZodNumber;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    price?: number;
    roomType?: string;
    image?: string[];
    maxPerson?: number;
    id?: string;
}, {
    name?: string;
    price?: number;
    roomType?: string;
    image?: string[];
    maxPerson?: number;
    id?: string;
}>;
type IColum = z.infer<typeof serviceTableSchema>;
export declare const columns: ColumnDef<IColum>[];
export {};
