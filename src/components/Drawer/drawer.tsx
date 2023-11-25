import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../elements/Sheet/sheet"
import { Button } from "../../elements/Buttons/buttons";
import { Input } from "../../elements/Input/input";
import { Label } from "../../elements/Label/label";
import AddPerson from "../Forms/addPerson/addperson"
import { ScrollArea } from "../../elements/Scroll Area/scrollarea"
import { Icons } from "../../elements/Icons/icons"


function Drawer({
    open = false,
    handleFormSubmit,
    handleTrigger,
    children,
    title,
    description,
    isLoading,
    Form,
    SubmitButton
}: any) {

    return (
        <div>
            <Sheet open={open}>
                <SheetTrigger asChild>
                    {children}
                </SheetTrigger>
                <SheetContent  >
                    <ScrollArea className="h-screen pb-10 " >
                        <SheetHeader className='pb-4'>
                            <SheetTitle>{title}</SheetTitle>
                            <SheetDescription>
                                {description}
                            </SheetDescription>
                        </SheetHeader>

                        <Form />

                        <SheetFooter >
                            <SheetClose asChild>
                                {SubmitButton && <SubmitButton />}
                            </SheetClose>
                        </SheetFooter>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Drawer