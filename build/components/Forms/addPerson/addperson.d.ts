import { z } from "zod";
declare const guestSchema: z.ZodObject<{
    fullName: z.ZodString;
    companyId: z.ZodString;
    bank: z.ZodString;
    accountNumber: z.ZodString;
    email: z.ZodString;
    contactNumber: z.ZodString;
    address: z.ZodString;
    contactPerson: z.ZodString;
    passportNumber: z.ZodString;
    country: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fullName?: string;
    companyId?: string;
    bank?: string;
    accountNumber?: string;
    email?: string;
    contactNumber?: string;
    address?: string;
    contactPerson?: string;
    passportNumber?: string;
    country?: string;
    id?: string;
}, {
    fullName?: string;
    companyId?: string;
    bank?: string;
    accountNumber?: string;
    email?: string;
    contactNumber?: string;
    address?: string;
    contactPerson?: string;
    passportNumber?: string;
    country?: string;
    id?: string;
}>;
export type GuestType = z.infer<typeof guestSchema>;
interface Field {
    label: string;
    description: string;
}
interface Fields {
    [key: string]: Field;
}
interface addPersonProps {
    fields?: Fields;
    onSubmit: (data: GuestType) => void;
    defaultValues?: GuestType;
    id: string;
}
declare function AddPersonForm({ onSubmit, defaultValues, id, fields }: addPersonProps): any;
export default AddPersonForm;
