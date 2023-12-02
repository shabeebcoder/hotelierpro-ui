import React from 'react';
type IconProps = React.HTMLAttributes<SVGElement>;
interface ExtendedIconProps extends IconProps {
    active: boolean;
}
export declare const Icons: {
    logo: (props: IconProps) => React.JSX.Element;
    twitter: (props: IconProps) => React.JSX.Element;
    gitHub: (props: IconProps) => React.JSX.Element;
    radix: (props: IconProps) => React.JSX.Element;
    aria: (props: IconProps) => React.JSX.Element;
    npm: (props: IconProps) => React.JSX.Element;
    yarn: (props: IconProps) => React.JSX.Element;
    pnpm: (props: IconProps) => React.JSX.Element;
    react: (props: IconProps) => React.JSX.Element;
    tailwind: (props: IconProps) => React.JSX.Element;
    google: (props: IconProps) => React.JSX.Element;
    apple: (props: IconProps) => React.JSX.Element;
    paypal: (props: IconProps) => React.JSX.Element;
    spinner: (props: IconProps) => React.JSX.Element;
    playIcon: (props: IconProps) => React.JSX.Element;
    windows: (props: IconProps) => React.JSX.Element;
    note: (props: IconProps) => React.JSX.Element;
    building: (props: IconProps) => React.JSX.Element;
    service: (props: IconProps) => React.JSX.Element;
    people: (props: IconProps) => React.JSX.Element;
    calander: (props: IconProps) => React.JSX.Element;
    stats: (props: IconProps) => React.JSX.Element;
    hotel: (props: IconProps) => React.JSX.Element;
    moon: (props: IconProps) => React.JSX.Element;
    roomGuest: (props: ExtendedIconProps) => React.JSX.Element;
    billingPayments: (props: ExtendedIconProps) => React.JSX.Element;
    invoices: (props: ExtendedIconProps) => React.JSX.Element;
    bookingHistory: (props: ExtendedIconProps) => React.JSX.Element;
    clientForm: (props: ExtendedIconProps) => React.JSX.Element;
};
export {};
