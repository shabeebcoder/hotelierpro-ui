import React from 'react';
import { Table } from "@tanstack/react-table";
interface DataTablePaginationProps<TData> {
    table: Table<TData>;
}
export declare function DataTablePagination<TData>({ table, }: DataTablePaginationProps<TData>): React.JSX.Element;
export {};
