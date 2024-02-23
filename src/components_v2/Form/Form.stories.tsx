import Form from "./Form";
import React from "react";
import { z } from "zod";
import { FormItems } from "./FormItems";



export default {
    title: "components_v2/Form"
}

export const FormExample = () => {
    const formSchema = z.object({
        name: z.string().min(4).max(20).nonempty(),
    });

    return (<Form
        id="newBooking"
        onSubmit={(data) => alert(JSON.stringify(data))}
        resolver={formSchema}
    >

        <FormItems.TextField
            name="name"
            label="Name"
        />

        <button type="submit">Submit</button>
    </Form>
    )
}