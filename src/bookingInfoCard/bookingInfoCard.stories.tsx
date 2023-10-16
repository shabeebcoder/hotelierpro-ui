import React from "react";
import BookingInfoCards from "./bookingInfoCard";

export default {
    title: 'components/bookingInfoCard'
}

export const BookingInfoCard = (args) => <BookingInfoCards {...args} />

BookingInfoCard.args = {
    BookingInfo:[ {
        label: 'Booking ID',
        value: '332244 (Sherin)'
    },
]
}
