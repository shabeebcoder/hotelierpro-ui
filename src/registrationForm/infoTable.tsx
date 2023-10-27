import React from 'react'
import "./styles.css";
import { Button } from 'antd';


function InfoTable(props) {
    return (
        <>
            <div className='table-main-div'>
            <div className='table-user-data-head-div'>
                <Button className='registrationForButton'>Registation Form</Button>
            </div>
        </div><div className='table-user-data-div'>
                <table className='table-user-data'>
                    {
                        props.infoTableData.map((obj,index)=>{
                            const tableRowCount = props.infoTableData.length;
                            if(index+1===tableRowCount){
                                return (
                                    <><tr>
                                <td>{obj.label}&nbsp;:&nbsp;{obj.value}</td>
                                <td>{obj.label1}&nbsp;:&nbsp;{obj.value1}</td>
                                <td>{obj.label2}&nbsp;:&nbsp;{obj.value2}</td>
                            </tr></>
                                )
                            }
                            return (
                               <><tr>
                                <td>{obj.label}&nbsp;:&nbsp;{obj.value}</td>
                                <td></td>
                                <td>{obj.label1}&nbsp;:&nbsp;{obj.value1}</td>
                            </tr></>
                            )
                        })
                    }
                </table>
            </div>
       
            </>
    )
}

export default InfoTable