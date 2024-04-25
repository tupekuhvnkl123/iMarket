import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import classes from "../../../../style/Layouts/Drawer/Favorites/FavoriteItem.module.scss";
import { appRoutes } from "../../../../utils/consts";
import { useContext } from "react";
import { DrawerContext } from "../../../../context/DrawerContext";
const FavoriteItem = ({ product, onRemoveFavorite, }) => {
    const { closeDrawer } = useContext(DrawerContext);
    const navigate = useNavigate();
    const { brand, model, image } = product;
    const exploreHandler = () => {
        const productRoute = `/${appRoutes[brand]}/${model}`;
        navigate(productRoute);
        closeDrawer();
    };
    return (_jsxs("div", { className: classes.favoriteItem, children: [_jsxs("div", { className: classes.model, children: [_jsx("img", { src: image, alt: model }, void 0), _jsx("p", { children: model }, void 0)] }, void 0), _jsxs("div", { className: classes.actions, children: [_jsxs("div", { className: classes.buttonsContainer, children: [_jsx("button", { onClick: exploreHandler, className: classes.exploreBtn, type: "button", children: "Explore" }, void 0), _jsx("button", { className: classes.removeBtn, type: "button", onClick: () => onRemoveFavorite(model), children: "Remove" }, void 0)] }, void 0), _jsx("hr", {}, void 0)] }, void 0)] }, void 0));
};
export default FavoriteItem;
