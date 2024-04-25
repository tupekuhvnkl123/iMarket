import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import Burger from "../../UI/Burger";
import { DrawerValues } from "../Drawer/Drawer.types";
import { useContext } from "react";
import { DrawerContext } from "../../../context/DrawerContext";
import classes from "../../../style/Layouts/Navbar/IconsList.module.scss";
const IconsList = () => {
    const { setDrawerContent, drawerContent } = useContext(DrawerContext);
    const burgerClickHandler = () => {
        if (!!drawerContent === true) {
            setDrawerContent(null);
        }
        else {
            setDrawerContent(DrawerValues.navLinks);
        }
    };
    return (_jsxs("ul", { className: classes.iconsList, children: [_jsx("li", { onClick: () => setDrawerContent(DrawerValues.search), children: _jsx(IoIosSearch, { className: classes.icon }, void 0) }, void 0), _jsx("li", { onClick: () => setDrawerContent(DrawerValues.account), children: _jsx(AiOutlineUser, { className: classes.icon }, void 0) }, void 0), _jsx("li", { onClick: () => setDrawerContent(DrawerValues.cart), className: classes.cart, children: _jsx(PiShoppingCartSimple, { className: classes.icon }, void 0) }, void 0), _jsx("li", { onClick: burgerClickHandler, className: classes.burger, children: _jsx(Burger, { open: !!drawerContent }, void 0) }, void 0)] }, void 0));
};
export default IconsList;
