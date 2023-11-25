"use client"

import * as React from "react"

import { cn } from "../../utils"
import { Icons } from "../../elements/Icons/icons"
import { Button } from "../../elements/Buttons/buttons"
import { Input } from "../../elements/Input/input"
import { Label } from "../../elements/Label/label"
import { useForm } from "react-hook-form"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function ResetPasswordForm({ className, onSubmit, isLoading, generatePassword=false, buttonTitle = "", ...props }: UserAuthFormProps | any) {

    const { handleSubmit, register } = useForm()

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-5">

                    <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="email">
                                Password
                            </Label>
                            <Input
                                {...register("password")}
                                id="password"
                                placeholder="New Password"

                                autoCapitalize="none"

                                autoCorrect="off"
                                disabled={isLoading}
                            />
                        </div>

                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    Re-type Password
                                </Label>
                                <Input
                                    {...register("re_type_password")}
                                    id="res_type_password"
                                    placeholder="Re-Type Password"

                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                

                    <Button disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        {buttonTitle ? buttonTitle : "Update Password"}
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with login
                    </span>
                </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
                Got to Login Page
            </Button>
        </div>
    )
}