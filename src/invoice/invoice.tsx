import React from 'react'
import "./styles.css";




function Invoice(props) {
    const {amount} = props;
    return (
        <div className='invoice-container'>

            
            
            <div className="Header">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="467" height="2" viewBox="0 0 467 2" fill="none">
                                <path d="M0 1H467" stroke="#A1A1A1" stroke-opacity="0.54"/>
                                </svg>
                                <table className='Total_part'>
                                    <tr>
                                    <td className='subtotal'>Subtotal</td>
                                    <td className='subtotal_price'>$ 395.83</td>
                                    </tr>

                                    <tr>
                                    <td className='city_tax'>City Tax</td>
                                    <td className='tax_price'>$ 1</td>
                                    <td className='total_tax_price'>$ 1.00</td>
                                    </tr>

                                    <tr>
                                    <td className='VAT'>VAT</td>
                                    </tr>

                                    <tr>
                                    <td className='rooms1'>Rooms</td>
                                    <td className='Percentage_1'>20 %</td>
                                    <td className='rooms_price'>$ 73.33</td>
                                    </tr>

                                    <tr>
                                    <td className='GS'>General Services</td>
                                    <td className='Percentage_2'>20 %</td>
                                    <td className='GS_price'>$ 3.33</td>
                                    </tr>

                                    <tr>
                                    <td className='Food'>Food</td>
                                    <td className='Percentage_3'>20 %</td>
                                    <td className='food_price'>$ 2.50</td>
                                    </tr>

                                    <div className="line_2"></div>
                                    

                                    <tr>
                                    <td className='final_total'>Food</td>
                                    <td className='final_total_price'>$ 2.50</td>
                                    </tr>

                                    <tr>
                                    <td className='paid_total'>Paid</td>
                                    <td className='paid_total_price'>$ 000.00</td>
                                    </tr>

                                    <div className="line_3"></div>

                                    <tr>
                                    <td className='due_total'>Amount Due</td>
                                    <td className='due_total_price'>$ 475.00</td>
                                    </tr>
                                    
                                    
                                </table>

                                <div className="notes">
                                    <div className="rectangle"></div>
                                    <p>Notes...</p>
                                </div>
                                
                                
                            </div>

                        </table>


                       
                    

                
            
        </div>

        // end
            

        
    )
}

export default Invoice