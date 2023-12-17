import { z } from "zod";
declare const policyFormSchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
}, {
    name?: string;
    id?: string;
}>;
export type IPolicyForm = z.infer<typeof policyFormSchema>;
interface serviceCategoryProps {
    onSubmit: (data: IPolicyForm) => void;
    id: string;
    fields?: any;
    defaultValues?: IPolicyForm;
}
declare function PolicyForm({ onSubmit, id, defaultValues, fields }: serviceCategoryProps): any;
export default PolicyForm;
