import { z } from "zod";
declare const servicecategorySchema: z.ZodObject<{
    name: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
}, {
    name?: string;
    id?: string;
}>;
export type IServiceCategory = z.infer<typeof servicecategorySchema>;
interface serviceCategoryProps {
    onSubmit: (data: IServiceCategory) => void;
    id: string;
    fields?: any;
    defaultValues?: IServiceCategory;
}
declare function AddServiceCategoryForm({ onSubmit, id, defaultValues, fields }: serviceCategoryProps): any;
export default AddServiceCategoryForm;
