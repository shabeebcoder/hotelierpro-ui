import React from 'react';
import { Input } from '../../../elements/Input/input';
import { Label } from '../../../elements/Label/label';
import { Button } from '../../../elements/Buttons/buttons';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

function AddServicesForm({ onSubmit, selectValues }) {
    const form = useForm();
    return (
        <>
            <h2 className="text-2xl font-bold tracking-tight capitalize">
                add services
            </h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mt-8"
                >
                    <FormField
                        control={form.control}
                        name="serviceName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    service name
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
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
                                    price($)
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
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
                                <FormLabel>Service Category</FormLabel>
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
                                        {selectValues.map((item, pos) => {
                                            return (
                                                <SelectItem
                                                    key={pos}
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
                    <Button className="capitalize">add service</Button>
                </form>
            </Form>
        </>
    );
}

export default AddServicesForm;
