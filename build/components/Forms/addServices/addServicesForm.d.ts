import { z } from "zod";
export declare const serviceSchema: z.ZodObject<{
    name: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    price?: number;
    category?: string;
    id?: string;
}, {
    name?: string;
    price?: number;
    category?: string;
    id?: string;
}>;
export type IService = z.infer<typeof serviceSchema>;
type IDropDown = {
    label: string;
    value: string;
};
interface addServiceProps {
    onSubmit: (data: IService) => void;
    serviceCategory?: IDropDown[];
    id: string;
    defaultValues?: IService;
    fields?: any;
}
declare function AddServicesForm({ onSubmit, serviceCategory, id, defaultValues, fields }: addServiceProps): any;
export default AddServicesForm;
