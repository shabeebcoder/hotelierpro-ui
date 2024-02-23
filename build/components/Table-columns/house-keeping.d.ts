import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
export declare const houseKeepingTableSchema: z.ZodObject<{
    occupiedRooms: z.ZodString;
    checkin: z.ZodString;
    checkouts: z.ZodNumber;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    occupiedRooms?: string;
    checkin?: string;
    checkouts?: number;
    id?: string;
}, {
    occupiedRooms?: string;
    checkin?: string;
    checkouts?: number;
    id?: string;
}>;
export type IHouseKeepingTableSchema = z.infer<typeof houseKeepingTableSchema>;
export declare const columns: ColumnDef<IHouseKeepingTableSchema>[];
