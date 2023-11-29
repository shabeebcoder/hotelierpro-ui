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




function calander({
    calanderColumns = [],
    calanderRows = []
}: any) {


    const columnHelper: any = createColumnHelper()
    const columns = React.useMemo(() => {
        const column = calanderColumns.map((date: any) => (columnHelper.accessor(`${moment(date).format('DD')}`, {
            cell: info => <span className="xl:block lg:block md:block sm:block hidden">{info.getValue()}</span>,
            footer: info => info.column.id,
        })));
        return column;
    }, []);


    const table = useReactTable({
        data: calanderRows,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })


    return (
        <>


            <table className="w-full">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (


                                <th className="p-2 border h-10  xl:text-sm text-xs" key={header.id}>
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
                    {table.getRowModel().rows.map(row => (
                        <tr className="text-center h-10" key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td className="border   overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 " key={cell.id}>

                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}

                                </td>

                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </>)
}

export default calander