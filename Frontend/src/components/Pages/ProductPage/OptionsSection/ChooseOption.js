import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoIosArrowForward } from "react-icons/io";
import OptionsList from "./OptionsList";
import classes from "../../../../style/Pages/ProductPage/OptionsSection/ChooseOption.module.scss";
const ChooseOption = ({ options, selectedOption, setSelectedOption, }) => {
    return (_jsxs("div", { className: classes.container, children: [_jsxs("div", { className: classes.chooseOption, children: [_jsx("h1", { children: "Choose Option" }, void 0), _jsx(IoIosArrowForward, { className: classes.icon }, void 0)] }, void 0), _jsx(OptionsList, { options: options, selectedOption: selectedOption, setSelectedOption: setSelectedOption }, void 0)] }, void 0));
};
export default ChooseOption;
