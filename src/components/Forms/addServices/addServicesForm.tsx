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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../elements/Select/select';

import { useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

export const serviceSchema = z.object({
    name: z.string(),
    price: z.number(),
    category: z.string(),
    id: z.string().optional()
});

export type IService = z.infer<typeof serviceSchema>

type IDropDown = {
    label: string;
    value: string
}


interface addServiceProps {
    onSubmit: (data: IService) => void;
    serviceCategory?: IDropDown[];
    id: string;
    defaultValues?: IService;
    fields?: any
}

function AddServicesForm({ onSubmit, serviceCategory, id, defaultValues = {}, fields = {
    name: {
        label: "service name *",
        description: ""
    },
    price: {
        label: "Price *",
        description: ""
    },
    category: {
        label: "Service Category *",
        description: ""
    }
} }: addServiceProps): any {
    const form = useForm<IService>({ defaultValues, resolver: zodResolver(serviceSchema) });
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
                    <FormField
                        control={form.control}
                        name="price"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.price.label}
                                </FormLabel>
                                <FormControl>
                                    <Input type='number' {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.price.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.category.label}</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select service category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {serviceCategory.map((item, index) => {
                                            return (
                                                <SelectItem
                                                    key={index}
                                                    value={item.value}
                                                >
                                                    {item.label}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </>
    );
}

export default AddServicesForm;
