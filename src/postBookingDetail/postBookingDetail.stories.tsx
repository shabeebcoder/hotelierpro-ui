import React from "react";

import PostBookingDetail from "./postBookingDetail"

export default {
    title : "components/postBookingDetail"
}

export const PostBookingDetails = (args) => <PostBookingDetail {...args}/>

PostBookingDetails.args ={
    guestName: "Matteo Surname",
    Checkin:"22-05-2022",
    Checkout: "24-05-2022",
    Email: "abc@gmail.com",
    phoneNumber: +48123456,
    bookingNum: "#1234567",
}