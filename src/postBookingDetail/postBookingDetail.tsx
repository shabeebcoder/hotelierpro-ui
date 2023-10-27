import React from "react";
import "./styles.css";
import { TiTick } from "react-icons/ti";
import { CalendarOutlined } from "@ant-design/icons";
import { CheckSquareOutlined } from "@ant-design/icons";
import { Input } from "antd";

const PostBookingDetail = (props:any) => {
  const{guestName,
  Checkin,
  Checkout,
  Email,
  phoneNumber,
  bookingNum} =props
  return (
    <div className="postBookingDetailContainer"> 
      <div className="bookingContainer">
        <div className="checktick">
          <TiTick style={{ fontSize: "44px", color: "#07AB65" }} />
        </div>
        <span
          style={{ marginLeft: "15px", fontSize: "12px", color: "#000000" }}
        >
          Your booking is confirmed
        </span>
      </div>
      <div className="bookingdetailsContainer">
        <span style={{ fontSize: "14px", color: "#595959" }}>
          Booking Details
        </span>
        <div className="details-1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              color: "#595959",
              marginTop: "5px",
            }}
          >
            <label htmlFor="guestInput" style={{ marginBottom: "5px" }}>
              Guest
            </label>
            <Input
              id="guestInput"
              defaultValue={guestName}
              style={{ width: "200px", height: "36px" ,backgroundColor:'#ffffff', color:'#000' }}
              disabled
            />
          </div>
          <div style={{ display: "flex", marginTop: "25px" }}>
            <Input
              style={{ width: "200px", height: "36px", marginLeft: "15px",backgroundColor:'#ffffff',  }}
              placeholder={Checkin}
              disabled
            />
            <span style={{ position: "relative", left: "-30px", top: "7px" }}>
              <CalendarOutlined />
            </span>
          </div>
          <div style={{ display: "flex", marginTop: "25px" }}>
            <Input
              style={{ width: "200px", height: "36px",backgroundColor:'#ffffff',   }}
              placeholder={Checkout}
              disabled
            />
            <span style={{ position: "relative", left: "-30px", top: "7px" }}>
              <CalendarOutlined />
            </span>
          </div>
        </div>

        <div className="details-2">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              color: "#595959",
              marginTop: "5px",
            }}
          >
            <label htmlFor="Email  Address" style={{ marginBottom: "5px" }}>
            Email Address
            </label>
            <Input
              id="Email Address"
              defaultValue={Email}
              style={{ width: "200px", height: "36px", backgroundColor:'#ffffff', color:'#000'  }}
              disabled
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              color: "#595959",
              marginTop: "5px",
            }}
          >
            <label htmlFor="Phone Number" style={{ marginBottom: "5px" }}>
            Phone Number
            </label>
            <Input
              id="Phone Number"
              defaultValue={phoneNumber}
              style={{ width: "200px", height: "36px" ,backgroundColor:'#ffffff', color:'#000' }}
              disabled
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              color: "#595959",
              marginTop: "5px",
            }}
          >
            <label htmlFor="Booking Number" style={{ marginBottom: "5px" }}>
            Booking Number
            </label>
            <Input
              id="Booking Number"
              defaultValue={bookingNum}
              style={{ width: "200px", height: "36px", backgroundColor:'#ffffff', color:'#000' }}
              disabled
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostBookingDetail;
