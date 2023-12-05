"use client"
import React from 'react'
import { Button } from "../../../elements/Buttons/buttons"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../elements/Card/card"
import { Label } from "../../../elements/Label/label"
import { Switch } from "../../../elements/Switch/switch"
import { Separator } from "./../../../elements/Separator/seperator"
import { Input } from '../../../elements/Input/input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../elements/Form/form';
import { useForm } from 'react-hook-form';


export default function DemoCookieSettings({ defaultValues, id = "email", template = true }) {
    const form: any = useForm({ defaultValues, });

    return (
        <Card style={{ maxWidth: 800 }}>
          
            <CardContent className="grid gap-6">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
                        className="space-y-8 mt-8"
                        id={id}
                    >
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="necessary" className="flex flex-col space-y-1">
                                <span>Booking Confirmation</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    An email is sent when a booking is confirmed
                                </span>
                            </Label>
                            <div className='flex items-center'>
                                {template && <Button type="button" size='sm' variant='secondary' >Template</Button>}&nbsp;
                                <FormField
                                    control={form.control}
                                    name="bookingNotification"
                                    render={({ field }) => (
                                        <FormItem className="">

                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="functional" className="flex flex-col space-y-1">
                                <span>Booking Modification</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    An email is sent when a booking is changed
                                </span>
                            </Label>
                            <div className='flex items-center'>
                                {template && <Button type="button" size='sm' variant='secondary' >Template</Button>}&nbsp;
                                <FormField
                                    control={form.control}
                                    name="bookingModification"
                                    render={({ field }) => (
                                        <FormItem className="">

                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="performance" className="flex flex-col space-y-1">
                                <span>Booking Cancellation</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    An email is sent when a booking is deleted
                                </span>
                            </Label>
                            <div className='flex items-center'>
                                {template && <Button size='sm' variant='secondary' >Template</Button>}&nbsp;
                                <FormField
                                    control={form.control}
                                    name="guestCheckout"
                                    render={({ field }) => (
                                        <FormItem className="">

                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div> */}
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="performance" className="flex flex-col space-y-1">
                                <span>Guest Welcoming</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    An email is sent when the reservation is changed to check-in
                                </span>
                            </Label>
                            <div className='flex items-center'>
                                {template && <Button type="button" size='sm' variant='secondary' >Template</Button>}&nbsp;
                                <FormField
                                    control={form.control}
                                    name="guestWelcoming"
                                    render={({ field }) => (
                                        <FormItem className="">

                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="performance" className="flex flex-col space-y-1">
                                <span>Guest Checkout</span>
                                <span className="font-normal leading-snug text-muted-foreground">
                                    An email is sent when a booking is changed to checkout
                                </span>
                            </Label>
                            <div className='flex items-center'>
                                {template && <Button type="button" size='sm' variant='secondary' >Template</Button>}&nbsp;
                                <FormField
                                    control={form.control}
                                    name="guestCheckout"
                                    render={({ field }) => (
                                        <FormItem className="">

                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="performance" className="flex flex-col space-y-1">
                                <span>Notify me when a new reservation is made</span>

                            </Label>
                            <div>


                                <div className='flex items-center'>
                                    <FormField
                                        control={form.control}
                                        name="notifyMeNewReservation"
                                        render={({ field }) => (
                                            <FormItem className="">

                                                <FormControl>
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="performance" className="flex flex-col space-y-1">
                                <span>Notify me when a new reservation is deleted</span>
                            </Label>
                            <div>


                                <div className='flex items-center'>
                                    <FormField
                                        control={form.control}
                                        name="notiyMeReservationCanceled"
                                        render={({ field }) => (
                                            <FormItem className="">

                                                <FormControl>
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <Button form={id} variant="outline" className="w-full">
                    Save preferences
                </Button>
            </CardFooter>
        </Card>
    )
}