import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { appRoutes } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../context/DrawerContext";
import classes from "../../style/UI/ExploreCard.module.scss";
const ExploreCard = ({ text }) => {
    const { closeDrawer } = useContext(DrawerContext);
    const navigate = useNavigate();
    const exploreHanlder = () => {
        navigate(appRoutes.Home);
        closeDrawer();
    };
    return (_jsxs("div", { className: classes.container, children: [text && _jsx("p", { children: text }, void 0), _jsx("button", { onClick: exploreHanlder, children: "Explore" }, void 0)] }, void 0));
};
export default ExploreCard;
