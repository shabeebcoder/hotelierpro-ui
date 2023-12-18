import { z } from "zod";
declare const regionalSchema: z.ZodObject<{
    language: z.ZodString;
    invoiceLanguage: z.ZodString;
    timeZone: z.ZodString;
    weekStartsOn: z.ZodString;
    currencyPosition: z.ZodString;
    currency: z.ZodString;
    dateFormat: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    language?: string;
    invoiceLanguage?: string;
    timeZone?: string;
    weekStartsOn?: string;
    currencyPosition?: string;
    currency?: string;
    dateFormat?: string;
    id?: string;
}, {
    language?: string;
    invoiceLanguage?: string;
    timeZone?: string;
    weekStartsOn?: string;
    currencyPosition?: string;
    currency?: string;
    dateFormat?: string;
    id?: string;
}>;
export type IRegionalForm = z.infer<typeof regionalSchema>;
declare function RegionalSettings({ onsubmit, currency, id, defaultValues, currencyPosition, weekStartsOn, dateFormat, timeZone, invoiceLanguage, language, fields }: {
    onsubmit: any;
    currency?: any[];
    id: any;
    defaultValues?: {};
    currencyPosition: any;
    weekStartsOn?: any[];
    dateFormat?: any[];
    timeZone?: any[];
    invoiceLanguage?: any[];
    language?: any[];
    fields?: {
        language: {
            label: string;
            description: string;
        };
        invoiceLanguage: {
            label: string;
            description: string;
        };
        timeZone: {
            label: string;
            description: string;
        };
        dateFormat: {
            label: string;
            description: string;
        };
        weekStartsOn: {
            label: string;
            description: string;
        };
        currencyPostion: {
            label: string;
            description: string;
        };
        currency: {
            label: string;
            description: string;
        };
    };
}): any;
export default RegionalSettings;
