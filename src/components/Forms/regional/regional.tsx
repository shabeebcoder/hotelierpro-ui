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
} from "../../../elements/Select/select"
import { useForm } from 'react-hook-form';
import { Button } from '../../../elements/Buttons/buttons';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const regionalSchema = z.object({
    language: z.string(),
    invoiceLanguage: z.string(),
    timeZone: z.string(),
    weekStartsOn: z.string(),
    currencyPosition: z.string(),
    currency: z.string(),
    dateFormat: z.string(),
    id: z.string().optional()
})

export type IRegionalForm = z.infer<typeof regionalSchema>




function RegionalSettings({ onsubmit, currency=[], id, defaultValues = {}, currencyPosition=[], weekStartsOn=[], dateFormat=[], timeZone=[], invoiceLanguage=[], language=[], fields = {
    language: {
        label: "Language",
        description: "",
    },
    invoiceLanguage: {
        label: "Invoice Language",
        description: "",
    },
    timeZone: {
        label: "Time Zone",
        description: "",
    },
    dateFormat: {
        label: "Date Format",
        description: "",
    },
    weekStartsOn: {
        label: "Week Starts On",
        description: "",
    },
    currencyPostion: {
        label: "Currency Postion",
        description: "",
    },
    currency: {
        label: "Currency",
        description: "",
    }
} }): any {
    const form = useForm<IRegionalForm>({ defaultValues, resolver: zodResolver(regionalSchema) });
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

                        name="language"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.language.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            language.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    {fields.invoiceLanguage.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}

                        name="timeZone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.timeZone.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            timeZone.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    {fields.dateFormat.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}

                        name="weekStartsOn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.weekStartsOn.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            weekStartsOn.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}

                        name="currencyPosition"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.currencyPostion.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            currencyPosition.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="currency"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.currency.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            currency.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}

                        name="dateFormat"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.dateFormat.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            dateFormat.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}

                        name="invoiceLanguage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{fields.invoiceLanguage.label}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            invoiceLanguage.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                                        }


                                    </SelectContent>
                                </Select>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>Update</Button>

                </form>
            </Form>
        </>
    );
}

export default RegionalSettings;
