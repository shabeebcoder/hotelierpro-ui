import React from 'react';
import InvoiceEditableForm from './invoiceEditableForm';

export default { title: 'hotelierPro/Form/InvoiceEditable' };

export const InvoiceEditableFormExample = (args) => (
    <InvoiceEditableForm {...args} />
);

InvoiceEditableFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    invoiceNumber: "INV-20230723-2",
    defaultValues: {
        billingDate: new Date("10/10/2023"),
        dueDate: new Date("10/10/2023"),
        billToName: "shabeeb",
        billToAddress: "bangalore\nshanthi nagar - 0000",
        billFromName: "Saras Hostel",
        billFromAddress: "Baniyatar, kathmandu \nNepal pin 673372",
        services: [
            {
                item: "single room",
                cost: 200,
                qty: 3,
                total: 300,
                type:"room"
            },
            {
                item: "Americano",
                cost: 10,
                qty: 3,
                total: 300,
                type: "service"
            },
            {
                item: "rangrover",
                cost: 100,
                qty: 3,
                total: 600,
                type: "service"
            }
        ],
        paid: 300,
        notes: "Please take care"

    }
};
