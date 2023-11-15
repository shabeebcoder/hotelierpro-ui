import React from 'react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./avatar"


export default {
    title: 'elements-v2/Avatar'
}

export function AvatarDemo() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}

export const Avatars = (args) => <AvatarDemo {...args} />

Avatars.args = {}