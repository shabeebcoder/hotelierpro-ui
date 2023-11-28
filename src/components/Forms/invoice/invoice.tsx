import React from 'react';
import { Calendar } from '../../../elements/Calendar/calendar';
import { Input } from '../../../elements/Input/input';
import { Textarea } from '../../../elements/TextArea/textarea';
import { Label } from '../../../elements/Label/label';
import { Separator } from '../../../elements/Separator/seperator';
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
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '../../../elements/Table/table';
import { CalendarIcon } from 'lucide-react';
import { cn } from '../../../utils';
import { format } from 'date-fns';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '../../../elements/Popover/popover';

function Invoice({ onSubmit, invoiceData, billTo, billFrom }) {
    const form = useForm({});
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <header className="bg-[#4D6969] flex items-center text-white h-[14rem]">
                    <div className="w-[50%]">
                        <img
                            src="https://hotelierpro.us/Logo/HotelierPro_Logo_white.svg"
                            alt="logo"
                            className="ml-8 h-8"
                        />
                    </div>
                    <ul className="w-[50%] ml-8">
                        <h3 className="text-2xl font-bold tracking-tight mb-2">
                            Invoice
                        </h3>
                        <li className="flex gap-4 items-center">
                            <span className="w-[8rem]">Invoice Number </span>
                            <span>:</span>
                            {invoiceData.no}
                        </li>
                        <li className="flex gap-4 items-center">
                            <span className="w-[8rem]">Invoice Date </span>
                            <span>:</span>
                            {invoiceData.billingDate}
                        </li>
                        <li className="flex gap-4 items-center">
                            <span className="w-[8rem]">Invoice Due Date </span>
                            <span>:</span>
                            {invoiceData.billingDueDate}
                        </li>
                    </ul>
                </header>
                <main className="space-y-8">
                    <p className="text-red-700 uppercase text-right">sent</p>
                    <div className="flex w-[50%] gap-12 mx-auto">
                        <div className="w-[50%] space-y-2">
                            <Label>Bill To</Label>
                            <p>
                                <Input value={billTo.name} />
                            </p>
                            <p>
                                <Input value={billTo.address} />
                            </p>
                        </div>
                        <div className="w-[50%] space-y-2">
                            <Label>Bill From</Label>
                            <p>
                                <Input value={billFrom.name} />
                            </p>
                            <p>
                                <Input value={billFrom.address} />
                            </p>
                        </div>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="uppercase text-center w-[2rem]">
                                    No
                                </TableHead>
                                <TableHead>Item</TableHead>
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
                                    <TableCell>{pos + 1}</TableCell>
                                    <TableCell>
                                        <Input value={item.invoice} />
                                    </TableCell>
                                    <TableCell>
                                        <Input value={item.paymentStatus} />
                                    </TableCell>
                                    <TableCell>
                                        <Input value={item.paymentMethod} />
                                    </TableCell>
                                    <TableCell>
                                        <Input value={item.totalAmount} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell>$999</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>City Tax</TableCell>
                                <TableCell>
                                    <Input value="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell colSpan={2}>VAT</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>Rooms</TableCell>
                                <TableCell>
                                    <Input value="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>General Services</TableCell>
                                <TableCell>
                                    <Input value="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>Food</TableCell>
                                <TableCell>
                                    <Input value="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell colSpan={3}>
                                    <Separator />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2} rowSpan={5}>
                                    <Textarea
                                        value="Notes"
                                        className="resize-none h-[15rem]"
                                    />
                                </TableCell>
                                <TableCell colSpan={2}>Food</TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Paid</TableCell>
                                <TableCell>
                                    <Input value="4999" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={3}>
                                    <Separator />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Amount Due</TableCell>
                                <TableCell className="text-red-700">
                                    $1299
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </main>
            </form>
        </Form>
    );
}

export default Invoice;
