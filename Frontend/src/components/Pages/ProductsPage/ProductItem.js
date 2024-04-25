import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import classes from "../../../style/Pages/ProductsPage/ProductItem.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { DrawerContext } from "../../../context/DrawerContext";
import { DrawerValues } from "../../Layouts/Drawer/Drawer.types";
import { scrollToTop } from "../../../utils/functions";
const ProductItem = ({ data, onAddToFavorite, addedToFav, }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const { setDrawerContent } = useContext(DrawerContext);
    const navigate = useNavigate();
    const { model, colors, options } = data;
    const navigateToProduct = () => {
        const productRoute = model.replace(/ /g, "-");
        navigate(productRoute);
    };
    const favoriteHandler = () => {
        if (isLoggedIn) {
            onAddToFavorite(model);
        }
        else {
            scrollToTop("smooth");
            setDrawerContent(DrawerValues.account);
        }
    };
    return (_jsxs("div", { className: classes.item, children: [_jsxs("div", { className: `${classes.favoriteContainer} ${addedToFav ? classes.filled : ""}`, onClick: favoriteHandler, children: [_jsx(MdFavoriteBorder, { className: classes.borderedIcon }, void 0), _jsx(MdFavorite, { className: classes.filledIcon }, void 0)] }, void 0), _jsx("img", { onClick: navigateToProduct, className: classes.image, src: colors[0].image, alt: model }, void 0), _jsx("h2", { onClick: navigateToProduct, className: classes.model, children: model }, void 0), _jsx("div", { className: classes.colors, children: colors.map(({ _id, hex }) => (_jsx("div", { style: { backgroundColor: `#${hex}` } }, _id))) }, void 0), _jsx("div", { className: classes.capacity, children: options.map((option) => (_jsx("p", { children: option.capacity }, option.capacity))) }, void 0), _jsxs("p", { className: classes.price, children: ["from ", options[0].price, "$"] }, void 0), _jsx("button", { onClick: navigateToProduct, className: classes.buyNowBtn, children: "Buy now" }, void 0)] }, void 0));
};
export default ProductItem;
