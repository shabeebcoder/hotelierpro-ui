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
                    
                       {
                        props.serviceData?.map((value)=>{
                            return(
                                <tr>
                                <td>{value.date}</td>
                                <td>{value.type}</td>
                                <td>{value.qty}</td>
                                <td>{value.amount}</td>
                                <td>{value.total}</td>
                                </tr>
                            )
                        })
                       }
                    
                </table>
            </div>
        </div>
    )
}

export default ServicesTable