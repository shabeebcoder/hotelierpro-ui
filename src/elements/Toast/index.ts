import {
    type ToastProps,
    type ToastActionElement,
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
} from "./toast"

import { useToast, toast } from "./use-toast";

import { Toaster } from "./toaster";

export const toasts: any = {

    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
    Toaster,
    useToast, toast
}
