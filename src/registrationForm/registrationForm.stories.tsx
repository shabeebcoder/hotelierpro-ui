import React from "react"
import RegistrationForm from "./registrationForm"

export default {
    title: 'components/registrationForm'
}



export const RegistrationForms = (args) => <RegistrationForm {...args} />

RegistrationForms.args = {
    HeaderInfo: {
       name:"HotelierPro",
       address:"Baniyar Old Bridge, Ganguba Khatmandu ,Nepa",
       number:"9805125899(Sudan) 98893972922(Sara)"
    },
    infoTableData: [{
        label: 'Arrival  Date',
        value: 'lorem',
        label1: 'Departure  Date',
        value1: 'lorem'
    },
    {
        label: 'Name',
        value: 'lorem',
        label1: 'Check In Time',
        value1: 'lorem',
    },
    {
        label: 'Length of stay',
        value: 'lorem',
        label1: 'Nationality',
        value1: 'lorem',
    },
    {
        label: 'Room Type',
        value: 'lorem',
        label1: 'No of Person',
        value1: 'lorem'
    },
    {
        label: 'Email Phone',
        value: 'lorem',
        label1: 'Passport No',
        value1: 'lorem'
    },
    {
        label: 'Room Amount',
        value: 'lorem',
        label1: 'Deposit  Amount ',
        value1: 'lorem',
        label2: "Due Amount",
        value2:'....'
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
    ],
    serviceData: [{
        date:"",
        type:"",
        qty:"",
        amount:"",
        total:"",
    },
    {
        date:"",
        type:"",
        qty:"",
        amount:"",
        total:"",
    },
    {
        date:"",
        type:"",
        qty:"",
        amount:"",
        total:"",
    },
    {
        date:"",
        type:"",
        qty:"",
        amount:"",
        total:"",
    },
    {
        date:"",
        type:"",
        qty:"",
        amount:"",
        total:"",
    },
    {
        date:"",
        type:"",
        qty:"",
        amount:"",
        total:"",
    },
    ]
}
