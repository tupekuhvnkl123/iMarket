import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { getErrorMsg, scrollToTop } from "../utils/functions";
import CheckMarkLoader from "../components/UI/CheckMarkLoader";
import classes from "../style/Pages/OrderSucceedPage.module.scss";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../context/DrawerContext";
import { DrawerValues } from "../components/Layouts/Drawer/Drawer.types";

const OrderSucceedPage: React.FC = () => {
  const { setDrawerContent } = useContext(DrawerContext);
  const navigate = useNavigate();
  const [stripeOrderId, setStripeOrderId] = useState<string | undefined | null>(
    null
  );

  const createOrder = async () => {
    const response = await axios.post("/cart/create-order", {
      stripeOrderId,
    });

    return response.data;
  };

  const { isLoading, isSuccess, isError, error } = useQuery({
    enabled: !!stripeOrderId,
    queryFn: () =>
      createOrder().then((data) => {
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

  return (
    <div className={classes.container}>
      {!stripeOrderId && <h1>No order found!</h1>}
      {isError && <h1>{getErrorMsg(error)}</h1>}
      {(isLoading || isSuccess) && <CheckMarkLoader checked={isSuccess} />}
      {isSuccess && (
        <h1>
          Thank you for your purchase!
          <br />
          <br />
          You can find your orders in the account menu.
        </h1>
      )}
      {!isLoading && (
        <div className={classes.buttonsContainer}>
          <button className={classes.homeBtn} onClick={() => navigate("home")}>
            Home
          </button>
          {isSuccess && (
            <button
              className={classes.ordersBtn}
              onClick={() => {
                scrollToTop("auto");
                setDrawerContent(DrawerValues.orders);
              }}
            >
              Orders
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderSucceedPage;
