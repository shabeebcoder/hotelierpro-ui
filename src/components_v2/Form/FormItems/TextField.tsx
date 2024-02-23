import React from 'react';
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../elements/Form/form';
import { Input } from '../../../elements/Input/input';

export interface TextFieldProps {
    control: any;
    name: string;
    label?: string;
    description?: string;

}


export const TextField = ({
    control,
    name,
    label,
    description,
}: TextFieldProps) => {
    return <FormField
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="capitalize">
                    {label}
                </FormLabel>
                <FormControl>
                    <Input {...field} />
                </FormControl>
                <FormDescription>
                    {description}
                </FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />
}