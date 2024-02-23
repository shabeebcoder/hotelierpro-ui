import React from 'react'
// import { Button } from "../../elements/Buttons/buttons"
// import { Input } from "../../elements/Input/input"
// import { Label } from "../../elements/Label/label"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "../../elements/Popover/popover"
// import { ScrollArea } from "./../../elements/Scroll Area/scrollarea"
// import { Separator } from "../../elements/Separator/seperator"
// import { PlusCircledIcon } from '@radix-ui/react-icons'

// export function BookingInfo({ children }) {
//     return (

//         <Popover>
//             <PopoverTrigger asChild>
//                 {children}
//             </PopoverTrigger>
//             <PopoverContent className="w-80">
//                 fdsfds
//             </PopoverContent>
//         </Popover>
//     )
// }
import moment from 'moment';

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "../../elements/Buttons/buttons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "../../elements/Dropdown-menu/dropdownmenu"

export default function DropdownMenuDemo({ children, info, handleEdit, handleStatusChange, handleActions }: any) {
    const guest = info?.guests?.find((guest) => guest.isMain === true)
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <button>{children}</button> 
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" style={{marginTop: 20}}>
                <DropdownMenuLabel>Booking Info - [BLK-13232]</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Guest : </span>
                        <span >&nbsp;<b>{guest?.name || ''} </b></span>

                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Status : </span>
                        <span >&nbsp;<b>{info.status}</b></span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Check-In : </span>
                        <span >&nbsp;<b>{moment(info.checkInDate).format("MMM Do YY")} </b></span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Check-Out : </span>
                        <span >&nbsp;<b>{moment(info.checkOutDate).format("MMM Do YY")}</b></span>
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Email : </span>
                        <span style={{fontSize: 12}} >&nbsp;<b>{info.email}</b></span>
                    </DropdownMenuItem> */}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>

                            <span>Mark As</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem onClick={() => handleStatusChange({status: "confirmed", booking: info})}>

                                    <span>Confirmed</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange({status: "newBooking", booking: info})}>

                                    <span>New Booking</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange({status: "checkin", booking: info})}>

                                    <span>Check in</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleStatusChange({status: "checkout", booking: info})}>

                                    <span>Check out</span>
                                </DropdownMenuItem>
                          

                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                </DropdownMenuGroup>
                <DropdownMenuGroup>

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>

                            <span>Actions</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem onClick={() => handleActions({action : "addService", info})}>

                                    <span>Add Services</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleActions({action : "createInvoice", info})}>

                                    <span>Create Invoice</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleActions({action: "editBooking", info})}>

                                    <span>Edit Booking</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleActions({action : "clientForm", info})}>

                                    <span>Client Form</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem  onClick={() => handleActions({action : "deleteBooking", info})}>

                                    <span>Delete Booking</span>
                                </DropdownMenuItem>


                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                </DropdownMenuGroup>
                


            </DropdownMenuContent>
        </DropdownMenu>
    )
}