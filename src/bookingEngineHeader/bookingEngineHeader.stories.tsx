import React from "react";

import BookingEngineHeader from "./bookingEngineHeader";

export default {
    title: 'components/bookingEngineHeader'
}

export const BookingEngineHeaders = (args) => <BookingEngineHeader {...args}/>

BookingEngineHeaders.args ={
    hotelFname: "Fly",
    hotelLname: "Hotels",
    onLogoClick: ()=> alert("This is home page"),
    onHotelClick: ()=> alert("This is hotels page"),
    onAboutUsClick: ()=> alert("This is About us page"),
    onContactClick: ()=> alert("This is contact page"),
    handleSignIn: ()=> alert("This is signin page")
}