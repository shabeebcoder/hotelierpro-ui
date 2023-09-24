
import React from "react";
import Calander from "./calander";


export default {
    title: "components/Calander",
}


const categoriesSample = [
    {
        "id": 9,
        "name": "single",
        "maxPersons": 2,
        "singleUsePrice": "10",
        "regularUsePrice": "12",
        "hotel": {
            "id": 22,
            "hotelName": "Yoo hotel",
            "address": "jbcfwejhf",
            "hotelWebsite": "www.yoo.com",
            "contact": "23456789",
            "country": "UAE",
            "published_at": "2023-09-08T16:55:38.778Z",
            "created_at": "2023-09-08T16:55:38.793Z",
            "updated_at": "2023-09-08T16:55:38.793Z"
        },
        "published_at": "2023-09-24T17:11:04.519Z",
        "created_at": "2023-09-24T17:11:04.521Z",
        "updated_at": "2023-09-24T17:11:04.524Z"
    }
]

const rooomsListSample = [
    {
        "id": 6,
        "roomName": "room-2",
        "roomType": {
            "id": 9,
            "name": "single",
            "maxPersons": 2,
            "singleUsePrice": "10",
            "regularUsePrice": "12",
            "hotel": 22,
            "published_at": "2023-09-24T17:11:04.519Z",
            "created_at": "2023-09-24T17:11:04.521Z",
            "updated_at": "2023-09-24T17:11:04.524Z"
        },
        "hotel": {
            "id": 22,
            "hotelName": "Yoo hotel",
            "address": "jbcfwejhf",
            "hotelWebsite": "www.yoo.com",
            "contact": "23456789",
            "country": "UAE",
            "published_at": "2023-09-08T16:55:38.778Z",
            "created_at": "2023-09-08T16:55:38.793Z",
            "updated_at": "2023-09-08T16:55:38.793Z"
        },
        "published_at": "2023-09-24T17:11:35.989Z",
        "created_at": "2023-09-24T17:11:35.991Z",
        "updated_at": "2023-09-24T17:11:35.994Z"
    }
]
const bookingsSample = [
    {
        "id": 5,
        "roomType": {
            "id": 4,
            "name": "single",
            "maxPersons": 2,
            "singleUsePrice": "10",
            "regularUsePrice": "12",
            "hotel": 21,
            "published_at": "2023-09-08T16:28:00.310Z",
            "created_at": "2023-09-08T16:28:00.312Z",
            "updated_at": "2023-09-08T16:28:00.316Z"
        },
        "room": {
            "id": 2,
            "roomName": "Room name updated",
            "roomType": 4,
            "hotel": 21,
            "published_at": "2023-09-08T16:30:57.389Z",
            "created_at": "2023-09-08T16:30:57.391Z",
            "updated_at": "2023-09-15T12:47:37.275Z"
        },
        "status": "newBooking",
        "numberOfPersons": 2,
        "adults": 2,
        "child": 0,
        "checkInDate": "2023-09-11T00:00:00.000Z",
        "checkOutDate": "2023-09-16T00:00:00.000Z",
        "nights": "1",
        "price": "10",
        "discount": 2,
        "notes": null,
        "singleUse": true,
        "hotel": {
            "id": 22,
            "hotelName": "Yoo hotel",
            "address": "jbcfwejhf",
            "hotelWebsite": "www.yoo.com",
            "contact": "23456789",
            "country": "UAE",
            "published_at": "2023-09-08T16:55:38.778Z",
            "created_at": "2023-09-08T16:55:38.793Z",
            "updated_at": "2023-09-08T16:55:38.793Z"
        },
        "guest": null,
        "published_at": "2023-09-16T22:20:08.542Z",
        "created_at": "2023-09-16T22:20:08.545Z",
        "updated_at": "2023-09-24T13:10:02.533Z",
        "services": []
    },
    {
        "id": 6,
        "roomType": {
            "id": 4,
            "name": "single",
            "maxPersons": 2,
            "singleUsePrice": "10",
            "regularUsePrice": "12",
            "hotel": 21,
            "published_at": "2023-09-08T16:28:00.310Z",
            "created_at": "2023-09-08T16:28:00.312Z",
            "updated_at": "2023-09-08T16:28:00.316Z"
        },
        "room": {
            "id": 2,
            "roomName": "Room name updated",
            "roomType": 4,
            "hotel": 21,
            "published_at": "2023-09-08T16:30:57.389Z",
            "created_at": "2023-09-08T16:30:57.391Z",
            "updated_at": "2023-09-15T12:47:37.275Z"
        },
        "status": "newBooking",
        "numberOfPersons": 2,
        "adults": 2,
        "child": 0,
        "checkInDate": "2023-09-04T00:00:00.000Z",
        "checkOutDate": "2023-09-16T00:00:00.000Z",
        "nights": "1",
        "price": "10",
        "discount": 2,
        "notes": null,
        "singleUse": true,
        "hotel": {
            "id": 22,
            "hotelName": "Yoo hotel",
            "address": "jbcfwejhf",
            "hotelWebsite": "www.yoo.com",
            "contact": "23456789",
            "country": "UAE",
            "published_at": "2023-09-08T16:55:38.778Z",
            "created_at": "2023-09-08T16:55:38.793Z",
            "updated_at": "2023-09-08T16:55:38.793Z"
        },
        "guest": {
            "id": 5,
            "email": "guest24@gmail.com",
            "fullName": "Tasu",
            "passportNumber": "skdjcndjkc",
            "contactNumber": "123456789",
            "address": "sdnejfner",
            "notes": null,
            "guestType": "person",
            "companyId": "yoo1",
            "bank": null,
            "accountNumber": null,
            "contactPerson": "123456789",
            "hotel": 22,
            "booking": 6,
            "published_at": "2023-09-16T22:16:17.481Z",
            "created_at": "2023-09-16T22:16:17.484Z",
            "updated_at": "2023-09-24T12:31:25.945Z"
        },
        "published_at": "2023-09-24T12:31:25.908Z",
        "created_at": "2023-09-24T12:31:25.925Z",
        "updated_at": "2023-09-24T12:31:25.949Z",
        "services": []
    }
]
export const Dashboard = (args) => <Calander {...args} />;

Dashboard.args = {
    handleNewBookingButton: () => alert(),
    roomList: rooomsListSample,
    roomTypeList: categoriesSample,
    bookingData: bookingsSample
}
