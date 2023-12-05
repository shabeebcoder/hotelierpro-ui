import React from 'react'
import HotelInformations from "./hotel-informations";

export default {
    title: "hotelierpro/form/hotel-informations"
}


export const HotelInformationFormSample = () => {

    return <HotelInformations
        onsubmit={(data) => alert(JSON.stringify(data))}
        defaultValues={{}}
        id=""
    
    />
}