import React from "react";
import FormCards from "./FormCard";


export default {
    title: 'elements/FormCard'
}


export const Primary = (args) => <FormCards {...args} />

Primary.args = {
    title: 'Add Room Type',
    onFinish: () => alert(),
    handleCancel: () => alert(),
    formName: "formName"

}