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


const columns = [
  {
    title: 'Room Name',
    subTitle: '',
    key: 'roomName',
    sort: true,

  },
  {
    title: 'Room Type',
    subTitle: '',
    key: 'roomType',
    sort: true,
    component: 'select'
  },
  {
    title: 'Max Persons',
    subTitle: '(per rooms)',
    key: 'maxPersons',
    sort: true
  },
  {
    title: 'Room Price',
    subTitle: '(regular use)',
    key: 'regularUseRoomPrice',
    sort: true
  },
  {
    title: '',
    subTitle: '',
    key: 'actions',
    sort: false,
    component: 'action'

  },

]



export const Primary = (args) => <Tables {...args} />;

Primary.args = {
  type: 'room',
  dataSource: data,
};
