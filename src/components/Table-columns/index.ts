import RoomTable from "./room-table";
import { columns as roomtypes } from "./room-type-columns";
import { columns as guests } from "./guest-table.column";
import { columns as rooms } from "./room-table-column"
import { columns as services, IServiceTable } from "./services-table-column"
import { columns as serviceCategory, IServiceCategoryTable } from "./service-category-table-column"
import { columns as invoices } from "./billing-table-column";
import { columns as bookings } from "./booking-table-column"
import { columns as history } from "./history-table-column"


export const Table: any = {
    roomtypes,
    guests,
    rooms,
    services,
    serviceCategory,
    invoices,
    bookings,
    history
}

export namespace ITable {
    export type services =  IServiceTable
    export type serviceCategories = IServiceCategoryTable
}