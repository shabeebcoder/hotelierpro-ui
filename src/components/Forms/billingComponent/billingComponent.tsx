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
                            <div className="flex justify-between items-end">
                                <FormField
                                    control={form.control}
                                    name="paymentBy"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem className="w-[20rem]">
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
                                        <FormItem className="w-[20rem]">
                                            <FormLabel>Payer</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder=""
                                                    {...field}
                                                />
                                            </FormControl>
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
                                        <TableHead className="uppercase text-center w-4 max-w-4 min-w-4">
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
                                            <TableCell className="w-4 max-w-4 min-w-4 text-center">
                                                {pos + 1}
                                            </TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    rules={{ required: true }}
                                                    name={`${item.invoice}${pos}`}
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder={
                                                                        item.invoice
                                                                    }
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    rules={{ required: true }}
                                                    name={`${item.paymentMethod}${pos}`}
                                                    render={({ field }) => (
                                                        <FormItem className="w-[8rem]">
                                                            <FormControl>
                                                                <Input
                                                                    placeholder={
                                                                        item.paymentStatus
                                                                    }
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    rules={{ required: true }}
                                                    name={`${item.paymentMethod}${pos}`}
                                                    render={({ field }) => (
                                                        <FormItem className="w-[8rem]">
                                                            <FormControl>
                                                                <Input
                                                                    placeholder={
                                                                        item.paymentMethod
                                                                    }
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    rules={{ required: true }}
                                                    name={`${item.totalAmount}${pos}`}
                                                    render={({ field }) => (
                                                        <FormItem className="w-[8rem]">
                                                            <FormControl>
                                                                <Input
                                                                    placeholder={
                                                                        item.totalAmount
                                                                    }
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter className="bg-white">
                                    <TableRow className="py-4">
                                        <TableCell>
                                            <Button>+ Add Service</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outline">
                                                + New Service
                                            </Button>
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
                                <Button variant="outline">Cancel</Button>
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
