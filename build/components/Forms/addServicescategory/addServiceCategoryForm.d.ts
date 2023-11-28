declare function AddServiceCategoryForm({ onsubmit, id, defaultValues, fields }: {
    onsubmit: any;
    id: any;
    defaultValues?: {};
    fields?: {
        name: {
            label: string;
            description: string;
        };
    };
}): any;
export default AddServiceCategoryForm;
