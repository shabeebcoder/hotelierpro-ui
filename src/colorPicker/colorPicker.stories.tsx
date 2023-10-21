import React from "react";
import ColorPicker from "./colorPicker";

export default {
    title: "components/colorPicker"
}

export const ColorPickers = (args) => <ColorPicker {...args} />



ColorPickers.args = {
    title:'backgroundColor',
    colorCode:"#EDEDED"
}
