import React from 'react'
import "./styles.css";

function BillingTable() {
  return (

    <div className='billingtable'>
      <div className='billing-head-section'>
        <div>
          <form action="" className='head-left-div'>
            <label htmlFor="">Payment by</label>
            <select name="" id="">
              <option value="">Person</option>
              <option value="">.....</option>
            </select>
          </form>
        </div>
        <div className='head-middle-div'>
          <label htmlFor="">Payer</label>
          <input className='special-input' type="text" placeholder='Donna Morris'/>
        </div>
        <div className='head-right-div'>
          <button>+ Add person</button>
        </div>
      </div>
      <div className='table-div'>
          <table>
            <tr>
              <th><div className='table-small-box'></div></th>
              <th className='special-text'>Room 1 Single</th>
              <th>COST</th>
              <th>QTY</th>
              <th>PRICE</th>
            </tr>
            <tr>
              <td>1</td>
              <td><input className='special-input' type="text" placeholder='Room 1 single'/></td>
              <td><input type="text" placeholder='$ 50'/></td>
              <td><input type="text" placeholder='04'/></td>
              <td><input type="text" placeholder='$ 200'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td><input className='special-input' type="text" placeholder='Room 1 single'/></td>
              <td><input type="text" placeholder='$ 50'/></td>
              <td><input type="text" placeholder='04'/></td>
              <td><input type="text" placeholder='$ 200'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td><input className='special-input' type="text" placeholder='Room 1 single'/></td>
              <td><input type="text" placeholder='$ 50'/></td>
              <td><input type="text" placeholder='04'/></td>
              <td><input type="text" placeholder='$ 200'/></td>
            </tr>
            <tr>
              <td>1</td>
              <td><input className='special-input' type="text" placeholder='Room 1 single'/></td>
              <td><input type="text" placeholder='$ 50'/></td>
              <td><input type="text" placeholder='04'/></td>
              <td><input type="text" placeholder='$ 200'/></td>
            </tr>
          </table>
          <div className='table-button-div'>
            <div>
              <button className='table-button-one'>+ Add Service</button>
              <button className='table-button-two'>+ New Service</button>
            </div>
          </div>
        </div>
        <div className='bottom-div'>
          <div className="billing-bottom-div">
            <div className="border-line">
              <div className="billing-bottom-inner-div">
               <p>Total</p>
               <p>$ 265.00</p>
              </div>
              <div className="billing-bottom-inner-div">
               <p>paid</p>
                <button className='billing-bottom-inner-btn-border'>$ 000.00</button>
              </div>
            </div>
            <div className="billing-bottom-inner-div-one">
              <p>Amount Due</p>
              <h4 className='billing-bottom-highlight-text'>$ 265.00</h4>
           </div>
          </div>
        </div>
        <div className='bottom-button-first-div'>
          <div>
            <div>
              <button className='btn-one'>Save</button>
              <button className='btn-two'>Cancel</button>
            </div>
          </div>
          <div>
            <button className='btn-three'>Save & create invoice</button>
          </div>
        </div>
    </div>
  )
}

export default BillingTable