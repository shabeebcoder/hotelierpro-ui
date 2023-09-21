import React from "react";
import BookedBar from "./bookedBar";
import { DownOutlined } from "@ant-design/icons";


export default function (props) {
    const { roomCategory } = props;



    function hasBooking(bookings = [], date) {
        var i;
        for (i = 0; i < bookings.length; i++) {
            if (bookings[i].checkIn.isSame(date.date)) {
                return bookings[i];
            }
        }

        return false;
    }

    function renderRoomBox(date, bookings) {
        const isBooked = hasBooking(bookings, date);
        return (
            <div
                className="room-box"

            >
                {isBooked ? <BookedBar name={isBooked.name} /> : null}
            </div>
        );
    }

    return (
        <>
            <div className="room-category-capacity-container">
                {roomCategory.map(
                    ({ categoryName, roomTotalCapacity, roomCurrentCapacity, rooms }) => (
                        <div className="category">
                            {/* <div className="category-total-capacity-row">
                                <div className="blank"></div>
                                {roomTotalCapacity.map((totalCapacity) => (
                                    <div className="room-total-capacity-box">
                                        <span>{totalCapacity.availability}</span>
                                    </div>
                                ))}
                            </div> */}
                            {/* <div className="room-category-row">
                                <div className="room-category-name" ><b>{categoryName} <DownOutlined /></b></div>
                                {roomCurrentCapacity.map((currentCapcity) => (
                                    <div className="room-total-capacity-box">
                                        <span> 18</span>
                                    </div>
                                ))}
                            </div> */}
                            {rooms.map(({ availability, name, bookings }) => (
                                <div className="room-row">
                                    <div className="room-name">
                                        <span>{name}</span> <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    {availability.map((date) => renderRoomBox(date, bookings))}
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        </>
    );
}
