import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import logo from "../../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "../../../utils/consts";
import Drawer from "../Drawer/Drawer";
import { useContext } from "react";
import IconsList from "./IconsList";
import { DrawerContext } from "../../../context/DrawerContext";
import classes from "../../../style/Layouts/Navbar/Navbar.module.scss";
const Navbar = () => {
    const { drawerIsOpen, closeDrawer } = useContext(DrawerContext);
    const location = useLocation();
    const route = location.pathname.replace("/", "");
    const blackNavbar = route === appRoutes.Mac ||
        route === appRoutes.iPhone ||
        route === appRoutes.AirPods;
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { className: `${classes.navbar} ${blackNavbar && !drawerIsOpen ? classes.blackNavbar : ""}`, children: [_jsx("img", { className: classes.logo, src: logo, alt: "Logo" }, void 0), _jsx("ul", { className: classes.navLinksList, children: Object.keys(appRoutes).map((key) => (_jsx("li", { onClick: closeDrawer, className: classes.navLink, children: _jsx(Link, { to: key.toLowerCase(), children: key }, void 0) }, key))) }, void 0), _jsx(IconsList, {}, void 0)] }, void 0), _jsx(Drawer, {}, void 0)] }, void 0));
};
export default Navbar;
