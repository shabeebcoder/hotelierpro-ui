import React from 'react'
import ChangePassword from "./changePassword";

export default {
    title: "hotelierpro/form/change-password"
}

export const ChangePasswordExample = () => {

    return <ChangePassword
        onsubmit={() => alert()}
        defaultValues={{}}
        id="changepassword"
    />
}