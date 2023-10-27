import React from 'react'
import './styles.css'

function BookingEngineHeader(props:any) {
  const {hotelFname, hotelLname, onLogoClick, onHotelClick, onAboutUsClick, onContactClick, handleSignIn} = props
  return (
    <div className='bookingEngineHeaderContainer'>
      <div className="hotel-name" onClick={onLogoClick}>
        <span>{hotelFname}</span>
        <span>{hotelLname}</span>
      </div>
      <div className="navbar-headers">
        <span className="heading" onClick={onHotelClick}>Hotels</span>
        <span className="heading" onClick={onAboutUsClick}>About us</span>
        <span className="heading" onClick={onContactClick}>Contact</span>
        <button className='btn-signin' onClick={handleSignIn}>Sign In</button>
      </div>
    </div>       
  )
}

export default BookingEngineHeader