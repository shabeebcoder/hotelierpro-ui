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

function AddServiceCategoryForm({ onSubmit, serviceCategory, id }):any {
    const form = useForm();
    return (
        <>
            {/* <h2 className="text-2xl font-bold tracking-tight capitalize">
                add services
            </h2> */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
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
              
              
                    {/* <Button className="capitalize">add service</Button> */}
                </form>
            </Form>
        </>
    );
}

export default AddServiceCategoryForm;