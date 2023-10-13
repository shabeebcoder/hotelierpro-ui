import React from "react";
import Tables, { InvoiceTable } from "./tables";
import RoomListTable from "./RoomListTable"
import { Space, Table, Tag, Select } from "antd";
import type { ColumnsType } from "antd/es/table";


import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";

export default {
  title: "components/Tables",
  argTypes: {
    onClick: { action: "onClick" },
  },
};


interface DataType {
  key: string;
  roomName: string;
  roomType: any[];
  maxPersons: number;
  singleUseRoomPrice: number;
  regularUseRoomPrice: number;
}

const roomListData: DataType[] = [
  {
    key: "1",
    roomName: "Room 1",
    roomType: [
      { value: "1234", label: "Single" },
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

const roomTypeData: any = [
  {
    key: "1",
    roomName: "Room 1",
    numberOfRooms: 2,
    maxPersons: 2,
    singleUseRoomPrice: 20,
    regularUseRoomPrice: 30,
  },
  {
    key: "2",
    roomName: "Room 1 regular",
    numberOfRooms: 2,

    maxPersons: 3,
    singleUseRoomPrice: 30,
    regularUseRoomPrice: 50,
  },
  {
    key: "3",
    roomName: "Room 3",
    numberOfRooms: 2,

    maxPersons: 4,
    regularUseRoomPrice: 100,
    singleUseRoomPrice: 40,
  },
];

const guestsData = [
  {
    key: "1",
    fullName: 'Donna Morris',
    passportId: '1234567890ABV',
    country: 'India',
    address: 'Test, Test Address, Test Address',
    email: 'donnamorris@gmail.com',
    phone: '9988776655'
  },
  {
    key: "2",
    fullName: 'Matteo Adamo',
    passportId: '1234567890ABV',
    country: 'India',
    address: 'Test, Test Address, Test Address',
    email: 'donnamorris@gmail.com',
    phone: '9988776655'
  }
]
const companyData = [
  {
    key: "1",
    fullName: 'Donna Morris',
    companyId: '1234567890ABV',
    bank: '$$',
    bankAccount: '11111111111',
    country: 'India',
    address: 'Test, Test Address, Test Address',
    email: 'donnamorris@gmail.com',
    phone: '9988776655',
    contactPerson: 'ABC'
  },
  {
    key: "2",
    fullName: 'Matteo Adamo',
    companyId: '1234567890ABV',
    bank: '$$',
    bankAccount: '11111111111',
    passportId: '1234567890ABV',
    country: 'India',
    address: 'Test, Test Address, Test Address',
    email: 'donnamorris@gmail.com',
    phone: '9988776655',
    contactPerson: 'ABC'

  }
]

const servicesData = [
  {
    key: "1",
    serviceName: 'Beef Steak',
    price: '$ 12',
    serviceCategory: 'Food'
  },
  {
    key: "2",
    serviceName: 'Coco Cola',
    price: '$ 4',
    serviceCategory: 'Drinks'
  },
  {
    key: "3",
    serviceName: 'Coffee',
    price: '$ 6',
    serviceCategory: 'Drinks'
  },
  {
    key: "4",
    serviceName: 'Cuba Libre',
    price: '$ 7',
    serviceCategory: '7'
  }
  , {
    key: "5",
    serviceName: 'Ice Cream',
    price: '$ 2',
    serviceCategory: 'Food'
  },
  {
    key: "6",
    serviceName: 'Massage',
    price: '$ 12',
    serviceCategory: 'Genaral Service'
  }
];
const servicescateGoryData = [
  {
    key: "1",

    serviceCategory: 'Food'
  },
  {
    key: "2",

    serviceCategory: 'Drinks'
  },
  {
    key: "3",

    serviceCategory: 'Drinks'
  },
  {
    key: "4",

    serviceCategory: 'Rafting'
  }
  , {
    key: "5",

    serviceCategory: 'Food'
  },
  {
    key: "6",

    serviceCategory: 'Genaral Service'
  }
];


const invoiceListData = [
  {
    key: "1",
    id: 1,
    invoiceNumber: '#INV-20230723-2',
    client: 'Donna Morris',
    date: moment('27/07/2023', "DD/MM/YYYY").toString(),
    status: {
      options: [{ value: "draft", label: "Draft" },
      { value: "paid", label: "Paid" },
      { value: "sent", label: "Sent" },],
      defaultValue: 'sent'
    },
    total: '$ 245',
    notes: 'abcdsd'
  },
  {
    key: "2",

    invoiceNumber: '#INV-20230723-2',
    client: 'Donna Morris',
    date: '07/23/2023',
    status: [],
    total: '$ 245',
    notes: 'abcdsd'
  },
  {
    key: "3",

    invoiceNumber: '#INV-20230723-2',
    client: 'Donna Morris',
    date: '07/23/2023',
    status: [],
    total: '$ 245',
    notes: 'abcdsd'
  },
  {
    key: "4",

    invoiceNumber: '#INV-20230723-2',
    client: 'Donna Morris',
    date: '07/23/2023',
    status: [],
    total: '$ 245',
    notes: 'abcdsd'
  }
  , {
    key: "5",

    invoiceNumber: '#INV-20230723-2',
    client: 'Donna Morris',
    date: '07/23/2023',
    status: [],
    total: '$ 245',
    notes: 'abcdsd'
  },
  {
    key: "6",
    invoiceNumber: '#INV-20230723-2',
    client: 'Donna Morris',
    date: '07/23/2023',
    status: [],
    total: '$ 245',
    notes: 'abcdsd'
  }
];
const handleOnSave = (dataToSave) => {
  alert(JSON.stringify(dataToSave))
  console.log("Save Function", dataToSave)
}

const HandleOnDelete = (dataToDelete) => {
  alert(JSON.stringify(dataToDelete))
  console.log("dataToDelete===>", dataToDelete)
}

const handleHasSingleUse = (hasSingleUse) => {
  console.log("hasSingUse======>", hasSingleUse)
}
const handleRoomType = (value) => {
  alert(JSON.stringify(value))
}

export const RoomList = (args) => <RoomListTable {...args} />;
export const RoomType = (args) => <Tables {...args} />;
export const Guests = (args) => <Tables {...args} />;
export const Companies = (args) => <Tables {...args} />;
export const Services = (args) => <Tables {...args} />;
export const ServiceCategory = (args) => <Tables {...args} />;
export const InvoiceList = (args) => <InvoiceTable {...args} />;

RoomList.args = {
  type: 'room',
  dataSource: roomListData,
  onDelete: HandleOnDelete,
  onSave: handleOnSave,
  handleRoomType: handleRoomType

};
Guests.args = {
  type: 'room',
  dataSource: guestsData,
  type: 'guests',
};
Companies.args = {
  type: 'room',
  dataSource: companyData,
  type: 'companies',
};
Services.args = {
  type: 'room',
  dataSource: servicesData,
  type: 'services',
};
ServiceCategory.args = {
  type: 'room',
  dataSource: servicescateGoryData,
  type: 'serviceCategory',
  styles: {
    maxWidth: 400
  }
};
InvoiceList.args = {

  dataSource: invoiceListData,
  type: 'invoiceList',
  onDelete: (data) => console.log(data),
  markAs: (mark, selectedRows) => console.log(mark, selectedRows)

};

companyData


RoomType.args = {
  type: 'roomType',
  dataSource: roomTypeData,
  onSave: handleOnSave,
  onDelete: HandleOnDelete,
  hasSingleUse: handleHasSingleUse
};
