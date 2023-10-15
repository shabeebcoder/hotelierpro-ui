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
            
            {/* <div className="price_section_container">
                    <div className="price_section_header">
                        <ul className='description_first'>
                            <li className='no'>No</li>
                            <li className='item'>Item</li>
                            <li className='cost'>Cost</li>
                            <li className='qty'>Qty.</li>
                            <li className='price'>Price</li>
                        </ul>
                       </div>
                       </div> */}

                        <table className='Price_Table'>
                            <tr>
                                <th className='header_1'>No</th>
                                <th className='header_2' >Item</th>
                                <th className='header_3' >Cost</th>
                                <th className='header_4' >Qty</th>
                                <th className='header_5' >Price</th>
                            </tr>
                            <div className="table">
                            <tr className='first_column'>
                                <td className='td1'>1</td>
                                
                                <td className='td2'>Accommodation in room “Room 2 Double room”, 1 person(s), 5 Night(s)</td>
                                <td className='td3'>$ 88</td>
                                <td className='td4'>5</td>
                                <td className='td5'>$ 440.00</td>
                            </tr>
                            <tr className='second_column'>
                                <td className='td6'>2</td>
                                <td className='td7'>Message</td>
                                <td className='td8'>$ 20</td>
                                <td className='td9'>1</td>
                                <td className='td10'>$ 20.00</td>
                            </tr>
                            <tr className='third_column'>
                                <td className='td11'>3</td>
                                <td className='td12'>Beef Steak</td>
                                <td className='td13'>$ 16</td>
                                <td className='td14'>1</td>
                                <td className='td15'>$ 16.00</td>
                            </tr>
                            </div>
                            <div className="total_price">
                                <div className="line"></div>
                                
                            </div>

                        </table>

                       
                    

                
            </div>
        </div>
            

        
    )
}

export default Invoice