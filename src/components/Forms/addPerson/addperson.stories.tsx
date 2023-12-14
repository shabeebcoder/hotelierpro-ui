import React from 'react';
import AddPersonForm from './addperson';

export default {
    title: 'hotelierPro/Form/AddPersonForm',
};

export const AddpersonFormSample = (args) => {

    const sampleData = { fullName: 'Akshay' };
    const handle = (data) => {
        alert()
    }

    return <AddPersonForm id="dsa"   onSubmit={handle} 
 />
};



