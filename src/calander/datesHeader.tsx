import React from "react";
import moment from "moment";

export default function (props) {
    const { dates, currentDate } = props;

    return (
        <>
            <div className="row rooms">
                <div className="rooms-title">Rooms</div>
                <div className="column">
                    {/* <div className="selected-year-and-month">
                        {currentDate.clone().format("MMMM YYYY")}
                    </div> */}
                    <div className="selected-dates-range">


                        {dates.map((date) => (
                            <div className="date-box">
                                <div className="date-day-box">
                                    {date.clone().format("ddd")} <br /> {date.clone().format("DD")}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}
