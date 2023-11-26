import React from 'react'
import Confirmation from "./alert"

export default {
    title: "hotelierpro/Confirmation"
}


export const AlertExample = () => <Confirmation
    description="  This action cannot be undone. This will permanently delete your
account and remove your data from our servers."
    title="Are you absolutely sure?"
    onCancel={() => alert()}
    onConfirm={() => alert()}
    continueBtn="delete"
    children=''
    // open={true}
/>
   
