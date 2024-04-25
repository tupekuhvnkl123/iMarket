import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MacRoutes from "./MacRoutes";
import IPhoneRoutes from "./IPhoneRoutes";
import AirPodsRoutes from "./AirPodsRoutes";
import OrderSucceedPage from "../pages/OrderSucceedPage";
const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/home", element: _jsx(HomePage, {}, void 0) }, void 0), _jsx(Route, { path: "/order-succeed", element: _jsx(OrderSucceedPage, {}, void 0) }, void 0), _jsx(Route, { path: "/mac/*", element: _jsx(MacRoutes, {}, void 0) }, void 0), _jsx(Route, { path: "/iphone/*", element: _jsx(IPhoneRoutes, {}, void 0) }, void 0), _jsx(Route, { path: "/airpods/*", element: _jsx(AirPodsRoutes, {}, void 0) }, void 0), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/home" }, void 0) }, void 0)] }, void 0));
};
export default AppRoutes;
