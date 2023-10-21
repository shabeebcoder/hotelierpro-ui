
import React from "react"
import HotelierSelect from "./select"

export default {
    title: 'elements/select'
}


export const Primary = (args: any) => <HotelierSelect {...args} />

Primary.args = {
    label: "Payment by",
    placeholder: "Select",
    data:

        [
            { value: 'react', label: 'Person' },
            { value: 'ng', label: 'Company' }

        ]
}