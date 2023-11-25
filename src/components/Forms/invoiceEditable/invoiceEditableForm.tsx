import React from 'react';
import { Calendar } from '../../../elements/Calendar/calendar';
import { Input } from '../../../elements/Input/input';
import { Textarea } from '../../../elements/TextArea/textarea';
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

function InvoiceEditableForm({ onSubmit }) {
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
                <header className="bg-[#4D6969] flex w-screen text-white">
                    <div className="w-[50%]">
                        <img
                            src="https://hotelierpro.us/Logo/HotelierPro_Logo_white.svg"
                            alt="logo"
                        />
                        <h2 className="text-2xl font-bold tracking-tight">
                            Hotelier Pro
                        </h2>
                    </div>
                    <ul className="w-[50%]">
                        <h3 className="text-2xl font-bold tracking-tight">
                            Invoice
                        </h3>
                        <li>
                            <span className="w-[8rem]">Invoice Number :</span>{' '}
                            INV-20230723-2
                        </li>
                        <li className="flex gap-4 items-center">
                            <span className="w-[8rem]">Invoice Date :</span>
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="billingDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel></FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={'outline'}
                                                    className={cn(
                                                        'w-[240px] justify-start text-left font-normal',
                                                        !field.value &&
                                                            'text-muted-foreground'
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />

                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP'
                                                        )
                                                    ) : (
                                                        <span>
                                                            billing date
                                                        </span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                        </li>
                        <li className="flex gap-4 items-center">
                            <span className="w-[8rem]">Invoice Due Date :</span>
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel></FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={'outline'}
                                                    className={cn(
                                                        'w-[240px] justify-start text-left font-normal',
                                                        !field.value &&
                                                            'text-muted-foreground'
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />

                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP'
                                                        )
                                                    ) : (
                                                        <span>due date</span>
                                                    )}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                        </li>
                    </ul>
                </header>
                <main className="space-y-8">
                    <p className="text-red-700 uppercase text-right">sent</p>
                    <div className="flex justify-between items-end">
                        <div>
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="billToName"
                                render={({ field }) => (
                                    <FormItem className="w-[10rem]">
                                        <FormLabel>Bill To</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="billToAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Address"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="billFromName"
                                render={({ field }) => (
                                    <FormItem className="w-[10rem]">
                                        <FormLabel>Bill From</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="billFromAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel></FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Address"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="space-x-4">
                            <Button>+ Add Booking</Button>
                            <Button variant="outline">+ Add Services</Button>
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
                                        <FormField
                                            control={form.control}
                                            rules={{ required: true }}
                                            name={`${item.invoice}${pos}`}
                                            render={({ field }) => (
                                                <FormItem className="w-[10rem]">
                                                    <FormLabel></FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={
                                                                item.invoice
                                                            }
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription></FormDescription>
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
                                                <FormItem className="w-[10rem]">
                                                    <FormLabel></FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={
                                                                item.paymentStatus
                                                            }
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription></FormDescription>
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
                                                <FormItem className="w-[10rem]">
                                                    <FormLabel></FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={
                                                                item.paymentMethod
                                                            }
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription></FormDescription>
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
                                                <FormItem className="w-[10rem]">
                                                    <FormLabel></FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={
                                                                item.totalAmount
                                                            }
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription></FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow className="py-4">
                                <TableCell>
                                    <Button>+ Add New Row</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell>$999</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>City Tax</TableCell>
                                <TableCell>
                                    <Input placeholder="000" />
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
                                    <Input placeholder="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>General Services</TableCell>
                                <TableCell>
                                    <Input placeholder="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>Food</TableCell>
                                <TableCell>
                                    <Input placeholder="000" />
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
                                    <FormField
                                        control={form.control}
                                        name="notes"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel></FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Notes"
                                                        className="resize-none h-[15rem]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormDescription></FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </TableCell>
                                <TableCell colSpan={2}>Food</TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Paid</TableCell>
                                <TableCell>
                                    <FormField
                                        control={form.control}
                                        rules={{ required: true }}
                                        name="paid"
                                        render={({ field }) => (
                                            <FormItem className="w-[10rem]">
                                                <FormLabel></FormLabel>
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

export default InvoiceEditableForm;
