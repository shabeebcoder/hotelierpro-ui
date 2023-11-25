import React from 'react';
import { Table } from "@tanstack/react-table";
interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
}
export declare function DataTableViewOptions<TData>({ table, }: DataTableViewOptionsProps<TData>): React.JSX.Element;
export {};
