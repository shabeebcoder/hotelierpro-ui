import React, { useState } from "react";
import "./styles.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { VscStarFull } from "react-icons/vsc";
import { Button } from "../Buttons";

function RoomList(props: any) {
  const {
    roomName,
    handleBookNow,
    roomLeft,
    rating,
    reviewsCount,
    description,
    roomPrice,
    actualPrice,
    nightsCount,
    adultsCount,
  } = props;

  return (
    <div className="roomListContainer">
      <img
        src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
        alt="hotel-img"
      ></img>
      <div className="info-container">
        <div className="room-name">
          <div className="room-title-container">
            {/* <div className="room-title"> */}
            <span
              className="room-title"
              title={roomName.length > 15 ? roomName : null}
            >
              {roomName}
            </span>
            {/* </div> */}
          </div>
          <div className="room-left">
            <AiOutlineExclamationCircle
              style={{ width: "12px", height: "12px" }}
            />
            <span className="number">{roomLeft} Left</span>
          </div>
        </div>
        <div className="room-review">
          <VscStarFull className="icon-star" />
          <span className="rating">{rating}</span>
          <span className="divider">|</span>
          <span className="review">{reviewsCount} reviews</span>
        </div>
        <div className="room-desc">
          <span
            className="description"
            title={description.length > 15 ? description : null}
          >
            {description}
          </span>
        </div>
        <div className="room-price">
          <span className="price">${roomPrice}</span>
          <span className="perNight">/ Night</span>
          <span className="ogi-price">${actualPrice}</span>
        </div>
      </div>
      <div className="booking-container">
        <span className="person">
          {nightsCount} Night {adultsCount} Adults
        </span>
        <button onClick={handleBookNow} className="btn-booking">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

export default RoomList;
