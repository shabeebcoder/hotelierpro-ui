import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../elements/Avatar/avatar";

export function RecentSales({ data = [] }: any) {
  return (
    <div className="space-y-8">
      {
        data.map((item: any) => {
          return (
            <div className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={item.avatar} alt="Avatar" />
                <AvatarFallback>{item.name}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.email}
                </p>
              </div>
              <div className="ml-auto font-medium">{item.price}</div>
            </div>
          )
        })
      }


    </div>
  )
}