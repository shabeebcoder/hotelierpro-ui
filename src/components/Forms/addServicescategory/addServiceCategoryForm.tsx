import React from 'react';
import { Input } from '../../../elements/Input/input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../elements/Form/form';

import {  useForm } from 'react-hook-form';

interface serviceCategoryProps {
    onsubmit: any;
    id: string;
    fields?: any;
    defa
}

function AddServiceCategoryForm({ onsubmit, id, defaultValues = {}, fields = {
    name: {
        label: "service name",
        description: "",
    }
} }): any {
    const form: any = useForm({ defaultValues });
    return (
        <>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onsubmit)}
                    className="space-y-8 mt-8"
                    id={id}
                >
                    <FormField
                        control={form.control}
                        name="serviceCategoryName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.name.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.name.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </>
    );
}

export default AddServiceCategoryForm;
