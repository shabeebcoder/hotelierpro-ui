import React from 'react'

// import { Meta, Canvas, Story } from "@storybook/addon-docs/blocks";
import { FontBoldIcon } from "@radix-ui/react-icons"

import { Toggle } from "./toggle"

export default {
    title: 'elements-v2/Toggle',
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    component: Toggle,
}




export function ToggleDemo() {
    return (
        <Toggle aria-label="Toggle italic">
            <FontBoldIcon className="h-4 w-4" />
        </Toggle>
    )
}
