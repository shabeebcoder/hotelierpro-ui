import React from 'react'

import BookingInfo from "./bookingInfo";
import { Button } from '../../elements/Buttons/buttons';


export default {
    title: "hotelierpro/bookingInfo"
}

export const BookingInfoExample = () => {

    const info = {
        "roomType": {
            "name": "doube bed",
            "maxPersons": 4,
            "singleUsePrice": 250,
            "regularUsePrice": 300
        },
        "room": {
            "name": "202"
        },
        "_id": "656956c5b0cc5874088212ea",
        "hotelId": "65658f54b0cc587408820f9c",
        "status": "checkin",
        "numberOfPersons": 1,
        "adults": 1,
        "child": 0,
        "checkInDate": "2023-12-06T20:00:00.000Z",
        "checkOutDate": "2023-12-12T20:00:00.000Z",
        "nights": 2,
        "price": 200,
        "discount": 0,
        "notes": "",
        "singleUse": true,
        "guestName": "shabeeb ck",
        "email": "shabeebcoder@gmail.com",
        "createdAt": "2023-11-28T06:56:46.561Z",
        "updatedAt": "2023-12-01T03:45:09.270Z",
        "__v": 0

    }

    const handleActions = (data) => {
        alert(JSON.stringify(data))
    }

    const handleStatusChange = (data) => {
        alert(JSON.stringify(data))

    }


    return <BookingInfo info={info} handleActions={handleActions} handleStatusChange={handleStatusChange} >
        <Button>Hello</Button>
    </BookingInfo>
}