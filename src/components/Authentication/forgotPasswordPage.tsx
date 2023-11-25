

import React from 'react'
import { cn } from "../../utils"
import { buttonVariants } from "../../elements/Buttons/buttons";
import { ResetPasswordForm } from "./reset-password-form";
import { ForgotPasswordForm } from "./forgotPasswordForm";

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function ForgotPasswordPage({ loginUrl, forgotPassword = false, title = "", subTitle = "", ...props }) {
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden min-h-screen  flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href={loginUrl}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </a>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 " style={{ backgroundColor: "#3A7C7C" }} />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img alt='hoterlier pro login' style={{ height: 50 }} src='https://hotelierpro.us/Logo/HotelierPro_Logo.svg' />


          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;veryone starts with a free 15-day trial, just click the button below. No credit card required..&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {title ? title : "Update password"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {subTitle ? subTitle : "Provide new password"}
              </p>
            </div>
        
             <ForgotPasswordForm {...props} buttonTitle="Send reset link" />
        
        
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}