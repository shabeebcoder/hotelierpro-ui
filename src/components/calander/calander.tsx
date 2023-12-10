import React from 'react'
import classNames from 'classnames';
// import { useTable } from 'react-table';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { HomeIcon } from "@radix-ui/react-icons"

import moment from 'moment';
import BookingInfo from "./bookingInfo"
import CalanderCard from "./../calendarCard/calendarCard"
import { Badge } from "./../../elements/Badge/badge"


interface calanderProps {
    calanderColumns: any,
    calanderRows: any,
    handleActions: any,
    handleStatusChange: any
}


function calander({
    calanderColumns = [],
    calanderRows = [],
    handleActions,
    handleStatusChange
}: calanderProps) {

    const columnHelper: any = createColumnHelper();
    const columns = React.useMemo(() => {
        const column = calanderColumns.map((row: any, index) =>
        (columnHelper.accessor(String(index === 0 ? 'roomName' : row.date),
            {
                header: info => {
                    let heading;
                    const isSameDay = moment(row.date).isSame(new Date(), 'day');
                    if (index !== 0) {

                        heading = moment(row.date).format("DD");
                    } else {
                        return <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='flex ' style={{
                                backgroundColor: '#3A7C7C',
                                color: 'white',
                                borderRadius: 6,
                                padding: 8,
                                // maxWidth: 120,
                                justifyContent: 'space-between',
                                alignItems: 'center'

                            }}>
                                {row.date}
                                &nbsp;
                                |
                                &nbsp;
                                <HomeIcon className="mr-2 h-4 w-4" />
                            </div>
                        </div>

                    }

                    return <div
                        style={isSameDay ?
                            {
                                backgroundColor: '#3A7C7C',
                                color: 'white', borderRadius: 6
                            } : {}
                        }>

                        {moment(row.date).format("ddd").toUpperCase()}<br />{heading}

                    </div>
                },
                cell: info => {
                    const value = info.getValue();

                    if (index === 0) {

                        return value || "N/A"
                    }



                    if (value.isBooked) {
                        return <BookingInfo
                            handleActions={handleActions}
                            handleStatusChange={handleStatusChange}
                            info={value.info}>
                            <Badge className={classNames("bg-emerald-600", {
                                "bg-emerald-600": value?.info.status === "confirmed",
                                "bg-yellow-600": value?.info.status === "newBooking",
                                "bg-orange-600": value?.info.status === "checkin",
                                "bg-red-600": value?.info.status === "checkout",
                            })} style={{ position: 'absolute', fontWeight: 'normal' }}> {value?.info?.guestName || ''}</Badge>
                        </BookingInfo>



                    } else {
                        return <span></span>;

                    }
                },
            }
        )));
        return column;
    }, []);

    const table = useReactTable({
        data: calanderRows,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })


    return (
        <div style={{ width: '100%', overflowX: 'scroll' }}>
            <table className="" style={{ width: "100%", tableLayout: 'fixed' }}>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, index) => (
                                <th style={{ width: index === 0 ? 200 : 60, height: 60 }} className="p-2 border h-10  xl:text-sm text-xs" key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, index) => (
                        <tr className="text-center" key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td style={{ width: index === 0 ? 100 : 60, height: 60, position: 'relative' }} className="border  transition cursor-pointer ease  " key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>)
}

export default calander