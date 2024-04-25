import { jsx as _jsx } from "react/jsx-runtime";
import { appRoutes } from "../../../utils/consts";
import { Link } from "react-router-dom";
import classes from "../../../style/Layouts/Footer/Footer.module.scss";
const Footer = () => {
    return (_jsx("footer", { className: classes.footer, children: _jsx("ul", { className: classes.navLinksList, children: Object.keys(appRoutes).map((key) => (_jsx("li", { className: classes.navLink, children: _jsx(Link, { to: key.toLowerCase(), children: key }, void 0) }, key))) }, void 0) }, void 0));
};
export default Footer;
