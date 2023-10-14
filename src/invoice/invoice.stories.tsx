import React from "react"
import Invoice from "./invoice"

export default {
    title: 'components/invoice'
}


export const Invoices = (args) => <Invoice {...args} />


Invoices.args = {
    amount : 200
}