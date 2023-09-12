import React from "react"

import { Grid, Table, Input, TextInput, Select as MantineSelect } from "@mantine/core"
import { Button } from "antd";
import "./select.css"

export default function Select(props) {

    return (<MantineSelect className="hotelierSelect"
        {...props}
    />)

}