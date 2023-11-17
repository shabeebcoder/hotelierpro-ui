import React from 'react';
import MaintenanceAlertForm from './maintenanceAlertForm';

export default {
    title: 'hotelierPro/Form/maintenance-alert-form',
};

export const MaintenanceAlertFormExample = (args) => (
    <MaintenanceAlertForm {...args} />
);

MaintenanceAlertForm.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
};
