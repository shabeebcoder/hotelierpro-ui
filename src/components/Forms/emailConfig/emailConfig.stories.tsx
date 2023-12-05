import React from 'react'
import EmailConfig from "./emailConfig";

export default {
    title: "hotelierpro/form/emailConfig"
}

export const EmailConfigDemo = () => {

    return <EmailConfig
        defaultValues={{
            bookingNotification: true,
            bookingModification: true,
            guestCheckout: true,
            guestWelcoming: true,
            notiyMeReservationCanceled: true,
            notifyMeNewReservation: true
           
    }}
    />
}