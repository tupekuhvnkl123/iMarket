import { CartProductType } from "./Cart.types";
import classes from "../../../../style/Layouts/Drawer/Cart/CartItem.module.scss";

type CartItemProps = {
  product: CartProductType;
};

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { color, model, option } = product;

  const priceText = `${option.price}$ or ${parseFloat(
    (option.price / 12).toFixed(2)
  )}/mo. for 12 mo.`;

  return (
    <div className={classes.cartItem}>
      <div className={classes.imageContainer}>
        <img src={color.image} alt={model} />
      </div>
      <div className={classes.content}>
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
        </div>

        <hr className={classes.separateLine} />
        <div className={classes.priceContainer}>
          <p>{priceText}</p>
          <p>
            <b>Total:</b> {option.price}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
