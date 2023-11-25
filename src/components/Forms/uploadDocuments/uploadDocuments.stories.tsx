import React from 'react';
import UploadDocuments from './uploadDocuments';

export default {
    title: 'hotelierPro/Form/UploadDocuments',
};

export const uploadDocumentsExample = (args) => <UploadDocuments {...args} />;

uploadDocumentsExample.args = {
    onSubmit: (data) => alert(JSON.stringify(data)),
};
