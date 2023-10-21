import React from "react";
import Loader from "./loader";


export default {
    title : 'elements/loader'
}


export const Loaders = (args) => <Loader {...args} />;

Loaders.args = {
    loading: true
}