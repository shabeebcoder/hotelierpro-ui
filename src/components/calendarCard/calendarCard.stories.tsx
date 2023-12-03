import React from 'react';
import CalendarCard from './calendarCard';

export default {
    title: 'hotelierPro/CalendarCard',
};

export const CalendarCardExample = (args) => <CalendarCard {...args} />;

CalendarCardExample.args = {
    name: 'Sebastian',
    bgColor: 'yellow-200',
    textColor: 'yellow-600',
    countColor: 'yellow-700',
    iconColor: 'yellow-500',
    height: '2rem',
    width: '10rem',
    userCount: '2',
    nightsCount: '3',
};
