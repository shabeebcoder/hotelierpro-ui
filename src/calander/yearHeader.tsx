import React from "react";
import className from "classnames";

export default function (props) {
    const { years, currentDate } = props;

    return (
        <>
            <div className="calendar-year-section">
                <button className="prev">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <ul>
                    {years.map((year) => (
                        <li
                            className={className({
                                active: year.isSame(currentDate, "year")
                            })}
                        >
                            {year.format("YYYY")}
                        </li>
                    ))}
                </ul>
                <button className="next">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    );
}
