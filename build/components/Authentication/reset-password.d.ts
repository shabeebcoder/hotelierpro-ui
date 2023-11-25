import React from 'react';
export declare const metadata: {
    title: string;
    description: string;
};
export default function ResetPasswordPage({ loginUrl, forgotPassword, title, subTitle, ...props }: {
    [x: string]: any;
    loginUrl: any;
    forgotPassword?: boolean;
    title?: string;
    subTitle?: string;
}): React.JSX.Element;
