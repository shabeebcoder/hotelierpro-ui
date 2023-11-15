import React from 'react'

import { Textarea } from "./textarea"
import { Button } from "./../Buttons/buttons";
import { Label } from '../Label/label';


export default {
    title: 'elements-v2/Textarea'
}



export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}

export function TextareaWithButton() {
    return (
      <div className="grid w-full gap-2">
        <Textarea placeholder="Type your message here." />
        <Button>Send message</Button>
      </div>
    )
}
  
export function TextareaWithText() {
    return (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Your Message</Label>
        <Textarea placeholder="Type your message here." id="message-2" />
        <p className="text-sm text-muted-foreground">
          Your message will be copied to the support team.
        </p>
      </div>
    )
  }