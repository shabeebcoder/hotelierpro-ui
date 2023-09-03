import React from "react";
import moment from "moment";

export default function () {
    const [dates, setDates] = React.useState([]);

    function renderDates(twoWeeksDates) {
        let daysArra = [];

        twoWeeksDates.forEach((row) => {
            daysArra.push(
                <div className="date-box">
                    {row.clone().format("ddd")} <br /> {row.clone().format("DD")}
                </div>
            );
        });
        setDates(daysArra);
    }

    const currentDate = moment();

    function getTwoweeks() {
        const startDay = currentDate.clone().startOf("month");
        let twoWekksDates = [];
        for (let i = 0; i <= 25; i++) {
            twoWekksDates.push(startDay.clone().add(i, "day"));
        }
        return twoWekksDates;
    }

    React.useEffect(() => {
        renderDates(getTwoweeks());
    }, []);
    return (
        <div className="category-total-capacity-row">
            <div className="blank"></div>
            <div className="room-capacity-box">
                <span> 11</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
            <div className="room-capacity-box">
                <span> 18</span>
            </div>
        </div>
    );
}
