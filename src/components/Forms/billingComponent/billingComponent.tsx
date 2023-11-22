import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../../elements/Card/card';
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
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '../../../elements/Table/table';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

function BillingComponent({ onSubmit, selectValues }) {
    const form = useForm();
    const invoices = [
        {
            invoice: 'INV001',
            paymentStatus: 'Paid',
            totalAmount: '$250.00',
            paymentMethod: 'Credit Card',
        },
        {
            invoice: 'INV002',
            paymentStatus: 'Pending',
            totalAmount: '$150.00',
            paymentMethod: 'PayPal',
        },
        {
            invoice: 'INV003',
            paymentStatus: 'Unpaid',
            totalAmount: '$350.00',
            paymentMethod: 'Bank Transfer',
        },
    ];
    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center px-8 w-[30rem]">
                                <FormField
                                    control={form.control}
                                    name="paymentBy"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem className="w-[10rem]">
                                            <FormLabel>Payment by</FormLabel>
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
                                                    {selectValues.map(
                                                        (item, pos) => {
                                                            return (
                                                                <SelectItem
                                                                    key={pos}
                                                                    value={
                                                                        item.value
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </SelectItem>
                                                            );
                                                        }
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="payer"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem className="w-[10rem]">
                                            <FormLabel>Payer</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder=""
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription></FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-[6rem]">
                                    + Add person
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="uppercase text-center w-[2rem]">
                                            si
                                        </TableHead>
                                        <TableHead>Room 1 Single</TableHead>
                                        <TableHead className="uppercase text-center w-[7rem]">
                                            cost
                                        </TableHead>
                                        <TableHead className="uppercase text-center w-[7rem]">
                                            qty
                                        </TableHead>
                                        <TableHead className="uppercase text-center w-[7rem]">
                                            price
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {invoices.map((item, pos) => (
                                        <TableRow key={pos}>
                                            <TableCell>{pos}</TableCell>
                                            <TableCell>
                                                <Input
                                                    placeholder={item.invoice}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    placeholder={
                                                        item.paymentStatus
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    placeholder={
                                                        item.paymentMethod
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Input
                                                    placeholder={
                                                        item.totalAmount
                                                    }
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow className="py-4">
                                        <TableCell>
                                            <Button>+ Add Service</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button>+ New Service</Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}></TableCell>
                                        <TableCell colSpan={2}>Total</TableCell>
                                        <TableCell>$999</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}></TableCell>
                                        <TableCell colSpan={2}>Paid</TableCell>
                                        <TableCell>
                                            <Input placeholder="000" />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}></TableCell>
                                        <TableCell colSpan={2}>
                                            Amount Due
                                        </TableCell>
                                        <TableCell className="text-red-500">
                                            $250.00
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="space-x-4">
                                <Button>Save</Button>
                                <Button>Cancel</Button>
                            </div>
                            <Button>Save & create invoice</Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </>
    );
}

export default BillingComponent;
