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
import AddPerson from "../Forms/addPerson/addperson";
import { ScrollArea } from "../../elements/Scroll Area/scrollarea";
import { Icons } from "../../elements/Icons/icons";

interface IDrawer {
    open: boolean;
    children: any;
    title?: String;
    description?: String;
    Form?: any;
    SubmitButton?: any;
    onClose?: any;

}

function Drawer({
    open = false,
    children,
    title,
    description,
    Form,
    SubmitButton,
    onClose=null
}: IDrawer) {



    return (
        <Sheet open={open}>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent onCloseAutoFocus={onClose}  >
                <ScrollArea className="h-screen pb-10 " >
                    <SheetHeader className='pb-4'>
                        <SheetTitle>{title}</SheetTitle>
                        <SheetDescription>
                            {description}
                        </SheetDescription>
                    </SheetHeader>

                    <Form />

                    <SheetFooter >
                        {/* <SheetClose asChild> */}
                        {SubmitButton && <SubmitButton />}
                        {/* </SheetClose> */}
                    </SheetFooter>
                </ScrollArea>
            </SheetContent>
        </Sheet>



    )
}

export default Drawer