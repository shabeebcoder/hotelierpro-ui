import React from 'react'

import BookingInfo  from "./bookingInfo";
import { Button } from '../../elements/Buttons/buttons';


export default {
    title: "hotelierpro/bookingInfo"
}

export const BookingInfoExample = () => {

    return <BookingInfo>
        <Button>Hello</Button>
    </BookingInfo>
}