import "./styles.css";
import { Button } from './elements/Buttons/buttons';
import AuthenticationPage from "./components/Authentication/login";
import { ToastAction } from "./elements/Toast/toast";
import { useToast } from "./elements/Toast/use-toast";
import { Toaster } from "./elements/Toast/toaster";
import UserSignupPage from "./components/Authentication/signup";
import VerificationPage from "./components/Authentication/verify-account"
import ResetPasswordPage from "./components/Authentication/reset-password";
import ForgotPasswordPage from "./components/Authentication/forgotPasswordPage";
import { Icons } from "./elements/Icons/icons"
import { Table } from "./components/Table-columns"
import { Form } from "./components/Forms";
import Drawer from "./components/Drawer/drawer";
import DataTable from "./components/Data-table/data-table";
import Confirmation from "./components/Confirmation/alert"
import Tab from "./components/tab/tab"
import Calander from "./components/calander/calander"
import { RegistrationForm } from "./registrationForm"
import Dashboard from "./components/dashboard/dashboard"
import EditInvoice from "./components/Forms/invoiceEditable/invoiceEditableForm"

// import { Alert } from './Alert';
// import { Login } from './Login';
// import { Register } from './Signup';
// import { RoomTypesForm } from './Forms/roomType';
// import { Rooms } from './Forms/room';
// import { RoomList, Tables, InvoiceListTable } from './Tables';
// import { Tabs } from './Tab';
// import DLS from './DLS';
// import { SideBar } from './NavigationSideBar';
// import { TopbarNavigation } from './NavigationTopBar';
// import { Calander } from './calander';
// import { BookingForm } from './Forms';
// import { Modals } from './modals';
// import { Invoice } from './invoice';
// import { ColorPicker } from './colorPicker';
// import { DocumentsModal } from './modals/upload-documents';
// import { WebsitePlaceholder } from './websitePlaceholder';
// import { Loader } from './loader';
// import { User } from './user';
// import { BookingBillingInfoCard } from './bookingBillingInfocard';
// import { BookingEngineHeader } from './bookingEngineHeader';
// import { BookingEngineBanner } from './bookingEngineBanner';
// import { BookingEngineSearch } from './bookingEngineSearch';
// import { BookingEngineRoomList } from './roomList';
// import { ReservationSummary } from './reservationSummary';
// import { PreBookingDetails } from './preBookingDetail';
// import { PostBookingDetails } from './postBookingDetail';
// import { Checkbox } from "./Checkbox"
// import { Alert as Alerts, AlertTitle, AlertDescription } from "./elements"
// import { accordion } from "./elements/Accordion";
// import { alert } from "./elements/Alert";
// import { alertDialog } from "./elements/Alert Dialog";
// import { aspectRatio } from "./elements/Aspect Ratio"
// import { avatar } from "./elements/Avatar"
// import { badge } from './elements/Badge'
// import { button } from "./elements/Buttons";
// import { calander } from "./elements/Calendar";
// import { card } from "./elements/Card"
// import { checkbox } from "./elements/Checkbox"
// import { collapsible } from "./elements/Collapsible"
// import { contextMenu } from "./elements/Context Menu"
// import { datepicker } from "./elements/Datepicker"
// import { daialog } from "./elements/Dialog";
// import { dropdownMenu } from "./elements/Dropdown-menu"
// import {form} from "./elements/Form"
// import { hoverCard } from "./elements/Hover Card";
// import { input } from "./elements/Input"
// import { label } from "./elements/Label"
// import { menuBar } from "./elements/Menubar"
// import { navigationMenu } from "./elements/Navigation Menu"
// import { popOver } from "./elements/Popover"
// import { progress } from "./elements/Progress"
// import { radioGroup } from "./elements/Radio Group"
// import { scrollArea } from "./elements/Scroll Area"
// import { select } from "./elements/Select/index";
// import { seperator } from "./elements/Separator"
// import { sheet } from "./elements/Sheet"
// import { skeleton } from "./elements/Skeleton"
// import { slider } from "./elements/Slider"
// import { switchButton } from "./elements/Switch"
// import { table } from "./elements/Table"
// import { tabs } from "./elements/Tabs"
// import { textArea } from "./elements/TextArea"
// import { toasts as toast } from "./elements/Toast"
// import { toggle } from "./elements/Toggle"
// import { toggleGroup } from "./elements/Toggle-group"
// import { toolTip } from "./elements/Tool-tip"
// import { hotelierpro } from "./components"
// import MaintainanceForm from "./components/Forms/maintenanceAlert/maintenanceAlertForm"
import Layout from "./components/Layout/layout";
// import Dashboard from "./components/dashboard/dashboard"

export {
    Button,
    // DLS,
    // Alert,
    // Login,
    // Register,
    // RoomTypesForm,
    // Rooms,
    // Tables,
    // RoomList,
    // Tabs,
    // SideBar,
    // TopbarNavigation,
    // Calander,
    // BookingForm,
    // Modals,
    // Invoice,
    // ColorPicker,
    // DocumentsModal,
    // WebsitePlaceholder,
    // InvoiceListTable,
    // Loader,
    // User,
    // BookingBillingInfoCard,
    // BookingEngineHeader,
    // BookingEngineBanner,
    // BookingEngineSearch,
    // BookingEngineRoomList,
    // ReservationSummary,
    // PreBookingDetails,
    // PostBookingDetails,
    // Checkbox,
    // Alerts,
    // accordion,
    // alert,
    // alertDialog,
    // aspectRatio,
    // avatar,
    // badge,
    // calander,
    // card,
    // checkbox,
    // collapsible,
    // contextMenu,
    // datepicker,
    // daialog,
    // dropdownMenu,
    // form,
    // hoverCard,
    // input,
    // label,
    // menuBar,
    // navigationMenu,
    // popOver,
    // progress,
    // radioGroup,
    // scrollArea,
    // select,
    // seperator,
    // skeleton,
    // slider,
    // switchButton,
    // table,
    // tabs,
    // textArea,
    // toast,
    // toggle,
    // toggleGroup,
    // toolTip,
    // hotelierpro,
    // MaintainanceForm,
    EditInvoice,
    Tab,
    Table,
    Icons,
    Layout,
    AuthenticationPage,
    ToastAction,
    useToast,
    Toaster,
    UserSignupPage,
    VerificationPage,
    ResetPasswordPage,
    ForgotPasswordPage,
    Form,
    Drawer,
    DataTable,
    Confirmation,
    Calander,
    RegistrationForm,
    Dashboard
};

