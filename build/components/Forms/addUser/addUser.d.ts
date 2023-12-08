declare function AddPersonForm({ onsubmit, defaultValues, id, roles, fields }: {
    onsubmit: any;
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
