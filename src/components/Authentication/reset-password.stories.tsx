import React from "react";
import ResetPassword from "./reset-password";
export default {
    title: "hotelierpro/reset-password"
}

const useHello = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

}

export const ResetPasswordExample = (args) => <ResetPassword {...args} />

ResetPasswordExample.args = {
    isLoading: false,
    onSubmit: (data) => alert(JSON.stringify(data)),
    loginUrl: ""
}