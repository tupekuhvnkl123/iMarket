import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../utils/animationsVariants";
import { useContext } from "react";
import { DrawerContext } from "../../context/DrawerContext";
import classes from "../../style/Home/Preview.module.scss";
import { DrawerValues } from "../Layouts/Drawer/Drawer.types";
import { AuthContext } from "../../context/AuthContext";
const Preview = ({ onClickExplore }) => {
    const { setDrawerContent } = useContext(DrawerContext);
    const { isLoggedIn } = useContext(AuthContext);
    return (_jsx("section", { className: classes.container, children: _jsxs(motion.div, { ...fadeInAnimation, className: classes.content, children: [_jsx("h1", { className: classes.title, children: "iMarket" }, void 0), _jsxs("p", { className: classes.text, children: ["Your premier Apple destination.", _jsx("br", {}, void 0), "Explore iPhones, AirPods, MacBooks, and more.", _jsx("br", {}, void 0), "Elevate your tech game with quality devices and expert service.", _jsx("br", {}, void 0), "and unmatched satisfaction guaranteed."] }, void 0), _jsxs("div", { className: classes.buttonContainer, children: [!isLoggedIn && (_jsx("button", { className: classes.signInBtn, onClick: () => setDrawerContent(DrawerValues.account), children: "Sign In" }, void 0)), _jsx("button", { onClick: onClickExplore, className: classes.exploreBtn, children: "Explore" }, void 0)] }, void 0)] }, void 0) }, void 0));
};
export default Preview;
