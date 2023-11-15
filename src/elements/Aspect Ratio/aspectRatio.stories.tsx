import React from "react"
 
import { AspectRatio } from "./aspectRatio"
 

export default {
    title: 'elements-v2/Aspect-ratio'
}

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}

export const AspectRationExample = (args) => <AspectRatioDemo {...args} />

AspectRationExample.args={}