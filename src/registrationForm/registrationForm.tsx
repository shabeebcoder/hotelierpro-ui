import React from 'react'
import "./styles.css";
import Header from "./header";
import InfoTable from './infoTable';
import PoliciesInfo from './policyInfo';
import ServicesTable from './services';



function RegistrationForm(props) {
    return (
        <div className='registrationFormContainer'>
            <Header {...props}/>
            <div className='internalContiner'>
                <InfoTable {...props}/>
                <PoliciesInfo {...props}/>
                <ServicesTable {...props}/>
            </div>
        </div>
    )
}

export default RegistrationForm