import React from 'react'
import Sheet from "./drawer";
import { Button } from "../../elements/Buttons/buttons";
import AddPersonForm from "./../Forms/addPerson/addperson"


export default {
    title: "hotelierpro/drawer"
}



export const SheetExample = (args) => {

    const [open, setOpen] = React.useState(false);

    const handleFormSubmit = () => {
        alert("Fds")
    }

    const handleTrigger = () => {
        setOpen(!open)
    }
    const description = " Make changes to your profile here. Click save when you're done."
    const title = "Edit profile"
    return <Sheet
        title={title}
        description={description}
        open={open}
        handleTrigger={() => alert()}
        handleFormSubmit={handleFormSubmit}
        Form={() => <AddPersonForm
            onSubmit={(data) =>  setOpen(!open)}
            values=""
            type=""

        />}
        SubmitButton={() => <div className="flex gap-4 mt-4">
            <Button form='addPerson' className="capitalize">
                create new person
            </Button>
        </div>}
        {...args}
    >
        <Button form="addPerson" onClick={handleTrigger} variant="outline">Open</Button>
    </Sheet>
}


SheetExample.args = {
    isLoading: true
}