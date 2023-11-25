import React from 'react'
import DataTable from '../../Data-table/data-table'
import { columns } from "./room-table-column"


function RoomTable({data}) {
  return (
      <div>
          <DataTable data={data} columns={columns} />
    </div>
  )
}

export default RoomTable