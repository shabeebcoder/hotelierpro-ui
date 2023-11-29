import React from 'react'
import Tab from "./tab";
export default {
    title: "hotelierpro/tabs"
}
import {
    Icons
} from "./../../elements/Icons/icons"

export const TabExample = () => {

    return <Tab
        items={[{
            label: "Rooms & Guests",
            Icon: () => <Icons.roomGuest active={false}/>,
            onClick: () => alert("fd"),
            active: false
        },
        {
            label: "Billing & payments",
            Icon: () => <Icons.billingPayments active={false}/>,
            onClick: () => alert("fd"),
            active: false
        },
        {
            label: "Invoices",
            Icon: () => <Icons.invoices active={false}/>,
            onClick: () => alert("ds"),
            active: false

        },
        {
            label: "Booking Hostory",
            Icon: () => <Icons.bookingHistory active={false} />,
            onClick: () => alert("ds"),
            active: false

        },
        {
            label: "Client Form",
            Icon: () => <Icons.clientForm active={false}/>,
            onClick: () => alert("ds"),
            active: false

        }

        ]}
    />
}