import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../../utils/consts";
import classes from "../../../../style/Layouts/Drawer/NavLinks/NavLinks.module.scss";
const NavLinks = ({ closeDrawer }) => {
    return (_jsx("ul", { className: classes.navLinksList, children: Object.keys(appRoutes).map((key) => (_jsx("li", { onClick: closeDrawer, className: classes.navLink, children: _jsx(Link, { to: key.toLowerCase(), children: key }, void 0) }, key))) }, void 0));
};
export default NavLinks;
