import React from 'react'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../../elements/Menubar/menubar"

export function Menu({ menu, ...props }) {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      {
        menu.map(({ title, content, props }) => {
          return (
            <MenubarMenu>
              <MenubarTrigger {...props} >{title}</MenubarTrigger>
              <MenubarContent>
                {
                  content.map(({ item, props }, index: number) => {
                    return (
                      <>
                        <MenubarItem key={`menu-${index}`} {...props}>{item}</MenubarItem>
                      </>
                    )
                  })
                }

              </MenubarContent>
            </MenubarMenu>
          )
        })
      }

    </Menubar>
  )
}