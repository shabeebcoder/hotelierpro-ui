import React from 'react'
import "./styles.css"

function ColorPicker(props) {
    return (
        <div className='colorPickerContainer'>
            <div className='color-picker-text-div'>
                <h1 className='color-picker-text'>{props.title}</h1>
            </div>
            <div className='color-picker-primary-box'>
                <h3 className='color-picker-secondary-text'>{props.colorCode}</h3>
                <div className='color-picker-tertiary-box' style={{backgroundColor:props.colorCode}}></div>
            </div>
        </div>
    )
}

export default ColorPicker