import React from "react";
import WebsitePlaceholder from "./websitePlaceholder";


export default {
    title: 'components/websitePlaceholder'
}


export const WebsitePlaceholders = (args) => <WebsitePlaceholder {...args} />

WebsitePlaceholders.args = {
    colorCodeBackground:'#EDEDED',
    colorCodeHeader:'#291380',
    colorCodecard:'#B9B9B9',
    colorCodecardInside:'#F8ACFF',
    colorCodecardTwo:'#539BDD'
}