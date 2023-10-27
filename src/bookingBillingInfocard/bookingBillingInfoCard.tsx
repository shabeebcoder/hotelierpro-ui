import React from "react";
import "./styles.css";

function BookingBillingInfoCard(props: any) {
  const { roomName, actualPrice, discountPrice, handleConfirmClick } = props;
  const priceAfterDiscount = actualPrice - discountPrice;
  return (
    <div className="mainContainer">
      <div>
        <span
          style={{
            fontSize: "14px",
            color: "#595959",
          }}
        >
          100% Secure booking
        </span>
      </div>

      <div className="bookingBillingContainer">
        <div className="info-container">
          <span
            style={{
              color: "#595959",
              fontSize: "16px",
            }}
          >
            Price Breakup
          </span>
          <div className="line">
            <hr />
          </div>
          <div className="roomname-price">
            <span
              className="roomname"
              style={{ fontSize: "14px", color: "#595959" }}
            >
              {roomName}
            </span>

            <span
              style={{ fontSize: "15px", marginRight: "40px" }}
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
              style={{ fontSize: "14px", marginRight: "40px" }}
              className="room-price"
            >
              -${discountPrice}
            </span>
          </div>
          <div className="line">
            <hr />
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
              style={{ fontSize: "15px", marginRight: "40px" }}
              className="room-price"
            >
              ${priceAfterDiscount}
            </span>
          </div>
          <div className="btn-confirm">
            <button onClick={handleConfirmClick}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingBillingInfoCard;
