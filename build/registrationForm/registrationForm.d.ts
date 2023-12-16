import React from 'react';
import "./styles.css";
import { z } from "zod";
export declare const registrationFormSchema: z.ZodObject<{
    hotelName: z.ZodString;
    hotelAddres: z.ZodString;
    arrival: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    departure: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    name: z.ZodString;
    stayLength: z.ZodNumber;
    roomType: z.ZodString;
    email: z.ZodString;
    roomAmount: z.ZodNumber;
    checkIn: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    checkInTime: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    nationality: z.ZodString;
    numberOfPerson: z.ZodNumber;
    passport: z.ZodString;
    deposit: z.ZodNumber;
    dueAmount: z.ZodNumber;
    services: z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        cost: z.ZodNumber;
        qty: z.ZodNumber;
        total: z.ZodNumber;
        date: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>;
    }, "strip", z.ZodTypeAny, {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        date?: Date;
    }, {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        date?: string | Date;
    }>, "many">;
    policies: z.ZodArray<z.ZodObject<{
        policy: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        policy?: string;
    }, {
        policy?: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    hotelName?: string;
    hotelAddres?: string;
    arrival?: Date;
    departure?: Date;
    name?: string;
    stayLength?: number;
    roomType?: string;
    email?: string;
    roomAmount?: number;
    checkIn?: Date;
    checkInTime?: Date;
    nationality?: string;
    numberOfPerson?: number;
    passport?: string;
    deposit?: number;
    dueAmount?: number;
    services?: {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        date?: Date;
    }[];
    policies?: {
        policy?: string;
    }[];
}, {
    hotelName?: string;
    hotelAddres?: string;
    arrival?: string | Date;
    departure?: string | Date;
    name?: string;
    stayLength?: number;
    roomType?: string;
    email?: string;
    roomAmount?: number;
    checkIn?: string | Date;
    checkInTime?: string | Date;
    nationality?: string;
    numberOfPerson?: number;
    passport?: string;
    deposit?: number;
    dueAmount?: number;
    services?: {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        date?: string | Date;
    }[];
    policies?: {
        policy?: string;
    }[];
}>;
export type IRegistrationForm = z.infer<typeof registrationFormSchema>;
declare function RegistrationForm(props: IRegistrationForm): React.JSX.Element;
export default RegistrationForm;
