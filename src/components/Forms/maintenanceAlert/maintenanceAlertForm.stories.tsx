import React from 'react';
import MaintenanceAlertForm from './maintenanceAlertForm';

export default {
    title: 'hotelierPro/Form/maintenance-alert-form',
};

export const maintenanceAlertFormExample = (args) => (
    <MaintenanceAlertForm {...args} />
);

maintenanceAlertFormExample.args = {
    onSubmitHandler: (data) => alert(JSON.stringify(data)),
};
