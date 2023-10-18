import React from 'react'
import "./styles.css";


function InfoTable(props) {
    return (
        <div>
            <div className='table-info'>
                <div className='full-table'>
                    <div className='table-side'>
                        {
                            props.infoTableData.map((list)=>{
                                return (
                                    <li className='list'>
                                        <li>{list.label + ":"}</li>
                                        <li></li>
                                        <li>{list.value}</li>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoTable