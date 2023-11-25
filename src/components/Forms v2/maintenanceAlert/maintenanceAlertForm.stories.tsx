import React from 'react';
import MaintenanceAlertForm from './maintenanceAlertForm';

export default {
    title: 'hotelierPro/Formv2/MaintenanceAlertForm',
};

export const maintenanceAlertFormExample = (args) => (
    <MaintenanceAlertForm {...args} />
);

maintenanceAlertFormExample.args = {
    onSubmitHandler: (data) => alert(JSON.stringify(data)),
};
