import React from "react";



export default function ({ name }) {

    const Moon = () => {
        return <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ width: 12 }} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>

    }

    const Guest = () => {
        return (<svg xmlns="http://www.w3.org/2000/svg" style={{ width: 12 }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>)

    }

    return (
        <div className="booked-info" >
            <div className="name">

                {name}
            </div>

            <div style={{ display: 'flex', alignItems: 'cnter', fontSize: 13 }}>
                <Guest />1&nbsp;
                <Moon /> 2
            </div>

        </div >
    );
}
