import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import classes from "../../../style/Pages/ProductsPage/PreviewCard.module.scss";
const PreviewCard = ({ previewImage, title, iPhonePage, arrowClickHandler, }) => {
    return (_jsxs("div", { className: `${classes.card} ${iPhonePage ? classes.iPhoneContainer : ""}`, children: [_jsx("div", { className: `${classes.imageContainer} ${iPhonePage ? classes.iPhoneImage : ""}`, children: _jsx("img", { src: previewImage, alt: title }, void 0) }, void 0), _jsxs("div", { className: classes.textContainer, children: [_jsxs("div", { className: classes.titleContainer, children: [_jsx(FaApple, { className: classes.appleIcon }, void 0), _jsx("h1", { children: title }, void 0)] }, void 0), _jsx(MdOutlineKeyboardArrowDown, { onClick: arrowClickHandler, className: classes.arrow }, void 0)] }, void 0)] }, void 0));
};
export default PreviewCard;
