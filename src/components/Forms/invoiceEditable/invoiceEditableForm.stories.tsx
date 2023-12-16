import React from 'react';
import InvoiceEditableForm from './invoiceEditableForm';
import {IInvoiceForm} from "./invoiceEditableForm"

export default { title: 'hotelierPro/Form/InvoiceEditable' };

export const InvoiceEditableFormExample = (args) => (
    <InvoiceEditableForm {...args} />
);


const defaultValues: IInvoiceForm = {
    customer: "shabeeb",
    customerAddress: "Bangalore, india",
    hotelName: "Sara's Hostel",
    hotelAddress: "Baniyatar Kathmandu",
    invoiceNumber: "INV-20230723",
    invoiceDate: new Date('10/10/2023'),
    invoiceDueDate: new Date('10/12/2023'),
    services: [
        {
            name: "Everest - Single 10 X nights",
            price: 100,
            quantity: 2,
            totalAmount: 10,
            date: new Date()
        }
    ],
    total: 100,
    subTotal: 200,
    paid: 100,
    amountDue: 200,
    status: "draft",

}

InvoiceEditableFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    invoiceNumber: "INV-20230723-2",
    defaultValues: defaultValues
};
