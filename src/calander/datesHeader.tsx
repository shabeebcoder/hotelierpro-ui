import React from "react";
import moment from "moment";
import classNames from "classnames"

export default function (props) {
    const { dates, currentDate } = props;

    const isToday = (date) => {
        if (moment(date).diff(currentDate) == 0) {
            return true
        }
        return false
    }

    return (
        <>
            <div className="row rooms">
                <div className="rooms-title" >Rooms</div>
                <div className="column">
                    {/* <div className="selected-year-and-month">
                        {currentDate.clone().format("MMMM YYYY")}
                    </div> */}
                    <div className="selected-dates-range">


                        {dates.map((date) => (
                            <div className="date-box">
                                <div className={classNames({ "date-day-box": isToday(date), 'date-day-box-default': !isToday(date) })}>
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
