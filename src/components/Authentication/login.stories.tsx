import React from "react";
import Login from "./login";
export default {
    title: "hotelierpro/login"
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
export const LoginExample = (args) => <Login {...args} />

LoginExample.args = {
    isLoading: false,
    onSubmit: (data) => alert(JSON.stringify(data))
    
}