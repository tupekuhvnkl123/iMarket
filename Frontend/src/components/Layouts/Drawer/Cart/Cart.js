import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CartItem from "./CartItem";
import classes from "../../../../style/Layouts/Drawer/Cart/Cart.module.scss";
import ExploreCard from "../../../UI/ExploreCard";
import { useMutation, useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import SnackBar from "../../../UI/SnackBar";
import { DrawerValues } from "../Drawer.types";
import { DrawerContext } from "../../../../context/DrawerContext";
import Cookies from "js-cookie";
const Cart = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const { setDrawerContent } = useContext(DrawerContext);
    const { data, isError, isLoading, error, refetch } = useQuery("cart", {
        enabled: isLoggedIn,
        queryFn: () => getAxiosRequest("/cart"),
    });
    const checkout = async () => {
        const response = await axios.post("/cart/checkout");
        return response.data;
    };
    const checkoutMutation = useMutation({
        mutationFn: () => checkout().then((data) => {
            Cookies.set("stripeOrderId", data.stripeOrderId, { expires: 1 / 48 });
            window.location.href = data.checkoutUrl;
        }),
    });
    const removeFromCart = async (id) => {
        const response = await axios.post("/cart/delete", { id });
        return response.data;
    };
    const removeFromCartMutation = useMutation({
        mutationFn: (id) => removeFromCart(id).then(() => {
            refetch();
        }),
    });
    if (!isLoggedIn) {
        setDrawerContent(DrawerValues.account);
    }
    if (isLoading) {
        return (_jsx("div", { className: classes.loaderContainer, children: _jsx(PuffLoader, { color: "white" }, void 0) }, void 0));
    }
    if (!data?.cart?.length) {
        return _jsx(ExploreCard, { text: "Your cart is empty..." }, void 0);
    }
    const totalPrice = data?.cart?.reduce((total, product) => total + product.option.price, 0);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: classes.container, children: data && (_jsxs(_Fragment, { children: [_jsx("ul", { className: classes.cartList, children: data.cart.map((product) => {
                                return (_jsx(CartItem, { product: product, onRemoveFromCart: removeFromCartMutation.mutate }, product._id));
                            }) }, void 0), _jsxs("div", { className: classes.paySection, children: [_jsxs("p", { children: [_jsx("b", { children: "Total:" }, void 0), " ", totalPrice, "$"] }, void 0), _jsx("button", { className: classes.buyButton, type: "button", onClick: () => checkoutMutation.mutate(), children: "Buy now" }, void 0)] }, void 0)] }, void 0)) }, void 0), _jsx(SnackBar, { open: isError || removeFromCartMutation.isError, hideDuration: 5000, message: getErrorMsg(error || removeFromCartMutation.error) }, void 0)] }, void 0));
};
export default Cart;
