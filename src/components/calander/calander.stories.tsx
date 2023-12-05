import React from 'react'
import Calander from "./calander"
import moment from 'moment';
import axios from "axios";


export default {
    title: "hotelierpro/calander"
}


export const CalanderDemo = () => {


    const [data, setData]: any = React.useState([])

    async function fecthCalander() {

        try {
            const response = await axios.get("http://localhost:3002/api/v2/calander",
                {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1NjU4ZjU0YjBjYzU4NzQwODgyMGY5ZSIsInVzZXJuYW1lIjoic2hhYmVlYmNvZGVyQGdtYWlsLmNvbSIsImVtYWlsIjoic2hhYmVlYmNvZGVyQGdtYWlsLmNvbSIsImZ1bGxOYW1lIjoiU2hhYmVlYiBjayIsImNvbmZpcm1lZCI6ZmFsc2UsImJsb2NrZWQiOmZhbHNlLCJyb2xlcyI6ImFkbWluIiwicGhvbmVOdW1iZXIiOiIrOTcxNTY2MzQ3MTMwIiwiaG90ZWxJZCI6eyJfaWQiOiI2NTY1OGY1NGIwY2M1ODc0MDg4MjBmOWMiLCJuYW1lIjoic3R1cGEgSG91c2UiLCJob3RlbFdlYnNpdGUiOiJzdHVwYS5jb20iLCJjb250YWN0IjoiKzk3NzU2NjM0NzEzMCIsImNvdW50cnkiOiJOZXBhbCIsImNyZWF0ZWRBdCI6IjIwMjMtMTEtMjhUMDY6NTY6NDYuNTM5WiIsIl9fdiI6MH0sImNyZWF0ZWRBdCI6IjIwMjMtMTEtMjhUMDY6NTY6NDYuNTM0WiIsIl9fdiI6MH0sInRpbWUiOiJUdWUgTm92IDI4IDIwMjMgMTA6NTc6MzAgR01UKzA0MDAgKEd1bGYgU3RhbmRhcmQgVGltZSkiLCJpYXQiOjE3MDExNTQ2NTB9.wsAlcyUJ3sW1j1VB8IKR1YA7heHK-JFitVWT_UdJQW4"
                    }
                }
            );

            setData([{ date: "01" }])
            console.log("response", response.data.heading)

        } catch (error: any) {
            alert("dsa")
        }
    }

    React.useEffect(() => {
        setData([{ date: "01" }]);
    }, [])


    const currentMonth = moment();

    // Create an array of dates for the current month
    var dates: any = [{ roomName: 'roomName' }];
    const startOfMonth = currentMonth.clone().startOf('month');
    const endOfMonth = currentMonth.clone().endOf('month');
    let currentDate = startOfMonth.clone();

    while (currentDate.isSameOrBefore(endOfMonth, 'day')) {
        dates.push({ date: currentDate.clone().format('DD') });
        currentDate.add(1, 'day');
    }

    console.log("columns", dates)

    console.log("data", data)

    const heading = 
        [
            {
                date: "All Rooms"  
              },
        {
            "date": "2023-12-01T00:00:00+04:00"
        },
        {
            "date": "2023-12-02T00:00:00+04:00"
        },
        {
            "date": "2023-12-03T00:00:00+04:00"
        },
        {
            "date": "2023-12-04T00:00:00+04:00"
        },
        {
            "date": "2023-12-05T00:00:00+04:00"
        },
        {
            "date": "2023-12-06T00:00:00+04:00"
        },
        {
            "date": "2023-12-07T00:00:00+04:00"
        },
        {
            "date": "2023-12-08T00:00:00+04:00"
        },
        {
            "date": "2023-12-09T00:00:00+04:00"
        },
        {
            "date": "2023-12-10T00:00:00+04:00"
        },
        {
            "date": "2023-12-11T00:00:00+04:00"
        },
        {
            "date": "2023-12-12T00:00:00+04:00"
        },
        {
            "date": "2023-12-13T00:00:00+04:00"
        },
        {
            "date": "2023-12-14T00:00:00+04:00"
        },
        {
            "date": "2023-12-15T00:00:00+04:00"
        },
        {
            "date": "2023-12-16T00:00:00+04:00"
        },
        {
            "date": "2023-12-17T00:00:00+04:00"
        },
        {
            "date": "2023-12-18T00:00:00+04:00"
        },
        {
            "date": "2023-12-19T00:00:00+04:00"
        },
        {
            "date": "2023-12-20T00:00:00+04:00"
        },
        {
            "date": "2023-12-21T00:00:00+04:00"
        },
        {
            "date": "2023-12-22T00:00:00+04:00"
        },
        {
            "date": "2023-12-23T00:00:00+04:00"
        },
        {
            "date": "2023-12-24T00:00:00+04:00"
        },
        {
            "date": "2023-12-25T00:00:00+04:00"
        },
        {
            "date": "2023-12-26T00:00:00+04:00"
        },
        {
            "date": "2023-12-27T00:00:00+04:00"
        },
        {
            "date": "2023-12-28T00:00:00+04:00"
        },
        {
            "date": "2023-12-29T00:00:00+04:00"
        },
        {
            "date": "2023-12-30T00:00:00+04:00"
        },
        {
            "date": "2023-12-31T00:00:00+04:00"
        }
    ]

    return <Calander
        handleEdit={(data)=> alert(JSON.stringify(data))}
        calanderColumns={heading}
        calanderRows={[
            {
                "roomName": "101",
                "2023-12-01T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-02T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-03T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-04T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-05T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-06T00:00:00+04:00": {
                    "isBooked": true,
                    "info": {
                        "roomType": {
                            "name": "single bed",
                            "maxPersons": 2,
                            "singleUsePrice": 150,
                            "regularUsePrice": 200
                        },
                        "room": {
                            "name": "101"
                        },
                        "_id": "65697443477c8bdf8d831d83",
                        "hotelId": "65658f54b0cc587408820f9c",
                        "status": "confirmed",
                        "numberOfPersons": 1,
                        "adults": 1,
                        "child": 0,
                        "checkInDate": "2023-12-05T20:00:00.000Z",
                        "checkOutDate": "2023-12-08T20:00:00.000Z",
                        "nights": 3,
                        "price": 400,
                        "discount": 0,
                        "notes": "",
                        "singleUse": true,
                        "guestName": "shabeeb ck",
                        "email": "shabeebcoder@gmail.com",
                        "createdAt": "2023-12-01T05:49:42.854Z",
                        "updatedAt": "2023-12-01T05:50:59.728Z",
                        "__v": 0
                    }
                },
                "2023-12-07T00:00:00+04:00": {
                    "isBooked": true,
                    "info": {
                        "roomType": {
                            "name": "single bed",
                            "maxPersons": 2,
                            "singleUsePrice": 150,
                            "regularUsePrice": 200
                        },
                        "room": {
                            "name": "101"
                        },
                        "_id": "65695624b0cc5874088212d0",
                        "hotelId": "65658f54b0cc587408820f9c",
                        "status": "newBooking",
                        "numberOfPersons": 2,
                        "adults": 2,
                        "child": 0,
                        "checkInDate": "2023-12-06T20:00:00.000Z",
                        "checkOutDate": "2023-12-12T20:00:00.000Z",
                        "nights": 20,
                        "price": 100,
                        "discount": 0,
                        "notes": "",
                        "singleUse": true,
                        "guestName": "shabeeb ck",
                        "email": "shabeebcoder@gmail.com",
                        "createdAt": "2023-11-28T06:56:46.561Z",
                        "updatedAt": "2023-12-01T03:42:28.700Z",
                        "__v": 0
                    }
                },
                "2023-12-08T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-09T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-10T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-11T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-12T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-13T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-14T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-15T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-16T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-17T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-18T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-19T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-20T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-21T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-22T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-23T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-24T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-25T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-26T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-27T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-28T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-29T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-30T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-31T00:00:00+04:00": {
                    "isBooked": false
                }
            },
            {
                "roomName": "202",
                "2023-12-01T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-02T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-03T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-04T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-05T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-06T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-07T00:00:00+04:00": {
                    "isBooked": true,
                    "info": {
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
                },
                "2023-12-08T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-09T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-10T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-11T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-12T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-13T00:00:00+04:00": {
                    "isBooked": true,
                    "info": {
                        "roomType": {
                            "name": "doube bed",
                            "maxPersons": 4,
                            "singleUsePrice": 250,
                            "regularUsePrice": 300
                        },
                        "room": {
                            "name": "202"
                        },
                        "_id": "65697451477c8bdf8d831d85",
                        "hotelId": "65658f54b0cc587408820f9c",
                        "status": "confirmed",
                        "numberOfPersons": 1,
                        "adults": 1,
                        "child": 0,
                        "checkInDate": "2023-12-12T20:00:00.000Z",
                        "checkOutDate": "2023-12-15T20:00:00.000Z",
                        "nights": 3,
                        "price": 400,
                        "discount": 0,
                        "notes": "",
                        "singleUse": true,
                        "guestName": "shabeeb ck",
                        "email": "shabeebcoder@gmail.com",
                        "createdAt": "2023-12-01T05:49:42.854Z",
                        "updatedAt": "2023-12-01T05:51:13.191Z",
                        "__v": 0
                    }
                },
                "2023-12-14T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-15T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-16T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-17T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-18T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-19T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-20T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-21T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-22T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-23T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-24T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-25T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-26T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-27T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-28T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-29T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-30T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-31T00:00:00+04:00": {
                    "isBooked": false
                }
            },
            {
                "roomName": "501",
                "2023-12-01T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-02T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-03T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-04T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-05T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-06T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-07T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-08T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-09T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-10T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-11T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-12T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-13T00:00:00+04:00": {
                    "isBooked": true,
                    "info": {
                        "roomType": {
                            "name": "dorm",
                            "maxPersons": 1,
                            "singleUsePrice": 200,
                            "regularUsePrice": 200
                        },
                        "room": {
                            "name": "501"
                        },
                        "_id": "65697456477c8bdf8d831d87",
                        "hotelId": "65658f54b0cc587408820f9c",
                        "status": "confirmed",
                        "numberOfPersons": 1,
                        "adults": 1,
                        "child": 0,
                        "checkInDate": "2023-12-12T20:00:00.000Z",
                        "checkOutDate": "2023-12-15T20:00:00.000Z",
                        "nights": 3,
                        "price": 400,
                        "discount": 0,
                        "notes": "",
                        "singleUse": true,
                        "guestName": "shabeeb ck",
                        "email": "shabeebcoder@gmail.com",
                        "createdAt": "2023-12-01T05:49:42.854Z",
                        "updatedAt": "2023-12-01T05:51:18.052Z",
                        "__v": 0
                    }
                },
                "2023-12-14T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-15T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-16T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-17T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-18T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-19T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-20T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-21T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-22T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-23T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-24T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-25T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-26T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-27T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-28T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-29T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-30T00:00:00+04:00": {
                    "isBooked": false
                },
                "2023-12-31T00:00:00+04:00": {
                    "isBooked": false
                }
            }
        ]}


    />
}

