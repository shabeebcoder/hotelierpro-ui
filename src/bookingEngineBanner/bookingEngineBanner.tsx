import React from "react";
import { DatePicker, DatePickerProps } from "antd";
import "./styles.css";

function BookingEngineBanner(props: any) {
  const { handleSearchClick, onCheckinChange, onCheckoutChange } = props;

  return (
    <div className="main-container">
      <div className="imgContainer">
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1182"
          alt="hotel-img"
        />
      </div>
      <div className="bookingCalendarContainer">
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Bangalore"
        />
        {/* <div className="Checkin">Check In</div>
        <DatePicker/> */}
        <div className="calendar">
          <DatePicker
            onChange={onCheckinChange}
            placeholder="Check in"
            style={{
              width: "200px",
              height: "36px",
              fontSize: "14px",
              color: "#474747",
              fontFamily: "Inter",
              fontWeight: "500",
            }}
          />
          <DatePicker
            placeholder="Check out"
            onChange={onCheckoutChange}
            style={{
              width: "200px",
              height: "36px",
              fontSize: "14px",
              color: "#474747",
              fontFamily: "Inter",
              fontWeight: "500",
              marginLeft: "60px",
            }}
          />
        </div>

        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default BookingEngineBanner;
