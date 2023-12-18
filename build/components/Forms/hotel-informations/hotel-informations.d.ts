import { z } from "zod";
declare const hotelInformationSchema: z.ZodObject<{
    hotelName: z.ZodString;
    country: z.ZodString;
    state: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    postlCode: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    hotelName?: string;
    country?: string;
    state?: string;
    address?: string;
    postlCode?: string;
    email?: string;
    website?: string;
    phone?: string;
    id?: string;
}, {
    hotelName?: string;
    country?: string;
    state?: string;
    address?: string;
    postlCode?: string;
    email?: string;
    website?: string;
    phone?: string;
    id?: string;
}>;
export type IHotelInformationForm = z.infer<typeof hotelInformationSchema>;
interface Field {
    label: string;
    description: string;
}
interface Fields {
    [key: string]: Field;
}
interface addPersonProps {
    fields?: Fields;
    onsubmit: any;
    defaultValues?: any;
    id: string;
}
declare function hotelInformationForm({ onsubmit, defaultValues, id, fields }: addPersonProps): any;
export default hotelInformationForm;
