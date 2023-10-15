import React from 'react'
import "./styles.css";



function Invoice(props) {
    const {amount} = props;
    return (
        <div className='invoice-container'>

            <div className="showcase">
            
            <div className="header">
                <img className='logo' src="https://hotelierpro.us/Logo/HotelierPro_Logo_white.svg" alt="" />
              
                <ul className="invo_details">
                <h2>Invoice</h2>
                    <li>Invoice Number       :   INV-20230723-2</li>
                    <li>Invoice Date         :   07/23/2023</li>
                    <li>Invoice Due Date     :   09/23/2023</li>
                </ul>
            </div>
            
           

            <div className="bill_adress_container">
                
                <div className="bill_to_address_container">
                    <h3>Bill To :</h3>
                    <ul>
                        <li>Donna Morris</li>
                        <li>957 North Street</li>
                        <li>London, SE20 3JW</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
                
                <div className="bill_from_address_container">
                    <h3>Bill From :</h3>
                    <ul>
                        <li>Lemon Squeezy LLC</li>
                        <li>9831 Manor Dr.</li>
                        <li>Fountain Valley, CA 92708</li>
                        <li>United States</li>
                    </ul>
                </div>

            </div>
            <h4 className='sent'>SENT</h4> 
            
            <div className="price_section_container">
                    <div className="price_section_header">
                        <ul className='description_first'>
                            <li>No</li>
                            <li>Item</li>
                        </ul>
                        <ul className='description_second'>
                            <li>Cost</li>
                            <li>Qty.</li>
                            <li>Price</li>
                        </ul>
                       
                        
                    </div>
                </div>
            </div>
        </div>
            

        
    )
}

export default Invoice