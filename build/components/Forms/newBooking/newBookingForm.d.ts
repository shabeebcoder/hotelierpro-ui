import React from 'react';
import { z } from "zod";
export declare const bookingFormSchema: z.ZodObject<{
    checkInDate: z.ZodDate;
    checkOutDate: z.ZodDate;
    nights: z.ZodDefault<z.ZodNumber>;
    roomType: z.ZodString;
    status: z.ZodString;
    adults: z.ZodDefault<z.ZodNumber>;
    child: z.ZodDefault<z.ZodNumber>;
    guests: z.ZodEffects<z.ZodEffects<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        avatar: z.ZodOptional<z.ZodString>;
        isMain: z.ZodDefault<z.ZodBoolean>;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }, {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }>, "many">, {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }[], {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }[]>, {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }[], {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }[]>;
    price: z.ZodDefault<z.ZodNumber>;
    discount: z.ZodOptional<z.ZodNumber>;
    singleUse: z.ZodDefault<z.ZodBoolean>;
    notes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        staffName: z.ZodString;
        note: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        staffName?: string;
        note?: string;
    }, {
        staffName?: string;
        note?: string;
    }>, "many">>;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    checkInDate?: Date;
    checkOutDate?: Date;
    nights?: number;
    roomType?: string;
    status?: string;
    adults?: number;
    child?: number;
    guests?: {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }[];
    price?: number;
    discount?: number;
    singleUse?: boolean;
    notes?: {
        staffName?: string;
        note?: string;
    }[];
    id?: string;
}, {
    checkInDate?: Date;
    checkOutDate?: Date;
    nights?: number;
    roomType?: string;
    status?: string;
    adults?: number;
    child?: number;
    guests?: {
        name?: string;
        email?: string;
        avatar?: string;
        isMain?: boolean;
        id?: string;
    }[];
    price?: number;
    discount?: number;
    singleUse?: boolean;
    notes?: {
        staffName?: string;
        note?: string;
    }[];
    id?: string;
}>;
export type IbookingForm = z.infer<typeof bookingFormSchema>;
export default function NewBookingForm({ onSubmit, roomTypes, status, id, NewGuest, guestList, onSelect, isLoading, handleCancel, defaultValues, fields }: {
    onSubmit: any;
    roomTypes: any;
    status: any;
    id: any;
    NewGuest: any;
    guestList: any;
    onSelect: any;
    isLoading: any;
    handleCancel: any;
    defaultValues: any;
    fields?: {
        checkInDate: {
            label: string;
        };
        duration: {
            label: string;
        };
        checkOutDate: {
            label: string;
        };
        roomtype: {
            label: string;
        };
        status: {
            label: string;
        };
        adult: {
            label: string;
        };
        child: {
            label: string;
        };
        price: {
            label: string;
        };
        discount: {
            label: string;
        };
        notes: {
            label: string;
        };
    };
}): React.JSX.Element;
