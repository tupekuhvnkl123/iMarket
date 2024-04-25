import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { homePageProductGallery } from "../../utils/consts";
import ProductGalleryItem from "./ProductGalleryItem";
import classes from "../../style/Home/ProductsGallery.module.scss";
const ProductsGallery = ({ titleRef, onClickProduct, }) => {
    const { mappedProducts, iPhone15, airPodsMax } = homePageProductGallery;
    return (_jsx("section", { className: classes.section, children: _jsxs("div", { className: classes.container, children: [_jsx("div", { className: classes.title, children: _jsx("h1", { ref: titleRef, children: "New Arrivals" }, void 0) }, void 0), _jsxs("div", { className: classes.galleryContainer, children: [_jsx("div", { className: classes.mappedProducts, children: mappedProducts.map((item, index) => (_jsx(ProductGalleryItem, { title: item.title, image: item.image, onClick: () => onClickProduct(item.route) }, index))) }, void 0), _jsx(ProductGalleryItem, { title: iPhone15.title, image: iPhone15.image, className: classes.iPhone15, onClick: () => onClickProduct(`iPhone/iPhone-15`) }, void 0)] }, void 0), _jsxs("div", { className: classes.airPodsMax, onClick: () => onClickProduct("AirPods/AirPods-Max"), children: [_jsx("span", { children: airPodsMax.title }, void 0), _jsx("img", { src: airPodsMax.image, alt: airPodsMax.title }, void 0)] }, void 0)] }, void 0) }, void 0));
};
export default ProductsGallery;
