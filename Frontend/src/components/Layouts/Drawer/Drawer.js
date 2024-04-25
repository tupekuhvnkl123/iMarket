import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DrawerConfig } from "./drawer.config";
import { useContext } from "react";
import { DrawerContext } from "../../../context/DrawerContext";
import classes from "../../../style/Layouts/Drawer/Drawer.module.scss";
const Drawer = ({ className }) => {
    const { drawerContent, drawerIsOpen, closeDrawer } = useContext(DrawerContext);
    const DrawerContent = drawerContent && DrawerConfig[drawerContent];
    if (drawerIsOpen) {
        document.body.classList.add("active-modal");
    }
    else {
        document.body.classList.remove("active-modal");
    }
    return (_jsxs("div", { className: `${classes.container} ${drawerIsOpen ? classes.open : ""} ${className}`, children: [_jsx("div", { className: classes.drawer, children: _jsx("div", { className: classes.content, children: DrawerContent && _jsx(DrawerContent, { closeDrawer: closeDrawer }, void 0) }, void 0) }, void 0), _jsx("div", { className: classes.blur, onClick: closeDrawer }, void 0)] }, void 0));
};
export default Drawer;
