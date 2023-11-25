import React from 'react'
import { Icons } from "./../../elements/Icons/icons"

import Layout from "./layout";

export default {
    title: 'hotelierPro/Layout',
}


export const LayoutDemo = (args) => <Layout  {...args} />

LayoutDemo.args = {
    handleLogout: () => alert("Logout handler"),
    children: "hellow",
    fontSize: 10,
    menu: [
        {
            title: "HotelierPro",
            props: {

                className: "font-bold",
            },
            content: [
                {
                    item: "About Subscription",
                    props: {
                        onClick : () => alert()
                    }

                }, {
                    item: "Preferences"
                },
                {
                    item: "Subscription History"
                }
                ,
                {
                    item: "Refer a friend "
                },
                {
                    item: "Sign out "
                }
            ]
        },
        {
            title: "Booking",
            content: [
                {
                    item: "New Booking ",

                }, {
                    item: "Configure Email"
                },
                {
                    item: "Export"
                }
                ,
                {
                    item: "Hostory"
                },

            ]
        },
        {
            title: "Configure",
            content: [
                {
                    item: "Billing & taxes",

                }, {
                    item: "Regional"
                },
                {
                    item: "Channel Manager"
                }
                ,
                {
                    item: "Booking Engine"
                },
                {
                    item: "Hotel Information"
                },

            ]
        },
        {
            title: "Account",
            content: [
                {
                    item: "My Profile",

                }, {
                    item: "Change Password"
                },
                {
                    item: "Add Account"
                }
                ,
                {
                    item: "User Logs"
                },


            ]
        }
    ],
    sidebar: [
        {

            title: "Overview",
            items: [
                {
                    name: "Dashboard",
                    Icon: () => <Icons.playIcon />,
                    onClick: () => alert("clicked"),
                    variant: "secondary"
                },
                {
                    name: "Front-Desk",
                    Icon: () => <Icons.windows />,
                    onClick: () => alert("clicked"),
                    variant: "ghost"
                },
                {
                    name: "Billing",
                    Icon: () => <Icons.note />,
                    onClick: () => alert("clicked"),
                    variant: "ghost"
                }

            ]
        },
        {
            title: "Management",
            items: [
                {
                    name: "Rooms",
                    Icon: () => <Icons.building />,
                    variant: "ghost"
                },
                {
                    name: "Services",
                    Icon: () => <Icons.service />,
                    variant: "ghost"
                },
                {
                    name: "Guests",
                    Icon: () => <Icons.people />,
                    variant: "ghost"
                }
            ]
        },
        {
            title: "Reports",
            items: [
                {
                    name: "Bookings",
                    Icon: () => <Icons.calander />,
                    variant: "ghost"
                },
                {
                    name: "Financials",
                    Icon: () => <Icons.stats />,
                    variant: "ghost"
                },
                {
                    name: "Housekeeping",
                    Icon: () => <Icons.hotel />,
                    variant: "ghost"
                },
                {
                    name: "Night Audit",
                    Icon: () => <Icons.moon />,
                    variant: "ghost"
                }
            ]
        }


    ]
}