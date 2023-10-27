import React from "react";

import ReservationSummary from "./reservationSummary";

export default {
    title : "components/reservationSummary"
}

export const ReservationSummaries = (args) => <ReservationSummary {...args}/>

ReservationSummaries.args ={
    checkinDay: "Sun",
    checkindate:"22",
    checkinMonth: "May",
    checkinYear: 2022,
    checkinTime: "16:00",
    stayLength: 2,
    checkoutDay: "Sun",
    checkoutdate:"22",
    checkoutMonth: "May",
    checkoutYear: 2022,
    checkoutTime: "16:00",
    roomName: "Single 1 Room",
    actualPrice: 314,
    discountPrice: 94,
    buttonName:"BOOK NOW",
    SelectionChange: "Change your selection",
    onBooknow: ()=> alert("You clicked button")
}