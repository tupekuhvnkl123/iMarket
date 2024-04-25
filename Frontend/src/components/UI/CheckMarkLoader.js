import { jsx as _jsx } from "react/jsx-runtime";
import classes from "../../style/UI/CheckMarkLoader.module.scss";
const CheckMarkLoader = ({ checked }) => (_jsx("div", { className: `${classes.loader} ${checked ? classes.checked : ""}`, children: _jsx("div", { className: classes.checkMark }, void 0) }, void 0));
export default CheckMarkLoader;
