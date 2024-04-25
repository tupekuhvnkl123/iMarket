import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Dimensions from "./Dimensions";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../../utils/animationsVariants";
import classes from "../../../../style/Pages/ProductPage/InformationSection/Information.module.scss";
const Information = ({ information, infoImages, bottom, brand, }) => {
    const isFourImage = infoImages.length === 4;
    return (_jsxs("div", { className: classes.container, children: [_jsx("hr", { className: classes.seperateLine }, void 0), _jsx("div", { className: classes.titleContainer, children: _jsx("h1", { children: "Additional Information" }, void 0) }, void 0), _jsxs("div", { className: classes.contentContainer, children: [_jsx(motion.div, { ...slideAnimation("right"), className: classes.imagesContainer, children: infoImages.slice(0, isFourImage ? 2 : 1).map((image) => (_jsx("img", { src: image, alt: brand }, image))) }, void 0), _jsx(Dimensions, { data: information }, void 0), _jsx(motion.div, { ...slideAnimation("left"), className: classes.imagesContainer, children: infoImages.slice(isFourImage ? 2 : 1).map((image) => (_jsx("img", { src: image, alt: brand }, image))) }, void 0)] }, void 0), bottom && (_jsx("div", { className: classes.bottomImageContainer, children: _jsx("img", { src: bottom, alt: brand }, void 0) }, void 0))] }, void 0));
};
export default Information;
