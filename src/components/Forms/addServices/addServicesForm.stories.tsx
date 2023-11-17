import React from 'react';
import AddServicesForm from './addServicesForm';

export default {
    title: 'hotelierPro/Form/AddServicesForm',
};

export const AddServicesFormExample = (args) => <AddServicesForm {...args} />;
AddServicesForm.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    selectValues: [
        { label: 'Food', value: 'food' },
        { label: 'Cleaning', value: 'cleaning' },
    ],
};
