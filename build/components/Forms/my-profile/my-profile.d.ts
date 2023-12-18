import { z } from "zod";
declare const myProfileSchema: z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodString;
    phoneNumber: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    id?: string;
}, {
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    id?: string;
}>;
export type IMyProfile = z.infer<typeof myProfileSchema>;
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
declare function AddPersonForm({ onsubmit, defaultValues, id, fields }: addPersonProps): any;
export default AddPersonForm;
