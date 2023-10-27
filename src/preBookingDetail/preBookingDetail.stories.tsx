import React from "react";

import PreBookingDetail from "./preBookingDetail";

export default {
    title : "components/preBookingDetail"
}

export const PreBookingDetails = (args) => <PreBookingDetail {...args}/>

PreBookingDetails.args ={
    Roomname: "Single 1 Room",
    Leftroom: 3,
    Rating: 4.2,
    Review: 18,
    Guest: 3,
    onCheckinChange: ()=> alert("Checkin selected"),
    onCheckoutChange: ()=> alert("Checkout selected"),
    onSelectAdult: ()=> alert("Adults counts selected"),
    onSelectKids: ()=> alert("Kids counts selected"),
    onSwitchChange: ()=>alert("switch changed")
}