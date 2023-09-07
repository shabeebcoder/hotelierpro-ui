import React from "react";
import Forms from "./addservice";

export default {
    title: "components/form"
}


export const AddService = (args) => <Forms {...args} />
export const AddPersonForm = (args) => <Forms {...args} />

AddService.args = {
    title: 'Add Service',
    type: 'addService'
}

AddPersonForm.args = {
    title: 'Add Person',
    type: "addPerson"
}

AddPersonForm.args = {
    title: 'Add Category',
    type: "addCategory"
}