import React from 'react';
import AddServicesForm from './addServiceCategoryForm';

export default {
    title: 'hotelierPro/Form/AddServiceCategoryForm',
};

export const addServiceCategoryFormExample = (args) => <AddServicesForm {...args} />;

addServiceCategoryFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    serviceCategory: [
        { label: 'Food', value: 'food' },
        { label: 'Cleaning', value: 'cleaning' },
    ],
};
