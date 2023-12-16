import React from "react"
import RegistrationForm from "./registrationForm"

export default {
    title: 'components/registrationForm'
}
import { IRegistrationForm } from "./registrationForm"



export const RegistrationForms = (args) => {

    const props: IRegistrationForm = {
        hotelAddres: 'Baniyar Old Bridge, Ganguba Khatmandu ,\nNepa phone: 9805125899(Sudan) 98893972922(Sara)',
        hotelName: 'Saras hostel',
        arrival: new Date("10/10/2023"),
        departure: new Date("10/10/2023"),
        name: "shabeeb",
        stayLength: 10,
        roomType: 'Makalu single',
        email: 'shabeebcoder@gmail.com',
        roomAmount: 200,
        checkIn: new Date("10/10/2023"),
        checkInTime: new Date("10/10/2023"),
        nationality: 'indian',
        numberOfPerson: 2,
        deposit: 100,
        passport: 'PASS1343',
        dueAmount: 0,
        services: [
            {
                item: "Makalu - single - 10 Nights",
                cost: 300,
                qty: 10,
                total: 3000,
                date: new Date("10/10/2024")

            },
            {
                item: "American Breakfast",
                cost: 300,
                qty: 10,
                total: 3000,
                date: new Date("10/10/2024")

            },
            {
                item: "Annapurna Trecking",
                cost: 300,
                qty: 10,
                total: 3000,
                date: new Date("10/10/2024")

            }
        ],
        policies: [
            {
                policy: '. The hotel is not responsible for damage for your belonging inside the room.'
            },
            {
                policy: '. Any deposited your valuable objet in the hotel safety valut services available.'
            },
            {
                policy: '. Any extension of stay will be charged to guest based on either the flexible rate or any other packages offered by hotelprior.'
            },
            {
                policy: '. If any miss conduct or gone against the house rules you may get dismissed from the proverty .(Non refundable)'
            },
            {
                policy: '. Non refundable if you want to check out earlier that booking date.'
            },
            {
                policy: '. Please clear you bill on day before departure.'
            },
            {
                policy: '. Long- stay payment deposit amount will be refund 10%only.'
            },
        ]
    }

    return <RegistrationForm {...props} />
}

RegistrationForms.args = {
    HeaderInfo: {
        name: "HotelierPro",
        address: "Baniyar Old Bridge, Ganguba Khatmandu ,Nepa",
        number: "9805125899(Sudan) 98893972922(Sara)"
    },
    infoTablepolicy: [
        {
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
            value2: '....'
        },
    ],
    policyInfopolicy: [
        {
            policy: '. The hotel is not responsible for damage for your belonging inside the room.'
        },
        {
            policy: '. Any deposited your valuable objet in the hotel safety valut services available.'
        },
        {
            policy: '. Any extension of stay will be charged to guest based on either the flexible rate or any other packages offered by hotelprior.'
        },
        {
            policy: '. If any miss conduct or gone against the house rules you may get dismissed from the proverty .(Non refundable)'
        },
        {
            policy: '. Non refundable if you want to check out earlier that booking date.'
        },
        {
            policy: '. Please clear you bill on day before departure.'
        },
        {
            policy: '. Long- stay payment deposit amount will be refund 10%only.'
        },
    ],
    servicepolicy: [
        {
            date: "",
            type: "",
            qty: "",
            amount: "",
            total: "",
        },
        {
            date: "",
            type: "",
            qty: "",
            amount: "",
            total: "",
        },
        {
            date: "",
            type: "",
            qty: "",
            amount: "",
            total: "",
        },
        {
            date: "",
            type: "",
            qty: "",
            amount: "",
            total: "",
        },
        {
            date: "",
            type: "",
            qty: "",
            amount: "",
            total: "",
        },
        {
            date: "",
            type: "",
            qty: "",
            amount: "",
            total: "",
        },
    ]
}
