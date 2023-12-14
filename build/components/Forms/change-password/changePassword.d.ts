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
declare function ChangePassword({ onsubmit, defaultValues, id, fields, }: addPersonProps): any;
export default ChangePassword;
