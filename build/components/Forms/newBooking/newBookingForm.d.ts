import React from 'react';
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
    defaultValues?: {
        adult: number;
        child: number;
        guests: any[];
        checkInDate: Date;
        duration: string;
        checkOutDate: string;
        roomtype: string;
        status: string;
        price: string;
        discount: string;
        notes: string;
    };
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
