import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import Vehicles from "layouts/vehicles";
import Icon from "@mui/material/Icon";
import AllVehicles from "./layouts/allvehicles";
import Realtime from "./layouts/realtime";

const routes = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: <Dashboard/>,
    },
    {
        type: "collapse",
        name: "Local Vehicles",
        key: "vehicles",
        icon: <Icon fontSize="small">directions_car</Icon>,
        route: "/vehicles",
        component: <Vehicles/>,
    },
    {
        type: "collapse",
        name: "All Vehicles",
        key: "allVehicles",
        icon: <Icon fontSize="small">directions_car</Icon>,
        route: "/all-vehicles",
        component: <AllVehicles/>,
    },
    {
        type: "collapse",
        name: "Realtime",
        key: "realtime",
        icon: <Icon fontSize="small">watch</Icon>,
        route: "/realtime",
        component: <Realtime/>,
    },
    // {
    //     type: "collapse",
    //     name: "Tables",
    //     key: "tables",
    //     icon: <Icon fontSize="small">table_view</Icon>,
    //     route: "/tables",
    //     component: <Tables/>,
    // },
    // {
    //     type: "collapse",
    //     name: "Billing",
    //     key: "billing",
    //     icon: <Icon fontSize="small">receipt_long</Icon>,
    //     route: "/billing",
    //     component: <Billing/>,
    // },
    // {
    //     type: "collapse",
    //     name: "RTL",
    //     key: "rtl",
    //     icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    //     route: "/rtl",
    //     component: <RTL/>,
    // },
    // {
    //     type: "collapse",
    //     name: "Notifications",
    //     key: "notifications",
    //     icon: <Icon fontSize="small">notifications</Icon>,
    //     route: "/notifications",
    //     component: <Notifications/>,
    // },
    // {
    //     type: "collapse",
    //     name: "Profile",
    //     key: "profile",
    //     icon: <Icon fontSize="small">person</Icon>,
    //     route: "/profile",
    //     component: <Profile/>,
    // },
    // {
    //     type: "collapse",
    //     name: "Sign In",
    //     key: "sign-in",
    //     icon: <Icon fontSize="small">login</Icon>,
    //     route: "/authentication/sign-in",
    //     component: <SignIn/>,
    // },
    {
        type: "collapse",
        name: "Logout",
        key: "sign-in",
        icon: <Icon fontSize="small">logout</Icon>,
        route: "/authentication/sign-in",
        component: <SignIn/>,
    },
];

export default routes;
