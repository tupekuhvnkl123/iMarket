import ExploreCard from "../../../UI/ExploreCard";
import OrderItem from "./OrderItem";
import classes from "../../../../style/Layouts/Drawer/Orders/Orders.module.scss";
import { PuffLoader } from "react-spinners";
import { useQuery } from "react-query";
import { OrderProductType } from "./Orders.types";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import SnackBar from "../../../UI/SnackBar";

const Orders: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { data, isError, isLoading, error } = useQuery("orders", {
    enabled: isLoggedIn,
    queryFn: () =>
      getAxiosRequest<{ orders: OrderProductType[] }>("/cart/orders"),
  });

  if (isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <PuffLoader color="white" />
      </div>
    );
  }

  if (isError) {
    return (
      <SnackBar
        open={isError}
        hideDuration={5000}
        message={getErrorMsg(error)}
      />
    );
  }

  if (!data?.orders?.length) {
    return <ExploreCard text="Your have no orders..." />;
  }

  return (
    <ul className={classes.ordersList}>
      {data &&
        data.orders.map((product: OrderProductType) => (
          <OrderItem key={product._id} product={product} />
        ))}
    </ul>
  );
};

export default Orders;
