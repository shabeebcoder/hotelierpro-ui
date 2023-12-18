import React from 'react';
import { Label } from '../../../elements/Label/label';
import { Input } from '../../../elements/Input/input';
import { Textarea } from '../../../elements/TextArea/textarea';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../elements/Form/form';
import { useForm } from 'react-hook-form';
import { Button } from '../../../elements/Buttons/buttons';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const changePasswordSchema = z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters long"),
    reTypePassword: z.string().min(6, "Password confirmation is required")
  }).refine((data) => data.newPassword === data.reTypePassword, {
    message: "New passwords must match",
    path: ["reTypePassword"], // This specifies that the error should be attached to the reTypePassword field
  });

  export type IChangePassword = z.infer<typeof changePasswordSchema>


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
function ChangePassword({
    onsubmit,
    id,
    fields = {
        currentPassword: {
            label: 'Current Password',
            description: '',
        },
        newPassword: {
            label: 'New Password',
            description: '',
        },
        reTypePassword: {
            label: 'Re-Type Password',
            description: '',
        },
    },
}: addPersonProps): any {
    const addpersonForm = useForm<IChangePassword>({ resolver: zodResolver(changePasswordSchema) });

    return (
        <>
            <Form {...addpersonForm}>
                <form
                    onSubmit={addpersonForm.handleSubmit(onsubmit)}
                    className="space-y-8 p-1"
                    id={id}
                >
                    <FormField
                        control={addpersonForm.control}
                        name="currentPassword"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.currentPassword.label}
                                </FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.currentPassword.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="newPassword"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.newPassword.label}
                                </FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.newPassword.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="reTypePassword"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.reTypePassword.label}
                                </FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.reTypePassword.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button>Update</Button>
                </form>
            </Form>
        </>
    );
}

export default ChangePassword;
