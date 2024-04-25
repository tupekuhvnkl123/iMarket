import { jsx as _jsx } from "react/jsx-runtime";
import ExploreCard from "../../../UI/ExploreCard";
import OrderItem from "./OrderItem";
import classes from "../../../../style/Layouts/Drawer/Orders/Orders.module.scss";
import { PuffLoader } from "react-spinners";
import { useQuery } from "react-query";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import SnackBar from "../../../UI/SnackBar";
const Orders = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const { data, isError, isLoading, error } = useQuery("orders", {
        enabled: isLoggedIn,
        queryFn: () => getAxiosRequest("/cart/orders"),
    });
    if (isLoading) {
        return (_jsx("div", { className: classes.loaderContainer, children: _jsx(PuffLoader, { color: "white" }, void 0) }, void 0));
    }
    if (isError) {
        return (_jsx(SnackBar, { open: isError, hideDuration: 5000, message: getErrorMsg(error) }, void 0));
    }
    if (!data?.orders?.length) {
        return _jsx(ExploreCard, { text: "Your have no orders..." }, void 0);
    }
    return (_jsx("ul", { className: classes.ordersList, children: data &&
            data.orders.map((product) => (_jsx(OrderItem, { product: product }, product._id))) }, void 0));
};
export default Orders;
