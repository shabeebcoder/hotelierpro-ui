import React from 'react'

export default {
    title: "elements-v2/Label"
}

import { Checkbox } from "../Checkbox/checkbox";
import { Label } from "./label";

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
