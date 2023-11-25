import React from 'react';
import BillingComponent from './billingComponent';

export default {
    title: 'hotelierPro/Formv2/BillingComponent',
};

export const billingComponentExample = (args) => <BillingComponent {...args} />;

billingComponentExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    selectValues: [
        { label: 'Person', value: 'person' },
        { label: 'Owner', value: 'owner' },
    ],
};
