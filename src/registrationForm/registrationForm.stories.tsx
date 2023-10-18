import React from "react"
import RegistrationForm from "./registrationForm"
import InfoTable from './infoTable'

export default {
    title: 'components/registrationForm'
}



export const RegistrationForms = (args) => <RegistrationForm {...args} />

RegistrationForms.args = {
    infoTableData: [{
        label: 'Arrival  Date',
        value: 'lorem'
    },
    {
        label: 'Departure  Date',
        value: 'lorem'
    },
    {
        label: 'Name',
        value: 'lorem'
    },
    {
        label: 'Check In Time',
        value: 'lorem'
    },
    {
        label: 'Length of stay',
        value: 'lorem'
    },
    {
        label: 'Nationality',
        value: 'lorem'
    },
    {
        label: 'Room Type',
        value: 'lorem'
    },
    {
        label: 'No of Person',
        value: 'lorem'
    },
    {
        label: 'Email Phone',
        value: 'lorem'
    },
    {
        label: 'Passport No',
        value: 'lorem'
    },
    {
        label: 'Room Amount',
        value: 'lorem'
    },
    {
        label: 'Dure Amount',
        value: 'lorem'
    }
    ]



}