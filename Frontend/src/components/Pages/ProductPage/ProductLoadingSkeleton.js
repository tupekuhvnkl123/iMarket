import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from "react-loading-skeleton";
import classes from "../../../style/Pages/ProductPage/ProductLoadingSkeleton.module.scss";
const ProductLoadingSkeleton = () => {
    return (_jsxs("div", { className: classes.container, children: [_jsx(Skeleton, { className: classes.previewSkeleton }, void 0), _jsx(Skeleton, { className: classes.colorsSkeleton }, void 0), _jsxs("div", { className: classes.optionsSkeleton, children: [_jsx(Skeleton, { className: classes.option }, void 0), _jsx(Skeleton, { className: classes.option }, void 0), _jsx(Skeleton, { className: classes.option }, void 0)] }, void 0)] }, void 0));
};
export default ProductLoadingSkeleton;
