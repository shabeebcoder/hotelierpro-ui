import React from 'react'
import "./styles.css";
import Header from "./header";
import InfoTable from './infoTable';
import PoliciesInfo from './policyInfo';
import ServicesTable from './services';
import { z } from "zod"
import { Button } from 'antd';
import moment from 'moment';

const stringToDate = z.string().transform((str) => new Date(str));
const dateSchema = z.union([stringToDate, z.date()]);

export const registrationFormSchema = z.object({
    hotelName: z.string(),
    hotelAddres: z.string(),
    arrival: dateSchema,
    departure: dateSchema,
    name: z.string(),
    stayLength: z.coerce.number(),
    roomType: z.string(),
    email: z.string(),
    roomAmount: z.coerce.number(),
    checkIn: dateSchema,
    checkInTime: dateSchema,
    nationality: z.string(),
    numberOfPerson: z.coerce.number(),
    passport: z.string(),
    deposit: z.coerce.number(),
    dueAmount: z.coerce.number(),
    services: z.array(z.object({
        item: z.string(),
        cost: z.coerce.number(),
        qty: z.coerce.number(),
        total: z.coerce.number(),
        date: dateSchema.optional(),
    })),
    policies: z.array(z.object({
        policy: z.string()
    }))

});

export type IRegistrationForm = z.infer<typeof registrationFormSchema>

function RegistrationForm(props: IRegistrationForm) {
    return (
        <div className='registrationFormContainer'>
            <div className='main'>
                <div className='header-main'>
                    <div className='left-side'>
                        <div className='left-div'>
                            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="52" height="29" viewBox="0 0 52 29" fill="none">
                                <path d="M9.0811 1.78388C9.0811 0.797172 9.76957 0 10.6217 0H32.1905C33.0426 0 33.7311 0.797172 33.7311 1.78388C33.7311 2.77059 33.0426 3.56776 32.1905 3.56776V24.9743C33.0426 24.9743 33.7311 25.7715 33.7311 26.7582C33.7311 27.7449 33.0426 28.5421 32.1905 28.5421H23.717V25.8663C23.717 24.389 22.6819 23.1905 21.4061 23.1905C20.1303 23.1905 19.0952 24.389 19.0952 25.8663V28.5421H10.6217C9.76957 28.5421 9.0811 27.7449 9.0811 26.7582C9.0811 25.7715 9.76957 24.9743 10.6217 24.9743V3.56776C9.76957 3.56776 9.0811 2.77059 9.0811 1.78388ZM13.703 6.24359V8.02747C13.703 8.51803 14.0496 8.91941 14.4733 8.91941H16.0139C16.4376 8.91941 16.7842 8.51803 16.7842 8.02747V6.24359C16.7842 5.75302 16.4376 5.35164 16.0139 5.35164H14.4733C14.0496 5.35164 13.703 5.75302 13.703 6.24359ZM20.6358 5.35164C20.2121 5.35164 19.8655 5.75302 19.8655 6.24359V8.02747C19.8655 8.51803 20.2121 8.91941 20.6358 8.91941H22.1764C22.6001 8.91941 22.9467 8.51803 22.9467 8.02747V6.24359C22.9467 5.75302 22.6001 5.35164 22.1764 5.35164H20.6358ZM26.028 6.24359V8.02747C26.028 8.51803 26.3746 8.91941 26.7983 8.91941H28.3389C28.7626 8.91941 29.1092 8.51803 29.1092 8.02747V6.24359C29.1092 5.75302 28.7626 5.35164 28.3389 5.35164H26.7983C26.3746 5.35164 26.028 5.75302 26.028 6.24359ZM14.4733 10.7033C14.0496 10.7033 13.703 11.1047 13.703 11.5952V13.3791C13.703 13.8697 14.0496 14.2711 14.4733 14.2711H16.0139C16.4376 14.2711 16.7842 13.8697 16.7842 13.3791V11.5952C16.7842 11.1047 16.4376 10.7033 16.0139 10.7033H14.4733ZM19.8655 11.5952V13.3791C19.8655 13.8697 20.2121 14.2711 20.6358 14.2711H22.1764C22.6001 14.2711 22.9467 13.8697 22.9467 13.3791V11.5952C22.9467 11.1047 22.6001 10.7033 22.1764 10.7033H20.6358C20.2121 10.7033 19.8655 11.1047 19.8655 11.5952ZM26.7983 10.7033C26.3746 10.7033 26.028 11.1047 26.028 11.5952V13.3791C26.028 13.8697 26.3746 14.2711 26.7983 14.2711H28.3389C28.7626 14.2711 29.1092 13.8697 29.1092 13.3791V11.5952C29.1092 11.1047 28.7626 10.7033 28.3389 10.7033H26.7983ZM24.8725 21.4066C25.5128 21.4066 26.0424 20.7989 25.8835 20.0798C25.3732 17.7663 23.563 16.0549 21.4061 16.0549C19.2492 16.0549 17.4342 17.7663 16.9287 20.0798C16.7698 20.7934 17.3042 21.4066 17.9397 21.4066H24.8725Z" fill="white" />
                                <path d="M36.5486 2.5938C35.0412 2.60038 33.6444 2.91273 32.9633 3.13038C32.9633 3.13038 39.1413 4.2008 39.6552 8.55523C34.9606 1.64436 29.8399 10.0023 29.8399 10.0023C30.9075 9.71639 33.9647 8.86763 36.0062 9.22568C37.4029 9.47065 38.7644 10.7635 38.7057 10.7473C35.3771 11.5834 30.089 26.7086 30.9869 27.9369C31.7876 28.8762 32.5892 28.5558 33.3899 28.0793C33.7863 24.8738 36.8795 10.8097 40.6645 11.945C40.665 11.9452 40.6656 11.9448 40.6661 11.945C40.9848 12.0564 41.2862 12.2517 41.3026 12.5502C41.3337 13.1187 40.9742 14.048 41.0592 14.6934C41.2559 16.191 41.5432 16.7119 41.9608 17.2343C42.9584 16.6618 43.9129 14.5977 44.1103 13.5274C45.0042 13.9271 46.441 14.8527 47.6132 18.2904C48.226 15.069 47.3423 12.528 44.4412 11.3997C45.6975 10.8452 51.1659 13.6508 51.8333 15.2144C52.4827 12.3949 47.8893 8.9446 44.065 9.12796C44.7982 8.93264 45.6039 9.16088 46.3706 8.58441C47.3995 7.81093 48.5993 7.14475 49.7173 6.4292C45.9573 4.75938 42.4874 5.58389 42.243 7.31226C42.051 3.4763 39.1354 2.58266 36.5486 2.59385L36.5486 2.5938Z" fill="white" />
                                <path d="M8.12512 14.2735C8.92317 14.2771 9.66266 14.4489 10.0232 14.5686C10.0232 14.5686 6.75253 15.1573 6.48045 17.5522C8.96584 13.7513 11.6768 18.3482 11.6768 18.3482C11.1116 18.1909 9.49308 17.7241 8.41231 17.921C7.67287 18.0557 6.95204 18.7668 6.98316 18.7579C8.74536 19.2177 11.5449 27.5366 11.0695 28.2122C10.6457 28.7288 10.2213 28.5526 9.79737 28.2905C9.58753 26.5275 7.94996 18.7922 5.94612 19.4166C5.94584 19.4167 5.94555 19.4165 5.94527 19.4166C5.77657 19.4779 5.61697 19.5853 5.60832 19.7495C5.59182 20.0622 5.78214 20.5733 5.73719 20.9282C5.63302 21.7519 5.48096 22.0384 5.25982 22.3258C4.7317 22.0109 4.2264 20.8756 4.12188 20.287C3.64866 20.5068 2.88797 21.0159 2.26739 22.9066C1.94296 21.1348 2.41083 19.7373 3.94672 19.1167C3.28159 18.8118 0.386587 20.3548 0.033226 21.2148C-0.310577 19.664 2.12125 17.7664 4.14586 17.8673C3.7577 17.7598 3.33114 17.8854 2.92524 17.5683C2.38056 17.1429 1.74535 16.7765 1.15345 16.3829C3.14406 15.4645 4.98108 15.918 5.11044 16.8686C5.21209 14.7588 6.75563 14.2673 8.12515 14.2735L8.12512 14.2735Z" fill="white" />
                            </svg>
                            <h1 className='logo-text'>HotelierPro</h1>
                        </div>
                    </div>
                    <div className='right-side'>
                        <h1>{props.hotelName}</h1>
                        <h3>{props.hotelAddres}</h3>

                    </div>
                </div>
            </div>
            <div className='internalContiner'>
                <div className='table-main-div'>
                    <div className='table-user-data-head-div'>
                        <Button className='registrationForButton'>Registation Form</Button>
                    </div>
                </div><div className='table-user-data-div'>
                    <table className='table-user-data'>
                        <tbody>
                            <tr>
                                <td>Arrival Date&nbsp;:&nbsp;{moment(new Date(props.arrival)).format("DD/MM/YYYY")}</td>
                                <td></td>
                                <td>Departure  Date&nbsp;:&nbsp;{moment(new Date(props.departure)).format("DD/MM/YYYY")}</td>
                            </tr>
                            <tr>
                                <td>Name&nbsp;:&nbsp;{props.name}</td>
                                <td></td>
                                <td>Check In Time&nbsp;:&nbsp;{moment(new Date(props.checkInTime)).format("DD/MM/YYYY")}</td>
                            </tr>
                            <tr>
                                <td>Nationality&nbsp;:&nbsp;{props.nationality}</td>
                                <td></td>
                                <td>Length of stay&nbsp;:&nbsp;{props.stayLength}</td>
                            </tr>
                            <tr>
                                <td>Room Type&nbsp;:&nbsp;{props.roomType}</td>
                                <td></td>
                                <td>No of Person&nbsp;:&nbsp;{props.numberOfPerson}</td>
                            </tr>

                            <tr>
                                <td>Email/Phone&nbsp;:&nbsp;{props.email}</td>
                                <td></td>
                                <td>Passport No&nbsp;:&nbsp;{props.passport}</td>
                            </tr>

                            <tr>
                                <td>Room Amount&nbsp;:&nbsp;{props.roomAmount}</td>
                                <td>Deposit  Amount&nbsp;:&nbsp;{props.deposit}</td>
                                <td>Due Amount&nbsp;:&nbsp;{props.dueAmount}</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
                <div className='policy-div'>
                    <div>
                        <h2 className='policy-text mb-2'>Terms & Conditions</h2>
                    </div>
                    <div>
                        <ul className='policy-para'>
                            {
                                props.policies.map((value) => {
                                    return (
                                        <li>{value.policy}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <h5 className='policy-text-one'>Check by:</h5>
                    <div className='signeture-div'></div>
                    <h5 className='signeture-text'>Signature</h5>
                </div>
                <div>
                    <div className='table-two-div'>
                        <table className='table-two'>
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>TYPE</th>
                                    <th>QY</th>
                                    <th>AMOUNT</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    props.services?.map((value) => {
                                        return (
                                            <tr>
                                                <td>{moment(new Date(value.date)).format("DD/MM/YYYY")}</td>
                                                <td>{value.item}</td>
                                                <td>{value.qty}</td>
                                                <td>{value.cost}</td>
                                                <td>{value.total}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm