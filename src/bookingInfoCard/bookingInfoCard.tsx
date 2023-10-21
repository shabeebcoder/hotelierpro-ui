import React from 'react';
import "./styles.css";

function BookingInfoCard(props) {
    return (
        <div className='card'>
            <ul className=''>
                {
                    props.bookingInfoData.map((row) => {
                        return (
                            <li className='list'>
                                <li className='list-label'>{row.label}</li>
                                <li className='list-label-one'>:</li>
                                <li className='list-value'>{row.value}</li>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button className='btn' onClick={props.handleNewBooking}>+ New Booking</button>
            </div>
        </div>
    )
}

export default BookingInfoCard