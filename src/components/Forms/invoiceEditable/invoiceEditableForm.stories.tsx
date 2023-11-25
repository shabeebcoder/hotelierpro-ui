import React from 'react';
import InvoiceEditableForm from './invoiceEditableForm';

export default { title: 'hotelierPro/Form/InvoiceEditable' };

export const InvoiceEditableFormExample = (args) => (
    <InvoiceEditableForm {...args} />
);

InvoiceEditableFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
};
