import { DUMMY_CART } from "../../../../utils/consts";
import CartItem from "./CartItem";
import classes from "../../../../style/Layouts/Drawer/Cart/Cart.module.scss";
import ExploreCard from "../../../UI/ExploreCard";

const Cart: React.FC = () => {
  const totalPrice = DUMMY_CART.reduce(
    (total, product) => total + product.option.price,
    0
  );

  if (!DUMMY_CART.length) {
    return <ExploreCard text="Your cart is empty..." />;
  }

  return (
    <div className={classes.container}>
      <ul className={classes.cartList}>
        {DUMMY_CART.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}
      </ul>
      <div className={classes.paySection}>
        <p>
          <b>Total:</b> {totalPrice}$
        </p>
        <button className={classes.buyButton}>Buy now</button>
      </div>
    </div>
  );
};

export default Cart;
