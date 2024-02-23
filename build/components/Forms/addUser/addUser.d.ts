import { z } from "zod";
declare const addUserSchema: z.ZodEffects<z.ZodObject<{
    fullName: z.ZodString;
    email: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
    retypepassword: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    roles: z.ZodEnum<["admin", "staff"]>;
}, "strip", z.ZodTypeAny, {
    fullName?: string;
    email?: string;
    password?: string;
    retypepassword?: string;
    phoneNumber?: string;
    id?: string;
    roles?: "admin" | "staff";
}, {
    fullName?: string;
    email?: string;
    password?: string;
    retypepassword?: string;
    phoneNumber?: string;
    id?: string;
    roles?: "admin" | "staff";
}>, {
    fullName?: string;
    email?: string;
    password?: string;
    retypepassword?: string;
    phoneNumber?: string;
    id?: string;
    roles?: "admin" | "staff";
}, {
    fullName?: string;
    email?: string;
    password?: string;
    retypepassword?: string;
    phoneNumber?: string;
    id?: string;
    roles?: "admin" | "staff";
}>;
export type IAddUser = z.infer<typeof addUserSchema>;
declare function AddPersonForm({ onsubmit, isUpdate, defaultValues, id, roles, fields }: {
    onsubmit: any;
    isUpdate?: boolean;
    defaultValues: any;
    id: any;
    roles: any;
    fields?: {
        fullName: {
            label: string;
            description: string;
        };
        email: {
            label: string;
            description: string;
        };
        phoneNumber: {
            label: string;
            description: string;
        };
        password: {
            label: string;
            description: string;
        };
        retypepassword: {
            label: string;
            description: string;
        };
        roles: {
            label: string;
            description: string;
        };
    };
}): any;
export default AddPersonForm;
