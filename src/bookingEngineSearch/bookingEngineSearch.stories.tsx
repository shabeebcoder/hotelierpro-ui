import React from "./bookingEngineSearch";

import BookingEngineSearch from './bookingEngineSearch';
import  action  from "@storybook/addon-actions"; 



export default {
    title : 'components/bookingEngineSearch'
}


export const BookingEngineSearches = (args) => <BookingEngineSearch {...args} 
   
/>

BookingEngineSearches.args={
    roomnames: ["Room 1 Single", "Room 2 Single", "Room 1 double", "Room 2 double"],
    onCheckboxChange:()=>alert("Checkbox clicked"),
    onPriceChange: ()=>alert("Slider value changed"),
    minPrice: 0,
    maxPrice: 200,
}