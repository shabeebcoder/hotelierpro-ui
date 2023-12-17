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
import registrationForm, { IRegistrationForm } from "../../registrationForm/registrationForm"
import pilicyForm, { IPolicyForm } from "./policy/policy"
import hotelInformation, { IHotelInformationForm } from "./hotel-informations/hotel-informations"
import notificationSettings, { IEmailConfigForm } from './emailConfig/emailConfig';
import regionalSettings, {IRegionalForm} from './regional/regional';
 


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
    invoice,
    registrationForm,
    pilicyForm,
    hotelInformation,
    notificationSettings,
    regionalSettings


};


export namespace IForm {
    export type addPerson = GuestType
    export type addService = IService
    export type serviceCategory = IServiceCategory
    export type addroom = IRoom;
    export type roomType = IRoomTypeType
    export type bookingForm = IbookingForm
    export type billing = IBillForm
    export type invoice = IInvoiceForm
    export type registrationForm = IRegistrationForm
    export type policy = IPolicyForm
    export type hotelInformation = IHotelInformationForm
    export type notificationSettings = IEmailConfigForm
    export type regionalSettings = IRegionalForm
}