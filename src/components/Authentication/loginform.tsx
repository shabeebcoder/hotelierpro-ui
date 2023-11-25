"use client"

import * as React from "react"

import { cn } from "../../utils"
import { Icons } from "../../elements/Icons/icons"
import { Button } from "../../elements/Buttons/buttons"
import { Input } from "../../elements/Input/input"
import { Label } from "../../elements/Label/label"
import { useForm } from "react-hook-form"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, onSubmit, isLoading, ...props }: UserAuthFormProps | any) {

    const { handleSubmit, register } = useForm()

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-5">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            {...register("username")}
                            id="username"
                            placeholder="username"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            {...register("password")}
                            id="password"
                            placeholder="password"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>

                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In with Email
                    </Button>
                    <p className="px-7 text-center text-sm text-muted-foreground">
                        <a
                            href="/forgot-password"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Forgot password?
                        </a>
                        .
                    </p>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                )}{" "}
                Github
            </Button>
        </div>
    )
}