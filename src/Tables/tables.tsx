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

  const RoomTableColumns: ColumnsType<RoomTableDataType> = [
    {
      title: "Room Name",
      dataIndex: "roomName",
      key: "roomName",
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
    },
    {
      title: "Room Type",
      dataIndex: "roomType",
      key: "roomType",
      render: (items: any) => {
        return (
          <>
            <Select
              defaultValue={items[0]?.label}
              style={{ width: 120 }}
              options={items}
            />
          </>
        );
      },
    },
    {
      title: () => {
        return (
          <>
            Max Persons
            <br />
            (per rooms)
          </>
        );
      },
      dataIndex: "maxPersons",
      key: "maxPersons",
      sorter: (a, b) => a.maxPersons - b.maxPersons,
    },
    {
      title: () => {
        return (
          <>
            Room Price
            <br />
            (regular use)
          </>
        );
      },
      dataIndex: "regularUseRoomPrice",
      key: "regularUseRoomPrice",
      sorter: (a, b) => a.regularUseRoomPrice - b.regularUseRoomPrice,
    },
    {
      title: () => {
        return (
          <>
            Room Price
            <br />
            (single use)
          </>
        );
      },
      dataIndex: "singleUseRoomPrice",
      key: "singleUseRoomPrice",
      sorter: (a, b) => a.singleUseRoomPrice - b.singleUseRoomPrice,
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
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
            <a onClick={() => alert(`${record.roomName} edited`)}>
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
            <a onClick={() => alert(`${record.roomName} deleted`)}>
              <DeleteOutlined style={{ color: "#F04551" }} />
            </a>
          </div>
        </Space>
      ),
    },
  ];

  let columns = [];
  if (props.type == 'room') {



    columns = RoomTableColumns
  }

  return (<Table {...props} columns={columns} />)



};



export default Tables;
