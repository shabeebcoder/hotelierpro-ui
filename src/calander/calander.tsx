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
    roomTypeList: any[],
    bookingData: any[]
}

interface iRoomType {
    id: any;
    name: string;
    maxPersons: any;

}

interface IBooking {
    id: any,
    status: string;
    numberOfPersons: string;
    adults: number;
    child: number;
    checkInDate: any;
    checkOutDate: any;
    nights: string | number;
    price: any;
    roomType: iRoomType;
    guest: any
    room: any


}

interface ICalanderData {
    roomCategory: any[],
    currentDate: any;
    dates: any[]
}
interface IRoomCategory {
    categoryName: string,
    roomTotalCapacity: any,
    roomCurrentCapacity?: any,
    rooms: any
}

export default function Calander(props: Prop) {
    const { currentDates, handleNewBookingButton } = props;
    const { roomList, roomTypeList, bookingData } = props;

    const [currentDate, setCurrentDate] = React.useState(moment(currentDates));

    const handleWeeklyMonthly = (value) => {
        alert(JSON.stringify(value))
    }

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
        for (let i = 0; i <= 30; i++) {
            twoWekksDates.push(startDateOfmonth.clone().add(i, "day"));
        }

        console.log("twoWekksDates ===>", twoWekksDates)
        return twoWekksDates;
    }




    function getCalendarData(): ICalanderData {

        const payload: IRoomCategory[] = roomTypeList.map((category) => {
            return {
                categoryName: category.name,
                roomTotalCapacity: [],
                rooms: roomList.map((room) => {
                    // if (category.id == room.roomType.id) {
                    console.log("x=> room typ", room.roomType.id)
                    console.log("x=>cat", category.id)
                    return {
                        id: room.id,
                        name: room.roomName,
                        availability: [
                            ...getTwoWeeksDate().map((date) => {
                                return { date: moment(date), availability: 18 };
                            })
                        ],
                        bookings: bookingData && bookingData.map((book: IBooking) => {
                            console.log("book==>", book);

                            const newDate = moment(book.checkInDate).format('MM/DD/YYYY');
                            return {
                                name: book?.guest?.fullName || '',
                                checkIn: moment(newDate),
                                checkOut: moment(book?.checkOutDate),
                                roomId: book?.room?.id,
                                bookingId: book.id

                            }
                        })
                    }


                })
            }
        })



        return {
            // years: getYears(),
            // months: getMonths(),
            dates: getTwoWeeksDate(),
            currentDate: currentDate,
            roomCategory: payload
        };
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
                    <Header handleWeeklyMonthly={handleWeeklyMonthly} handleNewBookingButton={handleNewBookingButton} />

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
