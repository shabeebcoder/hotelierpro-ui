import React from "react"
import Invoice from "./invoice";
import InvoiceEdit from "./invoice-edit";

export default {
    title: 'components/invoice'
}


export const Invoices = (args) => <Invoice {...args} />
export const InvoiceEdits = (args) => <InvoiceEdit {...args} />


Invoices.args = {
    amount : 200
}
InvoiceEdits.args = {}