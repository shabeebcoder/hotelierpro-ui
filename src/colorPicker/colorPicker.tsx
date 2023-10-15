import React from 'react'
import "./styles.css"

function ColorPicker() {
    return (
        <div className='colorPickerContainer'>
            <div className='color-picker-text-div'>
                <h1 className='color-picker-text'>Background Color</h1>
            </div>
            <div className='color-picker-primary-box'>
                <h3 className='color-picker-secondary-text'>#EDEDED</h3>
                <div className='color-picker-tertiary-box'></div>
            </div>
        </div>
    )
}

export default ColorPicker