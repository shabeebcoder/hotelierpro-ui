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
import { PlusCircledIcon } from "@radix-ui/react-icons"
import {
    Select as ShadSelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../elements/Select/select"
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import Select from "react-tailwindcss-select";
import { Icons } from '../../../elements/Icons/icons';


function BillingComponent({ onsubmit, selectValues, defaultValues, serviceOptions = [], handleCreateInvoice, handleCancel }) {

    const [subTotal, setSubTotal] = React.useState(0)
    const [amountDue, setAmountDue] = React.useState(0)
    const form = useForm({defaultValues})

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
        {
            control: form.control,
            name: "services",
        }
    )




    function handleChange(value) {
        append({
            item: value.label,
            cost: Number(value.price),
            qty: 1,
            total: Number(value.price),
            type: value.type
        })

        setSubTotal(subTotal + value.price)

    }


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
        setAmountDue(Number(subTotal) - Number(form.getValues("paid")))
    }, [form.watch("paid"), subTotal])

    React.useEffect(() => {

        const newSubtotal:any = fields.reduce((acc:any, curr:any) => {
            return acc + (curr.total || 0);
        }, 0);

        setSubTotal(newSubtotal);

        setAmountDue(Number(newSubtotal) - Number(form.getValues("paid")))

    }, []);



    return (
        <>


            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onsubmit)}
                    className="space-y-8"
                >
                    {/* <input {...form.register("items")} /> */}
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-end">
                                <FormField
                                    control={form.control}
                                    name="paymentBy"
                                    // rules={{ required: true }}
                                    render={({ field }) => (
                                        <FormItem className="w-[20rem]">
                                            <FormLabel>Payment by</FormLabel>
                                            <ShadSelect
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
                                            </ShadSelect>

                                        </FormItem>

                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="payer"

                                    // rules={{ required: true }}
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
                                <Button type='button' >
                                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                                    Add Guest
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
                                    {fields.map((row:any, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="w-2 max-w-4 min-w-4 text-center">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    // rules={{ required: true }}
                                                    name={`services.${index}.item`}

                                                    render={({ field }) => (
                                                        <FormItem >

                                                            <FormControl>
                                                                <Input
                                                                    disabled={true}
                                                                    {...field}
                                                                    readOnly
                                                                />
                                                                {/* <Select

                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                    options={serviceOptions}
                                                                    isSearchable={true} */}
                                                                {/* primaryColor={''} /> */}
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    // rules={{ required: true }}
                                                    name={`services.${index}.cost`}

                                                    render={({ field, }) => (
                                                        <FormItem className="w-[8rem]">
                                                            <FormControl>
                                                                <Input
                                                                    readOnly
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
                                                    // rules={{ required: true }}
                                                    name={`services.${index}.qty`}

                                                    render={({ field, }) => (
                                                        <FormItem className="w-[8rem]">
                                                            <FormControl>
                                                                <Input

                                                                    type='number'
                                                                    {...field}
                                                                    readOnly={row.type === "service" ? false : true}
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
                                                    // rules={{ required: true }}
                                                    name={`services.${index}.total`}

                                                    render={({ field, }) => (<div className='flex items-center'>
                                                        <FormItem className="w-[8rem]">
                                                            <FormControl>
                                                                <Input

                                                                    type='number'
                                                                    {...field}
                                                                    readOnly
                                                                />
                                                            </FormControl>
                                                            <FormMessage />

                                                        </FormItem>
                                                        &nbsp;

                                                       {row.type === "service" && (<Icons.trash onClick={()=> remove(index)} />)} 

                                                    </div>)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow key={'index'}>
                                        <TableCell className="w-4 max-w-4 min-w-4 text-center">

                                        </TableCell>
                                        <TableCell>
                                            <FormField
                                                control={form.control}

                                                name={'item'}
                                                render={({ field }) => (
                                                    <FormItem>

                                                        <FormControl>

                                                            <Select

                                                                
                                                                value={field.value}
                                                                onChange={handleChange}
                                                                options={serviceOptions}
                                                                isSearchable={true}
                                                                primaryColor={''} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </TableCell>

                                    </TableRow>
                                </TableBody>
                                <TableFooter className="bg-white">
                                    <TableRow className="py-4">

                                        <TableCell>
                                            <Button variant="outline">

                                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                                New Service
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}></TableCell>
                                        <TableCell colSpan={2}>Total</TableCell>
                                        <TableCell>{subTotal}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}></TableCell>
                                        <TableCell colSpan={2}>Paid</TableCell>
                                        <TableCell>
                                            <Input  {...form.register("paid")} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}></TableCell>
                                        <TableCell colSpan={2}>
                                            Amount Due
                                        </TableCell>
                                        <TableCell className="text-red-500">
                                            {amountDue}&nbsp; USD
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="space-x-4">
                                <Button type='submit' onClick={()=> form.setValue("createInvoice", false)}>Save</Button>
                                <Button variant="outline" type='button' onClick={handleCancel}>Cancel</Button>
                            </div>
                            <Button type='submit' onClick={()=> form.setValue("createInvoice", true)}>Save & Create Invoice</Button>
                        </CardFooter>
                    </Card>
                    <input type="hidden" {...form.register("subTotal")} value={subTotal} />
                    <input type="hidden" {...form.register("amountDue")} value={amountDue} />
                    <input type="hidden" {...form.register("createInvoice")} value={amountDue} />
                </form>
            </Form>
        </>
    );
}

export default BillingComponent;
