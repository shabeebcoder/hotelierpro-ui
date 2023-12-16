import { z } from "zod";
export declare const roomsSchema: z.ZodObject<{
    name: z.ZodString;
    roomType: z.ZodString;
    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    roomType?: string;
    images?: string[];
    id?: string;
}, {
    name?: string;
    roomType?: string;
    images?: string[];
    id?: string;
}>;
export type IRoom = z.infer<typeof roomsSchema>;
interface AddRoomsProps {
    onsubmit: any;
    defaultValues?: any;
    id: string;
    roomTypes: any;
    fields?: any;
}
declare function AddRooms({ onsubmit, defaultValues, id, roomTypes, fields }: AddRoomsProps): any;
export default AddRooms;
