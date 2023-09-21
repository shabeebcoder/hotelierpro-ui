import React from "react";
import { useState } from 'react';
import { IconGauge, IconFingerprint, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';
import "./styles.css";


const DashboardIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9ZM22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9ZM10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1ZM10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z" stroke="#4D6969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}

const BillingIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8.67212 14.33C8.67212 15.62 9.66212 16.66 10.8921 16.66H13.4021C14.4721 16.66 15.3421 15.75 15.3421 14.63C15.3421 13.41 14.8121 12.98 14.0221 12.7L9.99212 11.3C9.20212 11.02 8.67212 10.59 8.67212 9.37C8.67212 8.25 9.54212 7.34 10.6121 7.34H13.1221C14.3521 7.34 15.3421 8.38 15.3421 9.67M12.0001 6V18" stroke="#4D6969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#4D6969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}

const ReportIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.75 9H8.25M15.75 15H8.25M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#4D6969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}

const AlterIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12.0201 2.90991C8.71009 2.90991 6.02009 5.59991 6.02009 8.90991V11.7999C6.02009 12.4099 5.76009 13.3399 5.45009 13.8599L4.30009 15.7699C3.59009 16.9499 4.08009 18.2599 5.38009 18.6999C9.69009 20.1399 14.3401 20.1399 18.6501 18.6999C19.8601 18.2999 20.3901 16.8699 19.7301 15.7699L18.5801 13.8599C18.2801 13.3399 18.0201 12.4099 18.0201 11.7999V8.90991C18.0201 5.60991 15.3201 2.90991 12.0201 2.90991Z" stroke="#4D6969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
        <path d="M13.8699 3.19994C12.6606 2.85553 11.3792 2.85553 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="#4D6969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.33818 20.6174 9.02181 19.8552 9.02002 19.0601" stroke="#4D6969" stroke-width="1.5" stroke-miterlimit="10" />
    </svg>
}

const SettingsIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15Z" stroke="#4D6969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.8041 19.9689 5.48558 19.5553 5.35435 19.0697C5.22311 18.5841 5.28988 18.0663 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="#4D6969" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}

const BrandIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
        <path d="M5.0752 0.996875C5.0752 0.445478 5.45993 0 5.93613 0H17.9893C18.4655 0 18.8502 0.445478 18.8502 0.996875C18.8502 1.54827 18.4655 1.99375 17.9893 1.99375V13.9563C18.4655 13.9563 18.8502 14.4017 18.8502 14.9531C18.8502 15.5045 18.4655 15.95 17.9893 15.95H13.2541V14.4547C13.2541 13.6292 12.6757 12.9594 11.9627 12.9594C11.2497 12.9594 10.6713 13.6292 10.6713 14.4547V15.95H5.93613C5.45993 15.95 5.0752 15.5045 5.0752 14.9531C5.0752 14.4017 5.45993 13.9563 5.93613 13.9563V1.99375C5.45993 1.99375 5.0752 1.54827 5.0752 0.996875ZM7.65801 3.48906V4.48594C7.65801 4.76008 7.85172 4.98438 8.08848 4.98438H8.94941C9.18617 4.98438 9.37988 4.76008 9.37988 4.48594V3.48906C9.37988 3.21492 9.18617 2.99063 8.94941 2.99063H8.08848C7.85172 2.99063 7.65801 3.21492 7.65801 3.48906ZM11.5322 2.99063C11.2955 2.99063 11.1018 3.21492 11.1018 3.48906V4.48594C11.1018 4.76008 11.2955 4.98438 11.5322 4.98438H12.3932C12.6299 4.98438 12.8236 4.76008 12.8236 4.48594V3.48906C12.8236 3.21492 12.6299 2.99063 12.3932 2.99063H11.5322ZM14.5455 3.48906V4.48594C14.5455 4.76008 14.7392 4.98438 14.976 4.98438H15.8369C16.0737 4.98438 16.2674 4.76008 16.2674 4.48594V3.48906C16.2674 3.21492 16.0737 2.99063 15.8369 2.99063H14.976C14.7392 2.99063 14.5455 3.21492 14.5455 3.48906ZM8.08848 5.98125C7.85172 5.98125 7.65801 6.20555 7.65801 6.47969V7.47656C7.65801 7.7507 7.85172 7.975 8.08848 7.975H8.94941C9.18617 7.975 9.37988 7.7507 9.37988 7.47656V6.47969C9.37988 6.20555 9.18617 5.98125 8.94941 5.98125H8.08848ZM11.1018 6.47969V7.47656C11.1018 7.7507 11.2955 7.975 11.5322 7.975H12.3932C12.6299 7.975 12.8236 7.7507 12.8236 7.47656V6.47969C12.8236 6.20555 12.6299 5.98125 12.3932 5.98125H11.5322C11.2955 5.98125 11.1018 6.20555 11.1018 6.47969ZM14.976 5.98125C14.7392 5.98125 14.5455 6.20555 14.5455 6.47969V7.47656C14.5455 7.7507 14.7392 7.975 14.976 7.975H15.8369C16.0737 7.975 16.2674 7.7507 16.2674 7.47656V6.47969C16.2674 6.20555 16.0737 5.98125 15.8369 5.98125H14.976ZM13.8998 11.9625C14.2576 11.9625 14.5536 11.6229 14.4648 11.2211C14.1796 9.92825 13.168 8.97188 11.9627 8.97188C10.7574 8.97188 9.74309 9.92825 9.4606 11.2211C9.37181 11.6198 9.67045 11.9625 10.0256 11.9625H13.8998Z" fill="#3A7C7C" />
        <path d="M20.4243 1.44998C19.5819 1.45366 18.8013 1.6282 18.4207 1.74983C18.4207 1.74983 21.8731 2.34801 22.1603 4.78136C19.5369 0.919408 16.6753 5.59005 16.6753 5.59005C17.2719 5.43025 18.9803 4.95594 20.1211 5.15603C20.9017 5.29293 21.6625 6.01543 21.6297 6.00632C19.7696 6.47358 16.8145 14.9259 17.3163 15.6123C17.7637 16.1372 18.2116 15.9582 18.6591 15.6919C18.8806 13.9006 20.6092 6.04121 22.7243 6.67566C22.7246 6.67575 22.7249 6.67557 22.7252 6.67566C22.9033 6.7379 23.0718 6.84705 23.0809 7.01384C23.0983 7.33157 22.8974 7.85085 22.9449 8.21151C23.0548 9.0484 23.2154 9.33948 23.4488 9.63146C24.0062 9.31152 24.5396 8.15803 24.6499 7.55995C25.1494 7.78328 25.9524 8.30054 26.6075 10.2216C26.9499 8.4214 26.456 7.00142 24.8348 6.3709C25.5369 6.06108 28.5927 7.62887 28.9657 8.50268C29.3286 6.92704 26.7617 4.99896 24.6246 5.10142C25.0343 4.99227 25.4846 5.11982 25.9131 4.79768C26.488 4.36543 27.1585 3.99316 27.7833 3.59329C25.6821 2.66016 23.743 3.12091 23.6065 4.08676C23.4992 1.94314 21.8699 1.44375 20.4243 1.45001L20.4243 1.44998Z" fill="#3A7C7C" />
        <path d="M4.54014 7.97487C4.98611 7.97689 5.39935 8.07289 5.60084 8.13979C5.60084 8.13979 3.7731 8.46878 3.62106 9.80713C5.00995 7.68305 6.5249 10.2519 6.5249 10.2519C6.20904 10.164 5.30459 9.90315 4.70063 10.0132C4.28741 10.0885 3.88459 10.4859 3.90199 10.4809C4.88674 10.7378 6.4512 15.3866 6.18555 15.7642C5.94867 16.0529 5.71154 15.9544 5.47463 15.8079C5.35737 14.8227 4.44226 10.5 3.32246 10.849C3.3223 10.849 3.32214 10.8489 3.32199 10.849C3.22771 10.8832 3.13853 10.9433 3.13369 11.035C3.12447 11.2097 3.23083 11.4953 3.20571 11.6937C3.14749 12.154 3.06252 12.3141 2.93894 12.4747C2.64382 12.2987 2.36144 11.6643 2.30303 11.3354C2.03859 11.4582 1.6135 11.7427 1.2667 12.7993C1.0854 11.8092 1.34686 11.0282 2.20515 10.6814C1.83346 10.511 0.215664 11.3733 0.0181975 11.8539C-0.173928 10.9873 1.18503 9.92681 2.31643 9.98316C2.09952 9.92313 1.86115 9.99328 1.63432 9.8161C1.32994 9.57837 0.974975 9.37362 0.644206 9.15369C1.75661 8.64047 2.78318 8.89388 2.85546 9.4251C2.91227 8.24611 3.77483 7.97145 4.54016 7.97489L4.54014 7.97487Z" fill="#3A7C7C" />
    </svg>
}

const Divider = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="200" height="2" viewBox="0 0 156 2" fill="none">
        <path d="M0 1L156 0.999986" stroke="#DCDCDC" />
    </svg>
}


const data = [
    { icon: DashboardIcon, label: 'Dashboard' },
    { icon: BillingIcon, label: 'Billing' },
    { icon: ReportIcon, label: 'Report' },
    { icon: AlterIcon, label: 'Alert' },
    { icon: SettingsIcon, label: 'Settings' },
];

export default function SideBar({ handleOnClick, index = 0 }) {
    const [active, setActive] = useState(index);



    const items = data.map((item, index) => (
        <NavLink

            key={item.label}
            active={index === active}
            label={item.label}
            icon={<item.icon />}
            onClick={() => { setActive(index), handleOnClick({ item, index }) }}
        />
    ));

    return <Box className="sideNavigation" w={220}>
        <div className="brand">
            <BrandIcon />
            <h1>Hotelier</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Divider />
        </div>
        {items}</Box>;
}