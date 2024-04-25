import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "../../../style/Pages/ProductPage/PreviewCard.module.scss";
const PreviewCard = ({ previewImage, title, bubbles, isIMac, }) => (_jsxs("div", { className: classes.card, children: [_jsxs("div", { className: classes.titleContainer, children: [_jsx("h1", { children: title }, void 0), _jsx("img", { className: classes.bubbles, src: bubbles, alt: "bubbles" }, void 0)] }, void 0), _jsx("div", { className: `${classes.imageContainer} ${isIMac ? classes.isMac : ""}`, children: _jsx("img", { className: classes.previewImage, src: previewImage, alt: title }, void 0) }, void 0)] }, void 0));
export default PreviewCard;
