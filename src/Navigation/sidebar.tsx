import React from "react";
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
    { icon: IconGauge, label: 'Dashboard' },
    { icon: IconGauge, label: 'Billing' },
    { icon: IconGauge, label: 'Report' },
    { icon: IconGauge, label: 'Alert' },
    { icon: IconGauge, label: 'Settings' },
];

export default function SideBar({ handleOnClick, index = 0 }) {
    const [active, setActive] = useState(index);



    const items = data.map((item, index) => (
        <NavLink
            key={item.label}
            active={index === active}
            label={item.label}
            icon={<item.icon size="1rem" stroke={1.5} />}
            onClick={() => handleOnClick({ item, index })}
        />
    ));

    return <Box w={220}>{items}</Box>;
}