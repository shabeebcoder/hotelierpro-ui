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
    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mt-8"
                >
                    <Card>
                        <CardHeader className="flex">
                            <FormField
                                control={form.control}
                                name="paymentBy"
                                render={({ field }) => (
                                    <FormItem>
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
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Payer</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-[15rem]">+ Add person</Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="uppercase">
                                            si
                                        </TableHead>
                                        <TableHead>Room</TableHead>
                                        <TableHead className="uppercase">
                                            cost
                                        </TableHead>
                                        <TableHead className="uppercase">
                                            qty
                                        </TableHead>
                                        <TableHead className="uppercase">
                                            price
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody></TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={3}>Total</TableCell>
                                        <TableCell className="text-right">
                                            $2,500.00
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </>
    );
}

export default BillingComponent;
