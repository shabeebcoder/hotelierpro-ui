import React from 'react'
import "./styles.css";

function WebsitePlaceholder(props) {
    return (
        <div className='background' style={{background:props.colorCodeBackground}}>
            <div className='header' style={{background:props.colorCodeHeader}}></div>
            <div className='main-box'>
                <div className="first-box"style={{background:props.colorCodecard}}></div>
                <div className="first-box"style={{background:props.colorCodecard}}></div>
                <div className="first-box"style={{background:props.colorCodecard}}></div>
                <div className="first-box"style={{background:props.colorCodecardTwo}}></div>
            </div>
            <div className='card-div'>
                <div className='card-div-two'>
                <div className='first-card' style={{background:props.colorCodecard}}>
                    <div className='inside-first-card'style={{background:props.colorCodeBackground}}></div>
                    <div className="inside-second-card" style={{background:props.colorCodecardInside}}></div>
                </div>
                <div className='first-card' style={{background:props.colorCodecard}}>
                    <div className='inside-first-card'style={{background:props.colorCodeBackground}}></div>
                    <div className="inside-second-card" style={{background:props.colorCodecardInside}}></div>
                </div>
                <div className='first-card' style={{background:props.colorCodecard}}>
                    <div className='inside-first-card'style={{background:props.colorCodeBackground}}></div>
                    <div className="inside-second-card" style={{background:props.colorCodecardInside}}></div>
                </div>
                <div className='first-card' style={{background:props.colorCodecard}}>
                    <div className='inside-first-card'style={{background:props.colorCodeBackground}}></div>
                    <div className="inside-second-card" style={{background:props.colorCodecardInside}}></div>
                </div>
                </div>
                <div className="background-second" style={{background:props.colorCodeBackground}}>
                    <div className='inside-background-second'style={{background:props.colorCodecardTwo}}></div>
                </div>
            </div>
        </div>
    )
}

export default WebsitePlaceholder