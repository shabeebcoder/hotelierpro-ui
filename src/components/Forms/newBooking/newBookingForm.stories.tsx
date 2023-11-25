import React from 'react';
import NewBookingForm from './newBookingForm';

export default { title: 'hotelierPro/Form/NewBookingForm' };

export const NewBookingFormExample = (args) => <NewBookingForm {...args} />;

NewBookingFormExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
    durationValues: ['1 day', '1 week', '1 month'],
    roomTypeValues: ['single', 'double'],
    statusValues: ['new booking', 'booking extension'],
};
