import React from "react";
import "./styles.css";
import { Box, Divider } from "@mantine/core";
import { Card, Flex } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

const ReservationSummary = (props:any) => {
  const {checkinDay,
  checkindate,
  checkinMonth,
  checkinYear,
  checkinTime,
  stayLength,
  checkoutDay,
  checkoutdate,
  checkoutMonth,
  checkoutYear,
  checkoutTime,
  roomName,
  actualPrice,
  discountPrice,
  buttonName,
  SelectionChange,
  onBooknow} =props

  const price = actualPrice - discountPrice;
  return (
    <div className="reservationSummaryContainer">
      <span style={{ color: "#000", fontSize: "14px", marginBottom: "15px" }}>
        Reservation Summary
      </span>
      <div
        style={{
          borderRadius: "4px",
          width: "347px",
          height: "226px",
          color: "black",
          border: "1px solid #cacaca",
          display: "flex",
          flexDirection: "row",
          padding: "30px 15px 30px 25px",
        }}
      >
        <div className="checkin-container">
          <span
            style={{ fontSize: "12px", color: "#9a9a9a", marginTop: "7px" }}
          >
            CHECK IN
          </span>
          <span style={{ fontSize: "12px", color: "#000", marginTop: "25px" }}>
            {checkinDay}, {checkindate} {checkinMonth} {checkinYear}
          </span>
          <span
            style={{ fontSize: "12px", color: "#1e1e1e", marginTop: "5px" }}
          >
            from {checkinTime}
          </span>
          <span
            style={{ fontSize: "12px", color: "#9a9a9a", marginTop: "80px" }}
          >
            Total length of the stay
          </span>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#1e1e1e" }}>{stayLength} </span>
            <CalendarOutlined />
          </div>
        </div>
        <div className="vl"></div>
        <div className="checkout-container">
          <span
            style={{ fontSize: "12px", color: "#9a9a9a", marginTop: "7px" }}
          >
            CHECK OUT
          </span>
          <span style={{ fontSize: "12px", color: "#000", marginTop: "25px" }}>
            {checkoutDay}, {checkoutdate} {checkoutMonth} {checkoutYear}
          </span>
          <span
            style={{ fontSize: "12px", color: "#1e1e1e", marginTop: "5px" }}
          >
            to {checkoutTime}
          </span>
          <span
            style={{ fontSize: "12px", color: "#9a9a9a", marginTop: "80px" }}
          >
            You Selected:
          </span>
          <span style={{ fontSize: "12px", color: "#1e1e1e", marginTop: "5px" }}>{roomName} </span>
          <span style={{ fontSize: "12px", color: "#09596B" ,marginTop: "5px"}}>{SelectionChange} </span>
        </div>
      </div>
      <div className="price-container">
      <div className="info-container">
          <span
            style={{
              color: "#000",
              fontSize: "14px",
            }}
          >
          Your price summary
          </span>
          
          <div className="roomname-price">
            <span
              className="roomname"
              style={{ fontSize: "14px", color: "#595959" }}
            >
              {roomName}
            </span>

            <span
              style={{ fontSize: "15px", marginRight: "10px" }}
              className="room-price"
            >
              ${actualPrice}
            </span>
          </div>
          <div className="discount-price">
            <span style={{ fontSize: "12px", color: "#09596B" }}>
              Total Discount
            </span>
            <span
              style={{ fontSize: "14px", marginRight: "10px" }}
              className="room-price"
            >
              -${discountPrice}
            </span>
          </div>
          <div  className="line" >
            <hr/>
          </div>
          <div className="after-discount">
            <span
              style={{
                fontSize: "14px",
                color: "#1515151",
                fontWeight: "600",
                position: "relative",
              }}
            >
              Price after discount
            </span>
            <span
              style={{ fontSize: "15px", marginRight: "10px" }}
              className="room-price"
            >
              ${price}
            </span>
          </div>
          <div className="btn-confirm">
            <button onClick={onBooknow}>{buttonName}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;
