import React from 'react'
import AddUser from "./addUser";

export default {
    title: "hotelierpro/form/add-user"
}


export const AddUserExample = () => {

    return <AddUser
        defaultValues={{}}
        id="adduser"
        onsubmit={() => alert("")}
        roles={[
            {
                value: "admin",
                label: "Admin"
            },
            {
                value: "staff",
                label: "Staff"
            }
        ]}
    />
}