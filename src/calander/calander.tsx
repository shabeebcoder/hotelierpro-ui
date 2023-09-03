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

export default function App() {
    const [currentDate, setCurrentDate] = React.useState(moment("2022-08-6"));

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
        const data = {
            years: getYears(),
            months: getMonths(),
            dates: getTwoWeeksDate(),
            currentDate,
            roomCategory: [
                {
                    categoryName: "Delux Rooms",
                    roomTotalCapacity: [
                        ...getTwoWeeksDate().map((date) => {
                            return { date: moment(date), availability: 18 };
                        })
                    ],
                    roomCurrentCapacity: [
                        ...getTwoWeeksDate().map((date) => {
                            return { date: moment(date), availability: 18 };
                        })
                    ],
                    rooms: [
                        {
                            name: "delux 101",
                            availability: [
                                ...getTwoWeeksDate().map((date) => {
                                    return { date: moment(date), availability: 18 };
                                })
                            ],
                            bookings: [
                                {
                                    name: "shabeeb",
                                    checkIn: moment("2022-8-8"),
                                    checkOut: moment("2022-8-8")
                                }
                            ]
                        },
                        {
                            name: "delux 102",
                            availability: [
                                ...getTwoWeeksDate().map((date) => {
                                    return { date, availability: 18 };
                                })
                            ],
                            bookings: [
                                {
                                    name: "Navas",
                                    checkIn: moment("2022-8-6"),
                                    checkOut: moment("2022-8-8")
                                }
                            ]
                        },
                        {
                            name: "delux 103",
                            availability: [
                                ...getTwoWeeksDate().map((date) => {
                                    return { date: moment(date), availability: 18 };
                                })
                            ],
                            bookings: [
                                {
                                    name: "Mohammed",
                                    checkIn: moment("2022-8-2"),
                                    checkOut: moment("2022-8-8")
                                }
                            ]
                        }
                    ]
                },
                {
                    categoryName: "Double",
                    roomTotalCapacity: [
                        ...getTwoWeeksDate().map((date) => {
                            return { date: moment(date), availability: 18 };
                        })
                    ],
                    roomCurrentCapacity: [
                        ...getTwoWeeksDate().map((date) => {
                            return { date: moment(date), availability: 18 };
                        })
                    ],
                    rooms: [
                        {
                            name: "Double 101",
                            availability: [
                                ...getTwoWeeksDate().map((date) => {
                                    return { date: moment(date), availability: 18 };
                                })
                            ],
                            bookings: []
                        },
                        {
                            name: "Double 102",
                            availability: [
                                ...getTwoWeeksDate().map((date) => {
                                    return { date: moment(date), availability: 18 };
                                })
                            ]
                        },
                        {
                            name: "Double 103",
                            availability: [
                                ...getTwoWeeksDate().map((date) => {
                                    return { date: moment(date), availability: 18 };
                                })
                            ],
                            bookings: []
                        }
                    ]
                }
            ]
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
