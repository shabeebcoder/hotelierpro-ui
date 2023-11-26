import React from 'react';
import AddServicesForm from './addServicesForm';

export default {
    title: 'hotelierPro/Form/AddServiceForm',
};

export const addServicesFormExample = (args) => <AddServicesForm {...args} />;

addServicesFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    serviceCategory: [
        { label: 'Food', value: 'food' },
        { label: 'Cleaning', value: 'cleaning' },
    ],
};
