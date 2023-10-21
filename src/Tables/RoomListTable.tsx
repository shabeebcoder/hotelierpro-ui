import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Select, Input, InputNumber, Form, Button, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, SearchOutlined, DeleteOutlined, SaveOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import './table.css';

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
  handleRoomType: any;
  onDelete: any;
  styles?: any
}


interface RoomTableDataType {
  key: string;
  roomName: string;
  roomType: any[];
  maxPersons: number;
  singleUseRoomPrice: number;
  regularUseRoomPrice: number;
  editable?: boolean;
  handleRoomType: any,
  onChange: any

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
  handleRoomType: any
}





const RoomList: any = (props: Props) => {
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

        console.log("record.key", row)
        console.log("row===>", item)
        props.onSave({
          current: item,
          newDate: row
        })
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
              onChange={props.handleRoomType}
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



  const Header = () => {
    return <div>
      <h4 style={{ color: '#4D6969' }}>Invoice</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <div>
          <Space wrap>
            <Select
              defaultValue="All"
              style={{ width: 120 }}

              options={[{ value: 'lucy', label: 'Lucy' }]}
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
            <Button style={{ backgroundColor: '#3A7C7C' }} type="primary">Delete</Button>
            <Select
              defaultValue="Mark As"
              style={{ width: 120, borderColor: '#3A7C7C' }}

              options={[{ value: 'lucy', label: 'Lucy' }]}
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



export default RoomList;
