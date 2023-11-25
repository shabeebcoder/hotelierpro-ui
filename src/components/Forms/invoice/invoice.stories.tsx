import React from 'react';
import Invoice from './invoice';

export default {
    title: 'hotelierPro/Form/Invoice',
};

export const InvoiceExample = (args) => <Invoice {...args} />;

InvoiceExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    invoiceData: {
        no: 'INV-20230723-2',
        billingDate: '07/23/2023',
        billingDueDate: '09/23/2023',
    },
    billTo: { name: 'John', address: 'USA' },
    billFrom: { name: 'Habibi', address: 'UAE' },
};
