import React from 'react';

import { Input } from '../../elements/Input/input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../elements/Form/form';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../elements/Select/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

import { Separator } from '@radix-ui/react-separator';
import { Button } from '../../elements/Buttons/buttons';

export default function CreateServiceForm() {
    const form = useForm({});
    return (
        <div className="hidden h-full flex-1 flex-col space-y-3 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                        Add New Room Information{' '}
                    </h2>
                    <p className="text-muted-foreground">
                        This form is used to input essential details about the
                        rooms available within your hotel or property. Accurate
                        and complete information is crucial for efficient room
                        management and an improved guest experience. Please fill
                        out the following fields with the relevant information
                        for each room.
                    </p>
                </div>
            </div>
            <Separator />
            <div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(() => alert())}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Room Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter the unique room number or
                                        identifier for this particular room. It
                                        should be a distinct label for easy
                                        identification.{' '}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Room Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="m@example.com">
                                                Food
                                            </SelectItem>
                                            <SelectItem value="m@google.com">
                                                Drinks
                                            </SelectItem>
                                            <SelectItem value="m@support.com">
                                                Tour
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Choose the room type from predefined
                                        categories, such as "Standard,"
                                        "Deluxe," "Suite," or any other room
                                        types offered by your property.{' '}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Create new room</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
