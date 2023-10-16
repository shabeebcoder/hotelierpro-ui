import React from 'react';
import "./styles.css";

function BookingInfoCard() {
    return (
        <div className='card'>
            <ul className='list'>
                <li className='list-label'>Booking ID</li>
                <li className='list-label-one'>:</li>
                <li className='list-value'>332244 (Sherin)</li>
            </ul>
            <div>
                <button className='btn'>+ New Booking</button>
            </div>
        </div>
    )
}

export default BookingInfoCard