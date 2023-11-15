import React from 'react'

import { Label } from "./../Label/label"
import { Switch } from "./switch"

export default {
    title: 'elements-v2/Switch'
}


 
export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}