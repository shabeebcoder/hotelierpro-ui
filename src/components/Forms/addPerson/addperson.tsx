import React from 'react';
import { Label } from '../../../elements/Label/label';
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
import { zodResolver } from '@hookform/resolvers/zod';
import {Button} from "../../../elements/Buttons/buttons"


const guestSchema = z.object({
    fullName: z.string().min(1, "Name is Required"),
    companyId: z.string().optional(),
    bank: z.string().optional(),
    accountNumber: z.string().optional(),
    email: z.string().email("Invalid Email Address"),
    contactNumber: z.string().min(1, "Contact Number Required"),
    address: z.string().min(1, "Address is required"),
    contactPerson: z.string().optional(),
    passportNumber: z.string().min(1, "Passport/ID Number Required"),
    country: z.string().min(1, "Country is Required"),
    id: z.string().optional()
});

export type GuestType = z.infer<typeof guestSchema>;

interface Field {
    label: string;
    description: string;
}

interface Fields {
    [key: string]: Field;
}
interface addPersonProps {
    fields?: Fields,
    onSubmit: (data: GuestType) => void,
    defaultValues?: GuestType,
    id: string,

}
function AddPersonForm({ onSubmit, defaultValues, id, fields = {
    fullName: {
        label: "full name *",
        description: "Enter the complete name of the person. This should serve as a distinctive label for convenient and precise identification."
    },
    companyId: {
        label: "company ID",
        description: "Enter the unique identification number or code assigned to the company. This serves as a distinct identifier for the company for easy reference and identification."

    },
    bank: {
        label: "bank",
        description: "Enter the official name or designation of the bank associated with this account. Provide the full and accurate name for clear identification."
    },
    accountNumber: {
        label: "account no",
        description: "Enter the unique account number or identifier associated with this account.It serves as a distinct label for easy identification and reference in the system."
    },
    email: {
        label: "email *",
        description: "Enter the email address associated with your account. Make sure it is a valid and accessible email for communication and account-related notifications."
    },
    contactNumber: {
        label: "Phone Number *",
        description: "Enter the contact number associated with the person. It should be a valid phone number for communication purposes and should uniquely identify this person in case of any queries or contacts."
    },
    address: {
        label: "address / City *",
        description: "Enter the physical location details, including street address, city, and postal code, for precise identification of this particular location. Provide a clear and comprehensive address to facilitate accurate location referencing."
    },
    contactPerson: {
        label: "Contact Person",
        description: "Enter the name of the primary contact person associated with this person. Provide the full name for clear identification and communication purposes."
    },
    passportNumber: {
        label: "Passport Number / ID *",
        description: "Passport information/ national identitification number"
    },
    country: {
        label: "Country *",
        description: "Provide the country informations"
    }
} }: addPersonProps): any {

    const addpersonForm = useForm<GuestType>({ defaultValues, resolver: zodResolver(guestSchema) });

    const { formState: { errors } } = addpersonForm
    
    return (
        <>
            <Form {...addpersonForm} >
                <form
                    onSubmit={addpersonForm.handleSubmit(onSubmit)}
                    className="space-y-8 p-1"
                    id={id}
                >
                    <FormField
                        control={addpersonForm.control}
                        name="fullName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.fullName.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.fullName.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
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
                        control={addpersonForm.control}
                        name="contactNumber"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.contactNumber.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.contactNumber.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="passportNumber"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.passportNumber.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.passportNumber.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
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
                        control={addpersonForm.control}
                        name="address"
                        rules={{ required: true }}
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
                        control={addpersonForm.control}
                        name="companyId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.companyId.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.companyId.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="bank"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.bank.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {' '}
                                    {fields.bank.description}

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="accountNumber"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.accountNumber.label}

                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.accountNumber.description}

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={addpersonForm.control}
                        name="contactPerson"

                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    {fields.contactPerson.label}
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {fields.contactPerson.description}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
               <Button>submit</Button>
                </form>
            </Form>
        </>
    );
}

export default AddPersonForm;
