import React from "react";
import TestForm from "./testForm"

import Modals from "./modal";

export default {
    title: 'components/modal'
}


export const Primary = (args) => <Modals {...args} />

Primary.args = {
    Form: TestForm,
    title: 'Add new Service',
    size: 'lg'
}