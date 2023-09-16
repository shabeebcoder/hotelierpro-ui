import React from "react"
import RoomType from "./roomType"

export default {
    title: 'components/forms'
}

export const RoomTypeForm = (args) => <RoomType {...args} />

RoomTypeForm.args = {
    handleCancel: () => alert("Handle cancel"),
    handleOnFinish: (value) => alert(JSON.stringify(value)),
    title: 'Add Room Types',
    formName: 'formName'

}