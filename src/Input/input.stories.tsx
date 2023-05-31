import React from "react";
import Input from "./input"
import SimpleInputs from "./simpleInput"

export default {
    title: "Input"
}




export const AutoComplete = (args) => <Input {...args} />
AutoComplete.args = {

}

export const SimpleInput = (args) => <SimpleInputs {...args} />
SimpleInput.args = {

}
