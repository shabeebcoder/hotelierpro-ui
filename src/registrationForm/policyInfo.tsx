import React from 'react'
import "./styles.css";

function PoliciesInfo(props) {
    return (
        <div className='policy-div'>
            <div>
                <h2 className='policy-text'>Terms & Conditions</h2>
            </div>
            <div>
                <ul className='policy-para'>
                    {
                        props.policyInfoData.map((value)=>{
                            return(
                                <li>{value.data}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <h5 className='policy-text-one'>Check by:</h5>
            <div className='signeture-div'></div>
            <h5 className='signeture-text'>Signature</h5>
        </div>
    )
}

export default PoliciesInfo