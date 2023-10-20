import React from 'react'
import "./styles.css";


function ServicesTable(props) {
    return (
        <div>
            <div className='table-two-div'>
                <table className='table-two'>
                    <tr>
                        <th>DATE</th>
                        <th>TYPE</th>
                        <th>QY</th>
                        <th>AMOUNT</th>
                        <th>TOTAL</th>
                    </tr>
                    <tr>
                       {
                        props.serviceData?.map((value)=>{
                            return(
                                <td>{value.details}</td>
                            )
                        })
                       }
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ServicesTable