import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "../../style/UI/Burger.module.scss";
const Burger = ({ open, className }) => {
    return (_jsxs("div", { className: `${classes.burger} ${open ? classes.open : ""} ${className}`, children: [_jsx("div", { className: `${classes.line} ${classes.line1}` }, void 0), _jsx("div", { className: `${classes.line} ${classes.line2}` }, void 0)] }, void 0));
};
export default Burger;
