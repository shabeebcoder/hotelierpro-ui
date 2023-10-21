import React from "react";
import { Space, Table, Tag, Select } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";




interface DataType {
  key: string;
  roomName: string;
  roomType: any;
  maxPerson: number;
  regularUsePrice: number;
  singleusePrice: number;
}

interface Props {
  columns?: ColumnsType<DataType>;
  dataSource: DataType[];
  type: 'room'
}


interface RoomTableDataType {
  key: string;
  roomName: string;
  roomType: any[];
  maxPersons: number;
  singleUseRoomPrice: number;
  regularUseRoomPrice: number;
}








const Tables: any = (props: Props) => {



  let columns = [];



  const handleRender = ({ data, component, row }) => {
    if (component === "select") {
      return (
        <>
          <Select
            defaultValue={data[0]?.label}
            style={{ width: 120 }}
            options={data}
          />
        </>
      );
    }
    else if (component === "action") {

      return (<Space size="middle">
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "#2496FF2E",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a onClick={() => alert(`edited`)}>
            <EditOutlined />
          </a>
        </div>
        <div
          style={{
            height: "25px",
            width: "25px",
            backgroundColor: "#F4636D2E",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a onClick={() => alert(JSON.stringify(row))}>
            <DeleteOutlined style={{ color: "#F04551" }} />
          </a>
        </div>
      </Space>)
    }

    else {
      return data || ''
    }

  }



  props.columns.map((row: any) => {
    columns.push(
      {
        title: row['title'],
        dataIndex: row['key'],
        key: row['key'],
        render: (data) => handleRender({
          component: row?.component || 'text',
          data,
          row
        }),
        ...(row.sort && { sorter: (a, b) => a['key'].length - b['key'].length }),
      },
    )
  })


  return (<Table {...props} columns={columns} />)



};



export default Tables;
