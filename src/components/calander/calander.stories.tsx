import React from 'react'
import Calander from "./calander"
import moment from 'moment';


export default {
    title: "hotelierpro/calander"
}


export const CalanderDemo = () => {


    const [data, setData] = React.useState(() => [{}, {}])



    const currentMonth = moment();

    // Create an array of dates for the current month
    var dates: any = ['Room Name'];
    const startOfMonth = currentMonth.clone().startOf('month');
    const endOfMonth = currentMonth.clone().endOf('month');
    let currentDate = startOfMonth.clone();

    while (currentDate.isSameOrBefore(endOfMonth, 'day')) {
        dates.push(currentDate.clone());
        currentDate.add(1, 'day');
    }




    return <Calander
        calanderColumns={dates}
        calanderRows={[{}, {}]}


    />
}

