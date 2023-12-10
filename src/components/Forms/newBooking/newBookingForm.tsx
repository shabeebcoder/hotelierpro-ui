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
import SearchUser from "./searchGuests";
import { DotsHorizontalIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../../../elements/Dropdown-menu/dropdownmenu';
import moment from "moment"

export default function NewBookingForm({
    onSubmit,
    roomTypes,
    status,
    id,
    NewGuest,
    guestList,
    onSelect,
    isLoading,
    handleCancel,
    defaultValues = {
        adult: 1,
        child: 0,
        guests: [],
        checkInDate: new Date(),
        duration: "",
        checkOutDate: new Date(),
        roomtype: "",
        status: "",
        price: "",
        discount: "",
        notes: ""

    },
    fields = {
        checkInDate: {
            label: "Check in Date"

        },
        duration: {
            label: "Duration"
        },
        checkOutDate: {
            label: "Check out Date"
        },
        roomtype: {
            label: "Room Type"
        },
        status: {
            label: "Status"
        },
        adult: {
            label: "Adult"
        },
        child: {
            label: "child"
        },
        price: {
            label: "Price"
        },
        discount: {
            label: "Discount"
        },
        notes: {
            label: "Notes"
        }




    }
}) {

    const [guestSelected, setGuestSelected] = React.useState([])
    const forms: any = useForm({ defaultValues });


    const handleOnSelect = (guest) => {
        setGuestSelected([...guestSelected, guest]);
        forms.setValue("guests", [...forms.getValues("guests"), guest])
    }

    function DataTableRowActions({
        row = {},
    }: any) {


        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                        <DotsHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuItem onClick={() => row.actions.handleUpdate(row)}>Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => row.actions.handleDelete(row)}>Remove</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => row.actions.handleDelete(row)}>Mark as Main Guest</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }


    React.useEffect(() => {
        const subscription = forms.watch((value, { name, type }) => {

            if (name.includes('roomtype') || name.includes('singleUse')) {
                const roomType = forms.getValues("roomtype")
                const singleUse = forms.getValues("singleUse")
                let selectedRoom = roomTypes.find((row: any) => row.value === roomType);
                let roomPrice = 0;
                if (singleUse) {
                    roomPrice = selectedRoom?.details?.roomType?.singleUsePrice || ''
                } else {
                    roomPrice = selectedRoom?.details?.roomType?.regularUsePrice || ''
                }

                forms.setValue("price", roomPrice)
            }


        });


        return () => subscription.unsubscribe();

    }, [forms.watch])

    const validateCheckoutDateIsBeforeCheckin = () => {
        const checkInDate = moment(new Date(forms.getValues("checkInDate")));
        const checkOutDate = moment(new Date(forms.getValues("checkOutDate")));
        const diffInDays = checkOutDate.diff(checkInDate, 'days');
        if (diffInDays < 1) {
            return false
        }
    }


    return (
        <>

            <Form {...forms}>
                <form
                    onSubmit={forms.handleSubmit(onSubmit)}
                    className="grid grid-cols-3 grid-rows-8 gap-7"
                    id={id}
                >
                    <FormField
                        control={forms.control}
                        rules={{ required: true }}
                        name="checkInDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>{fields.checkInDate.label}</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                ' justify-start text-left font-normal',
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
                        control={forms.control}
                        rules={{ required: true }}
                        name="duration"

                        render={({ field }) => (
                            <FormItem className="" style={{ marginTop: "-9px" }}>
                                <FormLabel>{fields.duration.label}</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Duration"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={forms.control}
                        rules={{ required: true, validate: { validateCheckoutDateIsBeforeCheckin } }}
                        name="checkOutDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>{fields.checkOutDate.label}</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={'outline'}
                                            className={cn(
                                                'justify-start text-left font-normal',
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
                        control={forms.control}
                        rules={{ required: true }}
                        name="roomtype"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>{fields.roomtype.label}</FormLabel>
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
                                        {roomTypes.map((item, pos) => {
                                            return (
                                                <SelectItem
                                                    key={pos + item.value}
                                                    value={item.value}
                                                >
                                                    {item.label}
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
                        control={forms.control}
                        rules={{ required: true }}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>{fields.status.label}</FormLabel>
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
                                        {status.map((item, pos) => {
                                            return (
                                                <SelectItem
                                                    key={pos + item.value}
                                                    value={item.value}
                                                >
                                                    {item.label}
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
                            control={forms.control}
                            rules={{ required: true }}
                            name="adult"
                            render={({ field }) => (
                                <FormItem className="w-[7rem]">
                                    <FormLabel>{fields.adult.label}</FormLabel>
                                    <br />
                                    <Input type='hidden' {...field} />
                                    <p className="border rounded w-[5rem] flex justify-between px-4">
                                        <span onClick={() => {

                                            forms.setValue("adult", forms.getValues("adult") - 1)
                                        }}
                                        >
                                            {' '}
                                            -{' '}
                                        </span>
                                        {forms.getValues("adult")}
                                        <span onClick={() => {


                                            forms.setValue("adult", forms.getValues("adult") + 1)

                                        }}
                                        >
                                            {' '}
                                            +{' '}
                                        </span>
                                    </p>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={forms.control}
                            rules={{ required: true }}
                            name="child"
                            render={({ field }) => (
                                <FormItem className="w-[7rem]">
                                    <FormLabel>{fields.child.label}</FormLabel>
                                    <br />
                                    <FormControl>
                                        <p className="border rounded w-[5rem] flex justify-between px-4">
                                            <span
                                                onClick={() => {

                                                    forms.setValue("child", forms.getValues("child") - 1)
                                                }}
                                            >
                                                {' '}
                                                -{' '}
                                            </span>
                                            <Input type='hidden' {...field} />
                                            {forms.getValues("child")}
                                            <span
                                                onClick={() => {

                                                    forms.setValue("child", forms.getValues("child") + 1)
                                                }}
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
                    <div className='col-span-full flex flex-wrap'>

                        {forms.getValues("guests").length !== 0 && forms.getValues("guests").map((row) => (
                            <div style={{ width: 350, paddingRight: 10, paddingBottom: 10 }}>
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src={row.avatar} alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {row.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {row.email}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <DataTableRowActions row={row} />

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="col-span-full ">
                        <SearchUser guestList={guestList} isLoading={isLoading} onSelect={handleOnSelect} >
                            <Button className='mr-4' >
                                <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Add Guest</Button>
                        </SearchUser>
                        {NewGuest && <NewGuest />}
                    </div>
                    <FormField
                        control={forms.control}
                        rules={{ required: true }}
                        name="price"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>{fields.price.label}</FormLabel>
                                <FormControl>
                                    <Input    {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={forms.control}

                        name="discount"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>{fields.discount.label}</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="col-span-full ">
                        <FormField
                            control={forms.control}
                            name="notes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex justify-between items-center">
                                        <p>Notes</p>
                                        <FormField
                                            control={forms.control}
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
                                            placeholder="Notes"
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
                    <Input type='hidden' {...forms.register("guests", { required: true })} />

                    <div className="flex items-center gap-4 col-span-full">
                        <Button>Create booking</Button>
                        <Button variant="outline" onClick={handleCancel}>Cancel</Button>
                    </div>
                </form>
            </Form>
        </>
    );
}
