import React from "react";
import { action } from "@storybook/addon-actions";

import BookingEngineBanner from './bookingEngineBanner'

export default {
    title: 'components/bookingEngineBanner'
}

export const BookingEngineBanners = (args)=> <BookingEngineBanner {...args}/>
    
     

BookingEngineBanners.args ={
    handleSearchClick: ()=> alert("Clicked Search button"),
    onCheckinChange: ()=> alert("Checkin date is selected"),
    onCheckoutChange: ()=> alert("Checkout date is selected"),
}