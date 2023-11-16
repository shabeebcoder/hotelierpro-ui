import React from 'react'
import AddPersonForm from "./addperson";


export default {
    title: "hotelierPro/Form/AddPersonForm"
}


export const AddpersonFormSample = (args) => <AddPersonForm  {...args} />


const sampleUpdateData = {
    fullName: "shabeeb",
    companyId: "shabeeb"
}




AddpersonFormSample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    defaultValue: sampleUpdateData,
    type: "create"
}