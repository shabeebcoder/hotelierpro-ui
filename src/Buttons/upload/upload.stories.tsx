import React from "react";
import UplaodButton from "./upload";

export default {
    title: 'elements/buttons'
}

export const Upload = (args) => <UplaodButton {...args} />

Upload.args = {
    title: 'Profile Photo',
    handleOnClick: () => alert()
}

