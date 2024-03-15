import classes from "../../../../style/Layouts/Drawer/Orders/OrderItem.module.scss";
import { OrderProductType } from "./Orders.types";

type OrderItemProps = {
  product: OrderProductType;
};

const OrderItem: React.FC<OrderItemProps> = ({ product }) => {
  const { color, model, option } = product;
  return (
    <div className={classes.orderItem}>
      <div className={classes.imageContainer}>
        <img src={color.image} alt={color.name} />
      </div>
      <div className={classes.infoContainer}>
        <h1 className={classes.model}>{model}</h1>
        <div className={classes.info}>
          <b>color:</b>
          <div
            className={classes.color}
            style={{ backgroundColor: `#${color.hex}` }}
          />
          <p>{color.name}</p>
          <hr />
          <b>{option.capacity}</b>
        </div>
        <p className={classes.price}>{option.price}$</p>
      </div>
    </div>
  );
};

export default OrderItem;
