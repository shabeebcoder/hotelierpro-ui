import React from "react";
import BookingForm from "./Forms"

export default {
    title: "components/Forms"
}



export const NewBookingForm = (args) => <BookingForm {...args} />

NewBookingForm.args = {
    onSubmitForm: (fomd) => { console.log("dsdsd=>", fomd) }
}