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

    const heading = [
        {
            "date": "All Rooms"
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
    ];

    const rows =  [
        {
            "roomName": "mount everest",
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
                    "room": {
                        "roomType": {
                            "name": "single",
                            "id": "65799d80e2dd826ebacb2de5"
                        },
                        "name": "mount everest",
                        "id": "657c6e7cc3f72e06caaa3bb9"
                    },
                    "_id": "657d49400c9ce8581ddc54ab",
                    "hotelId": "6577286af8c20983103bd239",
                    "status": "confirmed",
                    "adults": 1,
                    "child": 0,
                    "checkInDate": "2023-12-05T20:00:00.000Z",
                    "checkOutDate": "2023-12-12T20:00:00.000Z",
                    "nights": 8,
                    "price": 3000,
                    "discount": 0,
                    "singleUse": true,
                    "guests": [
                        {
                            "name": "shabeeb",
                            "email": "shabeebcoder@gmail.com",
                            "avatar": "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
                            "id": "657b1bada54954052f14dc16",
                            "isMain": true,
                            "_id": "657d49400c9ce8581ddc54ac"
                        }
                    ],
                    "createdAt": "2023-12-16T06:08:22.699Z",
                    "updatedAt": "2023-12-16T06:52:48.129Z",
                    "notes": [],
                    "__v": 0
                }
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
                    "room": {
                        "roomType": {
                            "name": "single",
                            "id": "65799d80e2dd826ebacb2de5"
                        },
                        "name": "mount everest",
                        "id": "657c6e7cc3f72e06caaa3bb9"
                    },
                    "_id": "6583df8f6715a1beac16b3f1",
                    "hotelId": "6577286af8c20983103bd239",
                    "status": "confirmed",
                    "adults": 1,
                    "child": 0,
                    "checkInDate": "2023-12-12T20:00:00.000Z",
                    "checkOutDate": "2023-12-27T20:00:00.000Z",
                    "nights": 4,
                    "price": 3500,
                    "discount": 0,
                    "singleUse": true,
                    "guests": [
                        {
                            "name": "shabeeb xx",
                            "email": "shabeebcoder@gmail.com",
                            "avatar": "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
                            "id": "657b1bada54954052f14dc16",
                            "isMain": true,
                            "_id": "6583df8f6715a1beac16b3f2"
                        }
                    ],
                    "createdAt": "2023-12-21T06:43:50.117Z",
                    "updatedAt": "2023-12-21T06:47:43.394Z",
                    "notes": [],
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
                "isBooked": true,
                "info": {
                    "room": {
                        "roomType": {
                            "name": "single",
                            "id": "65799d80e2dd826ebacb2de5"
                        },
                        "name": "mount everest",
                        "id": "657c6e7cc3f72e06caaa3bb9"
                    },
                    "_id": "6584660ea727697a409624f7",
                    "hotelId": "6577286af8c20983103bd239",
                    "status": "newBooking",
                    "adults": 1,
                    "child": 0,
                    "checkInDate": "2023-12-19T20:00:00.000Z",
                    "checkOutDate": "2023-12-19T20:00:00.000Z",
                    "nights": 2,
                    "price": 4546,
                    "discount": 0,
                    "singleUse": true,
                    "guests": [
                        {
                            "name": "shabeeb",
                            "email": "shabeebcoder@gmail.com",
                            "avatar": "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
                            "id": "657b1bada54954052f14dc16",
                            "isMain": true,
                            "_id": "6584660ea727697a409624f8"
                        }
                    ],
                    "createdAt": "2023-12-21T15:44:08.076Z",
                    "updatedAt": "2023-12-21T16:21:34.269Z",
                    "notes": [],
                    "__v": 0
                }
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
            "roomName": "makalu",
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
                "isBooked": true,
                "info": {
                    "room": {
                        "roomType": {
                            "name": "single",
                            "id": "65799d80e2dd826ebacb2de5"
                        },
                        "name": "makalu",
                        "id": "657c7185c3f72e06caaa3c3b"
                    },
                    "_id": "658465cea727697a409624b4",
                    "hotelId": "6577286af8c20983103bd239",
                    "status": "newBooking",
                    "adults": 1,
                    "child": 0,
                    "checkInDate": "2023-12-20T20:00:00.000Z",
                    "checkOutDate": "2023-12-21T20:00:00.000Z",
                    "nights": 4,
                    "price": 3000,
                    "discount": 0,
                    "singleUse": true,
                    "guests": [
                        {
                            "name": "shabeeb yy",
                            "email": "shabeebcoder@gmail.com",
                            "avatar": "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
                            "id": "657b1bada54954052f14dc16",
                            "isMain": true,
                            "_id": "658465cea727697a409624b5"
                        }
                    ],
                    "createdAt": "2023-12-21T15:44:08.076Z",
                    "updatedAt": "2023-12-21T16:20:30.724Z",
                    "notes": [],
                    "__v": 0
                }
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
    ]

    return <Calander
        handleEdit={(data) => alert(JSON.stringify(data))}
        calanderColumns={heading}
        calanderRows={rows}


    />
}

