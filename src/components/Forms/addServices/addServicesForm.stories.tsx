import React from 'react';
import AddServicesForm from './addServicesForm';

export default {
    title: 'hotelierPro/Form/AddServicesForm',
};

export const addServicesFormExample = (args) => <AddServicesForm {...args} />;

addServicesFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    selectValues: [
        { label: 'Food', value: 'food' },
        { label: 'Cleaning', value: 'cleaning' },
    ],
};
