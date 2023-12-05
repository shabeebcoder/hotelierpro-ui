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
    companyName: {
        label: "Company Name",
        description: ""
    },
    country: {
        label: "Country",
        description: ""

    },
    state: {
        label: "State",
        description: ""
    },
    bank: {
        label: "Bank",
        description: ""
    },
    address: {
        label: "Address",
        description: ""
    },
    postlCode: {
        label: "Postal Code",
        description: ""
    },
    email: {
        label: "E-mail",
        description: ""
    },
    website: {
        label: "Website",
        description: ""
    },
    phone: {
        label: "Phone Number",
        description: ""
    },
 
} }: addPersonProps): any {

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
                        name="companyName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.companyName.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.companyName.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="country"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.country.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.country.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="state"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.state.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.state.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="bank"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.bank.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {' '}
                                    {fields.bank.description}

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="address"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.address.label}

                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.address.description}

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="postlCode"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.postlCode.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.postlCode.description}
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
                        name="website"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.website.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.website.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="phone"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.phone.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.phone.description}
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
