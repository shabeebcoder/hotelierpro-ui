import { z } from 'zod';
declare const changePasswordSchema: z.ZodEffects<z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
    reTypePassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    currentPassword?: string;
    newPassword?: string;
    reTypePassword?: string;
}, {
    currentPassword?: string;
    newPassword?: string;
    reTypePassword?: string;
}>, {
    currentPassword?: string;
    newPassword?: string;
    reTypePassword?: string;
}, {
    currentPassword?: string;
    newPassword?: string;
    reTypePassword?: string;
}>;
export type IChangePassword = z.infer<typeof changePasswordSchema>;
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
    id: string;
}
declare function ChangePassword({ onsubmit, id, fields, }: addPersonProps): any;
export default ChangePassword;
