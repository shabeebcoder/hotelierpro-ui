import React from 'react'
import "./styles.css";
import Header from "./header";
import InfoTable from './infoTable';
import PoliciesInfo from './policyInfo';
import ServicesTable from './services';



function RegistrationForm() {
    return (
        <div>
            <Header />
            <InfoTable />
            <PoliciesInfo />
            <ServicesTable />
        </div>
    )
}

export default RegistrationForm