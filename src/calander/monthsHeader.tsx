import React from "react";
import moment from "moment";
import className from "classnames";

export default function (props) {
    const { months, currentDate } = props;

    return (
        <div className="calendar-month-section">
            <button className="prev">
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            <ul>
                {months.map((month) => (
                    <li
                        className={className({
                            active: month === currentDate.clone().format("MMMM")
                        })}
                    >
                        {month}
                    </li>
                ))}
            </ul>

            <button className="next">
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
}
