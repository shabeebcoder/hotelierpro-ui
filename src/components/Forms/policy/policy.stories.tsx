import React from 'react';
import AddServicesForm from './policy';

export default {
    title: 'hotelierPro/Form/AddServiceCategoryForm',
};

export const addPolicyExmaple = (args) => <AddServicesForm {...args} />;

addPolicyExmaple.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    serviceCategory: [
        { label: 'Food', value: 'food' },
        { label: 'Cleaning', value: 'cleaning' },
    ],
};
