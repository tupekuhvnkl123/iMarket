import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GoPackage } from "react-icons/go";
import { MdFavorite } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import classes from "../../../../style/Layouts/Drawer/Account/UserMenu.module.scss";
import { useContext } from "react";
import { DrawerContext } from "../../../../context/DrawerContext";
import { DrawerValues } from "../Drawer.types";
import { AuthContext } from "../../../../context/AuthContext";
import { IoMdSettings } from "react-icons/io";
const UserMenu = () => {
    const { setDrawerContent } = useContext(DrawerContext);
    const { logout } = useContext(AuthContext);
    return (_jsxs("div", { className: classes.container, children: [_jsx("p", { className: classes.title, children: "Account" }, void 0), _jsxs("ul", { className: classes.navList, children: [_jsxs("li", { className: classes.navItem, onClick: () => setDrawerContent(DrawerValues.orders), children: [_jsx(GoPackage, { className: classes.icon }, void 0), _jsx("p", { children: "Orders" }, void 0)] }, void 0), _jsxs("li", { className: classes.navItem, onClick: () => setDrawerContent(DrawerValues.favorites), children: [_jsx(MdFavorite, { className: classes.icon }, void 0), _jsx("p", { children: "Favorites" }, void 0)] }, void 0), _jsxs("li", { className: classes.navItem, onClick: () => setDrawerContent(DrawerValues.settings), children: [_jsx(IoMdSettings, { className: classes.icon }, void 0), _jsx("p", { children: "Settings" }, void 0)] }, void 0), _jsxs("li", { className: classes.navItem, onClick: logout, children: [_jsx(PiSignOut, { className: classes.icon }, void 0), _jsx("p", { children: "Sign Out" }, void 0)] }, void 0)] }, void 0)] }, void 0));
};
export default UserMenu;
