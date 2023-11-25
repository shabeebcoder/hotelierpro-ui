

"use client"

import React from "react"
import { Button } from "../Buttons/buttons"
import { ToastAction } from "./toast"
import { useToast } from "./use-toast"
import { Toaster } from "./toaster"


export default {
    title: 'elements-v2/toast'
}


export function ToastDemo() {
    const { toast } = useToast();

    return (<>
        <Toaster />
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    title: "Scheduled: Catch up ",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                })
            }}
        >
            Add to calendar
        </Button>
    </>
    )
}

export function ToastSimple() {
    const { toast } = useToast()

    return (
        <>
            <Toaster />

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        description: "Your message has been sent.",
                    })
                }}
            >
                Show Toast
            </Button>
        </>
    )
}

export function ToastWithTitle() {
    const { toast } = useToast()

    return (
        <>
            <Toaster />

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                    })
                }}
            >
                Show Toast
            </Button>
        </>
    )
}


export function ToastWithAction() {
    const { toast } = useToast()

    return (
        <>
            <Toaster />

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                Show Toast
            </Button>
        </>
    )
}

export function ToastDestructive() {
    const { toast } = useToast()

    return (
        <>
            <Toaster />

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                Show Toast
            </Button>
        </>
    )
}