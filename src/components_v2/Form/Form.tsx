import React from 'react'
import {
    Form as ShadcnForm,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../elements/Form/form';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { FormItems } from "./FormItems";
import { zodResolver } from '@hookform/resolvers/zod';


interface FormProps {
    id: string;
    onSubmit: any;
    children: any;
    resolver: any;
    defaultValues?: any;
}

export default function Form({
    id,
    onSubmit,
    children,
    control,
    resolver,
    defaultValues
}: FormProps) {




    type IForm = z.infer<typeof resolver>
    const form = useForm<IForm>({
        defaultValues, resolver: zodResolver(resolver),
    });

    const childrenWithExtraProp = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { control: form.control });
        }
        return child;
    });
    return (
        <ShadcnForm
            {...form}
        >
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                id={id}
            >
                {childrenWithExtraProp}

            </form>
        </ShadcnForm>
    )
}