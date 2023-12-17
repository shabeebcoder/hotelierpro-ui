import addPerson, { GuestType } from './addPerson/addperson';
import addService, { IService } from './addServices/addServicesForm';
import maintainance from './maintenanceAlert/maintenanceAlertForm';
import roomType, { IRoomTypeType } from './roomtype/addroomType';
import addroom, { IRoom } from './addrooms/addrooms';
import serviceCategory, { IServiceCategory } from './addServicescategory/addServiceCategoryForm';
import booking, { IbookingForm } from './newBooking/newBookingForm';
import Billing, { IBillForm } from './billingComponent/billingComponent';
import changePassword from './change-password/changePassword';
import invoice, { IInvoiceForm } from './invoiceEditable/invoiceEditableForm';
import registrationForm, { IRegistrationForm } from "../../registrationForm/registrationForm";
import pilicyForm, { IPolicyForm } from "./policy/policy";
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
    invoice: typeof invoice;
    registrationForm: typeof registrationForm;
    pilicyForm: typeof pilicyForm;
};
export declare namespace IForm {
    type addPerson = GuestType;
    type addService = IService;
    type serviceCategory = IServiceCategory;
    type addroom = IRoom;
    type roomType = IRoomTypeType;
    type bookingForm = IbookingForm;
    type billing = IBillForm;
    type invoice = IInvoiceForm;
    type registrationForm = IRegistrationForm;
    type policy = IPolicyForm;
}
