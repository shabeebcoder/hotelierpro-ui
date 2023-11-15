"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"

import { Button } from "../Buttons/buttons"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./form"
import { Input } from "../Input/input"

export default {
    title: "elements-v2/Form"
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function ProfileForm() {
    const form = useForm();
    const formSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
    })

    function ProfileForm() {
        // 1. Define your form.
        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                username: "",
            },
        })
    }

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((d)=>alert(JSON.stringify(d)))} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}