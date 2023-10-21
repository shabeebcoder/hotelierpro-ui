import React from "react";
import DocumentsModal from "./documents-modal";

export default {
    title: "components/modal"
}


export const DocumentsUpload = (args) => <DocumentsModal {...args} />

DocumentsUpload.args = {
    onCancel: () => alert(),
    onUpload: () => alert(),

}