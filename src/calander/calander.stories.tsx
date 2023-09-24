
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

export const Dashboard = (args) => <Calander {...args} />;

Dashboard.args = {
    handleNewBookingButton: () => alert(),
    roomList: rooomsListSample,
    roomTypeList: categoriesSample
}
