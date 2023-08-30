import React from "react";
import Tables from "./tables";
import { Space, Table, Tag, Select } from "antd";
import type { ColumnsType } from "antd/es/table";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export default {
  title: "elements/Tables",
};

interface DataType {
  key: string;
  roomName: string;
  roomType: any[];
  maxPersons: number;
  singleUseRoomPrice: number;
  regularUseRoomPrice: number;
}

const data: DataType[] = [
  {
    key: "1",
    roomName: "Room 1",
    roomType: [
      { value: "single", label: "Single" },
      { value: "double", label: "Double" },
      { value: "deluxe", label: "Deluxe" },
    ],
    maxPersons: 2,
    singleUseRoomPrice: 20,
    regularUseRoomPrice: 30,
  },
  {
    key: "2",
    roomName: "Room 1 regular",
    roomType: [
      { value: "single", label: "Single" },
      { value: "double", label: "Double" },
      { value: "deluxe", label: "Deluxe" },
    ],
    maxPersons: 3,
    singleUseRoomPrice: 30,
    regularUseRoomPrice: 50,
  },
  {
    key: "3",
    roomName: "Room 3",
    roomType: [
      { value: "single", label: "Single" },
      { value: "double", label: "Double" },
      { value: "deluxe", label: "Deluxe" },
    ],
    maxPersons: 4,
    regularUseRoomPrice: 100,
    singleUseRoomPrice: 40,
  },
];

const columns: ColumnsType<DataType> = [
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
            // onChange={() => console.log(item)}
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

export const Primary = (args) => <Tables {...args} />;

Primary.args = {
  columns: columns,
  dataSource: data,
};
