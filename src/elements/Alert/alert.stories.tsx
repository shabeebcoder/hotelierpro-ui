import React from "react";


import { Terminal } from "lucide-react"
 
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "./alert";


export default {
    title : 'elements-v2/Alert'
}


export function AlertDemo() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}

export const Alerts = (args) => <AlertDemo {...args} />
Alerts.args={} 