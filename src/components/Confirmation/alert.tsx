import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../elements/Alert Dialog/alertDialog";
import { Icons } from "./../../elements/Icons/icons"


export function Confirmation({ children, loading = false, title, description, onCancel, onConfirm, cancelBtn = "Cancel", open = false, continueBtn = "Continue", loadingBtnText="Deleting..." }): any {
    return (
        <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                {children || ''}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={loading} onClick={onCancel}>{cancelBtn}</AlertDialogCancel>
                    <AlertDialogAction disabled={loading} onClick={onConfirm}>
                        {loading ? (<>
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            {loadingBtnText}
                        </>) : continueBtn}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default Confirmation