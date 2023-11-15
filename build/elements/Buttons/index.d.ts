/// <reference types="react" />
export declare const button: {
    Button: import("react").ForwardRefExoticComponent<import("./buttons").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    buttonVariants: (props?: {
        variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost";
        size?: "default" | "icon" | "sm" | "lg";
    } & import("class-variance-authority/dist/types").ClassProp) => string;
};
