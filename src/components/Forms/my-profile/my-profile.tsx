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
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const myProfileSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
  
});
export type IMyProfile = z.infer<typeof myProfileSchema>

interface Field {
    label: string;
    description: string;
}

interface Fields {
    [key: string]: Field;
}
interface addPersonProps {
    fields?: Fields,
    onsubmit: any,
    defaultValues?: any,
    id: string,

}
function AddPersonForm({ onsubmit, defaultValues, id, fields = {
    fullName: {
        label: "Full Name",
        description: ""
    },
    email: {
        label: "Email",
        description: ""

    },
    phoneNumber: {
        label: "Phone Number",
        description: ""

    },


} }: addPersonProps): any {

    const addpersonForm = useForm<IMyProfile>({ defaultValues, resolver: zodResolver(myProfileSchema) });

    return (
        <>
            <Form {...addpersonForm} >
                <form
                    onSubmit={addpersonForm.handleSubmit(onsubmit)}
                    className="space-y-8 p-1"
                    id={id}
                >
                    <FormField
                        control={addpersonForm.control}
                        name="fullName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.fullName.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.fullName.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="email"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.email.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.email.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="phoneNumber"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.phoneNumber.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.phoneNumber.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Update</Button>
                </form>
            </Form>
        </>
    );
}

export default AddPersonForm;
