import React from 'react'
import "./styles.css";


function InfoTable(props) {
    return (
        <div>
            <div className='table-info'>
                <div className='full-table'>
                    <div className='table-side'>
                        {
                            props.infoTableData?.map((obj)=> {
                                return (
                                    <li className='list'>
                                        <li>{obj.label +":"}</li>
                                        <li></li>
                                        <li>{obj.value}</li>
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