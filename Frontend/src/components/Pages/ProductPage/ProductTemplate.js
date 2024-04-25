import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ChooseOption from "./OptionsSection/ChooseOption";
import ChooseColor from "./ColorSection/ChooseColor";
import Information from "./InformationSection/Information";
import PreviewCard from "./PreviewCard";
import { useContext, useState } from "react";
import classes from "../../../style/Pages/ProductPage/ProductTemplate.module.scss";
import { scrollToTop } from "../../../utils/functions";
import { AuthContext } from "../../../context/AuthContext";
import { DrawerContext } from "../../../context/DrawerContext";
import { DrawerValues } from "../../Layouts/Drawer/Drawer.types";
const ProductTemplate = ({ productData, staticImages, productRoute, onBuyNow, }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const { setDrawerContent } = useContext(DrawerContext);
    const { brand, model, colors, information, options } = productData;
    const { background, info, preview, bottom, bubbles } = staticImages;
    const isIMac = productRoute === "iMac" ||
        productRoute === "iMac Pro" ||
        productRoute === "Mac Studio";
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const buyNowHandler = () => {
        if (isLoggedIn) {
            onBuyNow({
                model,
                colorId: selectedColor._id,
                optionId: selectedOption._id,
            });
        }
        else {
            scrollToTop("smooth");
            setDrawerContent(DrawerValues.account);
        }
    };
    return (_jsxs("main", { className: classes.main, children: [_jsx(PreviewCard, { previewImage: preview, title: model, bubbles: bubbles, isIMac: isIMac }, void 0), _jsx(ChooseColor, { selectedColor: selectedColor, setSelectedColor: setSelectedColor, colors: colors, background: background }, void 0), _jsx(ChooseOption, { options: options, selectedOption: selectedOption, setSelectedOption: setSelectedOption }, void 0), _jsx("div", { className: classes.buyButtonContainer, children: _jsx("button", { type: "button", onClick: buyNowHandler, children: "Buy now" }, void 0) }, void 0), _jsx(Information, { information: information, bottom: bottom, infoImages: info, brand: brand }, void 0)] }, void 0));
};
export default ProductTemplate;
