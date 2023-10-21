import React from "react";
import Files from "./files";


export default {
    title: 'Elements/files'
}

export const File = (args) => <Files {...args} />
File.args = {
    onClose: () => alert(),
    fileName: 'Passport.pdf',
    fileSize: '18.5 KB'
}