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

    const addpersonForm: any = useForm({ defaultValues });

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
