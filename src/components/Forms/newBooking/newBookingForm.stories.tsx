import React from 'react';
import NewBookingForm from './newBookingForm';
import { Button } from '../../../elements/Buttons/buttons';
import { PlusCircledIcon } from '@radix-ui/react-icons';

export default { title: 'hotelierPro/Form/NewBookingForm' };

export const NewBookingFormExample = (args) => <NewBookingForm {...args} />;

NewBookingFormExample.args = {
    onSubmit: (data) => {
        alert(JSON.stringify(data))
        console.log("form", data)
    },

    roomTypes: [
        {
            value: "single",
            label: "Single"
        },
        {
            value: "double",
            label: "Double"
        }
    ],
    status: [
        {
            value: "booked",
            label: "Booked"
        },
        {
            value: "checkin",
            label: "Checkin"
        }
    ],
    guestList: [
        {
            name: "shabeeb ck",
            email: "shabeebcoder@gmail.com",
            id: "4335345345",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        }
        ,
        {
            name: "Bonnie Green",
            email: "email@flowbite.com",
            id: "4335ds345345",
            avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
        }
    ],
    NewGuest: () => <Button variant="outline">
        <PlusCircledIcon className="mr-2 h-4 w-4" />

        New Guest</Button>,
    onSelect: (data) => alert(JSON.stringify(data))
};
