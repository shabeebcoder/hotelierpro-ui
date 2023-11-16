import React from 'react';
import AddPersonForm from './addperson';

export default {
    title: 'hotelierPro/Form/AddPersonForm',
};

export const AddpersonFormSample = (args) => <AddPersonForm {...args} />;

const sampleData = { fullName: 'Akshay' };

AddpersonFormSample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    values: sampleData,
    type: 'create',
};
