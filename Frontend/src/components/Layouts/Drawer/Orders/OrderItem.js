import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "../../../../style/Layouts/Drawer/Orders/OrderItem.module.scss";
const OrderItem = ({ product }) => {
    const { color, model, option } = product;
    return (_jsxs("div", { className: classes.orderItem, children: [_jsx("div", { className: classes.imageContainer, children: _jsx("img", { src: color.image, alt: color.name }, void 0) }, void 0), _jsxs("div", { className: classes.infoContainer, children: [_jsx("h1", { className: classes.model, children: model }, void 0), _jsxs("div", { className: classes.info, children: [_jsx("b", { children: "color:" }, void 0), _jsx("div", { className: classes.color, style: { backgroundColor: `#${color.hex}` } }, void 0), _jsx("p", { children: color.name }, void 0), _jsx("hr", {}, void 0), _jsx("b", { children: option.capacity }, void 0)] }, void 0), _jsxs("p", { className: classes.price, children: [option.price, "$"] }, void 0)] }, void 0)] }, void 0));
};
export default OrderItem;
