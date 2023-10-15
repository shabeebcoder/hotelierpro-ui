import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Select, Input, InputNumber, Form, Button, Checkbox, DatePicker } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, SearchOutlined, DeleteOutlined, SaveOutlined, CloseOutlined, CheckOutlined } from "@ant-design/icons";
import './table.css';
import moment from "moment";

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

    const [tableColumn, setTableColumn] = useState([]);
    const [form] = Form.useForm();
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [invoiceSearch, setInvoiceSearch] = useState('');
    const [filterState, setFilterState] = useState('All');
    const [filterDate, setFilterDate]: any = useState('');
    const [selectedRows, setSelectedRows]: any = useState('');

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
            setSelectedRows(selectedRows)
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
                setEditingKey('');
            } else {
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
            inputType: 'text',
            filteredValue: [invoiceSearch],
            onFilter: (value, record) => {

                return String(record.invoiceNumber).toLocaleLowerCase().includes(value.toLocaleLowerCase())
            }
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
            render: (text) => <>{moment(text).format("DD/MM/YYYY")}</>,
            sorter: (a, b) => a.roomName.length - b.roomName.length,
            editable: true,
            inputType: 'text',
            // filteredValue: [filterDate],
            // onFilter: (value, record) => {

            //     console.log('1', value)
            //     console.log('1 -', record.date)

            //     return new Date('27/07/2023').getTime() == new Date('27/07/2023').getTime()
            // }
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
                            // defaultValue={items && items[0]?.label}
                            className="statusSelect"
                            style={{ width: 120 }}
                            options={items.options}
                            onChange={(e) => console.log("select", e)}
                            defaultValue={items.defaultValue}
                        />
                    </>
                );
            },
            filteredValue: [filterState],
            onFilter: (value, record) => {
                if (value === "All") {

                    return record
                }
                return String(record.status.defaultValue).toLocaleLowerCase().includes(value.toLocaleLowerCase())
            }
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


    const handleInvoiceSearch = (e) => {
        setInvoiceSearch(e.target.value)

    }




    const Header = () => {
        return <div>
            <h4 style={{ color: '#4D6969' }}>Invoice</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <div>
                    <Space wrap>
                        <Select
                            defaultValue={filterState}
                            style={{ width: 120 }}

                            options={[{
                                value: "all", label: "All"
                            }, { value: "draft", label: "Draft" },
                            { value: "paid", label: "Paid" },
                            { value: "sent", label: "Sent" }]}
                            onChange={(e) => setFilterState(e)}

                        />
                        {/* <Select
                            defaultValue="07/23/2023"
                            style={{ width: 120 }}

                            options={[{ value: 'lucy', label: 'Lucy' }]}
                        /> */}
                        <DatePicker defaultValue={filterDate} onChange={(date) => setFilterDate(date)} />
                        <Input value={invoiceSearch} onChange={handleInvoiceSearch} addonBefore={<SearchOutlined />} placeholder="Invoice No" />
                    </Space>
                </div>
                <div>
                    <Space wrap>
                        <Button disabled={selectedRows === ''} style={{ backgroundColor: '#3A7C7C' }} type="primary">Delete</Button>
                        <Select
                            disabled={selectedRows === ''}
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
                className="invoiceTable"
                rowSelection={
                    {
                        type: selectionType,
                        ...rowSelection,
                    }
                }


                {...(props.type === 'invoiceList' && { title: () => props.type === 'invoiceList' && <Header /> })}
                style={props.styles}
                rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                dataSource={data}
                columns={mergedColumns}


            />
        </Form>
    )
};



export default Tables;
