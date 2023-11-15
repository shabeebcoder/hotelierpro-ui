import { Badge } from "./badge";
export declare const badge: {
    Badge: typeof Badge;
    badgeVariants: (props?: {
        variant?: "default" | "secondary" | "destructive" | "outline";
    } & import("class-variance-authority/dist/types").ClassProp) => string;
};
