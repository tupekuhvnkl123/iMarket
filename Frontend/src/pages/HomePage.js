import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import Preview from "../components/Home/Preview";
import ProductsGallery from "../components/Home/ProductsGallery";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const scrollIntoTitleView = () => {
        if (titleRef.current) {
            titleRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    const productClickHandler = (route) => {
        if (route) {
            const productRoute = `/${route}`;
            navigate(productRoute);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Preview, { onClickExplore: scrollIntoTitleView }, void 0), _jsx(ProductsGallery, { titleRef: titleRef, onClickProduct: productClickHandler }, void 0)] }, void 0));
};
export default HomePage;
