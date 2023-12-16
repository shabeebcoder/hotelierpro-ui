import React from 'react';
import { z } from "zod";
declare const invoiceFormSchema: z.ZodObject<{
    customer: z.ZodString;
    customerAddress: z.ZodString;
    hotelName: z.ZodString;
    hotelAddress: z.ZodString;
    invoiceNumber: z.ZodString;
    invoiceDate: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    invoiceDueDate: z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>;
    services: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        price: z.ZodNumber;
        quantity: z.ZodNumber;
        totalAmount: z.ZodNumber;
        date: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        price?: number;
        quantity?: number;
        totalAmount?: number;
        date?: Date;
    }, {
        name?: string;
        price?: number;
        quantity?: number;
        totalAmount?: number;
        date?: string | Date;
    }>, "many">;
    total: z.ZodNumber;
    subTotal: z.ZodNumber;
    paid: z.ZodNumber;
    amountDue: z.ZodNumber;
    status: z.ZodEnum<["paid", "draft", "sent"]>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    customer?: string;
    customerAddress?: string;
    hotelName?: string;
    hotelAddress?: string;
    invoiceNumber?: string;
    invoiceDate?: Date;
    invoiceDueDate?: Date;
    services?: {
        name?: string;
        price?: number;
        quantity?: number;
        totalAmount?: number;
        date?: Date;
    }[];
    total?: number;
    subTotal?: number;
    paid?: number;
    amountDue?: number;
    status?: "paid" | "draft" | "sent";
    notes?: string;
}, {
    customer?: string;
    customerAddress?: string;
    hotelName?: string;
    hotelAddress?: string;
    invoiceNumber?: string;
    invoiceDate?: string | Date;
    invoiceDueDate?: string | Date;
    services?: {
        name?: string;
        price?: number;
        quantity?: number;
        totalAmount?: number;
        date?: string | Date;
    }[];
    total?: number;
    subTotal?: number;
    paid?: number;
    amountDue?: number;
    status?: "paid" | "draft" | "sent";
    notes?: string;
}>;
export type IInvoiceForm = z.infer<typeof invoiceFormSchema>;
declare function InvoiceEditableForm({ onSubmit, invoiceNumber, defaultValues }: {
    onSubmit: any;
    invoiceNumber: any;
    defaultValues: any;
}): React.JSX.Element;
export default InvoiceEditableForm;
