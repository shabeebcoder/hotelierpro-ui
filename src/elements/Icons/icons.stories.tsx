import React from 'react'
import { Icons } from "./icons";

export default {
    title: "elements/icons"
}


export const IconExample = (args) => {

    return (
        <>
        {Object.keys(Icons).map((key:any) => {
            const IconComponent = Icons[key];
            return (<>
                <br />
                {key}
                <IconComponent style={{ height: 20 }} key={key} />
                </>
            );
        })}
    </>
    )
}
