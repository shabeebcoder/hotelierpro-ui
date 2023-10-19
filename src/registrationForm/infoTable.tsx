import React from 'react'
import "./styles.css";


function InfoTable(props) {
    return (
        <div className='table-main-div'>
            <div className='table-user-data-head-div'>
                <div className='table-user-data-head'>
                    <h1>Registration form</h1>
                </div>
            </div>
            <div className='table-user-data-div'>
            <table className='table-user-data'>
                <tr>
                    <td>Arrival  Date :</td>
                    <td></td>
                    <td>Departure Data :</td>
                </tr>
                <tr>
                    <td>Room Amount :</td>
                    <td>Deposit  Amount :</td>
                    <td>Due Amount :</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default InfoTable