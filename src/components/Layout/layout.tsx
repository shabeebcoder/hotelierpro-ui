
import React from 'react'
import { Menu } from "./menu"
import { Sidebar } from "./sidebar"


export default function Layout({ children, ...props }) {
    return (

        <div className=" min-h-screen ">
            <Menu menu={props.menu} {...props} />
            <div className="border-t min-h-screen">
                <div className="bg-background">
                    <div className="grid lg:grid-cols-6" >
                        <Sidebar className="" style={{width: 300}} {...props} />
                        <div className="col-span-3 min-h-screen lg:col-span-4 lg:border-l">
                            <div className="h-full px-4 py-4 lg:px-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
