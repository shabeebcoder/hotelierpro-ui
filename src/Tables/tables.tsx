import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Select, Input, InputNumber, Form, Button, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, SearchOutlined, DeleteOutlined, SaveOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import './table.css';
import InvoiceTable from "./invoiceTable"

interface DataType {
  key: string;
  roomName: string;
  roomType: any;
  maxPerson: number;
  regularUsePrice: number;
  editable?: boolean;
  singleusePrice: number;

}

interface Props {
  columns?: ColumnsType<DataType>;
  dataSource: DataType[];
  type: 'room' | 'roomType' | 'guests' | 'companies' | 'services' | 'serviceCategory' | 'invoiceList'
  onSave: any
  onDelete?: any
  styles?: any
}


interface RoomTableDataType {
  key: string;
  roomName: string;
  roomType: any[];
  maxPersons: number;
  singleUseRoomPrice: number;
  regularUseRoomPrice: number;
  editable?: boolean
  inputType?: any
}

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}





const Tables: any = (props: Props) => {
  // const originData: Item[] = [];

  // const [tableData, setTableData] = useState([]);
  const [tableColumn, setTableColumn] = useState([]);
  const [form] = Form.useForm();
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  const [data, setData] = useState(props.dataSource);

  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    console.log("edit ======>", record)
    setEditingKey(record.key);
  };
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const save = async (record: any) => {
    try {
      const row = (await form.validateFields()) as Item;

      console.log("saveRow===>", row)
      const newData = [...data];

      const index = newData.findIndex((item) => record.key === item.key);
      if (index > -1) {
        const item = newData[index];
        console.log("row===>", item)
        // newData.splice(index, 1, {
        //   ...item,
        //   ...row,
        // });
        // setData(newData);
        setEditingKey('');
      } else {


        // newData.push(row);
        // setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };


  const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ?
      <InputNumber style={{ textAlign: 'center' }} className="editableInput" placeholder="number" defaultValue={record[dataIndex]} /> :
      <Input style={{ borderRadius: '0px' }} defaultValue={record ? record[dataIndex] : ''} />;

    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  }

  const RoomTableColumns: any = [
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Room Name
            </span>
          </div>)
      },
      dataIndex: "roomName",
      key: "roomName",
      width: '30%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Room Types
            </span>
          </div>)
      },
      dataIndex: "roomType",
      key: "roomType",
      render: (items: any) => {
        return (
          <>
            <Select
              defaultValue={items && items[0]?.label}
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
          <div style={{ textAlign: 'center' }}>
            <span className="title">

              Max Persons
            </span>
            <br />
            <span className="subTitle">

              (per rooms)
            </span>
          </div>

        );
      },
      dataIndex: "maxPersons",
      key: "maxPersons",
      className: 'textCenter',
      sorter: (a, b) => a.maxPersons - b.maxPersons,
    },
    {
      title: () => {
        return (
          <>
            <div style={{ textAlign: 'center' }}>
              <span className="title">
                Room Price
              </span>
              <br />
              <span className="subTitle">
                (regular use)
              </span>
            </div>
          </>
        );
      },
      dataIndex: "regularUseRoomPrice",
      key: "regularUseRoomPrice",
      sorter: (a, b) => a.regularUseRoomPrice - b.regularUseRoomPrice,
      editable: true,
      className: 'textCenter'
    },
    {
      title: () => {
        return (
          <>
            <div style={{ textAlign: 'center' }}>
              <span className="title">

                Room Price
              </span>
              <br />
              <span className="subTitle">

                (single use)
              </span>
            </div>
          </>
        );
      },
      dataIndex: "singleUseRoomPrice",
      key: "singleUseRoomPrice",
      editable: true,
      className: 'textCenter',
      sorter: (a, b) => a.singleUseRoomPrice - b.singleUseRoomPrice,
    },
    {
      title: "",
      key: "action",
      width: '10%',
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
            <a onClick={() => edit(record)}>
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
              <SaveOutlined />
            </a>

          </div>
          <div onClick={() => setEditingKey('')}>
            <Button type="default">Cancel</Button>

          </div>

        </Space>
      ),
    },
  ];

  const RoomTypeColumns: any = [
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Room Name
            </span>
          </div>)
      },
      dataIndex: "roomName",
      key: "roomName",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div style={{ textAlign: 'center' }}>
            <span className="title">
              Number of Rooms
            </span>
          </div>
        );
      },
      dataIndex: "numberOfRooms",
      key: "numberOfRooms",
      className: 'textCenter',
      render: (text) => <>{text}</>,
      width: '15%'

    },
    {
      title: () => {
        return (
          <div style={{ textAlign: 'center' }}>
            <div className="title">
              Max Persons
            </div>

            <div className="subTitle">
              (per rooms)
            </div>
          </div>

        );
      },
      dataIndex: "maxPersons",
      key: "maxPersons",
      className: 'textCenter',
      sorter: (a, b) => a.maxPersons - b.maxPersons,
      width: '15%',
      editable: true

    },
    {
      title: () => {
        return (
          <>
            <div style={{ textAlign: 'center' }}>
              <div className="title">
                Room Price
              </div>
              <div className="subTitle">
                (regular use)
              </div>
            </div>
          </>
        );
      },
      dataIndex: "regularUseRoomPrice",
      key: "regularUseRoomPrice",
      sorter: (a, b) => a.regularUseRoomPrice - b.regularUseRoomPrice,
      editable: true,
      className: 'textCenter',
      width: '15%'

    },
    {
      title: () => {
        return (
          <>
            <div style={{ textAlign: 'center' }}>
              <div className="title">
                Room Price
              </div>
              <div className="subTitle">

                (single use)
              </div>
            </div>
          </>
        );
      },
      dataIndex: "singleUseRoomPrice",
      key: "singleUseRoomPrice",
      editable: true,
      className: 'textCenter',
      sorter: (a, b) => a.singleUseRoomPrice - b.singleUseRoomPrice,
      width: '15%'
    },
    {
      title: () => {
        return (
          <>
            <div style={{ textAlign: 'center' }}>
              <span className="title">
                Has Single use
              </span>
            </div>
          </>
        );
      },
      dataIndex: "singleUseRoomPrice",
      key: "singleUseRoomPrice",
      className: 'textCenter',
      sorter: (a, b) => a.singleUseRoomPrice - b.singleUseRoomPrice,
      render: (_, record) => (
        <Checkbox></Checkbox>
      )
    },
    {
      title: "",
      key: "action",
      width: '5%',
      render: (_, record) => (
        <Space size="middle">
          {editingKey !== record.key && (<div
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
            <a onClick={() => edit(record)}>
              <EditOutlined />
            </a>
          </div>)}

          {
            editingKey !== record.key && (<div
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
              <a onClick={() => props.onDelete(record)}>
                <DeleteOutlined style={{ color: "#F04551" }} />
              </a>

            </div>)
          }

          {
            editingKey === record.key && (
              <div
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundColor: "#3A7C7C",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                <a onClick={() => save(record)}>
                  <CheckOutlined style={{ color: 'white' }} />
                </a>

              </div>
            )
          }
          {
            editingKey === record.key && (
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
                <a onClick={() => setEditingKey('')}>
                  <CloseOutlined />
                </a>

              </div>
            )
          }
        </Space >
      ),
    },
  ];

  const GuestsColumns: any = [
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Full Name
            </span>
          </div>)
      },
      dataIndex: "fullName",
      key: "fullName",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Passport ID
            </span>
          </div>)
      },
      dataIndex: "passportId",
      key: "passportId",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Country
            </span>
          </div>)
      },
      dataIndex: "country",
      key: "country",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Address
            </span>
          </div>)
      },
      dataIndex: "address",
      key: "address",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              E-mail
            </span>
          </div>)
      },
      dataIndex: "email",
      key: "email",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Phone
            </span>
          </div>)
      },
      dataIndex: "phone",
      key: "phone",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: "",
      key: "action",
      width: '5%',
      render: (_, record) => (
        <Space size="middle">
          {editingKey !== record.key && (<div
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
            <a onClick={() => edit(record)}>
              <EditOutlined />
            </a>
          </div>)}

          {
            editingKey !== record.key && (<div
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
              <a onClick={() => props.onDelete(record)}>
                <DeleteOutlined style={{ color: "#F04551" }} />
              </a>

            </div>)
          }

          {
            editingKey === record.key && (
              <div
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundColor: "#3A7C7C",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                <a onClick={() => save(record)}>
                  <CheckOutlined style={{ color: 'white' }} />
                </a>

              </div>
            )
          }
          {
            editingKey === record.key && (
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
                <a onClick={() => setEditingKey('')}>
                  <CloseOutlined />
                </a>

              </div>
            )
          }
        </Space >
      ),
    },
  ];

  const CompanyColumns: any = [
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Full Name
            </span>
          </div>)
      },
      dataIndex: "fullName",
      key: "fullName",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Company Id
            </span>
          </div>)
      },
      dataIndex: "companyId",
      key: "companyId",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Bank
            </span>
          </div>)
      },
      dataIndex: "bank",
      key: "bank",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Bank Account
            </span>
          </div>)
      },
      dataIndex: "bankAccount",
      key: "bankAccount",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Country
            </span>
          </div>)
      },
      dataIndex: "country",
      key: "country",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Address
            </span>
          </div>)
      },
      dataIndex: "address",
      key: "address",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              E-mail
            </span>
          </div>)
      },
      dataIndex: "email",
      key: "email",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Phone
            </span>
          </div>)
      },
      dataIndex: "phone",
      key: "phone",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Contact Person
            </span>
          </div>)
      },
      dataIndex: "contactPerson",
      key: "contactPerson",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: "",
      key: "action",
      width: '5%',
      render: (_, record) => (
        <Space size="middle">
          {editingKey !== record.key && (<div
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
            <a onClick={() => edit(record)}>
              <EditOutlined />
            </a>
          </div>)}

          {
            editingKey !== record.key && (<div
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
              <a onClick={() => props.onDelete(record)}>
                <DeleteOutlined style={{ color: "#F04551" }} />
              </a>

            </div>)
          }

          {
            editingKey === record.key && (
              <div
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundColor: "#3A7C7C",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                <a onClick={() => save(record)}>
                  <CheckOutlined style={{ color: 'white' }} />
                </a>

              </div>
            )
          }
          {
            editingKey === record.key && (
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
                <a onClick={() => setEditingKey('')}>
                  <CloseOutlined />
                </a>

              </div>
            )
          }
        </Space >
      ),
    },
  ];

  const ServicesColumn: any = [
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Service Name
            </span>
          </div>)
      },
      dataIndex: "serviceName",
      key: "serviceName",
      width: '30%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,

      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Price
            </span>
          </div>)
      },
      dataIndex: "price",
      key: "price",
      width: '30%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Service Category
            </span>
          </div>)
      },
      dataIndex: "serviceCategory",
      key: "serviceCategory",
      width: '30%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },

    {
      title: "",
      key: "action",
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          {editingKey !== record.key && (<div
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
            <a onClick={() => edit(record)}>
              <EditOutlined />
            </a>
          </div>)}

          {
            editingKey !== record.key && (<div
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
              <a onClick={() => props.onDelete(record)}>
                <DeleteOutlined style={{ color: "#F04551" }} />
              </a>

            </div>)
          }

          {
            editingKey === record.key && (
              <div
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundColor: "#3A7C7C",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                <a onClick={() => save(record)}>
                  <CheckOutlined style={{ color: 'white' }} />
                </a>

              </div>
            )
          }
          {
            editingKey === record.key && (
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
                <a onClick={() => setEditingKey('')}>
                  <CloseOutlined />
                </a>

              </div>
            )
          }
        </Space >
      ),
    },
  ];

  const ServicesCategoryColumn: any = [
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Category Name
            </span>
          </div>)
      },
      dataIndex: "serviceCategory",
      key: "serviceCategory",
      width: '30%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },



    {
      title: "",
      key: "action",
      width: '10%',
      render: (_, record) => (
        <Space size="middle">
          {editingKey !== record.key && (<div
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
            <a onClick={() => edit(record)}>
              <EditOutlined />
            </a>
          </div>)}

          {
            editingKey !== record.key && (<div
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
              <a onClick={() => props.onDelete(record)}>
                <DeleteOutlined style={{ color: "#F04551" }} />
              </a>

            </div>)
          }

          {
            editingKey === record.key && (
              <div
                style={{
                  height: "25px",
                  width: "25px",
                  backgroundColor: "#3A7C7C",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                <a onClick={() => save(record)}>
                  <CheckOutlined style={{ color: 'white' }} />
                </a>

              </div>
            )
          }
          {
            editingKey === record.key && (
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
                <a onClick={() => setEditingKey('')}>
                  <CloseOutlined />
                </a>

              </div>
            )
          }
        </Space >
      ),
    },
  ];
  const InvoiceListColumn: any = [
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Invoice No
            </span>
          </div>)
      },
      dataIndex: "invoiceNumber",
      key: "invoiceNumber",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },

    {
      title: () => {
        return (
          <div >
            <span className="title">
              Client
            </span>
          </div>)
      },
      dataIndex: "client",
      key: "client",
      width: '20%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },

    {
      title: () => {
        return (
          <div >
            <span className="title">
              Date
            </span>
          </div>)
      },
      dataIndex: "date",
      key: "date",
      width: '10%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },
    {
      title: () => {
        return (
          <div >
            <span className="title">
              Status
            </span>
          </div>)
      },
      dataIndex: "status",
      key: "status",
      width: '15%',
      render: (items: any) => {
        return (
          <>
            <Select
              defaultValue={items && items[0]?.label}
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
          <div >
            <span className="title">
              Total
            </span>
          </div>)
      },
      dataIndex: "total",
      key: "total",
      width: '10%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },

    {
      title: () => {
        return (
          <div >
            <span className="title">
              Notes
            </span>
          </div>)
      },
      dataIndex: "notes",
      key: "notes",
      width: '25%',
      render: (text) => <>{text}</>,
      sorter: (a, b) => a.roomName.length - b.roomName.length,
      editable: true,
      inputType: 'text'
    },


  ];


  if (props.type === "roomType") {
    var mergedColumns = RoomTypeColumns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => {
          console.log("onCell ========>", col)
          return {
            record,
            inputType: col.inputType || 'number',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }
        },
      };
    });
  }
  else if (props.type === "guests") {
    var mergedColumns = GuestsColumns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => {
          console.log("onCell ========>", col)
          return {
            record,
            inputType: col.inputType || 'number',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }
        },
      };
    });
  }
  else if (props.type === "companies") {
    var mergedColumns = CompanyColumns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => {
          console.log("onCell ========>", col)
          return {
            record,
            inputType: col.inputType || 'number',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }
        },
      };
    });
  }
  else if (props.type === "services") {
    var mergedColumns = ServicesColumn.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => {
          console.log("onCell ========>", col)
          return {
            record,
            inputType: col.inputType || 'number',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }
        },
      };
    });
  }

  else if (props.type === "serviceCategory") {
    var mergedColumns = ServicesCategoryColumn.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => {
          console.log("onCell ========>", col)
          return {
            record,
            inputType: col.inputType || 'number',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }
        },
      };
    });
  }

  else if (props.type === "invoiceList") {
    var mergedColumns = InvoiceListColumn.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => {
          console.log("onCell ========>", col)
          return {
            record,
            inputType: col.inputType || 'number',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }
        },
      };
    });
  }

  else {
    var mergedColumns = RoomTableColumns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: Item) => ({
          record,
          inputType: 'number',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
  }


  const Header = () => {
    return <div>
      <h4 style={{ color: '#4D6969' }}>Invoice</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div>
          <Space wrap>
            <Select
              defaultValue="All"
              style={{ width: 120 }}

              options={[{
                value: "all", label: "All"
              }, { value: "draft", label: "Draft" },
              { value: "paid", label: "Paid" },
              { value: "sent", label: "Sent" }]}
            />
            <Select
              defaultValue="07/23/2023"
              style={{ width: 120 }}

              options={[{ value: 'lucy', label: 'Lucy' }]}
            />
            <Input addonBefore={<SearchOutlined />} placeholder="Invoice No" />
          </Space>
        </div>
        <div>
          <Space wrap>
            <Button disabled={true} style={{ backgroundColor: '#3A7C7C' }} type="primary">Delete</Button>
            <Select
              disabled={true}
              defaultValue="Mark As"
              style={{ width: 120, borderColor: '#3A7C7C' }}

              options={[{ value: "draft", label: "Draft" },
              { value: "paid", label: "Paid" },
              { value: "sent", label: "Sent" },]}
            />
          </Space>
        </div>
      </div>
    </div>
  }

  return (
    <Form form={form} component={false}>
      <Table
        rowSelection={
          props.type === "invoiceList" && {
            type: selectionType,
            ...rowSelection,
          }
        }
        // title={() => props.type === 'invoiceList' && <Header />}
        {...(props.type === 'invoiceList' && { title: () => props.type === 'invoiceList' && <Header /> })}
        style={props.styles}
        rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={data} columns={mergedColumns}

      />
    </Form>
  )
};


export { InvoiceTable }
export default Tables;
