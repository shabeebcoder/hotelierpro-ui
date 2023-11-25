import { Badge } from "./badge";
export declare const badge: {
    Badge: typeof Badge;
    badgeVariants: (props?: {
        variant?: "default" | "outline" | "destructive" | "secondary";
    } & import("class-variance-authority/dist/types").ClassProp) => string;
};
