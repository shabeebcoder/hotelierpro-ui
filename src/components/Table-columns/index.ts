import RoomTable from "./room-table";
import { columns as roomtypes, IRoomTypeColum } from "./room-type-columns";
import { columns as guests } from "./guest-table.column";
import { columns as rooms, IRoomColum } from "./room-table-column"
import { columns as services, IServiceTable } from "./services-table-column"
import { columns as serviceCategory, IServiceCategoryTable } from "./service-category-table-column"
import { IInvoiceTable, columns as invoices } from "./invoice-table-column";
import { columns as bookings } from "./booking-table-column"
import { IBookingHistoryTable, columns as history } from "./history-table-column"
import { columns as policy,  IPolicyTable } from "./policy-table-column"
import { columns as userLogs,  IUserLogs } from "./user-logs-table-column"



export const Table: any = {
    roomtypes,
    guests,
    rooms,
    services,
    serviceCategory,
    invoices,
    bookings,
    history,
    policy,
    userLogs
}

export namespace ITable {
    export type services = IServiceTable
    export type serviceCategories = IServiceCategoryTable
    export type roomtypes = IRoomTypeColum
    export type rooms = IRoomColum
    export type history = IBookingHistoryTable
    export type invoices = IInvoiceTable
    export type policy = IPolicyTable
    export type userLogs = IUserLogs
}