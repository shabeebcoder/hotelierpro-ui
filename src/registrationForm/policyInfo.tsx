import React from 'react'
import "./styles.css";

function PoliciesInfo() {
    return (
        <div>
            <div>
                <h2 className='policy-text'>Terms & Conditions</h2>
            </div>
            <div>
                <p className='policy-para'>
                    · The hotel is not responsible for damage for your belonging inside the room. <br />
                    · Any deposited your valuable objet in the hotel safety valut services available. <br />
                    · Any extension of stay will be charged to guest based on either the flexible rate or any other packages offered by hotelprior. <br />
                    · If any miss conduct or gone against the house rules you may get dismissed from the proverty .(Non refundable) <br />
                    · Non refundable if you want to check out earlier that booking date. <br />
                    · Please clear you bill on day before departure. <br />
                    · Long- stay payment deposit amount will be refund 10%only</p>
            </div>
            <div className='policy-ending'>
                <h5 >Check by:</h5>
                <h5>Signeture</h5>
            </div>
        </div>
    )
}

export default PoliciesInfo