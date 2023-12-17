import React from 'react';
import { Label } from '../../../elements/Label/label';
import { Input } from '../../../elements/Input/input';
import { Textarea } from '../../../elements/TextArea/textarea';
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
import { Button } from '../../../elements/Buttons/buttons';
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

const hotelInformationSchema = z.object({
    hotelName: z.string(),
    country: z.string(),
    state: z.string().optional(),
    address: z.string().optional(),
    postlCode: z.string().optional(),
    email: z.string().optional(),
    website: z.string().optional(),
    phone: z.string().optional(),
    id: z.string().optional()

})

export type IHotelInformationForm = z.infer<typeof hotelInformationSchema>

interface Field {
    label: string;
    description: string;
}

interface Fields {
    [key: string]: Field;
}
interface addPersonProps {
    fields?: Fields,
    onsubmit: any,
    defaultValues?: any,
    id: string,

}
function hotelInformationForm({ onsubmit, defaultValues, id, fields = {
    companyName: {
        label: "Hotel Name",
        description: ""
    },
    country: {
        label: "Country",
        description: ""

    },
    state: {
        label: "State",
        description: ""
    },
  
    address: {
        label: "Address",
        description: ""
    },
    postlCode: {
        label: "Postal Code",
        description: ""
    },
    email: {
        label: "E-mail",
        description: ""
    },
    website: {
        label: "Website",
        description: ""
    },
    phone: {
        label: "Phone Number",
        description: ""
    },

} }: addPersonProps): any {

    const hotelInformationForm = useForm<IHotelInformationForm>({
        defaultValues, resolver: zodResolver(hotelInformationSchema)
    });

    return (
        <>
            <Form {...hotelInformationForm} >
                <form
                    onSubmit={hotelInformationForm.handleSubmit(onsubmit)}
                    className="space-y-8 p-1"
                    id={id}
                >
                    <FormField
                        control={hotelInformationForm.control}
                        name="hotelName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.companyName.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.companyName.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={hotelInformationForm.control}
                        name="country"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.country.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.country.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={hotelInformationForm.control}
                        name="state"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.state.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.state.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={hotelInformationForm.control}
                        name="address"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.address.label}

                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.address.description}

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={hotelInformationForm.control}
                        name="postlCode"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.postlCode.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.postlCode.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={hotelInformationForm.control}
                        name="email"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.email.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.email.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={hotelInformationForm.control}
                        name="website"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.website.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.website.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={hotelInformationForm.control}
                        name="phone"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.phone.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.phone.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button>Update</Button>
                </form>
            </Form>
        </>
    );
}

export default hotelInformationForm;
