import React from 'react'
import MyProfile from "./my-profile";

export default {
    title: "hotelierpro/form/my-profile"
}


export const MyProfileExample = () => {

    return <MyProfile
        onsubmit={() => alert()}
        defaultValues={{}}
        id="fds"
    />
}