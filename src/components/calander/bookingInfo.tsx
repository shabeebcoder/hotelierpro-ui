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

export default function DropdownMenuDemo({ children, info, handleEdit }: any) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button style={{ position: 'absolute', top: 0 }} variant="ghost">{children}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Booking Info - [BLK-13232]</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                    <span style={{ color: 'blue' }}>Guest : </span>
                        <span >&nbsp;<b>{info.guestName} </b></span>
                      
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Paid : </span>
                        <span >&nbsp;<b>500 USD</b></span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Check-In : </span>
                        <span >&nbsp;<b>{moment(info.checkInDate).format("MMM Do YY")} </b></span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Check-Out : </span>
                        <span >&nbsp;<b>{moment(info.checkOutDate).format("MMM Do YY")}</b></span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span style={{ color: 'blue' }}>Phone : </span>
                        <span >&nbsp;<b>{moment(info.checkOutDate).format("MMM Do YY")}</b></span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                 
                 <DropdownMenuSub>
                     <DropdownMenuSubTrigger>
                      
                         <span>Mark As</span>
                     </DropdownMenuSubTrigger>
                     <DropdownMenuPortal>
                         <DropdownMenuSubContent>
                             <DropdownMenuItem>
                                
                                 <span>Check-in</span>
                             </DropdownMenuItem>
                             <DropdownMenuItem>
                                
                                 <span>Checkout</span>
                             </DropdownMenuItem>
                             <DropdownMenuSeparator />
                           
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
                                <DropdownMenuItem>
                                  
                                    <span>Add Services</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    
                                    <span>Create Invoice</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={()=> handleEdit(info)}>
                                    
                                    <span>Edit</span>
                                </DropdownMenuItem>
                              
                              
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    
                </DropdownMenuGroup>
             
               
            </DropdownMenuContent>
        </DropdownMenu>
    )
}