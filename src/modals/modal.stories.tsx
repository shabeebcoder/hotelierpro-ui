import React from "react";
import TestForm from "./testForm"

import Modals from "./modal";

export default {
    title: 'components/modal'
}


export const NewService = (args) => <Modals {...args} />
export const AddNewGuest = (args) => <Modals {...args} />
export const AddCategory = (args) => <Modals {...args} />
export const AddRoomType = (args) => <Modals {...args} />
export const AddRooms = (args) => <Modals {...args} />

AddRooms.args = {
    title: 'Add Rooms',
    buttonTitle: 'Add new room',
    formName: 'addRooms'

}
AddRoomType.args = {
    title: 'Add Room Type',
    buttonTitle: 'Add Room Type',
    formName: 'addRoomType'
}
AddCategory.args = {
    title: 'Add Service Category',
    buttonTitle: 'Add Category',
    formName: 'addServiceCategory'

}
AddNewGuest.args = {
    title: 'Add New Guest',
    buttonTitle: 'Add New Guest',
    formName: 'addNewGuest'

}
NewService.args = {
    Form: TestForm,
    title: 'Add new Services',
    size: 'lg',
    type: 'addCategory',
    handleSubmit: () => alert(JSON.stringify('da')),
    buttonTitle: 'Add new room',
    formName: 'addNewService'
}

