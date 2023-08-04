import React from "react";

import Headline from "./typography";

export default {
    title: "Typo Graphy"
};

export const Headline1 = (args) => <Headline {...args} />
Headline1.args = {
    children: "This is a title",
    level: 1
}

export const Headline2 = (args) => <Headline {...args} />
Headline2.args = {
    children: "This is a title",
    level: 'five'
}

