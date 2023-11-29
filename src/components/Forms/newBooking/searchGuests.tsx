import React from 'react'
import { Button } from "../../../elements/Buttons/buttons"
import { Input } from "../../../elements/Input/input"
import { Label } from "../../../elements/Label/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../elements/Popover/popover"
import { ScrollArea } from "./../../../elements/Scroll Area/scrollarea"
import { Separator } from "../../../elements/Separator/seperator"
import { PlusCircledIcon } from '@radix-ui/react-icons'

function SearchGuest({ children, guestList = [], onSelect, isLoading=false }) {
    return (

        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Search Guests</h4>
                        <p className="text-sm text-muted-foreground">
                            Please seach and select a guest
                        </p>
                        <form>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <Input className='pl-10' />
                                {/* <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required /> */}
                            </div>
                        </form>
                    </div>
                    <div className="grid gap-2">
                        <ScrollArea className='h-72 '>
                         {isLoading && "Loading ..."}
                            
                            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    guestList.map((row) => (
                                        <li className="pb-3 sm:pb-4">
                                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src={row.avatar} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {row.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {row.email}
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">

                                                    <Button onClick={() => onSelect(row)} variant='secondary'>
                                                        <PlusCircledIcon className="mr-2 h-4 w-4" />
                                                        Add</Button>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </ScrollArea>
                    </div>
                </div>
            </PopoverContent>
        </Popover>

    )
}

export default SearchGuest