import addPerson, { GuestType } from './addPerson/addperson';
import addService, {IService} from './addServices/addServicesForm';
import maintainance from './maintenanceAlert/maintenanceAlertForm';
import roomType from './roomtype/addroomType';
import addroom from './addrooms/addrooms';
import serviceCategory, {IServiceCategory} from './addServicescategory/addServiceCategoryForm';
import booking from './newBooking/newBookingForm';
import Billing from './billingComponent/billingComponent';
import changePassword from './change-password/changePassword';


export const Form = {
    changePassword,
    addPerson,
    addService,
    maintainance,
    roomType,
    addroom,
    serviceCategory,
    booking,
    Billing,
};


export namespace IForm {
    export type addPerson = GuestType 
    export type addService = IService
    export type serviceCategory = IServiceCategory
}