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
import { PlusCircledIcon } from '@radix-ui/react-icons';

function InvoiceEditableForm({

    onSubmit,
    invoiceNumber,
    defaultValues


}) {

    const [subTotal, setSubTotal] = React.useState(0)
    const [amountDue, setAmountDue] = React.useState(0)

    const form = useForm({ defaultValues });
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
        {
            control: form.control,
            name: "services",
        }
    )
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

    React.useEffect(() => {
        const subscription = form.watch((value, { name, type }) => {

            if (name.includes('qty')) {

                const index = name.split('.')[1].split('.')[0];
                const qty = value.services[index].qty;
                const cost = value.services[index].cost; // assuming cost is a constant or another field
                form.setValue(`services.${index}.total`, Number(qty) * Number(cost));
                const newSubtotal = form.getValues("services").reduce((acc, curr) => {
                    return acc + (curr.total || 0);
                }, 0);

                setSubTotal(newSubtotal);


            }


        });


        return () => subscription.unsubscribe();
    }, [form.watch, form.setValue]);


    React.useEffect(() => {

        const newSubtotal: any = fields.reduce((acc: any, curr: any) => {
            return acc + (curr.total || 0);
        }, 0);

        setSubTotal(newSubtotal);

        setAmountDue(Number(newSubtotal) - Number(form.getValues("paid")))

    }, []);


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-white"
            >
                <header className="bg-[#4D6969] flex items-center text-white h-[14rem]">
                    <div className="w-[50%]">
                        <img
                            src="https://hotelierpro.us/Logo/HotelierPro_Logo_white.svg"
                            alt="logo"
                            className="ml-8 h-12"
                        />
                    </div>
                    <ul className="w-[50%] ml-8">
                        <h3 className="text-2xl font-bold tracking-tight mb-2">
                            Invoice
                        </h3>
                        <li className="flex gap-4 items-center">
                            <span className="w-[8rem]">Invoice Number</span>
                            <span>:</span>
                            <span>{invoiceNumber}</span>
                        </li>
                        <li className="flex gap-4 items-center my-2">
                            <span className="w-[8rem]">Invoice Date</span>
                            <span>:</span>
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="billingDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={'outline'}
                                                    className={cn(
                                                        'w-[240px] justify-start text-left font-normal group',
                                                        !field.value &&
                                                        'text-muted-foreground'
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4 text-white group-hover:text-primary" />
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP'
                                                        )
                                                    ) : (
                                                        <span className="text-white group-hover:text-primary">
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
                        <li className="flex gap-4 items-center my-2">
                            <span className="w-[8rem]">Invoice Due Date</span>
                            <span>:</span>
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={'outline'}
                                                    className={cn(
                                                        'w-[240px] justify-start text-left font-normal group',
                                                        !field.value &&
                                                        'text-muted-foreground'
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4 text-white group-hover:text-primary" />
                                                    {field.value ? (
                                                        format(
                                                            field.value,
                                                            'PPP'
                                                        )
                                                    ) : (
                                                        <span className="text-white group-hover:text-primary">
                                                            due date
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
                    </ul>
                </header>
                <main className="space-y-8">
                    <p className="text-red-700 uppercase text-right">sent</p>
                    <div className="flex justify-between items-end gap-[3rem]">
                        <div className="space-y-2 w-full">
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="billToName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bill To</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="billToAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Address"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <FormField
                                control={form.control}
                                rules={{ required: true }}
                                name="billFromName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bill From</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="billFromAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Address"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* <div className="flex gap-4">
                            <Button>+ Add Booking</Button>
                            <Button variant="outline">+ Add Services</Button>
                        </div> */}
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="uppercase text-center w-4 max-w-4 min-w-4">
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
                            {fields.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="w-4 max-w-4 min-w-4 text-center">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        <FormField
                                            control={form.control}
                                            rules={{ required: true }}
                                            name={`services.${index}.item`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input

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
                                            name={`services.${index}.cost`}
                                            render={({ field }) => (
                                                <FormItem className="w-[8rem]">
                                                    <FormControl>
                                                        <Input
                                                            type='number'
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
                                            name={`services.${index}.qty`}
                                            render={({ field }) => (
                                                <FormItem className="w-[8rem]">
                                                    <FormControl>
                                                        <Input
                                                            type='number'

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
                                            name={`services.${index}.total`}
                                            render={({ field }) => (
                                                <FormItem className="w-[8rem]">
                                                    <FormControl>
                                                        <Input
                                                            type='number'

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
                                    <Button type='button' onClick={() => append({
                                        item: "",
                                        cost: '',
                                        qty: '',
                                        total: '',
                                        type: "service"
                                    })}>
                                        <PlusCircledIcon className="mr-2 h-4 w-4" />
                                        Add New Row</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell>{subTotal}</TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>City Tax</TableCell>
                                <TableCell>
                                    <Input placeholder="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow> */}
                            {/* <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell colSpan={2}>VAT</TableCell>
                            </TableRow> */}
                            {/* <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>Rooms</TableCell>
                                <TableCell>
                                    <Input placeholder="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow> */}
                            {/* <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>General Services</TableCell>
                                <TableCell>
                                    <Input placeholder="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow> */}
                            {/* <TableRow>
                                <TableCell colSpan={2}></TableCell>
                                <TableCell>Food</TableCell>
                                <TableCell>
                                    <Input placeholder="000" />
                                </TableCell>
                                <TableCell>$235</TableCell>
                            </TableRow> */}
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
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Notes"
                                                        className="resize-none h-[15rem]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </TableCell>
                                {/* <TableCell colSpan={2}>Food</TableCell>
                                <TableCell>$235</TableCell> */}
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
                                                <FormControl>
                                                    <Input
                                                        type='number'
                                                        placeholder="4999"
                                                        {...field}
                                                    />
                                                </FormControl>
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
                                    {amountDue}
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </main>
                <input type="hidden" {...form.register("amountDue")} value={amountDue} />
                <input type="hidden" {...form.register("subTotal")} value={subTotal} />
            </form>
        </Form>
    );
}

export default InvoiceEditableForm;
