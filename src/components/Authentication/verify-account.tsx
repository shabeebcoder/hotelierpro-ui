import React from 'react'

import { CgCheckO } from "react-icons/cg";
import { Button } from "./../../elements/Buttons/buttons"



export default function VerificationPage() {
    return <div className="flex h-screen">
        <div className="m-auto text-center" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3><CgCheckO fontSize={100} color='#3A7C7C' /></h3>

            <h2 className="mt-5 scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                You'r accout verification success!
            </h2>
            <a href="/login">
                <Button className='mt-5'>Go to login</Button>
            </a>
        </div>
    </div>
}