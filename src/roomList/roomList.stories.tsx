import React from "react";
import RoomList from "./roomList";


export default {
    title: "components/RoomList" 
}


export const RoomLists = (args) => <RoomList {...args} />;

RoomLists.args = {
    roomName: 'Single 1 Single',
    handleBookNow: () => alert("clicked book now"),
    roomLeft: 3,
    rating: 4.8,
    reviewsCount: 17,
    description: 'One Single bed',
    roomPrice: 214,
    actualPrice: 313,
    nightsCount: 1,
    adultsCount: 2,
}