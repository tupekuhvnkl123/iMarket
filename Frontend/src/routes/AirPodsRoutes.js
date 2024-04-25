import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import AirPodsPage from "../pages/AirPodsPage";
import ProductPage from "../pages/ProductPage";
const AirPodsRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(AirPodsPage, {}, void 0) }, void 0), _jsx(Route, { path: ":model", element: _jsx(ProductPage, {}, void 0) }, void 0)] }, void 0));
};
export default AirPodsRoutes;
