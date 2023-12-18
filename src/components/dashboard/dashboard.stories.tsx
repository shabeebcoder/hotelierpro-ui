import React from 'react'
import Dashboard from "./dashboard";

export default {
    title: "components/dashboard"
}

export const DashboardDemo = (args) => {
    const data = {
        handleBooking: () => { },
        "totalRevenue": {
            "total": 24567,
            "currency": "NPR",
            percentageHike: 10,
        },
        numberOfbookings: {
            total: 3003,
            percentageHike: 10,
        },
        guests: {
            total: 200,
            percentageHike: 10,
        },
        currentMonthRevenue: {
            total: 5373,
            currency: "NPR",
            percentageHike: 20,

        },

        "barChart": [
            {
                "name": "Dec",
                "total": 0
            },
            {
                "name": "Nov",
                "total": 0
            },
            {
                "name": "Oct",
                "total": 100
            },
            {
                "name": "Sep",
                "total": 0
            },
            {
                "name": "Aug",
                "total": 0
            },
            {
                "name": "Jul",
                "total": 0
            },
            {
                "name": "Jun",
                "total": 0
            },
            {
                "name": "May",
                "total": 0
            },
            {
                "name": "Apr",
                "total": 0
            },
            {
                "name": "Mar",
                "total": 0
            },
            {
                "name": "Feb",
                "total": 0
            },
            {
                "name": "Jan",
                "total": 0
            }
        ],
        "recentBookings": [
            {
                avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
                name: "John Doe",
                email: "john@gmail.com",
                price: "3000 NPR",
            },
            {
                avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
                name: "Alice Johnson",
                email: "alice.johnson@example.com",
                price: "3500 NPR",
            },
            {
                avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
                name: "Michael Brown",
                email: "michael.brown@example.com",
                price: "3200 NPR",
            },
            {
                avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
                name: "Sarah Davis",
                email: "sarah.davis@example.com",
                price: "3100 NPR",
            },
            {
                avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
                name: "Kevin White",
                email: "kevin.white@example.com",
                price: "3400 NPR",
            }
        ]
    }
    return <Dashboard {...data} />
}