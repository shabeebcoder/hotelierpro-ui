import React from 'react'
import { Loader as Loaders } from '@mantine/core';
import "./styles.css";


function Loader({loading}) {
    return (
        <div style={{display: loading ? 'unset' : 'none'}} className='loaderContainer'>
            
   
      </div>
  )
}

export default Loader