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

interface addServiceProps {
    onsubmit: any;
    serviceCategory?: any;
    id: string;
    defaultValues: any;
    fields?: any
}

function AddServicesForm({ onsubmit, serviceCategory, id, defaultValues = {}, fields = {
    serviceName: {
        label: "service name",
        description: ""
    },
    price: {
        label: "Price",
        description: ""
    },
    serviceCategory: {
        label: "Service Category",
        description: ""
    }
} }: addServiceProps): any {
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
                        name="serviceName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.serviceName.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.serviceName.description}
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
                                    <Input {...field} />
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
                        name="serviceCategory"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.serviceCategory.label}</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select preferred service category" />
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
