import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from "../../style/Home/ProductGalleryItem.module.scss";
const ProductGalleryItem = ({ title, image, className, onClick, }) => {
    return (_jsxs("div", { onClick: onClick, className: `${classes.card} ${className}`, children: [title && _jsx("span", { className: classes.title, children: title }, void 0), _jsx("img", { className: `${classes.image} ${!title ? classes.fullHeight : ""}`, src: image, alt: title }, void 0)] }, void 0));
};
export default ProductGalleryItem;
