import { DUMMY_ORDERS } from "../../../../utils/consts";
import ExploreCard from "../../../UI/ExploreCard";
import OrderItem from "./OrderItem";
import classes from "../../../../style/Layouts/Drawer/Orders/Orders.module.scss";

const Orders: React.FC = () => {
  if (!DUMMY_ORDERS.length) {
    return <ExploreCard text="Your have no orders..." />;
  }

  return (
    <ul className={classes.ordersList}>
      {DUMMY_ORDERS.map((product) => (
        <OrderItem key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default Orders;
