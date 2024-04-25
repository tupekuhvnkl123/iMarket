import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { getErrorMsg } from "../utils/functions";
import CheckMarkLoader from "../components/UI/CheckMarkLoader";
import classes from "../style/Pages/OrderSucceedPage.module.scss";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../context/DrawerContext";
import { DrawerValues } from "../components/Layouts/Drawer/Drawer.types";
const OrderSucceedPage = () => {
    const { setDrawerContent } = useContext(DrawerContext);
    const navigate = useNavigate();
    const [stripeOrderId, setStripeOrderId] = useState(null);
    const createOrder = async () => {
        const response = await axios.post("/cart/create-order", {
            stripeOrderId,
        });
        return response.data;
    };
    const { isLoading, isSuccess, isError, error } = useQuery({
        enabled: !!stripeOrderId,
        queryFn: () => createOrder().then((data) => {
            Cookies.remove("stripeOrderId");
            return data;
        }),
    });
    useEffect(() => {
        const stripeOrderId = Cookies.get("stripeOrderId");
        setStripeOrderId(stripeOrderId);
    }, []);
    if (isError) {
        Cookies.remove("stripeOrderId");
    }
    return (_jsxs("div", { className: classes.container, children: [!stripeOrderId && _jsx("h1", { children: "No order found!" }, void 0), isError && _jsx("h1", { children: getErrorMsg(error) }, void 0), (isLoading || isSuccess) && _jsx(CheckMarkLoader, { checked: isSuccess }, void 0), isSuccess && (_jsxs("h1", { children: ["Thank you for your purchase!", _jsx("br", {}, void 0), _jsx("br", {}, void 0), "You can find your orders in the account menu."] }, void 0)), !isLoading && (_jsxs("div", { className: classes.buttonsContainer, children: [_jsx("button", { className: classes.homeBtn, onClick: () => navigate("home"), children: "Home" }, void 0), isSuccess && (_jsx("button", { className: classes.ordersBtn, onClick: () => setDrawerContent(DrawerValues.orders), children: "Orders" }, void 0))] }, void 0))] }, void 0));
};
export default OrderSucceedPage;
