import React from 'react';
import { z } from "zod";
export declare const billFormSchema: z.ZodObject<{
    payer: z.ZodString;
    paymentBy: z.ZodEnum<["person", "company"]>;
    services: z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        cost: z.ZodNumber;
        qty: z.ZodNumber;
        total: z.ZodNumber;
        type: z.ZodEnum<["room", "service"]>;
        date: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    }, "strip", z.ZodTypeAny, {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        type?: "room" | "service";
        date?: Date;
    }, {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        type?: "room" | "service";
        date?: string | Date;
    }>, "many">;
    total: z.ZodNumber;
    paid: z.ZodNumber;
    amountDue: z.ZodNumber;
    subTotal: z.ZodOptional<z.ZodNumber>;
    createInvoice: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    serviceList: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    payer?: string;
    paymentBy?: "person" | "company";
    services?: {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        type?: "room" | "service";
        date?: Date;
    }[];
    total?: number;
    paid?: number;
    amountDue?: number;
    subTotal?: number;
    createInvoice?: boolean;
    serviceList?: string;
}, {
    payer?: string;
    paymentBy?: "person" | "company";
    services?: {
        item?: string;
        cost?: number;
        qty?: number;
        total?: number;
        type?: "room" | "service";
        date?: string | Date;
    }[];
    total?: number;
    paid?: number;
    amountDue?: number;
    subTotal?: number;
    createInvoice?: boolean;
    serviceList?: string;
}>;
export type IBillForm = z.infer<typeof billFormSchema>;
declare function BillingComponent({ onsubmit, selectValues, defaultValues, serviceOptions, handleCreateInvoice, handleCancel }: {
    onsubmit: any;
    selectValues: any;
    defaultValues: any;
    serviceOptions?: any[];
    handleCreateInvoice: any;
    handleCancel: any;
}): React.JSX.Element;
export default BillingComponent;
