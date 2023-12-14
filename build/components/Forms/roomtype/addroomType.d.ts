import React from 'react';
import { z } from "zod";
export declare const roomTypeTypeSchema: z.ZodObject<{
    name: z.ZodString;
    singleUsePrice: z.ZodNumber;
    regularUsePrice: z.ZodNumber;
    maxPerson: z.ZodNumber;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    singleUsePrice?: number;
    regularUsePrice?: number;
    maxPerson?: number;
    id?: string;
}, {
    name?: string;
    singleUsePrice?: number;
    regularUsePrice?: number;
    maxPerson?: number;
    id?: string;
}>;
export type IRoomTypeType = z.infer<typeof roomTypeTypeSchema>;
type IProps = {
    onSubmit: (data: IRoomTypeType) => void;
    id: string;
    defaultValues?: IRoomTypeType;
    fields?: any;
};
declare function AddRoomType({ onSubmit, id, defaultValues, fields }: IProps): React.JSX.Element;
export default AddRoomType;
