import React from 'react'


import { Button } from "../../elements/Buttons/buttons";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../elements/Card/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../elements/Tabs/tabs"
import { CalendarDateRangePicker } from "./datepicker";
import Overview from "./overview";
import { RecentSales } from "./recentSales"
import { z } from "zod";
import { PlusCircledIcon } from "@radix-ui/react-icons"




const revenueInfoSchema = z.object({
    total: z.number(),
    currency: z.string(),
    percentageHike: z.number(),
});

const bookingsInfoSchema = z.object({
    total: z.number(),
    percentageHike: z.number(),
});

const barChartItemSchema = z.object({
    name: z.string(),
    total: z.number(),
});

const recentBookingSchema = z.object({
    avatar: z.string(),
    name: z.string(),
    email: z.string().email(),
    price: z.string(),
});

const mainSchema = z.object({
    handleBooking: z.function(),
    totalRevenue: revenueInfoSchema,
    numberOfbookings: bookingsInfoSchema,
    guests: bookingsInfoSchema,
    currentMonthRevenue: revenueInfoSchema,
    barChart: z.array(barChartItemSchema),
    recentBookings: z.array(recentBookingSchema),
});

export type IDashboard = z.infer<typeof mainSchema>



function Dashboard(props: IDashboard) {

    try {
        mainSchema.parse(props); // Replace 'data' with the actual data object you want to validate
        console.log("Validation successful");
    } catch (error) {
    
        console.error("Validation failed:", error.errors);
    }


    return (

        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button onClick={props?.handleBooking}>
                        <PlusCircledIcon className="mr-2 h-4 w-4" />
                        New Booking</Button>
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">

                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{props?.totalRevenue?.total}&nbsp;{props?.totalRevenue?.currency || ''}</div>
                                <p className="text-xs text-muted-foreground">
                                    {`${props?.totalRevenue?.percentageHike || ''}.1% from last month`}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Number of bookings
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+{props?.numberOfbookings?.total || ''}</div>
                                <p className="text-xs text-muted-foreground">
                                    {`+${props?.numberOfbookings?.percentageHike || ''}% from last month`}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Guests</CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">+{props?.guests?.total || ''}</div>
                                <p className="text-xs text-muted-foreground">
                                    {`+${props?.guests?.percentageHike || ''}% from last month`}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Current Month Revenue
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="h-4 w-4 text-muted-foreground"
                                >
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{props?.currentMonthRevenue?.total  + ' ' + props?.currentMonthRevenue.currency}</div>
                                <p className="text-xs text-muted-foreground">
                                    {`+${props?.currentMonthRevenue?.percentageHike || ''}% from last month`}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <Overview data={props && props?.barChart || []} />
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Bookings</CardTitle>
                                <CardDescription>
                                    You made 265 sales this month.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales data={props?.recentBookings || []} />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>

    )
}

export default Dashboard