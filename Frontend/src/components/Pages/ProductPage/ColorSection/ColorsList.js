import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "../../../../style/Pages/ProductPage/ColorSection/ColorsList.module.scss";
const ColorsList = ({ colors, setSelectedColor, }) => {
    return (_jsx("ul", { className: classes.colorsList, children: colors.map((color, index) => (_jsxs("div", { className: classes.colorItem, children: [_jsx("div", { onClick: () => setSelectedColor(colors[index]), style: { backgroundColor: `#${color.hex}` } }, void 0), _jsx("p", { children: color.name }, void 0)] }, color._id))) }, void 0));
};
export default ColorsList;
