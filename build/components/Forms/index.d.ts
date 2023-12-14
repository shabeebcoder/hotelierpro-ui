import addPerson, { GuestType } from './addPerson/addperson';
import addService, { IService } from './addServices/addServicesForm';
import maintainance from './maintenanceAlert/maintenanceAlertForm';
import roomType, { IRoomTypeType } from './roomtype/addroomType';
import addroom, { IRoom } from './addrooms/addrooms';
import serviceCategory, { IServiceCategory } from './addServicescategory/addServiceCategoryForm';
import booking from './newBooking/newBookingForm';
import Billing from './billingComponent/billingComponent';
import changePassword from './change-password/changePassword';
export declare const Form: {
    changePassword: typeof changePassword;
    addPerson: typeof addPerson;
    addService: typeof addService;
    maintainance: typeof maintainance;
    roomType: typeof roomType;
    addroom: typeof addroom;
    serviceCategory: typeof serviceCategory;
    booking: typeof booking;
    Billing: typeof Billing;
};
export declare namespace IForm {
    type addPerson = GuestType;
    type addService = IService;
    type serviceCategory = IServiceCategory;
    type addroom = IRoom;
    type roomType = IRoomTypeType;
}
