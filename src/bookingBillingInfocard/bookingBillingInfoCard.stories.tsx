import React from "react";


import BookingInfoCard from "./bookingBillingInfoCard";

export default {
    title : "components/bookingBillingInfoCard"
}



export const BookingInfoCards = (args) => <BookingInfoCard {...args} />


BookingInfoCards.args={
    roomName: "Single 1 Room",
    actualPrice: 312,
    discountPrice: 94,
    handleConfirmClick: ()=> alert("Confirm is clicked")
}