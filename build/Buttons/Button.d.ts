import React, { HTMLAttributes, ReactNode } from 'react';
import "./styles.css";
interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'hPprimary';
    disabled: boolean;
    className?: string;
}
export default function HotelierButton({ children, ...props }: Props): React.JSX.Element;
export {};
