import React from "react";
import Divider from "./divider";


export default {
    title: "elements/Divider"
}


export const Horizontal = (args) =>
(<>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider {...args} />
</>
)
Horizontal.args = {
    dashed: false
}

export const Dashed = (args) =>
(<>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider {...args} />
</>
)
Horizontal.args = {
    dashed: true
}

export const TextCenter = (args) => <Divider {...args}> Hello world </Divider>
TextCenter.args = {
    dashed: true,
    orientation: 'left'
}
