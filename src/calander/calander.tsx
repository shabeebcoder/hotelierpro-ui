import React from "react";
import "./styles.css";
import moment from "moment";
import YearHeader from "./yearheader";
import MonthsHeader from "./monthsHeader";
import DatesHeader from "./datesHeader";
import CategoryCapacityHeader from "./categoryCapacity";
import BookedInfoBar from "./bookedBar";
import RoomRow from "./roomRow";
import Rooms from "./rooms";
import { Button } from "antd";
import Header from "./header"

interface Prop {
    currentDates: string;
    handleNewBookingButton: any;
    roomList: any[],
    roomTypeList: any[]
}

export default function Calander(props: Prop) {
    const { currentDates, handleNewBookingButton } = props;
    const { roomList, roomTypeList, bookingData } = props;

    const [currentDate, setCurrentDate] = React.useState(moment(currentDates));

    function getYears() {
        var startYear = currentDate.clone().subtract(6, "year");
        var thirteenYearsArray = [];
        for (let i = 0; i <= 13; i++) {
            thirteenYearsArray.push(startYear.clone().add(i, "year"));
        }
        return thirteenYearsArray;
    }

    function getMonths() {
        return moment.months();
    }

    function getTwoWeeksDate() {
        const startDateOfmonth = currentDate.clone().startOf("month");
        let twoWekksDates = [];
        for (let i = 0; i <= 25; i++) {
            twoWekksDates.push(startDateOfmonth.clone().add(i, "day"));
        }

        console.log("twoWekksDates ===>", twoWekksDates)
        return twoWekksDates;
    }




    function getCalendarData() {

        const payload = roomTypeList.map((category) => {
            return {
                categoryName: category.name,
                roomTotalCapacity: [],
                rooms: roomList.map((room) => {
                    // if (category.id == room.roomType.id) {
                    console.log("x=> room typ", room.roomType.id)
                    console.log("x=>cat", category.id)
                    return {

                        name: room.roomName,
                        availability: [
                            ...getTwoWeeksDate().map((date) => {
                                return { date: moment(date), availability: 18 };
                            })
                        ],
                        bookings: bookingData && bookingData.map((book) => {
                            const newDate = moment(book.checkInDate).format('MM/DD/YYYY');
                            return {
                                name: book?.guest?.fullName || '',
                                checkIn: moment(newDate),
                                checkOut: moment(book?.checkOutDate)
                            }

                        })
                        //     [
                        //     {
                        //         name: "shabeeb",
                        //         checkIn: moment("2023-09-10"),
                        //         checkOut: moment("2022-09-14")
                        //     }
                        // ]

                    }
                    // }
                    // return

                })
            }
        })

        const data = {
            years: getYears(),
            months: getMonths(),
            dates: getTwoWeeksDate(),
            currentDate,
            roomCategory: payload
        };

        return data;
    }

    return (
        <>
            {/* <input
                type="date"
                onChange={(e) => setCurrentDate(moment(e.target.value))}
            /> */}
            <div className="App">
                {/* <pre>{JSON.stringify(getCalendarData(), null, 2)}</pre> */}

                <div className="front-desk-page-container">
                    {/* <YearHeader {...getCalendarData()} /> */}
                    <Header handleNewBookingButton={handleNewBookingButton} />

                    {/* <MonthsHeader {...getCalendarData()} /> */}
                    <div className="calendar-dates-capacity-room-container">

                        <DatesHeader {...getCalendarData()} />
                        {/* Start Rooms */}
                        <Rooms {...getCalendarData()} />

                        {/* End Rooms */}
                    </div>
                </div>
            </div>
        </>
    );
}
