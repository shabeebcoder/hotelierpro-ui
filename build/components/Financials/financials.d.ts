import React from 'react';
import { z } from "zod";
declare const propsSchema: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    uv: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name?: string;
    uv?: number;
}, {
    name?: string;
    uv?: number;
}>, "many">;
export type IFinancialChart = z.infer<typeof propsSchema>;
export default function FinancialChart({ data }: {
    data: IFinancialChart;
}): React.JSX.Element;
export {};
