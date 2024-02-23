import { IRoomTypeColum } from "./room-type-columns";
import { IRoomColum } from "./room-table-column";
import { IServiceTable } from "./services-table-column";
import { IServiceCategoryTable } from "./service-category-table-column";
import { IInvoiceTable } from "./invoice-table-column";
import { IBookingHistoryTable } from "./history-table-column";
import { IPolicyTable } from "./policy-table-column";
import { IUserLogs } from "./user-logs-table-column";
import { IUsersTable } from "./users-table-column";
import { INightAudit } from "./night-audit";
import { IHouseKeepingTableSchema } from "./house-keeping";
export declare const Table: any;
export declare namespace ITable {
    type services = IServiceTable;
    type serviceCategories = IServiceCategoryTable;
    type roomtypes = IRoomTypeColum;
    type rooms = IRoomColum;
    type history = IBookingHistoryTable;
    type invoices = IInvoiceTable;
    type policy = IPolicyTable;
    type userLogs = IUserLogs;
    type usersTable = IUsersTable;
    type nightAuditTable = INightAudit;
    type houseKeepingTable = IHouseKeepingTableSchema;
}
