import React from 'react'
import { cn } from "../../utils";
import { Button } from "../../elements/Buttons/buttons";
import { ScrollArea } from "../../elements/Scroll Area/scrollarea"
import { Icons } from "../../elements/Icons/icons"






export function Sidebar({ className, sidebar, navigate }: any) {


  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {
          sidebar.map(({ title, items }) => {
            return (
              <>
                <div className="px-3 py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    {title}
                  </h2>
                  <div className="space-y-1">
                    {
                      items.map(({ name, Icon, onClick, variant, className }: any, index: Number) => (
                        <Button key={`button-${index}`} variant={variant} className={`w-full justify-start ${className}`} onClick={onClick}>
                          {<Icon />}
                          {name}
                        </Button>
                      ))
                    }
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}