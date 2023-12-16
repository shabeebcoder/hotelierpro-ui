import React from 'react';
import BillingComponent from './billingComponent';

export default {
    title: 'hotelierPro/Form/BillingComponent',
};


const bookingResponse = {
    "roomType": {
        "name": "delux",
        "maxPersons": 2,
        "singleUsePrice": 200,
        "regularUsePrice": 300
    },
    "room": {
        "name": "10 delux"
    },
    "_id": "65671cddb0cc58740882101d",
    "hotelId": "65658f54b0cc587408820f9c",
    "status": "booked",
    "numberOfPersons": 1,
    "adults": 2,
    "child": 2,
    "checkInDate": "2023-11-16T20:00:00.000Z",
    "checkOutDate": "2023-10-09T20:00:00.000Z",
    "nights": 1,
    "price": 1000,
    "discount": 10,
    "notes": "please take care",
    "singleUse": true,
    "guestName": "shabeeb",
    "email": "shabeebcoder@gmail.com",
    "createdAt": "2023-11-28T06:56:46.561Z",
    "updatedAt": "2023-11-29T11:13:33.614Z",
    "__v": 0
};


const servicesReponse = [
    {
        "_id": "65702bdb63f8f865ee567167",
        "name": "continent break fast",
        "price": "200",
        "category": {
            "_id": "656ec8836a8e45a5303041ed",
            "name": "food",
            "hotelId": "65658f54b0cc587408820f9c",
            "createdAt": "2023-12-04T14:15:04.785Z",
            "__v": 0
        },
        "hotelId": "65658f54b0cc587408820f9c",
        "createdAt": "2023-12-06T07:50:19.955Z",
        "__v": 0
    },
    {
        "_id": "65702bf063f8f865ee567169",
        "name": "Americano",
        "price": "500",
        "category": {
            "_id": "656ec8836a8e45a5303041ed",
            "name": "food",
            "hotelId": "65658f54b0cc587408820f9c",
            "createdAt": "2023-12-04T14:15:04.785Z",
            "__v": 0
        },
        "hotelId": "65658f54b0cc587408820f9c",
        "createdAt": "2023-12-06T07:50:19.955Z",
        "__v": 0
    },
    {
        "_id": "65702bf863f8f865ee56716b",
        "name": "Americano",
        "price": "500",
        "category": {
            "_id": "65702bb463f8f865ee567162",
            "name": "coffee",
            "hotelId": "65658f54b0cc587408820f9c",
            "createdAt": "2023-12-06T07:50:19.959Z",
            "__v": 0
        },
        "hotelId": "65658f54b0cc587408820f9c",
        "createdAt": "2023-12-06T07:50:19.955Z",
        "__v": 0
    },
    {
        "_id": "65702c1363f8f865ee56716d",
        "name": "Rangroved",
        "price": "2500",
        "category": {
            "_id": "65702bba63f8f865ee567164",
            "name": "vehicle",
            "hotelId": "65658f54b0cc587408820f9c",
            "createdAt": "2023-12-06T07:50:19.959Z",
            "__v": 0
        },
        "hotelId": "65658f54b0cc587408820f9c",
        "createdAt": "2023-12-06T07:50:19.955Z",
        "__v": 0
    }
]

export const billingComponentExample = (args) => {


    const serviceOptions: any = servicesReponse.map((row) => {

        return {
            value: row._id,
            label: row.name,
            price: Number(row.price)

        }
    })

    return <BillingComponent

        onsubmit={(data) => {
            console.log("data", data)
            alert(JSON.stringify(data))
        }}
        handleCreateInvoice={() => alert("")}
        handleCancel={() => alert()}
        selectValues={[
            { label: 'Person', value: 'person' },
            { label: 'Owner', value: 'owner' },
        ]}
        serviceOptions={serviceOptions}
        defaultValues={{
            services: [
                {
                    item: "single room",
                    cost: 200,
                    qty: 3,
                    total: 300,
                    type: "room",
                    date: "2023-12-16T07:38:23.214Z",
                },
                {
                    item: "Americano",
                    cost: 10,
                    qty: 3,
                    total: 300,
                    type: "service",
                    date: "2023-12-16T07:38:23.214Z",
                },
                {
                    item: "rangrover",
                    cost: 100,
                    qty: 3,
                    total: 600,
                    type: "service",
                    date: "2023-12-16T07:38:23.214Z",
                }
            ],
            subTotal: 0,
            paid: 0,
            amountDue: 0

        }}
    />
}


