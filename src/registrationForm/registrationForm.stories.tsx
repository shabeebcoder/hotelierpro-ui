import React from "react"
import RegistrationForm from "./registrationForm"

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
    },
    ],
    policyInfoData : [{
        data:'. The hotel is not responsible for damage for your belonging inside the room.'
    },
    {
        data:'. Any deposited your valuable objet in the hotel safety valut services available.'
    },
    {
        data:'. Any extension of stay will be charged to guest based on either the flexible rate or any other packages offered by hotelprior.'
    },
    {
        data:'. If any miss conduct or gone against the house rules you may get dismissed from the proverty .(Non refundable)'
    },
    {
        data:'. Non refundable if you want to check out earlier that booking date.'
    },
    {
        data:'. Please clear you bill on day before departure.'
    },
    {
        data:'. Long- stay payment deposit amount will be refund 10%only.'
    },
]
}
