import React from 'react'

import {
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
  } from "@radix-ui/react-icons"
  
  import {
    ToggleGroup,
    ToggleGroupItem,
} from "./toggle-group"
  
export default {
    title: 'elements-v2/Toggle-group'
}


  
  export function ToggleGroupDemo() {
    return (
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  }
  