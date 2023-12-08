declare function AddServiceCategoryForm({ onsubmit, id, defaultValues, currencyPostion, weekStartsOn, dataFormat, timeZone, invoiceLanguage, language, fields }: {
    onsubmit: any;
    id: any;
    defaultValues?: {};
    currencyPostion: any;
    weekStartsOn: any;
    dataFormat: any;
    timeZone: any;
    invoiceLanguage: any;
    language: any;
    fields?: {
        language: {
            label: string;
            description: string;
        };
        invoiceLanguage: {
            label: string;
            description: string;
        };
        timeZone: {
            label: string;
            description: string;
        };
        dataFormat: {
            label: string;
            description: string;
        };
        weekStartsOn: {
            label: string;
            description: string;
        };
        currencyPostion: {
            label: string;
            description: string;
        };
    };
}): any;
export default AddServiceCategoryForm;
