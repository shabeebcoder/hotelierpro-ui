import React from 'react';
import { z } from "zod";
declare const mainSchema: z.ZodObject<{
    handleBooking: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>;
    totalRevenue: z.ZodObject<{
        total: z.ZodNumber;
        percentageHike: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total?: number;
        percentageHike?: number;
    }, {
        total?: number;
        percentageHike?: number;
    }>;
    numberOfbookings: z.ZodObject<{
        total: z.ZodNumber;
        percentageHike: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total?: number;
        percentageHike?: number;
    }, {
        total?: number;
        percentageHike?: number;
    }>;
    guests: z.ZodObject<{
        total: z.ZodNumber;
        percentageHike: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total?: number;
        percentageHike?: number;
    }, {
        total?: number;
        percentageHike?: number;
    }>;
    currentMonthRevenue: z.ZodObject<{
        total: z.ZodNumber;
        percentageHike: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total?: number;
        percentageHike?: number;
    }, {
        total?: number;
        percentageHike?: number;
    }>;
    barChart: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        total?: number;
    }, {
        name?: string;
        total?: number;
    }>, "many">;
    recentBookings: z.ZodArray<z.ZodObject<{
        avatar: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
        price: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        avatar?: string;
        name?: string;
        email?: string;
        price?: string;
    }, {
        avatar?: string;
        name?: string;
        email?: string;
        price?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    handleBooking?: (...args: unknown[]) => unknown;
    totalRevenue?: {
        total?: number;
        percentageHike?: number;
    };
    numberOfbookings?: {
        total?: number;
        percentageHike?: number;
    };
    guests?: {
        total?: number;
        percentageHike?: number;
    };
    currentMonthRevenue?: {
        total?: number;
        percentageHike?: number;
    };
    barChart?: {
        name?: string;
        total?: number;
    }[];
    recentBookings?: {
        avatar?: string;
        name?: string;
        email?: string;
        price?: string;
    }[];
}, {
    handleBooking?: (...args: unknown[]) => unknown;
    totalRevenue?: {
        total?: number;
        percentageHike?: number;
    };
    numberOfbookings?: {
        total?: number;
        percentageHike?: number;
    };
    guests?: {
        total?: number;
        percentageHike?: number;
    };
    currentMonthRevenue?: {
        total?: number;
        percentageHike?: number;
    };
    barChart?: {
        name?: string;
        total?: number;
    }[];
    recentBookings?: {
        avatar?: string;
        name?: string;
        email?: string;
        price?: string;
    }[];
}>;
export type IDashboard = z.infer<typeof mainSchema>;
declare function Dashboard(props: IDashboard): React.JSX.Element;
export default Dashboard;
