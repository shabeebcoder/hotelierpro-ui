import React from 'react'
import "./edit.css";
import { DatePickerInput } from '@mantine/dates';
import { TextInput } from '@mantine/core';


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
                    <div className="invo_number_edit">INV-20230723-2 </div>
                    <div className="invo_date"> <DatePickerInput placeholder='Billing Date' className='date_input'/></div>
                    <div className="invo_due_date">  <DatePickerInput placeholder='Due Date' className='date_inpu2'/>  </div>
                </div>
                

            </div>
            
           

            <div className="bill_adress_container">
                
                <div className="bill_to_address_container">
                    <h3>Bill To :</h3>
                    <div className="billing_address_editable">
                        <div className="billing_name_editable"> <TextInput placeholder='Name'/> </div>
                        <div className="billing_address_full_editable"><TextInput placeholder='Address'/> </div>
                    </div>
                </div>
                
                <div className="bill_from_address_container">
                    <h3>Bill From :</h3>
                    <div className="billing_address_editable">
                        <div className="billing_name_editable"><TextInput placeholder='Name'/></div>
                        <div className="billing_address_full_editable"><TextInput placeholder='Address'/> </div>
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
                                <div className="td2_editable"><TextInput placeholder=''/></div>
                                {/* <td className='td2'>Accommodation in room “Room 2 Double room”, 1 person(s), 5 Night(s)</td> */}
                                <div className="td3_editable"> <TextInput/> </div>
                                {/* <td className='td3'>$ 88</td> */}
                                <div className="td4_editable"><TextInput/></div>
                                {/* <td className='td4'>5</td> */}
                                <div className="td5_editable"> <TextInput/> </div>
                                {/* <td className='td5'>$ 440.00</td> */}
                                
                            </tr>
                            <tr className='second_column'>
                                <td className='td6'>2</td>
                                <div className="td7_editable"><TextInput/></div>
                                {/* <td className='td7'>Message</td> */}
                                <div className="td8_editable"><TextInput/></div>
                                {/* <td className='td8'>$ 20</td> */}
                                <div className="td9_editable"><TextInput/></div>
                                {/* <td className='td9'>1</td> */}
                                <div className="td10_editable"><TextInput/></div>
                                {/* <td className='td10'>$ 20.00</td> */}
                                
                            </tr>
                            <tr className='third_column'>
                                <td className='td11'>3</td>
                                <div className="td12_editable"><TextInput/></div>
                                {/* <td className='td12'>Beef Steak</td> */}
                                <div className="td13_editable"><TextInput/></div>
                                {/* <td className='td13'>$ 16</td> */}
                                <div className="td14_editable"><TextInput/></div>
                                {/* <td className='td14'>1</td> */}
                                <div className="td15_editable"><TextInput/></div>
                                {/* <td className='td15'>$ 16.00</td> */}
                                
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
                                    <div className="tax_price_editable"><TextInput/></div>
                                    {/* <td className='tax_price'>$ 1</td> */}
                                    <td className='total_tax_price'>$ 1.00</td>
                                    </tr>

                                    <tr>
                                    <td className='VAT'>VAT</td>
                                    </tr>

                                    <tr>
                                    <td className='rooms1'>Rooms</td>
                                    <div className="rooms_percentage1_editable"><TextInput/></div>
                                    {/* <td className='Percentage_1'>20 %</td> */}
                                    <td className='rooms_price'>$ 73.33</td>
                                    </tr>

                                    <tr>
                                    <td className='GS'>General Services</td>
                                    <div className="GS_percentage1_editable"><TextInput/></div>
                                    {/* <td className='Percentage_2'>20 %</td> */}
                                    <td className='GS_price'>$ 3.33</td>
                                    </tr>

                                    <tr>
                                    <td className='Food'>Food</td>
                                    <div className="food_percentage1_editable"><TextInput/></div>
                                    {/* <td className='Percentage_3'>20 %</td> */}
                                    <td className='food_price'>$ 2.50</td>
                                    </tr>

                                    <div className="line_2"></div>
                                    

                                    <tr>
                                    <td className='final_total'>Food</td>
                                    <td className='final_total_price'>$ 2.50</td>
                                    </tr>

                                    <tr>
                                    <td className='paid_total'>Paid</td>
                                    <div className="paid_total_editable"> <TextInput/></div>
                                    {/* <td className='paid_total_price'>$ 000.00</td> */}
                                    </tr>

                                    <div className="line_3"></div>

                                    <tr>
                                    <td className='due_total'>Amount Due</td>
                                    <td className='due_total_price'>$ 475.00</td>
                                    </tr>
                                    
                                    
                                </table>

                                <div className="notes">
                                    <div className="rectangle"><TextInput placeholder='Notes...'/></div>
                                    {/* <p>Notes...</p> */}
                                </div>
                                
                                
                            </div>

                        </table>


                       
                    

                
            
        </div>

        // end
            

        
    )
}

export default Invoice