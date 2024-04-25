import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoIosArrowBack } from "react-icons/io";
import ColorsList from "./ColorsList";
import classes from "../../../../style/Pages/ProductPage/ColorSection/ChooseColor.module.scss";
const ChooseColor = ({ background, colors, selectedColor, setSelectedColor, }) => {
    return (_jsx("div", { className: classes.background, style: { backgroundImage: `url(${background})` }, children: _jsxs("div", { className: classes.overlay, children: [_jsxs("div", { className: classes.colorsContainer, children: [_jsx("img", { className: classes.image, src: selectedColor.image, alt: selectedColor.name }, selectedColor._id), _jsx(ColorsList, { colors: colors, setSelectedColor: setSelectedColor }, void 0)] }, void 0), _jsxs("div", { className: classes.createYoursCard, children: [_jsx("h1", { className: classes.title, children: "Create yours" }, void 0), _jsx("p", { className: classes.text, children: "Personalize your product with our customizable color options. Choose yours!" }, void 0), _jsxs("div", { className: classes.chooseColor, children: [_jsx(IoIosArrowBack, { className: classes.icon }, void 0), _jsx("p", { children: "Choose color" }, void 0)] }, void 0)] }, void 0)] }, void 0) }, void 0));
};
export default ChooseColor;
