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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../elements/Select/select"

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const addUserSchema = z.object({
    fullName: z.string(),
    email: z.string().email("Invalid email address"), // Optionally, validate email format
    password: z.string().min(6, "Password must be at least 6 characters long"), // Optionally, enforce a minimum length
    retypepassword: z.string(),
    roles: z.enum(["admin", "staff"])
}).refine((data) => data.password === data.retypepassword, {
    message: "Passwords do not match",
    path: ["retypepassword"], // Indicates that the error message should be attached to the retypepassword field
});

export type IAddUser = z.infer<typeof addUserSchema>

function AddPersonForm({ onsubmit, defaultValues, id, roles, fields = {
    fullName: {
        label: "Full Name",
        description: ""
    },
    email: {
        label: "E-mail",
        description: ""

    },
    password: {
        label: "Password",
        description: ""

    },
    retypepassword: {
        label: "Repeat Password",
        description: ""

    },
    roles: {
        label: "Role",
        description: ""
    }


} }): any {

    const addpersonForm = useForm<IAddUser>({ defaultValues });

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

                        name="roles"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.roles.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            roles.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    {fields.roles.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                                    <Input type='email' {...field} />
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
                        name="password"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.password.label}
                                </FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.password.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="retypepassword"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.retypepassword.label}
                                </FormLabel>
                                <FormControl>
                                    <Input type='password' {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.retypepassword.description}
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

export default AddPersonForm;
