import { IRoomTypeColum } from "./room-type-columns";
import { IRoomColum } from "./room-table-column";
import { IServiceTable } from "./services-table-column";
import { IServiceCategoryTable } from "./service-category-table-column";
export declare const Table: any;
export declare namespace ITable {
    type services = IServiceTable;
    type serviceCategories = IServiceCategoryTable;
    type roomtypes = IRoomTypeColum;
    type rooms = IRoomColum;
}
