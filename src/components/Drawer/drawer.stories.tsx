import React from 'react'
import Sheet from "./drawer";
import { Button } from "../../elements/Buttons/buttons";
import AddPersonForm from "./../Forms/addPerson/addperson"
import {Form} from "./../Forms"


export default {
    title: "hotelierpro/drawer"
}



export const SheetExample = (args) => {

    const [open, setOpen] = React.useState(false);

    const handleFormSubmit = (data) => {
        
        alert(JSON.stringify(data))
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
        Form={() => <Form.addPerson
            onSubmit={(data)=> handleFormSubmit(data)}
            values=""
            type=""
            id="addperson"
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