import React from "react";

import Buttons from "./Button";
import HPButtons from "./Buttonhp"

export default {
    title: "elements/Buttons",
    argTypes: { onClick: { action: 'clicked' } },

};

export const Primary = (args) => <Buttons {...args} />
Primary.args = {
    children: "Primary Button",
    type: 'default',
    disabled: false,

    onClick: () => console.log("ds")
}
export const Default = (args) => <Buttons {...args} />

Default.args = {
    children: "Primary Button",
    type: 'default',
    style: { backgroundColor: '#3A7C7C', color: 'white' }

}



export const Dashed = (args) => <Buttons {...args} />
Dashed.args = {
    children: "Dashed Button",
    type: 'dashed'
}
export const Text = (args) => <Buttons {...args} />
Text.args = {
    children: "Text Button",
    type: 'text'
}
export const Link = (args) => <Buttons {...args} />
Link.args = {
    children: "Link Button",
    type: 'link'
}
export const HPprimary = (args) => <Buttons {...args} />
HPprimary.args = {
    children: "HPprimary Button",
    type: 'hPprimary'
}

// export const Buttonhp = (args) => <HPButtons {...args} />

// Buttonhp.args
