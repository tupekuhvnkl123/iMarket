import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { firstLetterCapitalized, sliceStringToArr, } from "../../../../utils/functions";
import { motion } from "framer-motion";
import { delayedFadeInAnimation } from "../../../../utils/animationsVariants";
import classes from "../../../../style/Pages/ProductPage/InformationSection/Dimensions.module.scss";
const Dimensions = ({ data }) => {
    return (_jsx("div", { className: classes.container, children: Object.entries(data).map(([key, value], index) => {
            if (key === "_id")
                return;
            const [firstPart, secondPart] = sliceStringToArr(value, 2);
            return (_jsxs(motion.div, { className: classes.dimensionItem, ...delayedFadeInAnimation(index / 5), children: [_jsxs("p", { children: [firstLetterCapitalized(key), ":"] }, void 0), _jsx("p", { children: firstPart }, void 0), _jsx("p", { children: secondPart }, void 0)] }, key));
        }) }, void 0));
};
export default Dimensions;
