import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoMdClose } from "react-icons/io";
import classes from "../../../../style/Layouts/Drawer/Cart/CartItem.module.scss";
import { useState } from "react";
const CartItem = ({ product, onRemoveFromCart }) => {
    const [showActionsOverlay, setShowActionsOverlay] = useState(false);
    const { color, model, option, _id } = product;
    const priceText = `${option.price}$ or ${parseFloat((option.price / 12).toFixed(2))}/mo. for 12 mo.`;
    const cartItemClickHandler = () => {
        setShowActionsOverlay((p) => !p);
    };
    return (_jsxs("div", { className: classes.container, children: [showActionsOverlay && (_jsxs("div", { className: classes.actionsOverlay, children: [_jsx(IoMdClose, { className: classes.closeIcon, onClick: cartItemClickHandler }, void 0), _jsx("button", { className: classes.removeBtn, onClick: () => onRemoveFromCart(_id), children: "Remove from cart" }, void 0)] }, void 0)), _jsxs("div", { className: classes.cartItem, onClick: cartItemClickHandler, children: [_jsx("div", { className: classes.imageContainer, children: _jsx("img", { src: color.image, alt: model }, void 0) }, void 0), _jsxs("div", { className: classes.content, children: [_jsxs("div", { className: classes.infoContainer, children: [_jsx("h1", { className: classes.model, children: model }, void 0), _jsxs("div", { className: classes.info, children: [_jsx("b", { children: "color:" }, void 0), _jsx("div", { children: _jsx("div", { className: classes.color, style: { backgroundColor: `#${color.hex}` } }, void 0) }, void 0), _jsx("p", { children: color.name }, void 0), _jsx("hr", {}, void 0), _jsx("b", { children: option.capacity }, void 0)] }, void 0)] }, void 0), _jsx("hr", { className: classes.separateLine }, void 0), _jsxs("div", { className: classes.priceContainer, children: [_jsx("p", { children: priceText }, void 0), _jsxs("p", { children: [_jsx("b", { children: "Total:" }, void 0), " ", option.price, "$"] }, void 0), _jsx("span", { className: classes.clickNote, children: "* click for remove option" }, void 0)] }, void 0)] }, void 0)] }, void 0)] }, void 0));
};
export default CartItem;
