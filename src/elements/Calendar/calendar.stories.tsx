import React from 'react'
import { Calendar } from "./calendar";
export default {
    title: 'elements-v2/Calendar'
}




export function CalendarDemo() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow max-w-xs"
    />
  )
}
