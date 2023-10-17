import React from "react"
import RegistrationForm from "./registrationForm"

export default {
    title: 'components/registrationForm'
}



export const RegistrationForms = (args) => <RegistrationForm {...args} />

RegistrationForms.args = {
    infoTableData: [{
        label: 'Arrival  Date :',
        value: 'lorem'
    },
    {
        label: 'Departure  Date :',
        value: 'lorem'
    },
    ]
}