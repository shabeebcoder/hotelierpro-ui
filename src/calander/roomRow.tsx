import React from "react";
import moment from "moment";
import BookedBar from "./bookedBar";


export default function () {
    const [dates, setDates] = React.useState([]);
    const currentDate = moment();



    function renderRoomRow(twoWeeksDates) {
        let daysArra = [];

        twoWeeksDates.forEach((row) => {
            daysArra.push(
                <div className="room-capacity-box" >
                    {row.isBooked ? <BookedBar name={''} /> : null}
                </div>
            );
        });
        setDates(daysArra);
    }
    function getTwoweeks() {
        const startDay = currentDate.clone().startOf("month");
        let twoWekksDates = [];
        for (let i = 0; i <= 25; i++) {
            twoWekksDates.push({
                date: startDay.clone().add(i, "day"),
                isBooked: startDay.clone().add(i, "day").isSame("2022-08-08", "day")
            });
        }

        return twoWekksDates;
    }

    React.useEffect(() => {
        renderRoomRow(getTwoweeks());
    }, []);

    return (
        <div className="room-row">
            <div className="room-name">
                <span>#101-R</span> <i className="fa-solid fa-ellipsis"></i>
            </div>
            {dates}
        </div>
    );
}
