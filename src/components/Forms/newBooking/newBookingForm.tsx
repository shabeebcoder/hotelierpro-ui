import React from 'react';
import { cn } from '../../../utils';
import { Input } from '../../../elements/Input/input';
import { Textarea } from '../../../elements/TextArea/textarea';
import { Checkbox } from '../../../elements/Checkbox/checkbox';
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
import { Calendar } from '../../../elements/Calendar/calendar';
import { CalendarIcon } from 'lucide-react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '../../../elements/Popover/popover';
import { format } from 'date-fns';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

export default function NewBookingForm({
    onSubmit,
    durationValues,
    roomTypeValues,
    statusValues,
    id
}) {
    const form = useForm({});
    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-3 grid-rows-8 gap-8"
                    id={id}
                >
                    <FormField
                        control={form.control}
                        rules={{ required: true }}
                        name="checkInDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Check in Date</FormLabel>
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
                                                format(field.value, 'PPP')
                                            ) : (
                                                <span>select date</span>
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
                    <FormField
                        control={form.control}
                        rules={{ required: true }}
                        name="duration"
                        render={({ field }) => (
                            <FormItem className="w-[15rem]">
                                <FormLabel>Duration</FormLabel>
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
                                        {durationValues.map((item, pos) => {
                                            return (
                                                <SelectItem
                                                    key={pos}
                                                    value={item}
                                                >
                                                    {item}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        rules={{ required: true }}
                        name="checkOutDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Check out Date</FormLabel>
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
                                                format(field.value, 'PPP')
                                            ) : (
                                                <span>select date</span>
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
                    <FormField
                        control={form.control}
                        rules={{ required: true }}
                        name="roomtype"
                        render={({ field }) => (
                            <FormItem className="w-[15rem]">
                                <FormLabel>Room Type</FormLabel>
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
                                        {roomTypeValues.map((item, pos) => {
                                            return (
                                                <SelectItem
                                                    key={pos}
                                                    value={item}
                                                >
                                                    {item}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        rules={{ required: true }}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="w-[15rem]">
                                <FormLabel>Status</FormLabel>
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
                                        {statusValues.map((item, pos) => {
                                            return (
                                                <SelectItem
                                                    key={pos}
                                                    value={item}
                                                >
                                                    {item}
                                                </SelectItem>
                                            );
                                        })}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center">
                        <FormField
                            control={form.control}
                            rules={{ required: true }}
                            name="adult"
                            render={({ field }) => (
                                <FormItem className="w-[7rem]">
                                    <FormLabel>Adult</FormLabel>
                                    <br />
                                    <FormControl></FormControl>
                                    <p className="border rounded w-[5rem] flex justify-between px-4">
                                        <span onClick={() => alert('clicked')}>
                                            {' '}
                                            -{' '}
                                        </span>
                                        0
                                        <span onClick={() => alert('clicked')}>
                                            {' '}
                                            +{' '}
                                        </span>
                                    </p>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            rules={{ required: true }}
                            name="child"
                            render={({ field }) => (
                                <FormItem className="w-[7rem]">
                                    <FormLabel>Child</FormLabel>
                                    <br />
                                    <FormControl>
                                        <p className="border rounded w-[5rem] flex justify-between px-4">
                                            <span
                                                onClick={() => alert('clicked')}
                                            >
                                                {' '}
                                                -{' '}
                                            </span>
                                            0
                                            <span
                                                onClick={() => alert('clicked')}
                                            >
                                                {' '}
                                                +{' '}
                                            </span>
                                        </p>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <h3 className="col-span-full text-md font-semibold">
                        Guest Details
                    </h3>{' '}
                    <FormField
                        control={form.control}
                        rules={{ required: true }}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter First Name"
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
                        rules={{ required: true }}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter Last Name"
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
                        rules={{ required: true }}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter Email"
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
                        rules={{ required: true }}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter First Name"
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
                        rules={{ required: true }}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter Last Name"
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
                        rules={{ required: true }}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter Email"
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
                        rules={{ required: true }}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder="0$" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        rules={{ required: true }}
                        name="discount"
                        render={({ field }) => (
                            <FormItem className="w-[10rem]">
                                <FormLabel>Discount</FormLabel>
                                <FormControl>
                                    <Input placeholder="5%" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center gap-4">
                        <Button>+ Add Guest</Button>
                        <Button variant="outline">+ New Guest</Button>
                    </div>
                    <div className="col-span-full">
                        <FormField
                            control={form.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex justify-between items-center">
                                        <p>Notes</p>
                                        <FormField
                                            control={form.control}
                                            name="singleUse"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={
                                                                field.value
                                                            }
                                                            onCheckedChange={
                                                                field.onChange
                                                            }
                                                        />
                                                    </FormControl>
                                                    <div className="space-y-1 leading-none">
                                                        <FormLabel>
                                                            Single Use
                                                        </FormLabel>
                                                        <FormDescription></FormDescription>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder=""
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
                    {/* <div className="flex items-center gap-4 col-span-full">
                        <Button>Save</Button>
                        <Button variant="outline">Cancel</Button>
                    </div> */}
                </form>
            </Form>
        </>
    );
}
