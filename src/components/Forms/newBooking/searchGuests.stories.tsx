import React from 'react'
import SearchGuest from "./searchGuests";
import { Button } from '../../../elements/Buttons/buttons';

export default {
    title: "hotelierpro/searchuser"
}


export const searchUserExample = () => {


    return <SearchGuest 
    children={<Button>add</Button>} />
}