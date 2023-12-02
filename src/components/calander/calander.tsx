import React from 'react'
import classNames from 'classnames';
// import { useTable } from 'react-table';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

import moment from 'moment';
import BookingInfo from "./bookingInfo"




function calander({
    calanderColumns = [],
    calanderRows = []
}: any) {

    const columnHelper: any = createColumnHelper();
    const columns = React.useMemo(() => {
        const column = calanderColumns.map((row: any, index) =>
        (columnHelper.accessor(String(index === 0 ? 'roomName' : row.date),
            {
                header: info => {
                    let heading;
                    if (index !== 0) {

                        heading = moment(row.date).format("DD");
                    } else {
                        heading = row.date;

                    }

                    return <span>{heading}</span>
                },
                cell: info => {
                    const value = info.getValue();
                    if (value.isBooked) {
                        return <BookingInfo>
                            <span className="xl:block lg:block md:block sm:block hidden" onClick={() => alert(JSON.stringify(value?.info))}>
                                B
                            </span>
                        </BookingInfo>



                    } else {
                        return <span className="xl:block lg:block md:block sm:block hidden" ></span>

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
                                <td style={{ width: index === 0 ? 100 : 60, height: 60 }} className="border  transition cursor-pointer ease hover:bg-gray-300 " key={cell.id}>
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