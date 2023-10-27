import React from 'react'
import "./edit.css";



function Invoice(props) {
    const {amount} = props;
    return (
        <div className='invoice_editable_container'>

            
            
            <div className="Header">
                <img className='logo' src="https://hotelierpro.us/Logo/HotelierPro_Logo_white.svg" alt="" />
              
                <ul className="invo_details">
                <h2>Invoice</h2>
                    <li>Invoice Number</li>
                    <li>Invoice Date   </li>
                    <li>Invoice Due Date </li>
                </ul>

                <div className="invo_edit_colon">
                    <h6 className="colon1">:</h6>
                    <h6 className="colon2">:</h6>
                    <h6 className="colon3">:</h6>
                </div>


                <div className="invo_details_edit">
                    <div className="invo_number_edit"><p>INV-20230723-2</p></div>
                    <div className="invo_date"> <p> 07/23/2023</p> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M9.15203 3.51758H8.31498C8.25806 3.51758 8.20449 3.54548 8.171 3.59124L5.00025 7.96178L1.82949 3.59124C1.796 3.54548 1.74243 3.51758 1.68551 3.51758H0.84846C0.775916 3.51758 0.733505 3.60017 0.775916 3.65932L4.71118 9.08454C4.85404 9.28097 5.14645 9.28097 5.28819 9.08454L9.22346 3.65932C9.26699 3.60017 9.22458 3.51758 9.15203 3.51758Z" fill="white"/>
                    </svg></div>
                    <div className="invo_due_date"><p>09/23/2023</p><svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M9.15203 3.51758H8.31498C8.25806 3.51758 8.20449 3.54548 8.171 3.59124L5.00025 7.96178L1.82949 3.59124C1.796 3.54548 1.74243 3.51758 1.68551 3.51758H0.84846C0.775916 3.51758 0.733505 3.60017 0.775916 3.65932L4.71118 9.08454C4.85404 9.28097 5.14645 9.28097 5.28819 9.08454L9.22346 3.65932C9.26699 3.60017 9.22458 3.51758 9.15203 3.51758Z" fill="white"/>
                    </svg></div>
                </div>
                

            </div>
            
           

            <div className="bill_adress_container">
                
                <div className="bill_to_address_container">
                    <h3>Bill To :</h3>
                    <div className="billing_address_editable">
                        <div className="billing_name_editable"><p>Donna</p></div>
                        <div className="billing_address_full_editable"></div>
                    </div>
                </div>
                
                <div className="bill_from_address_container">
                    <h3>Bill From :</h3>
                    <div className="billing_address_editable">
                        <div className="billing_name_editable"></div>
                        <div className="billing_address_full_editable"></div>
                    </div>
                </div>

            </div>

                <div className="bill_buttons">
                    <div className="add_booking_button"> + Add Booking</div>
                    <div className="add_service_button"> + Add Service</div>
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
                                <div className="td2_editable"></div>
                                <td className='td2'>Accommodation in room “Room 2 Double room”, 1 person(s), 5 Night(s)</td>
                                <div className="td3_editable"></div>
                                <td className='td3'>$ 88</td>
                                <div className="td4_editable"></div>
                                <td className='td4'>5</td>
                                <div className="td5_editable"></div>
                                <td className='td5'>$ 440.00</td>
                                
                            </tr>
                            <tr className='second_column'>
                                <td className='td6'>2</td>
                                <div className="td7_editable"></div>
                                <td className='td7'>Message</td>
                                <div className="td8_editable"></div>
                                <td className='td8'>$ 20</td>
                                <div className="td9_editable"></div>
                                <td className='td9'>1</td>
                                <div className="td10_editable"></div>
                                <td className='td10'>$ 20.00</td>
                                
                            </tr>
                            <tr className='third_column'>
                                <td className='td11'>3</td>
                                <div className="td12_editable"></div>
                                <td className='td12'>Beef Steak</td>
                                <div className="td13_editable"></div>
                                <td className='td13'>$ 16</td>
                                <div className="td14_editable"></div>
                                <td className='td14'>1</td>
                                <div className="td15_editable"></div>
                                <td className='td15'>$ 16.00</td>
                                
                            </tr>

                            <div className="add_row_button"> + Add New Row</div>
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
                                    <div className="tax_price_editable"></div>
                                    <td className='tax_price'>$ 1</td>
                                    <td className='total_tax_price'>$ 1.00</td>
                                    </tr>

                                    <tr>
                                    <td className='VAT'>VAT</td>
                                    </tr>

                                    <tr>
                                    <td className='rooms1'>Rooms</td>
                                    <div className="rooms_percentage1_editable"></div>
                                    <td className='Percentage_1'>20 %</td>
                                    <td className='rooms_price'>$ 73.33</td>
                                    </tr>

                                    <tr>
                                    <td className='GS'>General Services</td>
                                    <div className="GS_percentage1_editable"></div>
                                    <td className='Percentage_2'>20 %</td>
                                    <td className='GS_price'>$ 3.33</td>
                                    </tr>

                                    <tr>
                                    <td className='Food'>Food</td>
                                    <div className="food_percentage1_editable"></div>
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
                                    <div className="paid_total_editable"></div>
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