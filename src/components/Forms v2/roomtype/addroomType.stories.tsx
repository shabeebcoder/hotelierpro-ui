import React from 'react'

import AddRoomType from "./addroomType";


export default {
    title : "hotelierPro/Formv2/addRoomType"
}



export const AddRoomTypeExample = (args) => <AddRoomType {...args} />

AddRoomTypeExample.args = {
    onsubmit : (data)=> alert(JSON.stringify(data))
    
}