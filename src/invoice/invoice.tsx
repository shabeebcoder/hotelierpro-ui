import React from 'react'
import "./styles.css";



function Invoice(props) {
    const {amount} = props;
    return (
        <div className='invoice-container'>
Hello, this is an invoice design <br/>
Your amount is - {amount}

        </div>
    )
}

export default Invoice