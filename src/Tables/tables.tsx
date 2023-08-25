import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface Props {
  columns: ColumnsType<DataType>;
  dataSource: DataType[];
}

const Tables: any = (props: Props) => <Table {...props} />;

export default Tables;
