import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classes from "../../../../style/Pages/ProductPage/OptionsSection/OptionsList.module.scss";
const OptionsList = ({ options, selectedOption, setSelectedOption, }) => {
    const isLastItem = (index) => options.length - 1 === index;
    const priceText = (price) => `${price}$ or ${parseFloat((price / 12).toFixed(2))}/mo. for 12 mo.`;
    const selectedClass = (option) => selectedOption === option ? classes.selected : "";
    return (_jsx("ul", { className: classes.capacityList, children: options.map((option, index) => (_jsxs(React.Fragment, { children: [_jsxs("div", { onClick: () => setSelectedOption(options[index]), className: `${classes.capacityItem} ${selectedClass(option)}`, children: [option.capacity && _jsx("p", { children: option.capacity }, void 0), _jsx("p", { children: priceText(option.price) }, void 0)] }, void 0), !isLastItem(index) && _jsx("hr", { className: classes.capacityBreakLine }, void 0)] }, option.price))) }, void 0));
};
export default OptionsList;
