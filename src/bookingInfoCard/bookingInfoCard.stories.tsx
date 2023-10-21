import React from "react";
import BookingInfoCards from "./bookingInfoCard";

export default {
    title: 'components/bookingInfoCard'
}

export const BookingInfoCard = (args) => <BookingInfoCards {...args} />

BookingInfoCard.args = {
    bookingInfoData: [{
        label: 'Booking ID',
        value: '332244 (Sherin)'
    },

    {
        label: 'Guests',
        value: 'Donna Morris, Matteo Adamo'
    },
    {
        label: 'Phone',
        value: '202-555-0107'
    },
    {
        label: 'Check In Date',
        value: '07/30/2023'
    },
    {
        label: 'Check Out Date',
        value: '08/30/2023'
    },
    {
        label: 'Payments',
        value: '$ 100'
    },
    {
        label: 'Total Price',
        value: '$ 180'
    },
    {
        label: 'Form',
        value: 'Sysytem'
    },
    {
        label: 'Notes',
        value: 'Sample'
    },
    ],

    handleNewBooking: () => alert()
}
