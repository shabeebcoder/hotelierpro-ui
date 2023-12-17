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

import { useForm } from 'react-hook-form';
import { z } from "zod";
import { Button } from '../../../elements/Buttons/buttons';

const policyFormSchema = z.object({
    name: z.string(),
    id: z.string().optional()
})

export type IPolicyForm = z.infer<typeof policyFormSchema>

interface serviceCategoryProps {
    onSubmit: (data: IPolicyForm) => void;
    id: string;
    fields?: any;
    defaultValues?: IPolicyForm
}

function PolicyForm({ onSubmit, id, defaultValues = {}, fields = {
    name: {
        label: "Policy Name *",
        description: "",
    }
} }: serviceCategoryProps): any {
    const form: any = useForm({ defaultValues });
    return (
        <>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mt-8"
                    id={id}
                >
                    <FormField
                        control={form.control}
                        name="name"
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

export default PolicyForm;
