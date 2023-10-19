import React from 'react'
import "./styles.css";
import Header from "./header";
import InfoTable from './infoTable';
import PoliciesInfo from './policyInfo';
import ServicesTable from './services';



function RegistrationForm(props) {
    return (
        <div className='registrationFormContainer'>
            <Header />
            <InfoTable {...props}/>
            <PoliciesInfo {...props}/>
            <ServicesTable />
        </div>
    )
}

export default RegistrationForm