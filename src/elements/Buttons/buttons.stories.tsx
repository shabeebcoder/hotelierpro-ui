

export default {
    title: 'elements-v2/Buttons'
}


import React from "react";
import { Button } from "./buttons";
 
export function ButtonDemo() {
  return <Button>Button</Button>
}

export const Buttons = (args:any) => <ButtonDemo {...args} />;

Buttons.args = {};