import React from 'react';
import AddServicesForm from './regional';

export default {
    title: 'hotelierPro/Form/regional',
};

export const addServiceCategoryFormExample = (args) => <AddServicesForm {...args} />;

addServiceCategoryFormExample.args = {
    onsubmit: (data) => alert(JSON.stringify(data)),
    currency: [],
    currencyPostion: [
        {
            value: "left",
            label: "Left",

        },
        {
            value: "right",
            label: "Right"
        }
    ],
    invoiceLanguage: [
        {
            value: "english",
            label: "English"
        }
    ],
    language: [
        {
            value: "english",
            label: "English"
        }
    ],
    timeZone: [

        {
            value: "canada",
            label: "Canada"
        }

    ],
    dataFormat: [
        {
            value: "MM/DD/YYYY",
            label: "MM/DD/YYYY"
        },
        {
            value: "DD/MM/YYYY",
            label: "DD/MM/YYYY"
        },
        {
            value: "MM.DD.YYYY",
            label: "MM.DD.YYYY"
        },
        {
            value: "DD.MM.YYYY",
            label: "DD.MM.YYYY"
        }
    ],
    weekStartsOn: [
        {
            value: "monday",
            label: "Monday"
        },
        {
            value: "tuesday",
            label: "Tuesday"
        },
        {
            value: "wednesday",
            label: "Wednesday"
        },
        {
            value: "thursday",
            label: "Thursday"
        },
        {
            value: "firday",
            label: "Firday"
        },
        {
            value: "saturday",
            label: "Saturday"
        },
        {
            value: "sunday",
            label: "Sunday"
        }
    ],
   

};
