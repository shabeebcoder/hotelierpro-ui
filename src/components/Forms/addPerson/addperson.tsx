import React from 'react';
import { Label } from '../../../elements/Label/label';
import { Input } from '../../../elements/Input/input';
import { Textarea } from '../../../elements/TextArea/textarea';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

function AddPersonForm() {
    const form = useForm({});

    return (
        <>
            <h2 className="text-2xl font-bold tracking-tight capitalize">
                add new person
            </h2>
            <p className="text-muted-foreground">
                This form is designed for entering vital details about
                individuals associated with your hotel or property. Providing
                accurate and comprehensive information is essential for
                effective person management and enhancing overall guest
                experiences. Kindly complete the following fields with the
                pertinent details for each person.
            </p>
            <br />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => alert('done'))}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="fullName"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    full name
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the complete name of the person. This
                                    should serve as a distinctive label for
                                    convenient and precise identification.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="companyId"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    company iD
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {' '}
                                    Enter the unique identification number or
                                    code assigned to the company. This serves as
                                    a distinct identifier for the company for
                                    easy reference and identification.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bank"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    bank
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    {' '}
                                    Enter the official name or designation of
                                    the bank associated with this account.
                                    Provide the full and accurate name for clear
                                    identification.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="accNO"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    account no
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the unique account number or
                                    identifier associated with this account. It
                                    serves as a distinct label for easy
                                    identification and reference in the system.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    email
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the email address associated with your
                                    account. Make sure it is a valid and
                                    accessible email for communication and
                                    account-related notifications.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNo"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    phone no
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the contact number associated with the
                                    person. It should be a valid phone number
                                    for communication purposes and should
                                    uniquely identify this person in case of any
                                    queries or contacts.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    address
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the physical location details,
                                    including street address, city, and postal
                                    code, for precise identification of this
                                    particular location. Provide a clear and
                                    comprehensive address to facilitate accurate
                                    location referencing.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contactPerson"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="capitalize">
                                    contact person
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the name of the primary contact person
                                    associated with this person. Provide the
                                    full name for clear identification and
                                    communication purposes.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <Label>Notes</Label>
                        <Textarea placeholder="Enter relevant notes or additional information about this room. These notes can include specific details or observations that will assist in understanding or managing this particular room." />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <Button className="capitalize">
                            create new person
                        </Button>
                        <Button
                            className="capitalize border-primary"
                            variant="outline"
                        >
                            cancel
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
}

export default AddPersonForm;
