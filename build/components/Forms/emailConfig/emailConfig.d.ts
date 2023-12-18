import React from 'react';
import { z } from "zod";
declare const emailConfigSchema: z.ZodObject<{
    bookingNotification: z.ZodBoolean;
    bookingModification: z.ZodBoolean;
    guestCheckout: z.ZodBoolean;
    guestWelcoming: z.ZodBoolean;
    notifyMeNewReservation: z.ZodBoolean;
    notiyMeReservationCanceled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    bookingNotification?: boolean;
    bookingModification?: boolean;
    guestCheckout?: boolean;
    guestWelcoming?: boolean;
    notifyMeNewReservation?: boolean;
    notiyMeReservationCanceled?: boolean;
}, {
    bookingNotification?: boolean;
    bookingModification?: boolean;
    guestCheckout?: boolean;
    guestWelcoming?: boolean;
    notifyMeNewReservation?: boolean;
    notiyMeReservationCanceled?: boolean;
}>;
export type IEmailConfigForm = z.infer<typeof emailConfigSchema>;
export default function NotificationSettings({ defaultValues, onSubmit, id, template }: {
    defaultValues: any;
    onSubmit: any;
    id?: string;
    template?: boolean;
}): React.JSX.Element;
export {};
