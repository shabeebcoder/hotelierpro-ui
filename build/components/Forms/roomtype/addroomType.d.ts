declare function AddRoomType({ onsubmit, id, defaultValues, fields }: {
    onsubmit: any;
    id: any;
    defaultValues?: {};
    fields?: {
        name: {
            label: string;
            description: string;
        };
        maxPerson: {
            label: string;
            description: string;
        };
        regularPrice: {
            label: string;
            description: string;
        };
        singlePrice: {
            label: string;
            description: string;
        };
    };
}): any;
export default AddRoomType;
